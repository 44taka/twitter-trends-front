import { WoeidModel } from '../domain/model/woeid'
import { WoeidUseCaseRepository, WoeidApiRepository } from '../domain/repository/woeid'


export class WoeidUseCase implements WoeidUseCaseRepository{

    private woeid_api: WoeidApiRepository;

    constructor(woeid_api: WoeidApiRepository) {
        this.woeid_api = woeid_api
    }

    // TODO: ここでデータ加工する
    async get(): Promise<WoeidModel[]> {
        try {
            const result = await this.woeid_api.find_all()
            return result
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}