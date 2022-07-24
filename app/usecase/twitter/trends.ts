import { TwitterTrendsApi } from '../../infrastructure/api/twitter/trends'


// TODO: インフラ層はDI注入で。
export class TwitterTrendsUseCase{

    private twitter_trends_api: TwitterTrendsApi

    constructor(twitter_trends_api: TwitterTrendsApi) {
        this.twitter_trends_api = twitter_trends_api
    }

    // TODO: ここでデータ加工する
    async get() {
        try {
            const result = await this.twitter_trends_api.find()
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }

    // TODO: ここでデータ加工する
    async find_all() {
        try {
            const result = await this.twitter_trends_api.find_all()
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }
}