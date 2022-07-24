import React from 'react'

import Header from '../components/commons/header'
import Hero from '../components/commons/hero'
import Footer from '../components/commons/footer'

// 子コンポーネントから親ページにイベントを通知するには・・？
// import SearchField from '../components/index/search_field'

import { TwitterTrendsApi } from '../infrastructure/api/twitter/trends'
import { TwitterTrendsUseCase } from '../usecase/twitter/trends'
import { WoeidApi } from '../infrastructure/api/woeid'
import { WoeidUseCase} from '../usecase/woeid'



type Props = {
    woeid: any,
    twitter_trends: any
}

const Home = ({woeid, twitter_trends}: Props) => {
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
                            {woeid.map((data: any) => {
                                return (
                                    <option value={data.woeid}>{data.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="control">
                    <a className="button is-info">Search</a>
                </div>
            </div>

            <div className="table-container">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><abbr title="Rank">Rank</abbr></th>
                            <th><abbr title="Name">Name</abbr></th>
                            <th><abbr title="URL">URL</abbr></th>
                            <th><abbr title="Volume">Volume</abbr></th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th><abbr title="Rank">Rank</abbr></th>
                            <th><abbr title="Name">Name</abbr></th>
                            <th><abbr title="URL">URL</abbr></th>
                            <th><abbr title="Volume">Volume</abbr></th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {twitter_trends.result.map((data: any) => {
                            return (
                                <tr>
                                    <th>{data.rank}</th>
                                    <td>{data.name}</td>
                                    <td><a href={data.url} title={data.name}>{data.name}</a></td>
                                    <td>{data.tweet_volume}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
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
        twitter_trends: twitter_trends_result
      }
    }
}


export default Home
