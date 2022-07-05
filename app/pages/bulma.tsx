import React, { useState } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Tile from '../components/tile'
import { TwitterTrendsUseCase } from '../usecase/twitter/trends'


type Props = {
  data: any
}

const Bulma = ({data}: Props) => {
  const [dt, setData] = useState(data.result)
  const [isLoading, setLoading] = useState(false)

  return (
    <div>
      <Header />
      <NavBar />
      <section className="section">
        <div className="field has-addons">
            <div className="control">
                <div className="select">
                    <select id="woeid">
                        <option value="23424856">Japan</option>
                        <option value="1118370">Tokyo</option>
                        <option value="1118108">Sapporo</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <a className="button is-info" onClick={async () => {
                  setLoading(true)
                  const ttuc = new TwitterTrendsUseCase()
                  const r = await ttuc.find_all()
                  setData(r.result)
                  setLoading(false)
                }}>
                    Search
                </a>
            </div>
        </div>
      </section>
      <Tile data={dt} isLoading={isLoading}/>
      <Footer />
    </div>
  )
}

export async function getServerSideProps<Props>() {
  const twitter_trends_usecase = new TwitterTrendsUseCase(true)
  const result = await twitter_trends_usecase.find_all()
  return {
    props: {
      data: result
    }
  }
}

export default Bulma
