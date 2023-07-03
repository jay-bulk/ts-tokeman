import { Args, Command, Flags } from '@clif/core'
import { setEnv } from '../util'
import getToken from '../util/token'

export default class Token extends Command {
    static description = `
    Return a token or jwt for a given client name or client-id
    `
    static examples = [`
    $ tokeman -t my-api --config='.local.json'
    e12y32s-wokj2lks1nvb2fjjs0.A
    `]

    static flags = {
        from: Flags.string({char: 't', description: 'client id you would to generate a token for', required: 'true'})
    }

    static args = {
        client_id: Args.string({description: 'client id you would like to generate a token for'})
    }

    async run(args, flags): Promise<void> {
        this.args = args;
        this.flags = flags;
        const token = await getToken('id')
        this.log(`${token}`)
    }

}