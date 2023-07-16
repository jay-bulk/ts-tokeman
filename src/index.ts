import yargs from 'yargs'
import getToken from './util/tokens'

yargs = process.argv.slice(2)
    .usage('Usage: $0 <command> [options')
    .command('tokeman', 'Generate a token from default tokeman.json')
    .alias('t', 'token')
    .alias('j', 'jwt')
    .nargs('t', 1)
    .nargs('t', 1)
    .describe('t', 'generate a token')
    .demandOption('f')
    .help('h')
    .argv

