import axios, { AxiosInstance } from 'axios'
import { WoeidApiRepository } from '../../domain/repository/woeid'
import { WoeidModel } from '../../domain/model/woeid'


export class WoeidApi implements WoeidApiRepository {
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
