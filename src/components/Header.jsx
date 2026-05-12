import { Link } from 'react-router-dom'
import '../styles/App.css'

function Header() {
    return (
        // 1. header element, className="header"
        //    - Link to "/" with className="header__brand", text: CountryPeek
        //    - nav element, className="header__nav"
        //      - Link to "/" — Home
        //      - Link to "/favourites" — Favourites
        <div className="header">
            <Link to="/" className="header__brand">CountryPeek</Link>
            <nav className="header__nav">
                <Link className="header__nav__link" to="/">Home</Link>
                <Link className="header__nav__link" to="/favourites">Favourites</Link>
            </nav>
        </div>
    )
}

export default Header