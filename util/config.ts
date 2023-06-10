import fs from "fs"
import path from "path"
import { ux } from '@oclif/core'
import { Environment } from './env'
export async function writeConfigDir(): Promise<void> {

    let antwort  = false;
    let configDir = await ux.prompt('Where should we store client-ids?')
    antwort = await ux.confirm(`${configDir} selected.\nIs that correct?`)

    if (!antwort) { writeConfigDir() }

    try {
        fs.writeFile('tokeman.json', JSON.stringify(Environment.config_dir) )
        this.log(`Configuration file set to ${configDir}`)
    } catch (e) {
        this.log('Failed to write')
        this.log(e)
        process.exit()
    }
}
