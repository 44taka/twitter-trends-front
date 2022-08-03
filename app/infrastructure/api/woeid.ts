import axios, { AxiosInstance } from 'axios'
import { WoeidApiRepository } from '../../domain/repository/woeid'
import { WoeidModel } from '../../domain/model/woeid'


export class WoeidApi implements WoeidApiRepository {
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

    async find_all(): Promise<WoeidModel[]> {
        try {
            const result = await this._axios.get<WoeidModel[]>('/woeid')
            return result.data
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}
