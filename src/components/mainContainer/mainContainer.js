import React, { useEffect,useState } from 'react'
import Movie from '../movies/movie';
import {getMovies} from '../../services/service';
import './mainContainer.css';

const MainContainer = () => {
    // crea una variable en el state para crear un loading mientras se cargan las peliculas
    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
            // Obtiene la lista de las peliculas a mostrar
            getMovies("3/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22&",setIsLoading,setMovieList);
    },[getMovies]);

    const listItems = movieList.map((d) => <Movie key={d.title} movie={d}></Movie>);

    return (
        <div className="cont">
            <h3>Lista de peliculas</h3>
            {
                isLoading ? 
                <div>
                    <p className="loading">Cargando Peliculas...</p>
                </div> :
                <div >
                    {
                        listItems
                    } 
                </div>
            }
        </div>
        
    )
}

export default MainContainer