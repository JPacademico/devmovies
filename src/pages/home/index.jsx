import { useEffect, useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Home(){
    const[movies, setMovies] = useState([])
    const image_path = 'http://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=393827e7aff814d61b60518aa2791c92`).then(response => response.json()).then(data => setMovies(data.results))
    }, [])

    return(
        <div className="main">
            <header>Cabeçalho</header>
            <h2>Popular</h2>
            <ul className='list-movies'>
                {movies.map(movie => {
                    return (
                        <li className='itens' key={movie.id}>
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