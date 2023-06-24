import { setEnv } from './util'
import fetch from 'node-fetch'
//May need to switch to fastify server is fetch cannot handle specifying data
const env = setEnv()

export default async function getToken(token: string, tokensecret: string) {

    const response = await fetch(env.issuer_url, {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${token}&client_secret=${tokensecret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "host":`${env.issuer_url}`
        },
    })
    console.log(response)

    return response
}

