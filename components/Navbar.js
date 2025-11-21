import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Healing Yoga Sadhana
            </Link>

            <div className={styles.navLinks}>
                <Link href="/#philosophy" className={styles.link}>Philosophy</Link>
                <Link href="/#therapy" className={styles.link}>Therapy</Link>
                <Link href="/#instructors" className={styles.link}>Instructors</Link>
                <Link href="/#contact" className={styles.link}>Contact</Link>
                <Link href="/payment" className={styles.link}>Payment</Link>
                <Link href="/enrollment" className={styles.ctaButton}>
                    Enrol Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
