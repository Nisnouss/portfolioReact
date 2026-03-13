import '../styles/Contact.scss';
import {Link} from 'react-router-dom';

const Contact = () =>{
    return(
        <section>
            <Link to="/"> Retour à l'accueil</Link>
            <div className='center'>  
                <div className='contact-container'>
                    <h1>Me contacter</h1>
                    <p>Mail: <a href="mailto:nisrine.boutahar7@gmail.com">nisrine.boutahar7@gmail.com</a><br />
                    Téléphone: <a href="0600000000">0600000000</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;