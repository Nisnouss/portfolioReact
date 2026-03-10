import {Link} from 'react-router-dom';
const Header = () =>{
    return <nav className='header'>
        <Link to="/">Accueil</Link>
        <Link to="/projects">Mes Projets</Link>
        <Link to="/contact">Contact</Link>
    </nav>;
};

export default Header;