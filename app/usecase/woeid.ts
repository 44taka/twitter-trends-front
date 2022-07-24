import { WoeidApi } from '../infrastructure/api/woeid'


export class WoeidUseCase{

    private woeid_api: WoeidApi;

    constructor(woeid_api: WoeidApi) {
        this.woeid_api = woeid_api
    }

    // TODO: ここでデータ加工する
    async get() {
        try {
            const result = await this.woeid_api.find_all()
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }
}