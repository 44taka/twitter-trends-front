import axios, { AxiosInstance } from 'axios'
import { ZipCloudResponseModel } from '../../domain/model/zipcloud'


export class ZipCloudApi {
    private _axios: AxiosInstance

    constructor() {
        this._axios = axios.create({
            baseURL: 'https://zipcloud.ibsnet.co.jp/api',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    async search(zipcode: string) {
        try {
            const result = await this._axios.get<ZipCloudResponseModel>('/search', {
                params: {
                    zipcode: zipcode
                }
            })
            return result.data
        } catch(e) {
            console.log('error interface!')
            throw e
        }
    }
}
