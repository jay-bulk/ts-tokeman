import TypeBox, {Type} from '@sinclair/typebox'
export interface IClient {
  client_id: Type.String(),
  client_secret: Type.String()
}

export class Client {
  readonly clientId: Type.String(),
  readonly clientSecret: Type.String()

  constructor (clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  getClient (): IClient {
    return <IClient>{
      client_id: this.clientId,
      client_secret: this.clientSecret
    }
  }
}
