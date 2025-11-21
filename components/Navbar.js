import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Healing Yoga Sadhana
            </Link>

            <div className={styles.navLinks}>
                <Link href="#philosophy" className={styles.link}>Philosophy</Link>
                <Link href="#therapy" className={styles.link}>Therapy</Link>
                <Link href="#instructors" className={styles.link}>Instructors</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
                <a
                    href="https://forms.gle/Lzgxtbm8QPu4ojiU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    Enrol Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
