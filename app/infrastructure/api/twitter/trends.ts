import axios, { AxiosInstance } from 'axios'


export class TwitterTrendsApi {
    private _axios: AxiosInstance

    constructor(private ssr_flg: boolean = false) {
        this._axios = axios.create({
            // TODO: 環境によってURLを動的に変更させる
            // TODO: ローカル時のみ
            baseURL: this.ssr_flg ? 'http://api-stub:8000/stub' : 'http://localhost:8000/stub',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    async find_all() {
        try {
            const result = await this._axios.get('/twitter/trends')
            return result.data
        } catch(e) {
            console.log('error interface!')
            throw e
        }
    }
}
