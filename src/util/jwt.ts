import { setEnv } from './env'
import fetch from 'node-fetch'
import { type TokenResponse } from './Response'

// May need to switch to fastify server is fetch cannot handle specifying data
const env = setEnv()
export default async function getJWT (token: string): Promise<TokenResponse> {
  try {
    return await fetch(env.echoUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        host: `${env.echoUrl}`
      }
    })
  } catch (err) {
    console.error(err)
    return await Promise.reject(err)
  }
}
