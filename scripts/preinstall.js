/* eslint-disable */
const fs = require('fs')
const { exec } = require('child_process')

console.log('Running Preinstall script')
console.log(process.env)

try {
	console.log('Read file')
	fs.readFileSync('.npmrc', 'utf8')
} catch (error) {
	// File does not exist yet, create .npmrc and restart
	console.log('Write file')

	fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}\n@oliverit:registry=https://npm.pkg.github.com/\n`)
	fs.chmodSync('.npmrc', 0o600)

	exec('yarn')
	process.exit()
}



// const { exec } = require('child_process')
// exec('yarn')