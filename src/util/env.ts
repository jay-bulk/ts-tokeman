export interface IEnv {
  env: string
  issuerUrl: string
  gatewayUrl: string
  configDir: string
  echoUrl: string
}

export class Environment {
  private readonly env: 'dev' | 'prd'
  private readonly issuerUrl: string
  private readonly gatewayUrl: string
  private readonly configDir: string
  private readonly echoUrl: string

  constructor () {
    this.env = process.env.ENV as 'dev' | 'prd' ?? 'dev'
    this.issuerUrl = process.env.API_ISSUER ?? 'https://postman-echo.com/token'
    this.gatewayUrl = process.env.GATEWAY_URL ?? 'https://postman-echo.com/post'
    this.configDir = process.env.CONFIG_DIR ?? '../tokeman.json'
    this.echoUrl = process.env.ECHO_URL ?? 'https://postman-echo.com/post'
  }

  getEnv (): IEnv {
    return {
      env: this.env,
      issuerUrl: this.issuerUrl,
      gatewayUrl: this.gatewayUrl,
      configDir: this.configDir,
      echoUrl: this.echoUrl
    }
  }
}

export function setEnv (): {
  gatewayUrl: string
  issuerUrl: string
  configDir: string
  echoUrl: string
  env: Environment
} {
  const env = new Environment()
  // eslint-disable-next-line camelcase
  const { issuerUrl, gatewayUrl, configDir, echoUrl } = env.getEnv()
  // eslint-disable-next-line camelcase
  return { issuerUrl, gatewayUrl, configDir, echoUrl, env }
}
