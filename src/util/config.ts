import fs from "fs"
import path from "path"
import {setEnv} from './env'
import findUp from 'find-up'


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

export async function getConfig(): Promise<Object> {
    const configPath = findUp.sync(['tokeman.json'])
    const config = configPath ? JSON.parse(fs.readFileSync(configPath)) : {}
    const argv = yargs.parse(process.argv.slice(2))
        .config(config)
        .argv

}