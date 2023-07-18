import { type OptionValues } from 'commander'
import { program } from '@commander-js/extra-typings'
import getToken from './util/tokens'
import getJWT from './util/jwt'

program.command('Usage: $0 <command> [options]')
  .option('-t, --token <client-id>', 'generate a token', 'default')
  .option('-j, --jwt <access-token>', 'generate a jwt')
  .option('-f, --file <file>', 'config file')
  .showHelpAfterError()

program.parse(process.argv)

const opts: OptionValues = program.opts()
async function checkOpts (): Promise<void> {
  if (opts.token !== null) {
    if (opts.jwt !== null) {
      await getToken(opts.token, true)
    }
    await getToken(opts.token, false)
  } if (opts.jwt !== null) {
    await getJWT(opts.jwt)
  } else {
    program.error('No options specified')
  }
}

checkOpts().catch(e => {
  console.error(e)
})

// console.log(` Options: ${...opts}`)
