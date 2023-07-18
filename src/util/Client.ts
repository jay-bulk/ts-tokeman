export interface IClient {
  client_id: string
  client_secret: string
}

export class Client {
  readonly clientId: string
  readonly clientSecret: string

  constructor (clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  getClient (): IClient {
    return {
      client_id: this.clientId,
      client_secret: this.clientSecret
    }
  }
}
