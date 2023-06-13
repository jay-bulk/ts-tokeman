import { Args, Command, Flags } from '@clif/core'
import { getToken } from '../util'
import { getEnv } from '../util/env'

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
        client_id: Args.string({description: ''})
    }

    async run(args, flags): Promise<void> {
        const token = await getToken('id', 'secret')
        this.log(`${token}`)
    }

}