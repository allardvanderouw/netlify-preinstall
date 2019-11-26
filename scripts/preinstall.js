/* eslint-disable */
const fs = require('fs')
const { spawnSync } = require('child_process')

// Netlify does not support Github Packages (or other private package registries besides NPM), options are:
//   - Check-in .npmrc - However, it is not recommended to check in .npmrc files with tokens
//   - Environment variable in .npmrc - However, this requires all developer machines to have the environment variable configured
//   - Misuse the yarn preinstall...
if (!fs.existsSync('.npmrc')) {
	// File not found, create .npmrc
	fs.writeFileSync('.npmrc', `//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}\n@oliverit:registry=https://npm.pkg.github.com/\n`)
	fs.chmodSync('.npmrc', 0o600)

	// Run yarn again, it will then read the newly created .npmrc (stdio will output the logging)
	spawnSync('yarn', { stdio: 'inherit' });
}
