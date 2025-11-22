"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
                <div className={styles.brandContainer}>
                    <span className={styles.brandName}>Nirog Yoga</span>
                    <span className={styles.tagline}>Healing, Yoga, Sadhana</span>
                </div>
            </Link>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/therapies" className={styles.link} onClick={closeMenu}>Therapy</Link>
                <Link href="/yoga-university" className={styles.link} onClick={closeMenu}>Yoga University</Link>
                <Link href="/events" className={styles.link} onClick={closeMenu}>Events</Link>
                <Link href="/programs" className={styles.link} onClick={closeMenu}>Programs</Link>
                <Link href="/instructors" className={styles.link} onClick={closeMenu}>Instructors</Link>
                <Link href="/#contact" className={styles.link} onClick={closeMenu}>Contact</Link>
                <Link href="/payment" className={styles.link} onClick={closeMenu}>Payment</Link>
                <Link href="/enrollment" className={styles.ctaButton} onClick={closeMenu}>
                    Enrollment Details
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
