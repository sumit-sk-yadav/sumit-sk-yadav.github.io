import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Sumit SurenderKumar Yadav.</p>
            </div>
        </footer>
    );
}
