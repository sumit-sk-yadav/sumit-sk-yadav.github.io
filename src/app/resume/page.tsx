import { experience } from '@/data/experience';
import styles from './resume.module.css';

export default function ResumePage() {
    return (
        <div className="container animate-fade">
            <section className="section">
                <h1 className={styles.title}>Experience & Education</h1>

                <div className={styles.timeline}>
                    {experience.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot} />

                            <div className={styles.timelineContent}>
                                <span className={`text-muted ${styles.period}`}>{exp.period}</span>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <p className={styles.company}>{exp.company}</p>
                                <ul className={`text-muted ${styles.description}`}>
                                    {exp.description.map((point: string, pIndex: number) => (
                                        <li key={pIndex} className={styles.descriptionItem}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.downloadSection}>
                    <p className={styles.downloadText}>Download (.docx)</p>
                    <a href="/docs/Sumit_Yadav_Data_Scientist.docx" download className={`text-accent ${styles.downloadLink}`}>Sumit_Yadav_Data_Scientist.docx</a>
                </div>
            </section>
        </div>
    );
}
