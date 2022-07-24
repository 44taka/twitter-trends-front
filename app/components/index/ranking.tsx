import React from 'react'


export const Ranking = (props: any) => {
    return (
        <div className="table-container">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Tweet Volume</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Tweet Volume</th>
                    </tr>
                </tfoot>
                <tbody>
                    {props.twitter_trends.result.map((data: any, index: number) => {
                        return (
                            <tr key={index}>
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
    )
}
