/* eslint-disable */

console.log('Running Preinstall script')
console.log(process.env)

console.log('Write file')
const fs = require('fs')
fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken="${process.env.GITHUB_TOKEN}"\n@oliverit:registry=https://npm.pkg.github.com/\n`)
fs.chmodSync('.npmrc', 0o600)

console.log('Read dir')
fs.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

console.log('Read file')
fs.readFile('.npmrc', 'utf8', function(err, contents) {
  console.log(contents);
});