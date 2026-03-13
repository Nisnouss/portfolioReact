import {Link} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () =>{
    return <div id='navdiv'>
                <RxHamburgerMenu id='burger-menu'/>
                <nav className='header'>
                    <Link to="/">Accueil</Link>
                    <Link to="/projects">Mes Projets</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
};

export default Header;