/* eslint-disable */

console.log('Running Preinstall script')
console.log(process.env)

const fs = require('fs')
fs.writeFileSync('.npmrc', '//Test')
fs.chmodSync('.npmrc', 0o600)