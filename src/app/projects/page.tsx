import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
    return (
        <div className="container">
            <section className="section">
                <h1 className="text-center mb-3">Projects.</h1>
                <div className="grid-cards">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
