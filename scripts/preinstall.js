/* eslint-disable */

console.log('Running Preinstall script')
console.log(process.env)

const fs = require('fs')
fs.writeFileSync('.npmrc', '//Test')
fs.chmodSync('.npmrc', 0o600)
fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken="${process.env.GITHUB_TOKEN}"\n@oliverit:registry=https://npm.pkg.github.com/\n`)
fs.chmodSync('.npmrc', 0o600)

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
