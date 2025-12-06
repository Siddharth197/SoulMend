'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ['/images/spa-1.png', '/images/spa-2.png', '/images/spa-3.png'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated Slideshow Background */}
            <div className={styles.backgroundContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.backgroundSlide} ${index === currentSlide ? styles.active : ''
                            }`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <h1 className={styles.title}>Natural Healing from Thailand</h1>
                <p className={styles.subtitle}>
                    Discover the power of authentic Bam Oil, Sleep Balm, and more.
                    Brought to you by Soulmend.
                </p>
                <div className={styles.actions}>
                    <Link href="/shop" className="btn btn-primary">
                        Shop Now
                    </Link>
                    <Link href="/booking" className={`btn ${styles.btnOutline}`}>
                        Book a Massage
                    </Link>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''
                            }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
