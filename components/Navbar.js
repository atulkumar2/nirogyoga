import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <div className={styles.brandContainer}>
                    <span className={styles.brandName}>Nirog Yoga</span>
                    <span className={styles.tagline}>Healing, Yoga, Sadhana</span>
                </div>
            </Link>

            <div className={styles.navLinks}>
                <Link href="/therapies" className={styles.link}>Therapy</Link>
                <Link href="/yoga-university" className={styles.link}>Yoga University</Link>
                <Link href="/events" className={styles.link}>Events</Link>
                <Link href="/instructors" className={styles.link}>Instructors</Link>
                <Link href="/#contact" className={styles.link}>Contact</Link>
                <Link href="/payment" className={styles.link}>Payment</Link>
                <Link href="/enrollment" className={styles.ctaButton}>
                    Enrollment Details
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
