import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './what-is-yoga.module.css';
import Link from 'next/link';

export const metadata = {
    title: "What is Yoga? | Nirog Yoga",
    description: "Explore the depths of Yoga wisdom, scientific research, and educational resources.",
};

export default function YogaUniversity() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>What is Yoga?</h1>
                    <p className={styles.subtitle}>
                        A hub for learning, research, and exploring the profound science of Yoga.
                    </p>
                </header>

                <div className={styles.grid}>
                    {/* Core Concepts */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Fundamentals of Yoga</h2>
                        <ul className={styles.linkList}>
                            <li><Link href="/what-is-yoga/why-yoga" className={styles.link}>Why Yoga?</Link></li>
                            <li><Link href="/what-is-yoga/introduction" className={styles.link}>Introduction to Yoga</Link></li>
                            <li><Link href="/what-is-yoga/pranayama" className={styles.link}>Pranayama (Breath Regulation)</Link></li>
                            <li><Link href="/what-is-yoga/breathing-techniques" className={styles.link}>Breathing Control Techniques</Link></li>
                            <li><Link href="/what-is-yoga/historical-references" className={styles.link}>Historical References in Shastras</Link></li>
                        </ul>
                    </section>


                </div>
            </div>

            <Footer />
        </main>
    );
}
