import React, {useEffect} from 'react'
import { IMAGES_URL } from '../../helpers/const';
import './movie.css'

const Movie = ({movie}) => {

    return (
        <div className="container">
            <img className="backg" src={`${IMAGES_URL}/${movie.backdrop_path}`} alt="new"/>
                <p className="title">{movie.title}</p>
                <p className="date">{movie.release_date}</p>
        </div>
    )
}

export default Movie