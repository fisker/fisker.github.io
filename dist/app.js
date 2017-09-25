/* fisker-blog v1.0.0 | (c) 2017 fisker-blog | MIT License */
"use strict";(function(){var a=Function("return this")(),b={api:"https://api.github.com",accessTokens:[["5","a41e75c8b2","2c70d70b08ae21","5cd774758e3b8b0"]],cache:{index:5000,article:60000},name:"fisker's blog",owner:"fisker",repo:"blog",pageSize:30,require:{paths:{marked:"https://cdn.bootcss.com/marked/0.3.6/marked.min","highlight-js":"https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min","es6-promise":"https://cdn.bootcss.com/es6-promise/4.1.1/es6-promise.min",localforage:"https://cdn.bootcss.com/localforage/1.5.0/localforage.min"}}},c=a.require;c.config(b.require);var d=a.Promise;(function(a){function b(){a(function(a){return new d(function(b){c([a],function(a){b(a)})})})}d?b():c(["es6-promise"],function(a){d=a.Promise,b()})})(function(c){var e=a.document,f=function(){var b=a._||(a._={});b.now=Date.now||function(){return+new Date},b.require=c,b.Promise=d;var e=Object.prototype.toString;b.type=function(a){return e.call(a).slice(7,-1)};var f=Array.prototype.slice;b.toArray=Array.from||function(a){return f.call(a)},b.isArray=Array.isArray||function(a){return"Array"===b.type(a)},b.isArrayLike=function(a){return b.isArray(a)||a&&"Number"===b.type(a.length)&&parseInt(a.length,10)===a.length};var g=Array.prototype.forEach||function(a){for(var b=0;b<this.length;b++)a.call(this,this[b],b,this)},h=function(a,b){for(var c in a)a.hasOwnProperty(c)&&b.call(a,a[c],c,a)};b.forIn=h,b.forEach=function(a,c){(b.isArrayLike(a)?g:h).call(a,c)};var i=Array.prototype.map||function(a){for(var b=[],c=0;c<this.length;c++)b[c]=a.call(this,this[c],c,this);return b};b.map=function(a,b){return i.call(a,b)};var j=Array.prototype.filter||function(a){for(var b,c=[],d=0;d<this.length;d++)b=a.call(this,this[d],d,this),b&&c.push(this[d]);return c};b.filter=function(a,b){return j.call(a,b)},b.assign=Object.assign||function(a){return b.forEach(f.call(arguments,1),function(c){b.forEach(c,function(b,c){a[c]=b})}),a},b.hash=function(){return{parse:function(a){a=a.slice(2);for(var b=a?a.split("/"):[],c={},d=0;d<b.length;d+=2)c[decodeURIComponent(b[d])]=decodeURIComponent(b[d+1]||"");return c},build:function(a){var b=[];return h(a,function(a,c){b.push(encodeURIComponent(c)+"/"+encodeURIComponent(a))}),"#/"+b.sort().join("/")}}}(),b.search=function(){return{build:function(a){var b=[];return h(a,function(a,c){b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}),b.join("&")}}}(),b.localforage=function(){return{setItem:function(a,b){return c("localforage").then(function(c){return c.setItem.call(c,a,b)})},getItem:function(a){return c("localforage").then(function(b){return b.getItem.call(b,a)})}}}(),b.markdown=function(a,b){return d.all([c("marked"),c("highlight-js")]).then(function(c){var d=c[0],e=c[1];return d.setOptions({highlight:function(a,b){return b&&e.getLanguage(b)?e.highlight(b,a).value:e.highlightAuto(a).value}}),d(a,b)})};var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},l=/[&<>"'`]/g;return b.escape=function(a){return(a+"").replace(l,function(a){return k[a]})},b}(),g=Function("config","return (function(){var f=typeof self==\"object\"&&self&&self.Object===Object&&self,e=(typeof global==\"object\"&&global&&global.Object===Object&&global||f||Function(\"return this\")())._||{};return{article:function(c){c||(c={});var a,b=\"\",d=e.escape;with(c)b+='<article class=\"article\"><h1 class=\"article__title\">'+d(data.title)+'</h1><header class=\"article__author\"><!-- <img class=\"article__author-avatar\" src=\"'+(null==(a=data.user.avatar_url+\"&s=40\")?\"\":a)+'\"> --><div>'+d(data.created_at)+'</div></header><hr><div class=\"markdown-body\">'+(null==(a=data.html)?\"\":a)+\"</div><footer>\",\ndata.labels.forEach(function(t){b+='<a href=\"'+(null==(a=e.hash.build({label:t.name}))?\"\":a)+'\" style=\"background:#'+(null==(a=t.color)?\"\":a)+'\">'+d(t.name)+\"</a>\"}),b+=\"</footer></article>\";return b},index:function(c){c||(c={});var a=\"\",b=e.escape;with(c)a+=\"<h1>\"+b(config.name)+'</h1><hr><ul class=\"list\">',data.forEach(function(t){a+='<li class=\"list__item\"><a class=\"list__title\" href=\"'+b(e.hash.build({id:t.number}))+'\">'+b(t.title)+'</a><div class=\"list__meta\">\\n        #'+b(t.number)+'\\n        posted at\\n        <time class=\"list__time\" datetime=\"'+b(t.created_at)+'\">'+b(t.created_at)+\"</time></div></li>\";\n}),a+=\"</ul>\",meta.Link&&(a+='<hr><nav class=\"pagination\">',meta.Link.forEach(function(t){a+='<a href=\"'+b(e.hash.build({page:t[0].match(/[?&]page=(\\d+)/)[1]}))+'\" title=\"'+b(t[1].rel)+'\">'+b(t[1].rel)+\"</a>\"}),a+=\"</nav>\");return a}}})();")(b),h=function(){function a(a){return{token:a,remaining:a?n:m,reset:0}}function c(){return(Math.random()*f.now()).toString(16).replace(".","").slice(0,6)}function g(a,b,g){function i(){l.removeChild(k),window[j]=null}g=g||{};var j="jsonp_"+c(),k=e.createElement("script");return b=f.assign({},b,{callback:j}),g.token&&(b.access_token=g.token),k.src=q+a+"?"+f.search.build(b),l.appendChild(k),new d(function(a,b){window[j]=function(b){a(b),i()},k.onerror=function(a){b(a),i()}}).then(function(a){return h(a,g)})}function h(a,b){if(!a||!a.data)return d.reject("no data found.");if(a.data.message)return d.reject(a.data.message);var c=a.meta;if(c){var e=c["X-RateLimit-Remaining"],f=c["X-RateLimit-Reset"];e&&(b.remaining=parseInt(e,10)),f&&(b.reset=1e3*parseInt(e,10))}return a}function i(a){return!a.remaining&&2000000<f.now()-o.rest&&(a.remaining=n),a}function j(){return f.forEach(p,i),f.filter(p,function(a){return a.remaining})[0]}function k(a,b){var c=j();return c?g(a,b,c):d.reject("no token")}var l=e.head||e.getElementsByTagName("head")[0],m=60,n=5e3,o=a(""),p=f.map(b.accessTokens,function(b){return f.isArray(b)&&(b=b.join("")),a(b)}),q=function(){var a=[b.api];return a=b.repoId?a.concat(["repositories",b.repoId]):a.concat(["repos",b.owner,b.repo]),a.push("issues"),a.join("/")}();return{get:function(a,b){return i(o),o.remaining?g(a,b,o).catch(function(){return k(a,b)}):k(a,b)}}}(),i=function(){function a(a){return k?f.localforage.getItem(i).then(function(c){if(c&&c.pageSize===b.pageSize){var d=c.pages[a-1];return d&&d.time&&!(f.now()-d.time>k)?d:void 0}}):void 0}function c(a){return h.get("",{page:a,per_page:b.pageSize}).then(function(b){return e(b,a),b})}function e(a,c){return j.storage({data:a.data}),k?f.localforage.getItem(i).then(function(d){return d&&d.pageSize===b.pageSize||(d={pages:[],pageSize:b.pageSize}),d.pages[c-1]={meta:{Link:a.meta.Link,ETag:a.meta.ETag},time:f.now(),data:[]},d.pages[c-1].data=a.data.map(function(a){return{created_at:a.created_at,title:a.title,number:a.number}}),d.time=f.now(),d}).then(function(a){return f.localforage.setItem(i,a)}).then(function(){return a}):a}var i="index",k=b.cache&&b.cache.index||0,l=g.index;return{get:function(b){return b=parseInt(b,10)||1,1>b&&(b=1),d.resolve().then(function(){return a(b)}).then(function(a){return a?a:c(b)})},storage:e,render:l}}(),j=function(){function a(a){return j?f.localforage.getItem(i).then(function(b){var c=b&&b[a];return c&&c.time&&!(f.now()-c.time>j)?c:void 0}):void 0}function c(a){return h.get("/"+a).then(function(a){return e(a),a})}function e(a){return j?f.localforage.getItem(i).then(function(b){return b=b||{},a.data.forEach?a.data.forEach(function(c){b[c.number]={data:c,id:c.number,time:f.now(),meta:{ETag:a.meta&&a.meta.ETag}}}):b[a.data.number]={data:a.data,id:a.data.number,time:f.now(),meta:{ETag:a.meta&&a.meta.ETag}},b}).then(function(a){return f.localforage.setItem(i,a)}).then(function(){return a}):a}var i="articles",j=b.cache&&b.cache.index||0,k=g.article;return{get:function(b){return b=+b,d.resolve().then(function(){return a(b)}).then(function(a){return a?a:c(b)}).then(function(a){return f.markdown(a.data.body).then(function(b){return a.data.html=b,a})})},storage:e,render:k}}(),k=function(){function a(a){l.innerHTML=a}function c(a){console.trace(a),l.innerHTML="error occured <button onclick=\"location.reload()\">retry</button>"}function d(a){return e.title=b.name,i.get(a).then(i.render)}function g(a){return j.get(a).then(function(a){return e.title=a.data.title,a}).then(j.render)}function h(){l.innerHTML="loading..."}function k(){var b=f.hash.parse(window.location.hash);h();var e;if(b.id)e=g(b.id);else{if(b.label)return alert("\u6682\u65F6\u4E0D\u652F\u6301\u6807\u7B7E"),void window.history.go(-1);e=d(b.page)}return e.then(a).catch(c)}var l=e.getElementById("js-app");return{run:function(){k(),window.addEventListener("hashchange",k,!1)}}}();k.run()})})();