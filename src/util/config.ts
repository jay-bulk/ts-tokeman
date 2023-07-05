import fs from "fs"
import path from "path"
import { ux } from '@oclif/core'
import {setEnv} from './env'

const env = setEnv()
export async function writeConfigDir(): Promise<void> {

    let antwort  = false;
    let configDir = await ux.prompt('Where should we store client-ids?')
    antwort = await ux.confirm(`${configDir} selected.\nIs that correct?`)

    if (!antwort) { writeConfigDir() }

    try {
        fs.writeFile('tokeman.json', JSON.stringify(env.config_dir), t => ({
        }))
    } catch (e) {
        process.exit()
    }
}
