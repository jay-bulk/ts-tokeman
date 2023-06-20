export interface IEnv {
    env: string
    issuer_url: string
    gateway_url: string
    config_dir: string
}

export class Environment {
    private readonly env: 'dev' | 'prd'
    private readonly issuer_url: string
    private readonly gateway_url: string
    private readonly config_dir: string

    constructor() {
        this.env = process.env.ENV as 'dev' | 'prd' ?? 'dev'
        this.issuer_url = process.env.API_ISSUER ?? 'https://postman-echo.com/token'
        this.gateway_url = process.env.GATEWAY_URL ?? 'https://postman-echo.com/post'
        this.config_dir = process.env.CONFIG_DIR ?? '../tokeman.json'
    }
    getEnv (): IEnv
    {
        return {
            env: this.env,
            issuer_url: this.issuer_url,
            gateway_url: this.gateway_url,
            config_dir: this.config_dir
        }
    }
}
