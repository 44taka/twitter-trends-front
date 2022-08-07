import { WoeidModel } from '../model/woeid'


export interface WoeidApiRepository {
    find_all(): Promise<WoeidModel[]>
}

export interface WoeidUseCaseRepository {
    get(): Promise<WoeidModel[]>
}
