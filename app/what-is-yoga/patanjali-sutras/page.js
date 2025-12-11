import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './patanjali-sutras.module.css';

export const metadata = {
    title: "Patanjali Yoga Sutras | Nirog Yoga",
    description: "One-page summary of Patanjali's Yoga Sutras - the foundational text of yoga philosophy and practice.",
};

export default function PatanjaliSutras() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Patanjali Yoga Sutras</h1>
                    <p className={styles.subtitle}>
                        📘 ONE-PAGE SUMMARY
                    </p>
                    <p className={styles.description}>
                        Patanjali explains how the mind works and how to reach freedom through disciplined practice. This ancient text (circa 400 CE) remains the most authoritative source on yoga philosophy and psychology.
                    </p>
                </header>

                <div className={styles.sutraCard}>
                    <h3 className={styles.cardTitle}>The Essence of Patanjali Yoga Sutras</h3>
                    <p className={styles.cardIntro}>Patanjali explains how the mind works and how to reach freedom through disciplined practice.</p>

                    <div className={styles.sutraSection}>
                        <h4>1. Definition of Yoga</h4>
                        <blockquote className={styles.sanskrit}>
                            <strong>Yogaḥ citta-vṛtti-nirodhaḥ</strong><br />
                            <em>Yoga = Stilling the fluctuations of the mind.</em>
                        </blockquote>
                        <p className={styles.explanation}>Yoga is not about physical postures or breathing techniques primarily — it's about controlling the restless mind.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>2. The Problem</h4>
                        <p>Mind is scattered by five types of mental fluctuations:</p>
                        <ul className={styles.problemList}>
                            <li><strong>Restlessness</strong> (uddharika) - inability to stay focused</li>
                            <li><strong>Doubts</strong> (vicikitsa) - uncertainty and confusion</li>
                            <li><strong>Laziness</strong> (styana) - mental and physical inertia</li>
                            <li><strong>Craving</strong> (raga) - attachment to pleasure</li>
                            <li><strong>Fear</strong> (dvesha) - aversion to pain</li>
                            <li><strong>Wrong perception</strong> (viparyaya) - misunderstanding reality</li>
                        </ul>
                        <p className={styles.note}>These create suffering (duhkha) and prevent us from seeing things as they really are.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3. The Eight Limbs (Ashtanga Yoga)</h4>
                        <p>Patanjali's complete system for achieving yoga:</p>
                        <ol className={styles.limbsList}>
                            <li><strong>Yama</strong> – Ethics (non-violence, truth, non-stealing, moderation, non-greed)</li>
                            <li><strong>Niyama</strong> – Personal discipline (purity, contentment, austerity, self-study, surrender)</li>
                            <li><strong>Asana</strong> – Steady posture (comfortable seat for meditation)</li>
                            <li><strong>Pranayama</strong> – Regulating breath (control of life force)</li>
                            <li><strong>Pratyahara</strong> – Withdrawal from sense distractions</li>
                            <li><strong>Dharana</strong> – Concentration (one-pointed focus)</li>
                            <li><strong>Dhyana</strong> – Meditation flow (continuous awareness)</li>
                            <li><strong>Samadhi</strong> – Oneness / absorption (union with the divine)</li>
                        </ol>
                        <p className={styles.note}>The first five limbs purify and prepare; the last three constitute actual meditation practice.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>4. How the Mind Transforms</h4>
                        <p>Through two essential practices:</p>
                        <ul className={styles.transformList}>
                            <li><strong>Abhyasa</strong> (practice) - consistent, dedicated effort</li>
                            <li><strong>Vairagya</strong> (detachment) - letting go of attachment to results</li>
                        </ul>
                        <p className={styles.explanation}>Both together purify consciousness and reveal our true nature. Practice without detachment leads to ego; detachment without practice leads to laziness.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>5. Obstacles & Solutions</h4>
                        <div className={styles.obstaclesGrid}>
                            <div className={styles.obstacle}>
                                <h5>Obstacles:</h5>
                                <ul>
                                    <li>Disease (vyadhi)</li>
                                    <li>Doubt (vicikitsa)</li>
                                    <li>Procrastination (styana)</li>
                                    <li>Instability (auddhatya)</li>
                                </ul>
                            </div>
                            <div className={styles.solution}>
                                <h5>Solutions:</h5>
                                <ul>
                                    <li>Breath control (pranayama)</li>
                                    <li>Cultivate opposite thoughts</li>
                                    <li>Devotion (bhakti)</li>
                                    <li>Steady lifestyle (consistent practice)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>6. Goal of Patanjali's Yoga</h4>
                        <p>The ultimate aim is liberation (kaivalya):</p>
                        <ul className={styles.goalList}>
                            <li><strong>Freedom from suffering</strong> - cessation of mental fluctuations</li>
                            <li><strong>Realization of true Self</strong> - seeing beyond ego and mind</li>
                            <li><strong>Stability and clarity</strong> - unwavering peace of mind</li>
                            <li><strong>Bliss and liberation</strong> - union with pure consciousness</li>
                        </ul>
                        <p className={styles.note}>This is not about supernatural powers or physical perfection — it's about fundamental freedom from mental suffering.</p>
                    </div>
                </div>

                <div className={styles.keyInsights}>
                    <h3 className={styles.insightsTitle}>🔑 Key Insights from Patanjali</h3>
                    <div className={styles.insightsGrid}>
                        <div className={styles.insight}>
                            <h4>Mind is the Problem & Solution</h4>
                            <p>Yoga begins and ends with understanding the mind. Physical practices are tools to prepare for mental purification.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>Practice + Detachment = Freedom</h4>
                            <p>Dedicated practice without attachment to results leads to genuine transformation.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>All Suffering is Optional</h4>
                            <p>Mental fluctuations create suffering. Controlling them brings peace that cannot be disturbed.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>Yoga is a Science</h4>
                            <p>Patanjali presents yoga as a systematic methodology, not mysticism or religion.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.resources}>
                    <h3 className={styles.resourcesTitle}>📚 Study Resources</h3>
                    <div className={styles.resourcesGrid}>
                        <div className={styles.resourceCard}>
                            <h4>Essential Yoga Books</h4>
                            <p>Complete guide to yoga texts including detailed Sutras commentaries.</p>
                            <Link href="/what-is-yoga/yoga-books" className={styles.resourceLink}>
                                Browse Books →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Learning Paths</h4>
                            <p>Structured reading roadmap from beginner to expert level.</p>
                            <Link href="/what-is-yoga/learning-paths" className={styles.resourceLink}>
                                View Paths →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Practice Curriculum</h4>
                            <p>8-week to 1-year structured practice plan.</p>
                            <Link href="/what-is-yoga/curriculum" className={styles.resourceLink}>
                                View Curriculum →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Saatvic Literature</h4>
                            <p>AI tools and curated spiritual texts for deeper study.</p>
                            <Link href="/saatvic-literature" className={styles.resourceLink}>
                                Explore Literature →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link href="/what-is-yoga" className={styles.backLink}>
                        ← Back to What is Yoga
                    </Link>
                    <Link href="/what-is-yoga/yoga-books" className={styles.relatedLink}>
                        Browse Essential Books →
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
