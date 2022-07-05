import React from 'react'
import Image from 'next/image'

import { Ring } from '@uiball/loaders'


const Tile = (props: any) => {
    if (props.isLoading) {
        return (
            <section className="section loading-section">
                <Ring 
                    size={40}
                    lineWeight={5}
                    speed={2} 
                    color="black" 
                />
            </section>
        )
    }

    return (
        <section className="section">
            <div className="tile is-ancestor">
                {props.data.map((datum: any) => {
                    return (
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title is-4">{datum.label}</p>
                                <p className="subtitle is-6">※14時45分</p>
                                {
                                    datum.trends.map((trend: any) => {
                                        return <p><span>{trend.rank}.</span>{trend.name}</p>
                                    })
                                }
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Tile
