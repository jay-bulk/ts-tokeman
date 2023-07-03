import { setEnv } from './util'
import fetch from 'node-fetch'

//May need to switch to fastify server is fetch cannot handle specifying data
const env = setEnv()

export default async function getJWT(token: Promise<Response>) {

    const response = await fetch(env.issuer_url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "host":`${env.echo_url}`
        },
    })
    console.log(response)

    return response
}
