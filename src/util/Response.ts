import { Response } from 'node-fetch'

export class TokenResponse extends Response {
  accessToken?: string
  expiresIn?: number
  scope?: string
  tokenType?: string
  'x-jwt-assertion'?: string
  constructor (accessToken: string, expiresIn: number, scope: string, tokenType: string, assertion: string) {
    super()
    this.accessToken = accessToken ?? ''
    this.expiresIn = expiresIn ?? 0
    this.scope = scope ?? ''
    this.tokenType = tokenType ?? ''
    this['x-jwt-assertion'] = assertion
  }
}
