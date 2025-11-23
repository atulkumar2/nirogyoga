import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './resources.module.css';

export const metadata = {
    title: "Resources | Nirog Yoga",
    description: "External resources and organizations related to Yoga, Health, and Wellness.",
};

export default function Resources() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga Resources</h1>
                    <p className={styles.subtitle}>
                        Explore these reputable organizations and institutions to deepen your understanding of Yoga and its global impact.
                    </p>
                </header>

                <section className={styles.section}>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="https://yoga.ayush.gov.in/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Ministry of AYUSH, Govt. of India</span>
                                <span className={styles.linkDesc}>The official government body for Ayurveda, Yoga, Unani, Siddha, and Homeopathy.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.un.org/en/observances/yoga-day" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>International Day of Yoga (UN)</span>
                                <span className={styles.linkDesc}>United Nations' official page dedicated to the International Day of Yoga.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://svyasa.edu.in/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>S-VYASA Yoga University</span>
                                <span className={styles.linkDesc}>Swami Vivekananda Yoga Anusandhana Samsthana - A premier yoga research university.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bksiyengar.com/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Iyengar Yoga (BKS Iyengar)</span>
                                <span className={styles.linkDesc}>Official website of B.K.S. Iyengar, focusing on precision and alignment in yoga.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.biharyoga.net/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Bihar School of Yoga</span>
                                <span className={styles.linkDesc}>A modern school of yoga founded by Swami Satyananda Saraswati, integrating traditional wisdom.</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer />
        </main>
    );
}
