import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './diabetes.module.css';

export const metadata = {
    title: "Type 2 Diabetes Management | Nirog Yoga",
    description: "Understanding Type 2 diabetes and how yoga therapy helps manage blood sugar through stress reduction and lifestyle modification.",
};

export default function Diabetes() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Type 2 Diabetes</h1>
                    <p className={styles.subtitle}>
                        Managing Diabetes Through Yoga and Lifestyle
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Type 2 Diabetes?</h2>
                    <p className={styles.text}>
                        Type 2 diabetes is a chronic condition affecting how your body processes blood sugar (glucose). India has one of the highest diabetes populations globally, with lifestyle factors playing a major role.
                    </p>

                    <h3 className={styles.subheading}>Common Risk Factors</h3>
                    <ul className={styles.list}>
                        <li>Sedentary lifestyle and lack of physical activity</li>
                        <li>Obesity and excess abdominal fat</li>
                        <li>Family history and genetic predisposition</li>
                        <li>Poor diet high in refined carbohydrates</li>
                        <li>Chronic stress and elevated cortisol</li>
                        <li>Age (risk increases after 45)</li>
                        <li>Prediabetes and insulin resistance</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Blood Sugar Control:</strong> Regular practice improves insulin sensitivity</li>
                        <li><strong>Weight Management:</strong> Supports healthy weight loss and maintenance</li>
                        <li><strong>Stress Reduction:</strong> Lowers cortisol, which affects blood sugar</li>
                        <li><strong>Improved Circulation:</strong> Enhances blood flow to organs and tissues</li>
                        <li><strong>Pancreatic Stimulation:</strong> Certain poses may support pancreatic function</li>
                        <li><strong>Lifestyle Modification:</strong> Promotes mindful eating and healthy habits</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>टाइप 2 मधुमेह क्या है?</h2>
                    <p className={styles.text}>
                        टाइप 2 मधुमेह एक पुरानी स्थिति है जो आपके शरीर के रक्त शर्करा को संसाधित करने के तरीके को प्रभावित करती है। भारत में दुनिया की सबसे अधिक मधुमेह आबादी है।
                    </p>
                    <p className={styles.highlight}>
                        योग रक्त शर्करा नियंत्रण, वजन प्रबंधन और तनाव में कमी के माध्यम से मधुमेह प्रबंधन में मदद करता है।
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence</h2>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Yoga for Type 2 Diabetes</h4>
                        <p className={styles.researchJournal}>Journal of Diabetes Research, 2016</p>
                        <p className={styles.text}>
                            Systematic review showing yoga significantly reduces blood glucose levels and improves metabolic parameters in Type 2 diabetes.
                        </p>
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/27034957/"
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
                        <a href="https://www.who.int/health-topics/diabetes" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO</h4>
                            <p>Diabetes Information</p>
                        </a>
                        <a href="https://www.diabetes.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>ADA</h4>
                            <p>American Diabetes Association</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
