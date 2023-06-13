import { Environment, getEnv } from './env'


const { issuer_url } = getEnv();

//May need to switch to fastify server is fetch cannot handle specifying data
async function getToken(tokenid, tokensecret): Promise<Response> {

    const response: Response = await fetch(issuer_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "host":`${issuer_url}`
        },
        body: `grant_type=client_credentials&client_id=${tokenid}&client_secret=${tokensecret}`,
    })
    console.log(response)

    return response
}


