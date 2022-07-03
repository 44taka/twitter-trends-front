import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

import { ZipCloudUseCase } from '../usecase/zipcloud'
import { TwitterTrendsUseCase } from '../usecase/twitter/trends'


const Bulma: NextPage = () => {
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

    <section className="section">
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title is-4">現在</p>
                    <p className="subtitle is-6">※14時45分</p>
                    <p><span>1.</span>What is up?</p>
                    <p><span>2.</span>What is up?</p>
                    <p><span>3.</span>What is up?</p>
                    <p><span>4.</span>What is up?</p>
                    <p><span>5.</span>What is up?</p>
                    <p><span>6.</span>What is up?</p>
                    <p><span>7.</span>What is up?</p>
                    <p><span>8.</span>What is up?</p>
                    <p><span>9.</span>What is up?</p>
                    <p><span>10.</span>What is up?</p>
                    <p><span>11.</span>What is up?</p>
                    <p><span>12.</span>What is up?</p>
                    <p><span>13.</span>What is up?</p>
                    <p><span>14.</span>What is up?</p>
                    <p><span>15.</span>What is up?</p>
                    <p><span>16.</span>What is up?</p>
                    <p><span>17.</span>What is up?</p>
                    <p><span>18.</span>What is up?</p>
                    <p><span>19.</span>What is up?</p>
                    <p><span>20.</span>What is up?</p>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title is-4">1時間前</p>
                    <p className="subtitle is-6">※13時45分</p>
                    <p><span>1.</span>What is up?</p>
                    <p><span>2.</span>What is up?</p>
                    <p><span>3.</span>What is up?</p>
                    <p><span>4.</span>What is up?</p>
                    <p><span>5.</span>What is up?</p>
                    <p><span>6.</span>What is up?</p>
                    <p><span>7.</span>What is up?</p>
                    <p><span>8.</span>What is up?</p>
                    <p><span>9.</span>What is up?</p>
                    <p><span>10.</span>What is up?</p>
                    <p><span>11.</span>What is up?</p>
                    <p><span>12.</span>What is up?</p>
                    <p><span>13.</span>What is up?</p>
                    <p><span>14.</span>What is up?</p>
                    <p><span>15.</span>What is up?</p>
                    <p><span>16.</span>What is up?</p>
                    <p><span>17.</span>What is up?</p>
                    <p><span>18.</span>What is up?</p>
                    <p><span>19.</span>What is up?</p>
                    <p><span>20.</span>What is up?</p>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title is-4">3時間前</p>
                    <p className="subtitle is-6">※11時45分</p>
                    <p><span>1.</span>What is up?</p>
                    <p><span>2.</span>What is up?</p>
                    <p><span>3.</span>What is up?</p>
                    <p><span>4.</span>What is up?</p>
                    <p><span>5.</span>What is up?</p>
                    <p><span>6.</span>What is up?</p>
                    <p><span>7.</span>What is up?</p>
                    <p><span>8.</span>What is up?</p>
                    <p><span>9.</span>What is up?</p>
                    <p><span>10.</span>What is up?</p>
                    <p><span>11.</span>What is up?</p>
                    <p><span>12.</span>What is up?</p>
                    <p><span>13.</span>What is up?</p>
                    <p><span>14.</span>What is up?</p>
                    <p><span>15.</span>What is up?</p>
                    <p><span>16.</span>What is up?</p>
                    <p><span>17.</span>What is up?</p>
                    <p><span>18.</span>What is up?</p>
                    <p><span>19.</span>What is up?</p>
                    <p><span>20.</span>What is up?</p>
                </article>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Bulma
