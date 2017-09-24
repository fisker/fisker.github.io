const github = (function() {
  const head = document.head || document.getElementsByTagName('head')[0]
  const ANONYMOUS_TOKEN_LIMIT = 60
  const ASSUME_TOKEN_LIMIT = 5000
  let timeDiff = 0
  const anonymousToken = newToken('')
  const tokens = _.map(config.accessTokens, function(token) {
    if (_.isArray(token)) {
      token = token.join('')
    }

    return newToken(token)
  })

  const GITHUB_ISSUES_API_BASE = (function() {
    let url = [config.api]
    if (config.repoId) {
      url = url.concat(['repositories', config.repoId])
    } else {
      url = url.concat(['repos', config.owner, config.repo])
    }
    url.push('issues')

    return url.join('/')
  })()

  function newToken(token) {
    return {
      token: token,
      remaining: token ? ASSUME_TOKEN_LIMIT : ANONYMOUS_TOKEN_LIMIT,
      reset: 0
    }
  }

  function randomId() {
    return (Math.random() * _.now())
      .toString(16)
      .replace('.', '')
      .slice(0, 6)
  }

  function request(path, params, token) {
    token = token || {}
    const callbackName = 'jsonp_' + randomId()
    const script = document.createElement('script')
    params = _.assign({}, params, {
      callback: callbackName
    })

    if (token.token) {
      params.access_token = token.token
    }

    script.src = GITHUB_ISSUES_API_BASE + path + '?' + _.search.build(params)
    head.appendChild(script)

    function gc() {
      head.removeChild(script)
      window[callbackName] = null
    }

    return new Promise(function(resolve, reject) {
      window[callbackName] = function(response) {
        resolve(response)
        gc()
      }
      script.onerror = function(err) {
        reject(err)
        gc()
      }
    }).then(function(data) {
      return handleResponse(data, token)
    })
  }

  function handleResponse(response, token) {
    if (!response || !response.data) {
      return Promise.reject('no data found.')
    }

    if (response.data.message) {
      return Promise.reject(response.data.message)
    }

    const meta = response.meta
    if (meta) {
      const remaining = meta['X-RateLimit-Remaining']
      const reset = meta['X-RateLimit-Reset']

      if (remaining) {
        token.remaining = parseInt(remaining, 10)
      }

      if (reset) {
        token.reset = parseInt(remaining, 10) * 1000
      }
    }

    return response
  }

  function resetTokenRemaining(token) {
    if (!token.remaining) {
      if (_.now() - anonymousToken.rest > 2 * 1000 * 1000) {
        token.remaining = ASSUME_TOKEN_LIMIT
      }
    }

    return token
  }

  function getToken() {
    _.forEach(tokens, resetTokenRemaining)
    return _.filter(tokens, function(token) {
      return token.remaining
    })[0]
  }

  function requestWithToken(path, params) {
    const token = getToken()

    return token
      ? request(path, params, token)
      : Promise.reject('no token')
  }

  function get(path, params) {
    resetTokenRemaining(anonymousToken)

    if (anonymousToken.remaining) {
      return request(path, params, anonymousToken).catch(function() {
        return requestWithToken(path, params)
      })
    } else {
      return requestWithToken(path, params)
    }
  }

  return {
    get: get
  }
})()
