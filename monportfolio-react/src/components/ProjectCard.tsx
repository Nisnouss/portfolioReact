type ProjectCardProps ={
    title: string;
    description: string;
    link: string
};

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link})=>(
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a id="linkgit" target="_blank" href={link}>Lien vers le projet</a>
    </div>
);

export default ProjectCard;