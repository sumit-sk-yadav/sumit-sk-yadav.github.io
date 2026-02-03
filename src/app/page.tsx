import { skillGroups } from '@/data/skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container animate-fade">
      <section className={styles.hero}>
        <div className={styles.profilePicContainer}>
          <img src="/main_picture.png" alt="Sumit Yadav" className={styles.profilePic} />
        </div>
        <h1 className={styles.title}>
          Sumit Yadav
        </h1>
        <div className={styles.bio}>
          <p>
            I am a self-taught <span className="text-accent">Data Scientist</span>,
            a <span className="text-accent">Marine Ecologist</span> by academic training,
            and an <span className="text-accent">Artist</span> when inspiration strikes.
          </p>
          {/* <p>
            I build digital experiences that focus on <span className="text-accent">functionality</span>
            and <span className="text-accent">technical excellence</span>.
          </p> */}
        </div>
      </section>

      <section className={`section ${styles.skillsSection}`}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsContainer}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.skillRow}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.skillsList}>
                {group.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
