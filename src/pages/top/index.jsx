import { useEffect, useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import moon from '../assets/moon.svg'
import lupa from '../assets/lupa.svg'

function TopRated(){
    const[movies, setMovies] = useState([])
    const image_path = 'http://image.tmdb.org/t/p/w500'
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=393827e7aff814d61b60518aa2791c92`).then(response => response.json()).then(data => setMovies(data.results))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return(
        <div className="main">
            <header>
                <h1><strong>Moon</strong>Vies <img className='logo' src={moon} alt="" /></h1>
                <div className='categories'>
                    <Link className='categoria' to="/">Popular</Link>
                    <Link className='categoria' to="/top_rated">Top Rated</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='movie name' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <img className='search-btn' src={lupa} alt="" />
                </form>

            </header>
            <h2>Top <strong>20</strong> Best Rated</h2>
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

export default TopRated;