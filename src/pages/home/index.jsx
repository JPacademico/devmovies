import { useEffect, useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import moon from '../assets/moon.svg'
import lupa from '../assets/lupa.svg'

function Home(){
    const[movies, setMovies] = useState([])
    const image_path = 'http://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=393827e7aff814d61b60518aa2791c92`).then(response => response.json()).then(data => setMovies(data.results))
        console.log(movies)
    }, [])

    return(
        <div className="main">
            <header>
                <h1><strong>Moon</strong>Vies <img className='logo' src={moon} alt="" /></h1>
                <div className='categories'>
                    <a href="">Popular</a>
                    <a href="">Top Rated</a>
                    <a href="">Other</a>
                </div>
                <form action="">
                    <input type="text" placeholder='movie name'/>
                    <img className='search-btn' src={lupa} alt="" />
                </form>

            </header>
            <h2>Top <strong>20</strong> Popular</h2>
            <ul className='list-movies'>
                {movies.map(movie => {
                    return (
                        <li className='itens' key={movie.id}>
                            <Link className='liniker' to={`/details/${movie.id}`}><img className='poster' src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span className='movie-name'>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default Home;