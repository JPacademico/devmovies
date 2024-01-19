import { Link, useParams } from 'react-router-dom';
import './style.css'
import { useEffect, useState } from 'react';
import star from '../assets/star.svg'

function Details() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'http://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=393827e7aff814d61b60518aa2791c92`).then(response => response.json())
            .then(data => {
                const movieData = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    nota: data.vote_average
                }
                setMovie(movieData)
            })
    }, [id])

    return(
        <div className='container'>
            <div className='picture'>
                <img className='imagem' src={movie.image} alt={movie.id} />
            </div>
            <div className='movie-details'>
                <h1 className='titulo'>{movie.title}</h1>
                <p>{movie.sinopse}</p>
                <span className='data'>{movie.releaseDate} <img className='estrela' src={star} alt="" /><strong className='vote'>{movie.nota}</strong> </span>
                <Link to="/"><button>Home</button></Link>
                
            </div>
        </div>
    )
}

export default Details;