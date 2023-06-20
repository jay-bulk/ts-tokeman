// import { config } from './util/config'
import { getVersion } from './util'
import { Command, Flags } from '@oclif/core'

// TODO: v0
// TODO: add config for the token endpoint and a generic endpoint for whichever jwt echo endpoint can call and return the jwt
// TODO: use fetch to make requests to the byu token service

// TODO: v1
// TODO: add in flag handlers to allow for prod or sandbox -e or --environment prod or sandbox
// TODO: add in flag handlers for file -{} .json parser to get whatever the file should look like.

// TODO: v2
// TODO: add functionality for auth code validation?
// TODO: I don't know

/**
 *  return the arguments of the command except node and index.ts
 */

const getFlags = () => {
  const flags = process.argv.slice(2)
  return flags
}

/**
 * Command Help
 */
function printCommandHelp () {
  const version = getVersion
  const help = `
ts-tokeman (version: ${version})

A simple command to retrieve stock information.

Example:

$ tokeman -p filename.json
token: Uj01.-3118j9jfas...
jwt: eykjJKkj12j198ja...
jwt expires in [60] minutes
`
  console.log(help)
}

const symbols = getFlags()

// Print help if no arguments
if (symbols.length === 0) {
  printCommandHelp()
  // getVersion()
  process.exit(0)
}
