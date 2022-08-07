import axios, { AxiosInstance } from 'axios'
import { TwitterTrendsApiRepository } from '../../../domain/repository/twitter/trends'
import { TwitterTrendsApiModel } from '../../../domain/model/twitter/trends'


export class TwitterTrendsApi implements TwitterTrendsApiRepository {
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

    async find(): Promise<TwitterTrendsApiModel> {
        try {
            const result = await this._axios.get<TwitterTrendsApiModel>('/twitter/trends3')
            return result.data
        } catch(e) {
            console.error(e)
            throw e
        }
    }

    async find_all(): Promise<TwitterTrendsApiModel> {
        try {
            const result = await this._axios.get<TwitterTrendsApiModel>('/twitter/trends')
            return result.data
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}
