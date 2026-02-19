'use client';

import Image from 'next/image';
import { useState } from 'react';
import { paintings } from '@/data/paintings';
import styles from './Gallery.module.css';

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<typeof paintings[0] | null>(null);

    return (
        <>
            <div className="container animate-fade">
                <section className="section">
                    <h1 className="text-center mb-4">Art Showcase</h1>
                    <div className={styles.grid}>
                        {paintings.map((painting) => (
                            <div
                                key={painting.id}
                                className={styles.paintingCard}
                                onClick={() => setSelectedItem(painting)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={painting.imageUrl}
                                        alt={painting.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 280px"
                                        className={styles.paintingImage}
                                        suppressHydrationWarning
                                    />
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
                        <button className={styles.closeBtn} onClick={() => setSelectedItem(null)} aria-label="Close">
                            ✕
                        </button>
                        <div className={styles.lightboxImageWrapper}>
                            {/* Using standard img here to allow natural sizing "hugging" which is difficult with next/image without known dimensions */}
                            <img
                                src={selectedItem.imageUrl}
                                alt={selectedItem.title}
                                className={styles.lightboxImage}
                            />
                        </div>
                        <div className={styles.lightboxDetails}>
                            <h2 className="text-accent" style={{ margin: 0 }}>{selectedItem.title}</h2>
                            <p style={{ margin: 0 }}>{selectedItem.description}</p>
                            <p className={styles.details}>{selectedItem.details}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
