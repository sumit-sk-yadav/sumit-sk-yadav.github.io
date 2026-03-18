'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/icons/icon.png"
                        alt="Not An Orca Logo"
                        width={32}
                        height={32}
                        className={styles.logoIcon}
                        suppressHydrationWarning
                    />
                    Not An Orca.
                </Link>
                <div className={styles.navActions}>
                    <button 
                        className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`} aria-label="Main Navigation">
                        <li><Link href="/" onClick={closeMenu}>About</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/projects" onClick={closeMenu}>Projects</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/articles" onClick={closeMenu}>Articles</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/resume" onClick={closeMenu}>CV</Link></li>
                        <li className={styles.separator}>|</li>
                        <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    </ul>
                    <div className={styles.themeSwitcherWrapper}>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}
