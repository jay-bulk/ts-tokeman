import {FastifyReply, FastifyRequest} from "fastify";

export const jwtOptions = {
    prefix: null,
    issuer: 'https://api-issuer.com',
    development: true
}
export const fakeToken = {
    access_token: 'thisIsAFakeToken'
}
// Mocking technique for 'fetch' as ES module
// See https://gist.github.com/lkrych/ad537915c69f09ad597767655d2b9211?permalink_comment_id=4100813#gistcomment-4100813
export async function mockFetch (body): Promise<Response> {
    const mockResponse = new global.Response(JSON.stringify(body), { // the fetch API returns a resolved window Response object
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })

    return await Promise.resolve(mockResponse)
}
