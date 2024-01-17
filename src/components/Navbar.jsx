import movie from './movie.svg'

const Navbar = () => {
    return(
        <div className="sidenav">
            <img className='icon' src={movie} alt="" />
            <ul className="menu">
                <li className="options">
                    <a href="">Home</a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;