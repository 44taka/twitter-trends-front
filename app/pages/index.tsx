import React, { useState } from 'react'

import Header from '../components/commons/header'
import Hero from '../components/commons/hero'
import Footer from '../components/commons/footer'

// 子コンポーネントから親ページにイベントを通知するには・・？
// import SearchField from '../components/index/search_field'
import { Ranking } from '../components/index/ranking'

import { TwitterTrendsApi } from '../infrastructure/api/twitter/trends'
import { TwitterTrendsUseCase } from '../usecase/twitter/trends'
import { WoeidApi } from '../infrastructure/api/woeid'
import { WoeidUseCase} from '../usecase/woeid'



type Props = {
    woeid: any,
    trends: any
}

const Home = ({woeid, trends}: Props) => {
    const [twitter_trends, setTwitterTrends] = useState(trends)
    const [isLoading, setLoading] = useState(false)

    return (
    <div>
      <Header />
      <Hero />
        <section className="section">
            <h1 className="title is-3 is-size-4-mobile site-title">Twitterトレンドランキング</h1>
            <h2 className="subtitle is-size-7-mobile site-subtitle">個人開発用に作ってます。</h2>

            <div className="field has-addons">
                <div className="control">
                    <div className="select">
                        <select>
                            {woeid.map((data: any, index: number) => {
                                return (
                                    <option key={index} value={data.woeid}>{data.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="control">
                    <a className="button is-info" onClick={async () => {
                        setLoading(true)
                        // // トレンド情報取得
                        // const twitter_trends_api = new TwitterTrendsApi()
                        // const twitter_trends_usecase = new TwitterTrendsUseCase(twitter_trends_api)
                        // const twitter_trends_result = await twitter_trends_usecase.get()
                        // setTwitterTrends(twitter_trends_result)
                        setLoading(false)
                    }}>
                        Search
                    </a>
                </div>
            </div>
            <Ranking twitter_trends={twitter_trends} />
        </section>
        <Footer />
    </div>  
  )
}

export async function getServerSideProps<Props>() {
    // WOEIDリスト取得
    const woeid_api = new WoeidApi()
    const woeid_usecase = new WoeidUseCase(woeid_api)
    const woeid_result = await woeid_usecase.get()

    // トレンド情報取得
    const twitter_trends_api = new TwitterTrendsApi()
    const twitter_trends_usecase = new TwitterTrendsUseCase(twitter_trends_api)
    const twitter_trends_result = await twitter_trends_usecase.get()

    return {
      props: {
        woeid: woeid_result,
        trends: twitter_trends_result
      }
    }
}


export default Home
