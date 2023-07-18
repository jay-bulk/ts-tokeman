import { setEnv } from './env'
import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'
import { Client } from './Client'
import getJWT from './jwt'
import { type TokenResponse } from './Response'

// May need to switch to fastify server if fetch cannot handle specifying data
const env = setEnv()

function getClient (clientName: string): Client {
  const packageJSONPath = path.resolve(__dirname, '/tokeman.json')
  const content = fs.readFileSync(packageJSONPath, { encoding: 'utf-8' })
  const parsedClient = JSON.parse(content)
  // @ts-expect-error don't know the property types yet
  const election = parsedClient.forEach((prop) => {
    if (prop.clientName !== null) {
      return prop.clientName
    }
  })
  return new Client(election.clientId, election.clientSecret)
}

export default async function getToken (clientName: string, JWTFlag: boolean): Promise<TokenResponse | undefined> {
  const { clientId, clientSecret } = getClient(clientName)

  const res: TokenResponse = await fetch(env.issuerUrl, {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      host: `${env.issuerUrl}`
    }
  })

  if (JWTFlag) {
    if (res.body != null) {
      const token: any = res.accessToken
      return await getJWT(token)
    }
  }
}
