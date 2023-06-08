import fs from "fs"
import path from "path"
import { ux } from '@oclif/core'
import { configDotenv } from 'dotenv'

export async function setConfigDir(): Promise<void> {

    let antwort  = false;
    let configDir = await ux.prompt('Where should we store client-ids?')
    antwort = await ux.confirm(`${configDir} selected.\nIs that correct?`)

    if (!antwort) {setConfigDir()}

    let configuration = {
        configDir: this.configDir,
        defaultEnv: 'dev',
        apiIssuer: configDotenv().parsed.API_ISSUER ?? 'https://postman-echo.com/token',
        jwtProvider: configDotenv().parsed.GATEWAY_URL ?? 'https://postman-echo.com/post'
    }

    try {
        fs.writeFile('tokeman.json', JSON.stringify(configuration) )
        this.log(`Configuration file set to ${path.extname(configDir)}`)
    } catch (e) {
        this.log('Failed to write')
        this.log(e)
        process.exit()
    }
}

export function getConfigDir(): Promise<string> {
    let configDir

    return configDir
}