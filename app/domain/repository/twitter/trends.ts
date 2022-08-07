import { TwitterTrendsApiModel } from '../../model/twitter/trends'


export interface TwitterTrendsApiRepository {
    find(): Promise<TwitterTrendsApiModel>
    find_all(): Promise<TwitterTrendsApiModel>
}

export interface TwitterTrendsUseCaseRepository {
    get(): Promise<TwitterTrendsApiModel>
    find_all(): Promise<TwitterTrendsApiModel>
}
