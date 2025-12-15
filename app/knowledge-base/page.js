import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './knowledge-base.module.css';

export const metadata = {
    title: "Knowledge base | Nirog Yoga",
    description: "A collection of articles, practice guidance, and foundational knowledge about Yoga.",
};

export default function KnowledgeBase() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Knowledge base</h1>
                    <p className={styles.subtitle}>A hub for learning, research, and exploring Yoga.</p>
                </header>

                <section className={styles.section}>
                    <ul className={styles.linkList}>
                        <li><a href="/knowledge-base/why-yoga" className={styles.link}>Why Yoga?</a></li>
                        <li><a href="/knowledge-base/introduction" className={styles.link}>Introduction to Yoga</a></li>
                        <li><a href="/knowledge-base/historical-references" className={styles.link}>Historical References</a></li>
                        <li><a href="/knowledge-base/breathing-techniques" className={styles.link}>Breathing Control Techniques</a></li>
                        <li><a href="/knowledge-base/pranayama" className={styles.link}>Pranayama</a></li>
                        <li><a href="/knowledge-base/major-asanas" className={styles.link}>Major Asanas</a></li>
                        <li><a href="/knowledge-base/standing-asanas" className={styles.link}>Standing Asanas</a></li>
                        <li><a href="/knowledge-base/surya-namaskara" className={styles.link}>Surya Namaskara</a></li>
                        <li><a href="/knowledge-base/meditation" className={styles.link}>Meditation</a></li>
                        <li><a href="/knowledge-base/patanjali-sutras" className={styles.link}>Patanjali Sutras</a></li>
                        <li><a href="/knowledge-base/learning-paths" className={styles.link}>Learning Paths</a></li>
                        <li><a href="/knowledge-base/yoga-books" className={styles.link}>Essential Yoga Books</a></li>
                        <li><a href="/knowledge-base/curriculum" className={styles.link}>Curriculum</a></li>
                        <li><a href="/knowledge-base/safety-guidelines" className={styles.link}>Safety Guidelines</a></li>
                    </ul>
                </section>

            </div>

            <Footer />
        </main>
    );
}
