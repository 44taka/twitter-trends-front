import { TwitterTrendsApi } from '../../infrastructure/api/twitter/trends'


// TODO: インフラ層はDI注入で。
export class TwitterTrendsUseCase{

    // TODO: ここでデータ加工する
    async find_all() {
        try {
            const tt = new TwitterTrendsApi()
            const result = await tt.find_all()
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }
}