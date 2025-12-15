import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './what-is-yoga.module.css';

export const metadata = {
    title: "Knowledge base | Nirog Yoga",
    description: "Explore the depths of Yoga wisdom, scientific research, and educational resources.",
};

export default function YogaUniversity() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Knowledge base</h1>
                    <p className={styles.subtitle}>
                        A hub for learning, research, and exploring the profound science of Yoga.
                    </p>
                </header>

                <div className={styles.grid}>
                    {/* Fundamentals Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Fundamentals of Yoga</h2>
                        <p className={styles.description}>
                            Explore the theoretical foundations, philosophy, and breathing practices of yoga.
                        </p>
                        <ul className={styles.linkList}>
                            <li><Link href="/knowledge-base/why-yoga" className={styles.link}>Why Yoga?</Link></li>
                            <li><Link href="/knowledge-base/introduction" className={styles.link}>Introduction to Yoga</Link></li>
                            <li><Link href="/knowledge-base/historical-references" className={styles.link}>Historical References in Shastras</Link></li>
                            <li><Link href="/knowledge-base/patanjali-sutras" className={styles.link}>Patanjali Yoga Sutras Summary</Link></li>
                            <li><Link href="/knowledge-base/meditation" className={styles.link}>Meditation (Dhyāna)</Link></li>
                            <li><Link href="/knowledge-base/learning-paths" className={styles.link}>Yoga Learning Paths</Link></li>
                            <li><Link href="/knowledge-base/yoga-books" className={styles.link}>Essential Yoga Books</Link></li>
                            <li><Link href="/saatvic-literature" className={styles.link}>Saatvic Literature</Link></li>
                        </ul>
                    </section>

                    {/* Asanas Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Asanas & Sequences</h2>
                        <p className={styles.description}>
                            Learn classical yoga postures and dynamic sequences for complete practice.
                        </p>
                        <ul className={styles.linkList}>
                            <li><Link href="/knowledge-base/safety-guidelines" className={styles.link}>Safety Guidelines for Practice</Link></li>
                            <li><Link href="/knowledge-base/standing-asanas" className={styles.link}>Standing Asanas</Link></li>
                            <li><Link href="/knowledge-base/surya-namaskara" className={styles.link}>Surya Namaskara (Sun Salutation)</Link></li>
                            <li><Link href="/knowledge-base/major-asanas" className={styles.link}>Major Āsanas (Yoga Postures)</Link></li>
                            <li><Link href="/knowledge-base/pranayama" className={styles.link}>Pranayama (Breath Regulation)</Link></li>
                            <li><Link href="/knowledge-base/breathing-techniques" className={styles.link}>Breathing Control Techniques</Link></li>
                            <li><Link href="/knowledge-base/curriculum" className={styles.link}>Practice Curriculum (8 Weeks → 1 Year)</Link></li>
                        </ul>
                    </section>
                </div>




            </div>

            <Footer />
        </main>
    );
}
