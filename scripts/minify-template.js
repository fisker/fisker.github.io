const fs = require('fs')

const source = './src/template/'
const target = '.cache/'

try {
  fs.mkdirSync(target)
} catch (_) {}

const files = ['index.jst', 'article.jst']

files.forEach(function (file) {
  console.log(`minify jst file: ${source}${file}`)
  let string = fs.readFileSync(source + file, 'utf-8')
  string = string
    .replace(/>\s*</g, '><')
    .replace(/>\s+/g, '> ')
    .replace(/\s+</g, ' <')
    .trim()
  fs.writeFileSync(target + file, string, 'utf-8')
})
