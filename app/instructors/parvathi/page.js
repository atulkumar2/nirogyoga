import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './parvathi.module.css';
import Image from 'next/image';

export const metadata = {
    title: "Parvathi Katyayan | Nirog Yoga",
    description: "Parvathi Katyayan, Yoga Instructor & Therapist, specializing in diabetes reversal and holistic healing.",
};

export default function Parvathi() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.profileHeader}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/parvathi.jpg"
                            alt="Parvathi Katyayan"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <div className={styles.headerContent}>
                        <h1 className={styles.name}>Parvathi Katyayan</h1>
                        <h2 className={styles.title}>Yoga Instructor & Therapist</h2>
                        <p className={styles.intro}>
                            A distinguished academic, devoted practitioner, and inspiring teacher. Parvathi combines her deep spiritual roots with scientific understanding to guide others on their path to wellness.
                        </p>
                    </div>
                </div>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Personal Transformation</h3>
                    <p className={styles.text}>
                        Parvathi Katyayan's resilience shines through her remarkable personal health journey. Faced with a diabetes diagnosis (blood sugar levels of 400 mg/dl) and potential surgery, she turned to yoga, meditation, and disciplined lifestyle changes.
                    </p>
                    <p className={styles.text}>
                        <strong>The Result:</strong> Within a month, she normalized her blood sugar levels without medication—a feat of extraordinary determination that now inspires her therapeutic approach.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Yoga & Service</h3>
                    <p className={styles.text}>
                        Parvathi Katyayan is deeply committed to sharing the benefits of yoga with others. Her service includes:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Social Service:</strong> Yoga instructor for the Brahma Kumaris at Sansthana in Urva, Mangalore.</li>
                        <li><strong>Therapy:</strong> Specializes in diabetes, hypertension, and obesity management.</li>
                        <li><strong>Future Vision:</strong> Establishing a professional Yoga Therapy Center on a picturesque lakefront property in Kulai, Mangalore, alongside Dr. Kunal.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Education & Qualifications</h3>
                    <ul className={styles.list}>
                        <li><strong>PG Diploma in Yoga Therapy:</strong> Mangalore University (3rd Rank with Distinction)</li>
                        <li><strong>Legal Education:</strong> BL, LLB, and LLM from SDM Law College, Mangalore</li>
                        <li><strong>Early Education:</strong> St. Agnes College (PUC) and St. Mary’s Convent</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Spiritual & Holistic Life</h3>
                    <p className={styles.text}>
                        Nurtured by a spiritually rich upbringing, Parvathi Katyayan was initiated into profound practices including Sadhanas, Rig Vedic Suktam chanting, and Shaodasi Kriya under revered gurus.
                    </p>
                    <p className={styles.text}>
                        Beyond yoga, she is a passionate cook and home baker, known for preparing over a hundred offerings (bhoga) annually for Lord Jagannath during Sri Krishna Janmashtami. She creates healthy, delectable dishes for her family and health-conscious clients.
                    </p>
                </section>
            </div>

            <Footer />
        </main>
    );
}
