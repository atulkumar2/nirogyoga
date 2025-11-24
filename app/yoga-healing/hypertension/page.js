import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './hypertension.module.css';

export const metadata = {
    title: "Hypertension Management | Nirog Yoga",
    description: "Understanding high blood pressure and how yoga therapy helps control blood pressure through stress management and relaxation.",
};

export default function Hypertension() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Hypertension</h1>
                    <p className={styles.subtitle}>
                        Managing High Blood Pressure Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Hypertension?</h2>
                    <p className={styles.text}>
                        Hypertension (high blood pressure) is a common condition where the force of blood against artery walls is consistently too high. It's a major risk factor for heart disease and stroke.
                    </p>

                    <h3 className={styles.subheading}>Common Causes</h3>
                    <ul className={styles.list}>
                        <li>Chronic stress and anxiety</li>
                        <li>High sodium diet</li>
                        <li>Lack of physical activity</li>
                        <li>Obesity and excess weight</li>
                        <li>Smoking and alcohol consumption</li>
                        <li>Family history</li>
                        <li>Age-related changes</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Stress Reduction:</strong> Activates relaxation response, lowering BP</li>
                        <li><strong>Breathing Exercises:</strong> Pranayama directly reduces blood pressure</li>
                        <li><strong>Improved Circulation:</strong> Enhances cardiovascular health</li>
                        <li><strong>Weight Management:</strong> Supports healthy weight loss</li>
                        <li><strong>Autonomic Balance:</strong> Regulates nervous system function</li>
                        <li><strong>Meditation:</strong> Reduces sympathetic nervous system activity</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>उच्च रक्तचाप क्या है?</h2>
                    <p className={styles.text}>
                        उच्च रक्तचाप एक सामान्य स्थिति है जहां धमनी की दीवारों के खिलाफ रक्त का बल लगातार बहुत अधिक होता है। यह हृदय रोग और स्ट्रोक के लिए एक प्रमुख जोखिम कारक है।
                    </p>
                    <p className={styles.highlight}>
                        योग और प्राणायाम रक्तचाप को कम करने के लिए प्रभावी प्राकृतिक तरीके हैं।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Hypertension</h4>
                        <p className={styles.researchJournal}>International Journal of Yoga, 2016</p>
                        <p className={styles.text}>
                            Meta-analysis demonstrating yoga significantly reduces both systolic and diastolic blood pressure.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/27512317/"
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
                        <a href="https://www.heart.org/en/health-topics/high-blood-pressure" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>AHA</h4>
                            <p>American Heart Association</p>
                        </a>
                        <a href="https://www.who.int/news-room/fact-sheets/detail/hypertension" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO</h4>
                            <p>Hypertension Facts</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
