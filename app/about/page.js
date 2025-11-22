import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "About Us | Nirog Yoga",
    description: "Learn about Nirog Yoga, our mission to integrate scientific yoga with traditional wisdom, and our founders Prof. (Dr.) Kunal Katyayan and Parvathi Katyayan.",
};

export default function About() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>About Nirog Yoga</h1>
                    <p className={styles.subtitle}>
                        Bridging the gap between ancient wisdom and modern science to bring you holistic health and well-being.
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Mission</h3>
                            <p className={styles.cardText}>
                                To empower individuals to achieve optimal health and inner harmony through the scientifically validated practices of Yoga. We strive to make the profound benefits of yoga accessible, understandable, and effective for everyone.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Vision</h3>
                            <p className={styles.cardText}>
                                A world where Yoga is recognized not just as a physical exercise, but as a complete system of medicine and lifestyle that nurtures the physical, mental, emotional, and spiritual dimensions of human existence.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Philosophy</h2>
                    <p className={styles.text}>
                        At Nirog Yoga, we believe that true health is more than the absence of disease—it is a state of vibrant vitality and inner peace. Our approach is rooted in the understanding that the body, mind, and soul are interconnected.
                    </p>
                    <p className={styles.text}>
                        We do not view Yoga as merely a series of postures. Instead, we teach it as a disciplined science that influences the nervous system, regulates hormones, and balances emotions. By integrating traditional texts with modern physiological research, we offer a path that is both authentic and evidence-based.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Meet the Founders</h2>
                    <div className={styles.founderGrid}>
                        {/* Dr. Kunal */}
                        <div className={styles.founderCard}>
                            <div className={styles.founderImageContainer}>
                                <Image
                                    src="/dr-kunal.jpg"
                                    alt="Prof. (Dr.) Kunal Katyayan"
                                    fill
                                    className={styles.founderImage}
                                />
                            </div>
                            <div className={styles.founderContent}>
                                <h3 className={styles.founderName}>Prof. (Dr.) Kunal Katyayan</h3>
                                <span className={styles.founderRole}>Professor of Physiology & Yoga Expert</span>
                                <p className={styles.founderBio}>
                                    With an MD in Physiology and over 30 years of yoga practice, Prof. (Dr.) Kunal Katyayan brings a unique medical perspective to yoga therapy. He specializes in the physiological effects of pranayama and meditation.
                                </p>
                                <Link href="/instructors/dr-kunal" className={styles.founderLink}>
                                    View Full Profile →
                                </Link>
                            </div>
                        </div>

                        {/* Parvathi */}
                        <div className={styles.founderCard}>
                            <div className={styles.founderImageContainer}>
                                <Image
                                    src="/parvathi.jpg"
                                    alt="Parvathi Katyayan"
                                    fill
                                    className={styles.founderImage}
                                />
                            </div>
                            <div className={styles.founderContent}>
                                <h3 className={styles.founderName}>Parvathi Katyayan</h3>
                                <span className={styles.founderRole}>Senior Yoga Instructor & Therapist</span>
                                <p className={styles.founderBio}>
                                    A dedicated practitioner and teacher, Parvathi focuses on the therapeutic applications of yoga for women's health, chronic pain, and mental well-being. Her compassionate approach helps students find their own path to healing.
                                </p>
                                <Link href="/instructors/parvathi" className={styles.founderLink}>
                                    View Full Profile →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🔬</span>
                            <h3 className={styles.valueTitle}>Scientific Approach</h3>
                            <p className={styles.cardText}>Our methods are backed by medical knowledge and physiological research.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🎓</span>
                            <h3 className={styles.valueTitle}>Expert Guidance</h3>
                            <p className={styles.cardText}>Learn from qualified professionals with decades of experience.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🌿</span>
                            <h3 className={styles.valueTitle}>Holistic Healing</h3>
                            <p className={styles.cardText}>We address the root cause of issues, not just the symptoms.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🤝</span>
                            <h3 className={styles.valueTitle}>Personalized Care</h3>
                            <p className={styles.cardText}>Small groups and individual attention to ensure safe practice.</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
