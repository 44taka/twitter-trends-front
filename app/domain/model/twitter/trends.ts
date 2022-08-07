export interface TwitterTrendsApiModel {
    message: string
    result: TwitterTrendsResultModel[]
}

interface TwitterTrendsResultModel {
    id: number
    rank: number
    name: string
    url: string
    tweet_volume: number
}