import { useEffect, useState } from "react";
import ProjectCard from '../components/ProjectCard';
import data from '../data/projects.json';
import '../styles/Projects.scss';
import {Link} from 'react-router-dom';

type Project={
    id: number;
    title: string;
    description: string
}

const Projects = () =>{
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setProjects(data)
    }, []);

    const filteredProjects = projects.filter((project) =>
        project.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
);

return(
    <section>
        <Link to="/"> Retour à l'accueil</Link>
        <div className="search">
            <h2>Mes Projets</h2>
            <input
            type="text"
            placeholder="Rechercher une catégorie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="project-list">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    />
                ))
            ) : (
                <p>Aucun projet ne correspond à votre recherche</p>
            )}
        </div>
    </section>
)
}

export default Projects;