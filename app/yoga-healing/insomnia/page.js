import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './insomnia.module.css';

export const metadata = {
    title: "Insomnia & Sleep Disorders | Nirog Yoga",
    description: "Understanding sleep disorders and how yoga therapy improves sleep quality through relaxation and stress management.",
};

export default function Insomnia() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Insomnia & Sleep Disorders</h1>
                    <p className={styles.subtitle}>
                        Improving Sleep Quality Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Insomnia?</h2>
                    <p className={styles.text}>
                        Insomnia is a sleep disorder characterized by difficulty falling asleep, staying asleep, or waking too early. It affects energy levels, mood, health, and quality of life.
                    </p>

                    <h3 className={styles.subheading}>Common Causes</h3>
                    <ul className={styles.list}>
                        <li>Stress and anxiety</li>
                        <li>Poor sleep habits and irregular schedules</li>
                        <li>Screen time before bed</li>
                        <li>Caffeine and stimulants</li>
                        <li>Medical conditions and medications</li>
                        <li>Environmental factors (noise, light, temperature)</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Relaxation Response:</strong> Activates parasympathetic nervous system</li>
                        <li><strong>Stress Reduction:</strong> Lowers cortisol levels</li>
                        <li><strong>Yoga Nidra:</strong> Deep relaxation technique for better sleep</li>
                        <li><strong>Breathing Exercises:</strong> Calms the mind and prepares for sleep</li>
                        <li><strong>Physical Fatigue:</strong> Gentle exercise promotes natural tiredness</li>
                        <li><strong>Mindfulness:</strong> Reduces racing thoughts at bedtime</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>अनिद्रा क्या है?</h2>
                    <p className={styles.text}>
                        अनिद्रा एक नींद विकार है जिसमें सोने में कठिनाई, नींद में बने रहने में समस्या, या बहुत जल्दी जाग जाना शामिल है।
                    </p>
                    <p className={styles.highlight}>
                        योग निद्रा और प्राणायाम नींद की गुणवत्ता में सुधार के लिए प्रभावी प्राकृतिक उपचार हैं।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Insomnia</h4>
                        <p className={styles.researchJournal}>Journal of Clinical Sleep Medicine, 2020</p>
                        <p className={styles.text}>
                            Meta-analysis showing yoga significantly improves sleep quality in people with insomnia.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/31957658/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pubmedLink}
                        >
                            View on PubMed →
                        </a>
                    </div>
                </section>

                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.sleepfoundation.org/insomnia" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Sleep Foundation</h4>
                            <p>Insomnia Information</p>
                        </a>
                        <a href="https://www.nhlbi.nih.gov/health/insomnia" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NHLBI</h4>
                            <p>Sleep Disorders Guide</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
