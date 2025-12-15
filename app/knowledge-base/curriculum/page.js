import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './curriculum.module.css';

export const metadata = {
    title: "Yoga Practice Curriculum | Nirog Yoga",
    description: "Comprehensive 8-week to 1-year yoga curriculum covering asana, pranayama, and meditation practices.",
};

export default function YogaCurriculum() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga Practice Curriculum</h1>
                    <p className={styles.subtitle}>
                        🧘‍♂️ ASANA–PRANAYAMA–MEDITATION CURRICULUM (8 Weeks → 1 Year)
                    </p>
                    <p className={styles.description}>
                        Perfect for beginner to serious practitioner. A structured, progressive path to deepen your yoga practice.
                    </p>
                </header>

                <div className={styles.curriculum}>
                    <div className={styles.phase}>
                        <h3 className={styles.phaseTitle}>🟢 PHASE 1 — FOUNDATION (Weeks 1–8)</h3>
                        <p className={styles.phaseDesc}>
                            <strong>Focus:</strong> Build a strong foundation with basic postures, breath awareness, and meditation basics.
                        </p>

                        <div className={styles.practiceArea}>
                            <h4>Asana Practice</h4>
                            <p className={styles.areaDesc}>Learn fundamental standing and restorative postures to build strength, balance, and awareness.</p>
                            <ul>
                                <li><strong>Tadasana</strong> - Mountain pose (foundation of all standing poses)</li>
                                <li><strong>Vrikshasana</strong> - Tree pose (balance and focus)</li>
                                <li><strong>Trikonasana</strong> - Triangle pose (strength and flexibility)</li>
                                <li><strong>Bhujangasana</strong> - Cobra pose (back strength and spinal awareness)</li>
                                <li><strong>Setu Bandhasana</strong> - Bridge pose (chest opening and hamstring stretch)</li>
                                <li><strong>Balasana</strong> - Child's pose (rest and restoration)</li>
                                <li><strong>Marjari–Bitilasana</strong> - Cat-Cow flow (spinal mobility and coordination)</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 3 days/week × 20–30 minutes</p>
                            <p className={styles.tips}><strong>Tips:</strong> Focus on alignment, breath coordination, and building awareness of body sensations.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Pranayama Practice</h4>
                            <p className={styles.areaDesc}>Develop basic breath awareness and control to calm the mind and prepare for deeper practices.</p>
                            <ul>
                                <li><strong>Basic breath awareness</strong> - Observe natural breathing patterns</li>
                                <li><strong>Equal breathing (4–4)</strong> - Equal inhale/exhale duration</li>
                                <li><strong>Ujjayi (light)</strong> - Gentle ocean breath with slight throat constriction</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 5–7 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> Practice in a comfortable seated position. Keep it gentle and natural.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Meditation Practice</h4>
                            <p className={styles.areaDesc}>Establish a daily meditation routine to develop mental clarity and inner peace.</p>
                            <ul>
                                <li><strong>Breath watching</strong> - Focus attention on the breath</li>
                                <li><strong>5–10 minutes, no goals</strong> - Simply observe without judgment</li>
                                <li><strong>Use mantra if mind wanders</strong> - Gentle redirection when distracted</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> Daily practice</p>
                            <p className={styles.tips}><strong>Tips:</strong> Sit comfortably with spine straight. Be patient with yourself as the mind settles.</p>
                        </div>
                    </div>
                    {/* Remaining phases... */}
                </div>

                <div className={styles.navigation}>
                    <Link href="/knowledge-base" className={styles.backLink}>
                        ← Back to Knowledge base
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
