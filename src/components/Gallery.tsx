'use client';

import { useState } from 'react';
import { paintings } from '@/data/paintings';
import styles from './Gallery.module.css';

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<typeof paintings[0] | null>(null);

    return (
        <>
            <div className="container animate-fade">
                <section className="section">
                    <h1 style={{ marginBottom: '4rem' }}>Art Showcase</h1>
                    <div className={styles.grid}>
                        {paintings.map((painting) => (
                            <div
                                key={painting.id}
                                className={styles.paintingCard}
                                onClick={() => setSelectedItem(painting)}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={painting.imageUrl} alt={painting.title} className={styles.paintingImage} />
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.paintingTitle}>{painting.title}</h3>
                                    <p className={styles.paintingDesc}>{painting.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {selectedItem && (
                <div className={styles.lightbox} onClick={() => setSelectedItem(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>close [x]</button>
                        <div className={styles.lightboxImageWrapper}>
                            <img src={selectedItem.imageUrl} alt={selectedItem.title} className={styles.lightboxImage} />
                        </div>
                        <div className={styles.lightboxDetails}>
                            <h2 className="text-accent">{selectedItem.title}</h2>
                            <p>{selectedItem.description}</p>
                            <p className={styles.details}>{selectedItem.details}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
