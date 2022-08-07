import { ZipCloudApi } from '../infrastructure/api/zipcloud'


// TODO: インフラ層はDI注入で。
export class ZipCloudUseCase{

    // TODO: ここでデータ加工する
    async search(zipcloud: string) {
        try {
            const zipcloud_api = new ZipCloudApi()
            const result = await zipcloud_api.search(zipcloud)
            return result
        } catch(e) {
            console.log('error usecase')
            throw e
        }
    }
}