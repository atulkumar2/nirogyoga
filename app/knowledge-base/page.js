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

            <section className={styles.heroSection}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Knowledge Base</h1>
                    <p className={styles.subtitle}>
                        A comprehensive sanctuary for learning, research, and exploring the timeless wisdom of Yoga.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                <div className={styles.cardsContainer}>
                    {/* Fundamentals of Yoga Card */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Fundamentals of Yoga</h2>
                        <p className={styles.cardDescription}>
                            Delve into the theoretical foundations, ancient philosophy, and sacred breathing practices that form the heart of Yoga.
                        </p>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}><a href="/knowledge-base/why-yoga" className={styles.link}>Why Yoga?</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/introduction" className={styles.link}>Introduction to Yoga</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/historical-references" className={styles.link}>Historical References in Shastras</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/patanjali-sutras" className={styles.link}>Patanjali Yoga Sutras Summary</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/meditation" className={styles.link}>Meditation (Dhyāna)</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/learning-paths" className={styles.link}>Yoga Learning Paths</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/yoga-books" className={styles.link}>Essential Yoga Books</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/yoga-terms" className={styles.link}>Basic Terms & Meanings</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/body-control-methods" className={styles.link}>Body Control Methods <span className={styles.newBadge}>New!</span></a></li>
                            <li className={styles.linkItem}><a href="/saatvic-literature" className={styles.link}>Saatvic Literature</a></li>
                        </ul>
                    </section>

                    {/* Asanas & Sequences Card */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Asanas & Sequences</h2>
                        <p className={styles.cardDescription}>
                            Master classical yoga postures and dynamic sequences designed for a holistic and balanced daily practice.
                        </p>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}><a href="/knowledge-base/safety-guidelines" className={styles.link}>Safety Guidelines for Practice</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/standing-asanas" className={styles.link}>Standing Asanas</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/surya-namaskara" className={styles.link}>Surya Namaskara (Sun Salutation)</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/major-asanas" className={styles.link}>Major Āsanas (Yoga Postures)</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/pranayama" className={styles.link}>Pranayama (Breath Regulation)</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/breathing-techniques" className={styles.link}>Breathing Control Techniques</a></li>
                            <li className={styles.linkItem}><a href="/knowledge-base/curriculum" className={styles.link}>Practice Curriculum (8 Weeks)</a></li>
                            <li className={styles.linkItem}>
                                <a href="/knowledge-base/shirshashana" className={styles.link}>
                                    Śīrṣāsana (Head stand) <span className={styles.newBadge}>New!</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Ancient Wisdom Tips Section */}
                <section className={styles.tipsSection}>
                    <h2 className={styles.sectionTitle}>Ancient Wisdom: Quick Body Controls</h2>
                    <div className={styles.tipsGrid}>
                        <div className={styles.tipItem}>
                            <h3>Sleeplessness?</h3>
                            <p>Blink for 60 seconds to signal your brain for sleep.</p>
                        </div>
                        <div className={styles.tipItem}>
                            <h3>Morning Laziness?</h3>
                            <p>Try reverse humming to activate your system instantly.</p>
                        </div>
                        <div className={styles.tipItem}>
                            <h3>Low Energy?</h3>
                            <p>Splash cold water to trigger an immediate energy boost.</p>
                        </div>
                        <div className={styles.tipItem}>
                            <h3>Lack of Focus?</h3>
                            <p>Focus on your breath for just 10 seconds to reset.</p>
                        </div>
                    </div>
                    <div className={styles.viewMoreContainer}>
                        <a href="/knowledge-base/body-control-methods" className={styles.viewMoreLink}>
                            Learn all 6 Ancient Methods →
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
