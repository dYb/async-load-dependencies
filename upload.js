const fs = require('fs')
const path = require('path')
const easeftp = require('easeftp')

const profile = JSON.parse(fs.readFileSync('.profile', 'utf-8'))
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

easeftp.verify(profile).then(() => easeftp.upload({
  online: `frontend/test/${packageJson.name}/${packageJson.version}`,
  files: path.join(__dirname, 'dist'),
  exclude: ['**/index.js']
})).catch((err) => {
  console.error(err)
})
