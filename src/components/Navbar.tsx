import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="/icon.png" alt="Logo" className={styles.logoIcon} />
                    Not An Orca.
                </Link>
                <div className={styles.navActions}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/">About</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/articles">Articles</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/resume">CV</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/gallery">Gallery</Link></li>
                    </ul>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}
