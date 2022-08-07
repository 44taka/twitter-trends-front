import axios, { AxiosInstance } from 'axios'
import { TwitterTrendsApiRepository } from '../../../domain/repository/twitter/trends'
import { TwitterTrendsApiModel } from '../../../domain/model/twitter/trends'


export class TwitterTrendsApi implements TwitterTrendsApiRepository {
    private _axios: AxiosInstance

    constructor() {
        this._axios = axios.create({
            baseURL: 'http://twitter-trends-api.dosankoweb.work',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    async find(): Promise<TwitterTrendsApiModel> {
        try {
            const result = await this._axios.get<TwitterTrendsApiModel>('/twitter/trends')
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
