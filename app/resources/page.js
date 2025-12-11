import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Other YouTube Channels</h2>
                    <div className={styles.grid}>
                        <a href="https://www.youtube.com/@theyogainstituteofficial" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📺</span>
                            <span className={styles.cardTitle}>The Yoga Institute</span>
                            <span className={styles.cardDesc}>The oldest organized yoga center in the world, offering authentic teachings.</span>
                        </a>
                        <a href="https://www.youtube.com/user/ishafoundation" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📺</span>
                            <span className={styles.cardTitle}>Isha Foundation</span>
                            <span className={styles.cardDesc}>Yoga, meditation, and wisdom from Sadhguru.</span>
                        </a>
                        <a href="https://www.youtube.com/c/BharatYoga" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📺</span>
                            <span className={styles.cardTitle}>Bharat Yoga</span>
                            <span className={styles.cardDesc}>Authentic traditional yoga by Acharya Pratishtha.</span>
                        </a>
                        <a href="https://www.youtube.com/c/FitTuber" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📺</span>
                            <span className={styles.cardTitle}>Fit Tuber</span>
                            <span className={styles.cardDesc}>Holistic health, yoga, and lifestyle tips for Indian audiences.</span>
                        </a>
                        <a href="https://www.youtube.com/c/SatvicMovement" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📺</span>
                            <span className={styles.cardTitle}>Satvic Movement</span>
                            <span className={styles.cardDesc}>Yoga lifestyle, food, and natural healing wisdom.</span>
                        </a>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Important Yoga Literature</h2>
                    <div className={styles.grid}>
                        <a href="https://www.amazon.in/Yoga-Sutras-Patanjali-Swami-Satchidananda/dp/1938477073" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Patanjali Yoga Sutras</span>
                            <span className={styles.cardDesc}>The foundational text of Raja Yoga, outlining the eight limbs of yoga.</span>
                        </a>
                        <a href="https://www.amazon.in/Hatha-Yoga-Pradipika-Swami-Muktibodhananda/dp/8185787387" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Hatha Yoga Pradipika</span>
                            <span className={styles.cardDesc}>A classic 15th-century Sanskrit manual on Hatha Yoga.</span>
                        </a>
                        <a href="https://www.amazon.in/s?k=Shrimad+Bhagwad+Gita+Gita+Press+English" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Bhagavad Gita</span>
                            <span className={styles.cardDesc}>A 700-verse Hindu scripture that is part of the epic Mahabharata.</span>
                        </a>
                        <a href="https://www.amazon.in/Light-Yoga-B-K-S-Iyengar/dp/8172235011" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Light on Yoga</span>
                            <span className={styles.cardDesc}>By B.K.S. Iyengar. The definitive guide to yoga practice.</span>
                        </a>
                        <a href="https://www.amazon.in/s?k=Asana+Pranayama+Mudra+Bandha+Swami+Satyananda+Saraswati" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Asana Pranayama Mudra Bandha</span>
                            <span className={styles.cardDesc}>By Swami Satyananda Saraswati. A comprehensive manual for yoga practices.</span>
                        </a>
                        <a href="/saatvic-literature" className={styles.card}>
                            <span className={styles.cardIcon}>📚</span>
                            <span className={styles.cardTitle}>Saatvic Literature</span>
                            <span className={styles.cardDesc}>Explore spiritual texts and Sattvic resources for holistic well-being.</span>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
