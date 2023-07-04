import {Response} from "node-fetch"

export class TokenResponse extends Response {
    access_token?: string
    expires_in?: number
    scope?: string
    token_type?: string
    "x-jwt-assertion"?: string
constructor( access_token: string, expires_in: number, scope: string, token_type: string, assertion: string) {
    super()
    this.access_token = access_token ?? ""
    this.expires_in = expires_in ?? 0
    this.scope = scope ?? ""
    this.token_type = token_type ?? ""
    this["x-jwt-assertion"] = assertion
    }
}