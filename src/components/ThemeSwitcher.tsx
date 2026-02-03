'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Check for saved theme in localStorage or system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <label className={styles.switch} aria-label="Toggle Theme">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className={styles.checkbox}
            />
            <span className={styles.slider}>
                <span className={styles.icon}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </span>
            </span>
        </label>
    );
}
