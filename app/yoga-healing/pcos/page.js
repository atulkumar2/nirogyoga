import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './pcos.module.css';

export const metadata = {
    title: "PCOS Management | Nirog Yoga",
    description: "Understanding PCOS and how yoga therapy helps manage hormonal balance, weight, and symptoms through holistic practice.",
};

export default function PCOS() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding PCOS</h1>
                    <p className={styles.subtitle}>
                        Managing Polycystic Ovary Syndrome Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is PCOS?</h2>
                    <p className={styles.text}>
                        Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting women of reproductive age. It's characterized by irregular periods, excess androgen levels, and polycystic ovaries. PCOS is increasingly common in India.
                    </p>

                    <h3 className={styles.subheading}>Common Symptoms</h3>
                    <ul className={styles.list}>
                        <li>Irregular or absent menstrual periods</li>
                        <li>Excess hair growth (hirsutism)</li>
                        <li>Acne and oily skin</li>
                        <li>Weight gain and difficulty losing weight</li>
                        <li>Insulin resistance</li>
                        <li>Fertility challenges</li>
                        <li>Mood changes and depression</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Hormonal Balance:</strong> Regulates endocrine system function</li>
                        <li><strong>Weight Management:</strong> Supports healthy weight loss</li>
                        <li><strong>Insulin Sensitivity:</strong> Improves glucose metabolism</li>
                        <li><strong>Stress Reduction:</strong> Lowers cortisol affecting hormones</li>
                        <li><strong>Reproductive Health:</strong> May improve ovulation and fertility</li>
                        <li><strong>Inflammation Reduction:</strong> Decreases systemic inflammation</li>
                        <li><strong>Mental Health:</strong> Reduces anxiety and depression</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>पीसीओएस क्या है?</h2>
                    <p className={styles.text}>
                        पॉलीसिस्टिक ओवरी सिंड्रोम (पीसीओएस) एक हार्मोनल विकार है जो प्रजनन आयु की महिलाओं को प्रभावित करता है। यह अनियमित पीरियड्स, अतिरिक्त एण्ड्रोजन स्तर और पॉलीसिस्टिक अंडाशय की विशेषता है।
                    </p>
                    <p className={styles.highlight}>
                        योग हार्मोनल संतुलन, वजन प्रबंधन और पीसीओएस के लक्षणों को कम करने में मदद करता है।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for PCOS</h4>
                        <p className={styles.researchJournal}>International Journal of Yoga, 2015</p>
                        <p className={styles.text}>
                            Study showing yoga practice improves menstrual regularity and reduces anxiety in women with PCOS.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/26170592/"
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
                        <a href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO</h4>
                            <p>PCOS Information</p>
                        </a>
                        <a href="https://www.nichd.nih.gov/health/topics/pcos" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NICHD</h4>
                            <p>PCOS Resources</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
