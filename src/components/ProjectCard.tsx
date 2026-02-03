import styles from './ProjectCard.module.css';

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
    return (
        <div className={`${styles.card} animate-fade`}>
            <div className={styles.header}>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.title}>
                    {title}
                </a>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.techStack}>
                {tech.map((t, i) => (
                    <span key={i} className={styles.badge}>{t}</span>
                ))}
            </div>
        </div>
    );
}
