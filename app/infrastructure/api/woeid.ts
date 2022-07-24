import axios, { AxiosInstance } from 'axios'


export class WoeidApi {
    private _axios: AxiosInstance

    constructor() {
        this._axios = axios.create({
            // TODO: 環境によってURLを動的に変更させる
            // TODO: ローカル時のみ
            baseURL: 'http://api-stub:8000/stub',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    async find_all() {
        try {
            const result = await this._axios.get('/woeid')
            return result.data
        } catch(e) {
            console.log('error interface!')
            throw e
        }
    }
}
