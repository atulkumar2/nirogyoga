"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                <div className={styles.logoContainer}>
                    <Image
                        src="/NirogYogaLogo.png"
                        alt="Nirog Yoga"
                        width={180}
                        height={50}
                        className={styles.logoImage}
                        priority
                    />
                </div>
            </Link>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
                <Link href="/instructors" className={styles.link} onClick={closeMenu}>Instructors</Link>
                <Link href="/therapies" className={styles.link} onClick={closeMenu}>Therapy</Link>
                <Link href="/programs" className={styles.link} onClick={closeMenu}>Programs</Link>
                <Link href="/what-is-yoga" className={styles.link} onClick={closeMenu}>What is Yoga?</Link>
                <Link href="/events" className={styles.link} onClick={closeMenu}>Events</Link>
                <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
                <Link href="/payment" className={styles.link} onClick={closeMenu}>Payment</Link>
                <Link href="/enrollment" className={styles.ctaButton} onClick={closeMenu}>
                    Enrollment Details
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
