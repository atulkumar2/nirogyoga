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

                <div className={styles.cardsContainer}>
                    {/* Fundamentals of Yoga Card */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Fundamentals of Yoga</h2>
                        <p className={styles.cardDescription}>
                            Explore the theoretical foundations, philosophy, and breathing practices of yoga.
                        </p>
                        <ul className={styles.linkList}>
                            <li><a href="/knowledge-base/why-yoga" className={styles.link}>Why Yoga?</a></li>
                            <li><a href="/knowledge-base/introduction" className={styles.link}>Introduction to Yoga</a></li>
                            <li><a href="/knowledge-base/historical-references" className={styles.link}>Historical References in Shastras</a></li>
                            <li><a href="/knowledge-base/patanjali-sutras" className={styles.link}>Patanjali Yoga Sutras Summary</a></li>
                            <li><a href="/knowledge-base/meditation" className={styles.link}>Meditation (Dhyāna)</a></li>
                            <li><a href="/knowledge-base/learning-paths" className={styles.link}>Yoga Learning Paths</a></li>
                            <li><a href="/knowledge-base/yoga-books" className={styles.link}>Essential Yoga Books</a></li>
                            <li><a href="/knowledge-base/yoga-terms" className={styles.link}>Basic Terms & Meanings</a></li>
                            <li><a href="/saatvic-literature" className={styles.link}>Saatvic Literature</a></li>
                        </ul>
                    </section>

                    {/* Asanas & Sequences Card */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Asanas & Sequences</h2>
                        <p className={styles.cardDescription}>
                            Learn classical yoga postures and dynamic sequences for complete practice.
                        </p>
                        <ul className={styles.linkList}>
                            <li><a href="/knowledge-base/safety-guidelines" className={styles.link}>Safety Guidelines for Practice</a></li>
                            <li><a href="/knowledge-base/standing-asanas" className={styles.link}>Standing Asanas</a></li>
                            <li><a href="/knowledge-base/surya-namaskara" className={styles.link}>Surya Namaskara (Sun Salutation)</a></li>
                            <li><a href="/knowledge-base/major-asanas" className={styles.link}>Major Āsanas (Yoga Postures)</a></li>
                            <li><a href="/knowledge-base/pranayama" className={styles.link}>Pranayama (Breath Regulation)</a></li>
                            <li><a href="/knowledge-base/breathing-techniques" className={styles.link}>Breathing Control Techniques</a></li>
                            <li><a href="/knowledge-base/curriculum" className={styles.link}>Practice Curriculum (8 Weeks → 1 Year)</a></li>
                            <li><a href="/knowledge-base/shirshashana" className={styles.link}>Śīrṣāsana (Headstand) - <strong>New!</strong></a></li>
                        </ul>
                    </section>
                </div>

            </div>

            <Footer />
        </main>
    );
}
