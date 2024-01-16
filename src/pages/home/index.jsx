import { useEffect, useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Home(){
    const[movies, setMovies] = useState([])
    const image_path = 'http://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=393827e7aff814d61b60518aa2791c92`).then(response => response.json()).then(data => setMovies(data.results))
    }, [])

    return(
        <div className="main">
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link className='liniker' to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span className='movie-name'>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default Home;