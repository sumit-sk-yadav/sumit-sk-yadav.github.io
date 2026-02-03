import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
    return (
        <div className="container">
            <section className="section">
                <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h1>
                <div className="grid-cards">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
