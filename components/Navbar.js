"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsTestimonialsOpen(false);
    };

    const toggleTestimonials = () => {
        setIsTestimonialsOpen(!isTestimonialsOpen);
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
                <div 
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setIsTestimonialsOpen(true)}
                    onMouseLeave={() => setIsTestimonialsOpen(false)}
                >
                    <button 
                        className={styles.dropdownTrigger}
                        onClick={toggleTestimonials}
                    >
                        Testimonials
                    </button>
                    <div className={`${styles.dropdownMenu} ${isTestimonialsOpen ? styles.dropdownMenuOpen : ''}`}>
                        <Link href="/testimonials#interest" className={styles.dropdownItem} onClick={closeMenu}>
                            🌟 Interest
                        </Link>
                        <Link href="/testimonials#review" className={styles.dropdownItem} onClick={closeMenu}>
                            ⭐ Review
                        </Link>
                        <Link href="/testimonials#feedback" className={styles.dropdownItem} onClick={closeMenu}>
                            💬 Feedback
                        </Link>
                    </div>
                </div>
                <Link href="/knowledge-base" className={styles.link} onClick={closeMenu}>Knowledge base</Link>
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
