import Link from 'next/link';
import styles from './AnnouncementBanner.module.css';

const AnnouncementBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.text}>
                    📣 Classes starting from <strong>Dec 1</strong>. <Link href="/enrollment-payment" className={styles.link}>Enroll now</Link> for Need based discounts! 🧘‍♀️
                </span>
                {/* Duplicate for seamless scrolling */}
                <span className={styles.text} aria-hidden="true">
                    📣 Classes starting from <strong>Dec 1</strong>. <Link href="/enrollment-payment" className={styles.link}>Enroll now</Link> for Need based discounts! 🧘‍♀️
                </span>
                <span className={styles.text} aria-hidden="true">
                    📣 Classes starting from <strong>Dec 1</strong>. <Link href="/enrollment-payment" className={styles.link}>Enroll now</Link> for Need based discounts! 🧘‍♀️
                </span>
                <span className={styles.text} aria-hidden="true">
                    📣 Classes starting from <strong>Dec 1</strong>. <Link href="/enrollment-payment" className={styles.link}>Enroll now</Link> for Need based discounts! 🧘‍♀️
                </span>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
