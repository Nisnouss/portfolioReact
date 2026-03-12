import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import '../styles/Home.scss';

const Home = () =>{
    return(
        <>
        <header>
            <h1>Portfolio - Nisrine BOUTAHAR</h1>
            <Header />
        </header>

        <main>
            <div className="presentation">
                <h2>Présentation</h2>
                <br />
                <p>Après une formation courte et intensive dans les fondements des divers langages de programmations, mon projet de poursuivre mon cursus dans le développement web full-stack s'est davantage confirmé. J'ai eu la possibilité de consolider à la fois mes connaissances et ma pratique dans le développement de sites web et applications, que ce soit du côté client ou du côté serveur. <strong>A compléter</strong></p>
            </div>
            <div className="langages-informatiques">
                <h2>Mes langages informatiques</h2>
                <div className="icons">
                    <img src="https://skillicons.dev/icons?i=html,css,py,php,mysql,js,nodejs,mongodb,wordpress,react&theme=light" alt="icones" className="imgicones" />
                </div>
            </div>
            <div className="Formations">
                <article className="formarticle">
                    <h2>Mes Formations</h2>
                    <br />
                    <br />
                    <ul>
                        <li><span>2025 - 2026</span> Formation langage informatique à la carte</li>
                        <p>La Plateforme, Brignoles</p>
                        <br />
                        <li><span>2019 - 2023</span> Licence Sciences du Langage</li>
                        <p>Faculté d'Arts, Lettres, Langues et Sciences Humaines, Aix-en-Provence (13)</p>
                        <br />
                        <li><span>2017 - 2019</span> Baccalauréat Scientifique avec mention</li>
                        <p>Lycée Thomas Edison, Lorgues (83)</p>
                    </ul>
                </article>
                <article className="formarticle">
                    <h2>Mes expériences professionnelles</h2>
                    <br />
                    <br />
                    <ul>
                        <li><span>Avril 2025 - Août 2025</span> Agent de tri</li>
                        <p>Colissimo, Les Arcs (83)</p>
                        <br />
                        <li><span>2021 - 2024</span> Aidante familiale</li>
                        <p>Vidauban (83)</p>
                        <br />
                        <li><span>2023</span> Agent d'entretien</li>
                        <p>Hôtel Mercure, Fréjus (83)</p>
                    </ul>
                </article>
                <article className="formarticle">
                    <h2>Compétences acquises</h2>
                    <br />
                    <br />
                    <ul>
                        <li>Maîtrise des bases de divers langages de programmation</li>
                        <br />
                        <li>Autonome</li>
                        <br />
                        <li>Respect des règles et consignes de sécurité</li>
                    </ul>
                </article>
            </div>
        </main>

        <footer>

        </footer>
        <Footer />
        </>
    )
};

export default Home;