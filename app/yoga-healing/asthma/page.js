import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './asthma.module.css';

export const metadata = {
    title: "Asthma Management | Nirog Yoga",
    description: "Understanding asthma and how yoga therapy improves respiratory function through breathing exercises and stress management.",
};

export default function Asthma() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Asthma</h1>
                    <p className={styles.subtitle}>
                        Managing Respiratory Health Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Asthma?</h2>
                    <p className={styles.text}>
                        Asthma is a chronic respiratory condition where airways become inflamed and narrowed, making breathing difficult. It affects millions of Indians, with air pollution being a major trigger.
                    </p>

                    <h3 className={styles.subheading}>Common Triggers</h3>
                    <ul className={styles.list}>
                        <li>Air pollution and poor air quality</li>
                        <li>Allergens (pollen, dust mites, pet dander)</li>
                        <li>Respiratory infections</li>
                        <li>Exercise and physical exertion</li>
                        <li>Stress and strong emotions</li>
                        <li>Weather changes and cold air</li>
                        <li>Smoke and strong odors</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Pranayama:</strong> Breathing exercises strengthen respiratory muscles</li>
                        <li><strong>Lung Capacity:</strong> Improves overall lung function and capacity</li>
                        <li><strong>Stress Management:</strong> Reduces stress-induced asthma attacks</li>
                        <li><strong>Breathing Control:</strong> Teaches controlled breathing techniques</li>
                        <li><strong>Relaxation:</strong> Prevents airway constriction from anxiety</li>
                        <li><strong>Immune Support:</strong> May reduce inflammation and boost immunity</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>अस्थमा क्या है?</h2>
                    <p className={styles.text}>
                        अस्थमा एक पुरानी श्वसन स्थिति है जहां वायुमार्ग सूजन और संकीर्ण हो जाते हैं, जिससे सांस लेना मुश्किल हो जाता है।
                    </p>
                    <p className={styles.highlight}>
                        प्राणायाम और योग श्वसन स्वास्थ्य में सुधार और अस्थमा के लक्षणों को कम करने में मदद करते हैं।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Asthma</h4>
                        <p className={styles.researchJournal}>Cochrane Database, 2016</p>
                        <p className={styles.text}>
                            Systematic review showing yoga may improve quality of life and symptoms in people with asthma.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/27115477/"
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
                        <a href="https://www.who.int/news-room/fact-sheets/detail/asthma" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO</h4>
                            <p>Asthma Information</p>
                        </a>
                        <a href="https://www.nhlbi.nih.gov/health/asthma" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NHLBI</h4>
                            <p>Asthma Guide</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
