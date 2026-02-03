import styles from './ArticleCard.module.css';

interface ArticleProps {
    title: string;
    summary: string;
    link: string;
    date: string;
}

export default function ArticleCard({ title, summary, link, date }: ArticleProps) {
    return (
        <div className={`${styles.card} animate-fade`}>
            <span className={styles.date}>{date}</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.title}>
                {title}
            </a>
            <p className={styles.summary}>{summary}</p>
        </div>
    );
}
