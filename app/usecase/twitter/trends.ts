import { TwitterTrendsApi } from '../../infrastructure/api/twitter/trends'


// TODO: インフラ層はDI注入で。
export class TwitterTrendsUseCase{
    // TODO: ローカル時のみ
    private ssr_flg: boolean

    constructor(ssr_flg: boolean = false) {
        this.ssr_flg = ssr_flg
    }

    // TODO: ここでデータ加工する
    async find_all() {
        try {
            const tt = new TwitterTrendsApi(this.ssr_flg)
            const result = await tt.find_all()
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }
}