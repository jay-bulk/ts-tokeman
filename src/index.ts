import { program } from '@caporal/core'
import getToken from './util/tokens'

program.name('Token generator').description('Generate tokens/jwts for designated client-ids/secrets')

  .command('generate', 'Generate a token')
  .argument('<token-name>', 'Token name')
  .option('-j, --jwt', 'generate a jwt')
  .action(({ logger, args, options }) => {
    if (options.jwt) {
      logger.info('Generating JWT...')
      const JWT = getToken(args.tokenName, true)
      logger.info('JWT: %s', JWT)
    } else {
      logger.info('Generating token for %s', args.tokenName)
      const token = getToken(args.tokenName, false)
      logger.info('Token: %s', token)
    }
  })

program.run()
