import { TwitterTrendsUseCaseRepository, TwitterTrendsApiRepository } from '../../domain/repository/twitter/trends'
import { TwitterTrendsApiModel } from '../../domain/model/twitter/trends'


export class TwitterTrendsUseCase implements TwitterTrendsUseCaseRepository {

    private twitter_trends_api: TwitterTrendsApiRepository

    constructor(twitter_trends_api: TwitterTrendsApiRepository) {
        this.twitter_trends_api = twitter_trends_api
    }

    // TODO: ここでデータ加工する
    async get(): Promise<TwitterTrendsApiModel> {
        try {
            const result = await this.twitter_trends_api.find()
            return result
        } catch(e) {
            console.error(e)
            throw e
        }
    }

    // TODO: ここでデータ加工する
    async find_all(): Promise<TwitterTrendsApiModel> {
            try {
            const result = await this.twitter_trends_api.find_all()
            return result
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}