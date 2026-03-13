import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps ={
    title: string;
    description: string;
    link: string;
    link2: string
};

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link, link2})=>(
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a id="linkgit" target="_blank" href={link}><FaExternalLinkAlt /> Lien vers un premier projet</a>
        <br />
        <a id="linkgit" target="_blank" href={link2}><FaExternalLinkAlt /> Lien vers un second projet</a>
    </div>
);

export default ProjectCard;