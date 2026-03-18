import styles from './SocialCard.module.css';

interface SocialProps {
    platform: string;
    link: string;
}

export default function SocialCard({ platform, link }: SocialProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles.card} animate-fade`}>
            <span className={styles.platform}>{platform}</span>
            <span className={styles.icon}>↗</span>
        </a>
    );
}
