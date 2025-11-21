import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './yoga-university.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Yoga University | Nirog Yoga",
    description: "Explore the depths of Yoga wisdom, scientific research, and educational resources.",
};

export default function YogaUniversity() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga University</h1>
                    <p className={styles.subtitle}>
                        A hub for learning, research, and exploring the profound science of Yoga.
                    </p>
                </header>

                <div className={styles.grid}>
                    {/* Core Concepts */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Fundamentals of Yoga</h2>
                        <ul className={styles.linkList}>
                            <li><Link href="/yoga-university/why-yoga" className={styles.link}>Why Yoga?</Link></li>
                            <li><Link href="#" className={styles.link}>Introduction to Yoga</Link></li>
                            <li><Link href="#" className={styles.link}>Pranayama (Breath Regulation)</Link></li>
                            <li><Link href="#" className={styles.link}>Breathing Control Techniques</Link></li>
                            <li><Link href="#" className={styles.link}>Historical References in Shastras</Link></li>
                        </ul>
                    </section>

                    {/* Disease Information */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Yoga Therapy for Health</h2>
                        <p className={styles.sectionDesc}>Scientific insights into managing health conditions through Yoga.</p>
                        <ul className={styles.linkList}>
                            <li><Link href="/disease/anxiety-depression" className={styles.link}>Anxiety & Depression</Link></li>
                            <li><Link href="/disease/chronic-pain" className={styles.link}>Chronic Pain Management</Link></li>
                            <li><Link href="/disease/insomnia" className={styles.link}>Insomnia & Sleep Disorders</Link></li>
                            <li><Link href="/disease/diabetes" className={styles.link}>Diabetes Care</Link></li>
                            <li><Link href="/disease/hypertension" className={styles.link}>Hypertension (High BP)</Link></li>
                            <li><Link href="/disease/asthma" className={styles.link}>Asthma & Respiratory Health</Link></li>
                            <li><Link href="/disease/arthritis" className={styles.link}>Arthritis & Joint Care</Link></li>
                            <li><Link href="/disease/pcos" className={styles.link}>PCOS & Women's Health</Link></li>
                            <li><Link href="/disease/ptsd" className={styles.link}>PTSD & Trauma Recovery</Link></li>
                        </ul>
                    </section>

                    {/* External Resources */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Global Resources</h2>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="https://yoga.ayush.gov.in/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Ministry of AYUSH, Govt. of India
                                </a>
                            </li>
                            <li>
                                <a href="https://www.un.org/en/observances/yoga-day" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    International Day of Yoga (UN)
                                </a>
                            </li>
                            <li>
                                <a href="https://svyasa.edu.in/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    S-VYASA Yoga University
                                </a>
                            </li>
                            <li>
                                <a href="https://bksiyengar.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Iyengar Yoga (BKS Iyengar)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.biharyoga.net/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Bihar School of Yoga
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
