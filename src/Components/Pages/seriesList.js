import React from 'react'
import { Link } from 'react-router-dom'

const Array = ({series})=>{
    return(
        <li className="series__lists-list">
            <Link to={`/series/${series.show.id}`}>
                {series.show.name}
            </Link>
        </li>
    )
}
const SeriesList = (props) =>{
    return(
        <ul className="series__lists">
            {props.list.map(series=>{
                    return <Array series={series} />
                })
            }
        </ul>
    )
}
export default SeriesList; 