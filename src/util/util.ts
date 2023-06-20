import fs from 'fs'
import path from 'path'
import { Environment } from './env'

// module.exports = {
// getVersion,
// getJwt,
// getId,
// getClaims,
// setId,
// setSecret,
// setIdSecret,
// setConfig
// }
export function getVersion () {
  const packageJSONPath = path.resolve(__dirname, '/package.json')
  const content = fs.readFileSync(packageJSONPath, { encoding: 'utf8' })
  const config = JSON.parse(content)
  return config.version
}

export function setEnv () {
  const env = new Environment()
  // eslint-disable-next-line camelcase
  const { issuer_url, gateway_url, config_dir } = env.getEnv()
  // eslint-disable-next-line camelcase
  return { issuer_url, gateway_url, config_dir }
}
