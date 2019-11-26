/* eslint-disable */

console.log('Running Preinstall script')
console.log(process.env)

console.log('Read file')
const text = fs.readFileSync('.npmrc', 'utf8')

console.log('Write file')
const fs = require('fs')
fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}\n@oliverit:registry=https://npm.pkg.github.com/\n`)
fs.chmodSync('.npmrc', 0o600)


// const { exec } = require('child_process')
// exec('yarn')