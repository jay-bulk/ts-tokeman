import { setEnv } from './util'
import fetch from 'node-fetch'
import {TokenResponse} from "./Response";

//May need to switch to fastify server is fetch cannot handle specifying data
const env = setEnv()

export default async function getJWT(token: any): Promise<TokenResponse> {

    const response = await fetch(env.echo_url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "host":`${env.echo_url}`
        },
    })
    console.log(response)
    if (response.body != null) {
        // @ts-ignore
        return response.body['x-jwt-assertion']
    }
}
