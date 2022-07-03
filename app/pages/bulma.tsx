import type { NextPage, GetServerSideProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Tile from '../components/tile'

import { ZipCloudUseCase } from '../usecase/zipcloud'
import { TwitterTrendsUseCase } from '../usecase/twitter/trends'


type Props = {
  data: any
}

const Bulma = ({data}: Props) => {
  console.log('///////////////////')
  console.log(data)
  console.log('///////////////////')
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
                  // console.log('+++++++++++++++++++++')
                  // const elem = document.getElementById('woeid').value
                  // console.log(elem)
                  console.log('---------------------')
                  const zcuc = new ZipCloudUseCase()
                  const r3 = await zcuc.search('1706057')
                  console.log(r3)
                  console.log('*********************')
                  const ttuc = new TwitterTrendsUseCase()
                  const r = await ttuc.find_all()
                  console.log(r)
                }}>
                    Search
                </a>
            </div>
        </div>
    </section>

    <Tile />



      <Footer />
    </div>
  )
}

export async function getServerSideProps<GetServerSideProps>() {
  console.log('getServerSideProps!!!')

  const zipcloud_usecase = new ZipCloudUseCase()
  const result = await zipcloud_usecase.search('1706057')

  // const twitter_trends_usecase = new TwitterTrendsUseCase()
  // const result = await twitter_trends_usecase.find_all()

  return {
    props: {
      data: result
    }
  }
}

export default Bulma
