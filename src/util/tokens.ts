import {setEnv} from './env'
import fetch from 'node-fetch'
import path from "path";
import fs from "fs";
import {Client} from './Client'
import {ParserTypes} from "types";
import getJWT from "./jwt";
import {TokenResponse} from "./Response";

//May need to switch to fastify server if fetch cannot handle specifying data
const env = setEnv()

function getClient(clientName: string | number | ParserTypes[] | boolean): Client {
    const packageJSONPath = path.resolve(__dirname, '/tokeman.json')
    const content = fs.readFileSync(packageJSONPath, { encoding: 'utf-8' })
    const parsedClient = JSON.parse(content)
    // @ts-ignore
    const election = parsedClient.forEach((prop) => {
        if (prop.hasOwnProperty(`${clientName}`)) {
            return prop.clientName
        }
    })
    return new Client(election.client_id, election.client_secret)
}

export default async function getToken(client_name: string | number | ParserTypes[] | boolean, JWTFlag: boolean) {
    const { client_id, client_secret } = getClient(client_name)

    const res: TokenResponse = await fetch(env.issuer_url, {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "host":`${env.issuer_url}`
        },
    })

    if (JWTFlag) {
        if (res.body != null) {
        const token: any = res.access_token
            return getJWT(token)
        }
    }
}
