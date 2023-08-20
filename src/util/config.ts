import fs from 'fs'
// import path from 'path'
import { setEnv } from './env'
import findUp from 'find-up'
import inquirer from 'inquirer'

const env = setEnv()
export async function writeConfigDir (): Promise<void> {
  const configDir: string = await inquirer.prompt(['Where should we store client-ids?'], async (ans: string) => {
    await inquirer.prompt([`${configDir} selected.\nIs that correct`], (bool: boolean) => {
      if (bool) {
        try {
          fs.writeFile('tokeman.json', JSON.stringify(env.configDir), t => {
            console.log(t?.path)
          })
        } catch (err) {
          console.error(err)
          process.exit(1)
        }
      }
    })
  })
}

export async function getConfig (): Promise<Record<string, unknown>> {
  const configPath: string | undefined = findUp.sync(['tokeman.json'])
  if (configPath !== undefined) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  }
  return {}
}
