export interface IClient {
    client_id: string
    client_secret: string
}

export class Client {
    readonly client_id: string
    readonly client_secret: string

    constructor( client_id: string, client_secret: string) {
        this.client_id = client_id
        this.client_secret = client_secret
    }
    getClient (): IClient
    {
        return {
            client_id: this.client_id,
            client_secret: this.client_secret
        }
    }
}