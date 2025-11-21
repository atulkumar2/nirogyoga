import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './events.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Upcoming Events | Nirog Yoga",
    description: "Stay updated with our latest yoga workshops, retreats, and new batch start dates.",
};

export default function Events() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Upcoming Events</h1>
                    <p className={styles.subtitle}>
                        Join us for transformative sessions and begin your journey to wellness.
                    </p>
                </header>

                <div className={styles.eventsList}>
                    {/* December 1st Event */}
                    <div className={styles.eventCard}>
                        <div className={styles.dateBox}>
                            <span className={styles.month}>DEC</span>
                            <span className={styles.day}>01</span>
                        </div>
                        <div className={styles.eventDetails}>
                            <h2 className={styles.eventTitle}>New Yoga Therapy Batch Begins</h2>
                            <div className={styles.metaInfo}>
                                <span className={styles.metaItem}>🕒 Morning Sessions</span>
                                <span className={styles.metaItem}>📍 Nirog Yoga Center, Mangalore</span>
                            </div>
                            <p className={styles.description}>
                                We are excited to announce the start of our new yoga therapy batch starting December 1st.
                                This comprehensive program is designed to address various health concerns including diabetes, hypertension, and stress management through specialized yoga practices.
                            </p>
                            <div className={styles.highlights}>
                                <h3>Program Highlights:</h3>
                                <ul>
                                    <li>Personalized attention and health assessment</li>
                                    <li>Guided Pranayama and Meditation sessions</li>
                                    <li>Therapeutic Asanas for specific conditions</li>
                                    <li>Lifestyle and diet counseling</li>
                                </ul>
                            </div>
                            <div className={styles.actions}>
                                <Link href="/enrollment" className={styles.primaryButton}>Enroll Now</Link>
                                <Link href="/payment" className={styles.secondaryButton}>Payment Options</Link>
                                <Link href="/#contact" className={styles.secondaryButton}>Contact for Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
