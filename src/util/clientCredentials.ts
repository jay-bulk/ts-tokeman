import fs from "fs";
import yargs, {argv, MiddlewareFunction} from "yargs";

export function normalizeCredentials(argv): MiddlewareFunction => {
    if (!argv.client_id || !argv.client_secret) {
        const credentials = JSON.parse(fs.readSync('tokeman.json'))
        return credentials
    }
    return {}
}

yargs.middleware(normalizeCredentials)