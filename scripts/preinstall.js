/* eslint-disable */
const fs = require('fs')
const { spawnSync } = require('child_process')

console.log('Running Preinstall script')

try {
	console.log('Read file')
	fs.readFileSync('.npmrc', 'utf8')
} catch (error) {
	if (error && error.code === 'ENOENT') {
		// File does not exist yet, create .npmrc and restart
		console.log('Write file')

		fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}\n@oliverit:registry=https://npm.pkg.github.com/\n`)
		fs.chmodSync('.npmrc', 0o600)

		// Kill process
		process.exitCode = 1
		// exec('yarn')
		spawnSync('yarn', { stdio: 'inherit' });
		console.log('done?')
		process.exitCode = 0
	}
}
