"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

            <div className={styles.navContainer}>
                <Link href="/enrollment-payment" className={styles.mobileCtaButton} onClick={closeMenu}>
                    Enroll / Payment
                </Link>
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
                <Link href="/instructors" className={styles.link} onClick={closeMenu}>Instructors</Link>
                <Link href="/programs-events" className={styles.link} onClick={closeMenu}>Programs / Events</Link>
                <Link href="/testimonials" className={styles.link} onClick={closeMenu}>Testimonials</Link>
                <Link href="/what-is-yoga" className={styles.link} onClick={closeMenu}>What is Yoga?</Link>
                <Link href="/yoga-healing" className={styles.link} onClick={closeMenu}>Yoga Healing</Link>
                <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
                <Link href="/enrollment-payment" className={styles.ctaButton} onClick={closeMenu}>
                    Enroll / Payment
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
