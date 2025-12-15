import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './meditation.module.css';

export const metadata = {
    title: "Meditation (Dhyāna) | Nirog Yoga",
    description: "Cultivating steady awareness and inner clarity through structured meditation practice - exploring foundations, scientific evidence, and practical training methods.",
};

export default function Meditation() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Meditation (Dhyāna)</h1>
                    <p className={styles.subtitle}>
                        Cultivating Steady Awareness and Inner Clarity
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Meditation is a central pillar of the yogic path and one of the most studied mind–body practices in modern science. In the yogic tradition, <em>dhyāna</em> is a state of sustained, effortless awareness in which the mind becomes steady, clear, and quiet, allowing deeper insights into one's own nature.
                    </p>
                    <p className={styles.text}>
                        At Nirog Yoga University, meditation is taught not as a vague relaxation technique, but as a structured discipline rooted in classical texts and supported by contemporary research in psychology, neuroscience, and medicine.
                    </p>
                </section>

                <section className={styles.section} style={{ background: '#f0f9ff', borderLeft: '5px solid var(--primary-color)' }}>
                    <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-color)' }}>How to Start Meditation (Beginner Guide)</h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                        A simple, safe, and effective way to begin
                    </p>
                    <p className={styles.text}>
                        Meditation doesn't need special skills, equipment, or prior experience. What matters is consistency and a gentle approach. Here's the easiest roadmap for students and newcomers:
                    </p>

                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <Image
                            src="/meditation-guide.png"
                            alt="Meditation Guide - Postures and Techniques"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            width={800}
                            height={450}
                        />
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>1. Start with Just 5 Minutes</h3>
                        <p className={styles.text}>
                            Don't aim for 20–30 minutes in the beginning. <strong>5 minutes is enough to build the habit</strong>. You can slowly increase it to 10, 15, or 20 minutes as it becomes natural.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>2. Choose a Comfortable Position</h3>
                        <p className={styles.text}>You can meditate:</p>
                        <ul className={styles.list}>
                            <li>sitting on a chair</li>
                            <li>on a cushion</li>
                            <li>on a yoga mat</li>
                            <li>or even on your bed (but sitting upright)</li>
                        </ul>
                        <p className={styles.text}>
                            <strong>The spine should be comfortably straight, not stiff.</strong> If sitting cross-legged is uncomfortable, avoid it.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>3. Focus on the Breath (Easiest Method)</h3>
                        <p className={styles.text}>Gently bring attention to:</p>
                        <ul className={styles.list}>
                            <li>the cool air entering your nose</li>
                            <li>the warm air leaving</li>
                            <li>the rise/fall of your chest or belly</li>
                        </ul>
                        <p className={styles.text}>
                            Do not try to "control" the breath. Just <strong>observe</strong> it.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>4. Expect the Mind to Wander — It's Normal</h3>
                        <p className={styles.text}>You will think about work, family, groceries, random thoughts. This is natural.</p>
                        <p className={styles.text}>
                            When you notice wandering, <strong>gently bring your attention back to the breath</strong>. This "returning" is the actual meditation skill.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>5. Keep the Face, Jaw, and Shoulders Relaxed</h3>
                        <p className={styles.text}>
                            Tension often hides here. Check in every few minutes and soften these areas.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>6. Use a Simple Anchor</h3>
                        <p className={styles.text}>Beginners may use:</p>
                        <ul className={styles.list}>
                            <li><strong>Breath</strong> (most common)</li>
                            <li><strong>A mantra</strong> like "So–Hum" or simply "Om" silently</li>
                            <li><strong>A point between the eyebrows</strong></li>
                            <li><strong>A candle flame</strong> (for trataka meditation)</li>
                        </ul>
                        <p className={styles.text}>Choose what feels natural.</p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>7. Set a Soft Timer</h3>
                        <p className={styles.text}>
                            Use a timer with a gentle bell. This frees your mind from constantly checking the time.
                        </p>
                    </div>
                </section>

                <div className={styles.references}>
                    <h3 className={styles.outcomeTitle}>References & Further Reading</h3>
                    <ul className={styles.referencesList}>
                        <li>Research on mindfulness and attention (selected reviews)</li>
                        <li>Traditional texts discussing samādhi and dhyāna</li>
                        <li>Clinical papers on meditation and health outcomes</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    );
}
