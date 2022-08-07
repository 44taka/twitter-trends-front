import React from 'react'


export const SearchField = (props: any) => {
    return (
        <div className="field has-addons">
            <div className="control">
                <div className="select">
                    <select>
                        <option>Japan</option>
                        <option>Tokyo</option>
                        <option>Sapporo</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <a className="button is-info">Search</a>
            </div>
        </div>
    )
}
