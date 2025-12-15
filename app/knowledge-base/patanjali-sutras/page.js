import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './patanjali-sutras.module.css';

export const metadata = {
    title: "Patanjali Yoga Sutras | Nirog Yoga",
    description: "One-page summary of Patanjali's Yoga Sutras - the foundational text of yoga philosophy and practice.",
};

export default function PatanjaliSutras() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Patanjali Yoga Sutras</h1>
                    <p className={styles.subtitle}>
                        📘 ONE-PAGE SUMMARY
                    </p>
                    <p className={styles.description}>
                        Patanjali explains how the mind works and how to reach freedom through disciplined practice. This ancient text (circa 400 CE) remains the most authoritative source on yoga philosophy and psychology.
                    </p>
                </header>

                <div style={{ textAlign: 'center', margin: '3rem 0', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)', overflowX: 'auto' }}>
                    <svg width="1200" height="780" viewBox="0 0 1200 780" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto', minWidth: '800px' }}>
                        <defs>
                            <style>
                                {`.title { font: bold 30px sans-serif; }
                                .subtitle { font: 18px sans-serif; }
                                .section-title { font: bold 22px sans-serif; }
                                .text { font: 16px sans-serif; }
                                .small { font: 14px sans-serif; }
                                .box { fill: #f5f5f5; stroke: #ccc; stroke-width: 1.2; rx: 10; }
                                .guna-box { fill: #fafafa; stroke: #ccc; stroke-width: 1.2; rx: 10; }
                                .sushumna { stroke: #444; stroke-width: 4; }
                                .chakra { stroke: #222; stroke-width: 1.4; }
                                .ida { stroke: #3b82f6; stroke-width: 2.2; fill: none; }
                                .pingala { stroke: #f97316; stroke-width: 2.2; fill: none; }`}
                            </style>
                        </defs>

                        {/* Main Title */}
                        <text x="380" y="40" className="title">Yoga Map</text>
                        <text x="300" y="70" className="subtitle">
                            Koshas • Gunas • Nadis • Chakras • Eight Limbs of Yoga
                        </text>

                        {/* LEFT: KOSHAS */}
                        <text x="80" y="110" className="section-title">Five Koshas</text>

                        {/* Kosha boxes (top to bottom, subtle to gross reversed or vice versa) */}
                        <rect x="60" y="140" width="260" height="70" className="box" />
                        <text x="80" y="175" className="text">Anandamaya</text>
                        <text x="80" y="198" className="small">Bliss sheath</text>

                        <rect x="60" y="220" width="260" height="70" className="box" />
                        <text x="80" y="255" className="text">Vijnanamaya</text>
                        <text x="80" y="278" className="small">Wisdom / intellect sheath</text>

                        <rect x="60" y="300" width="260" height="70" className="box" />
                        <text x="80" y="335" className="text">Manomaya</text>
                        <text x="80" y="358" className="small">Mind / emotion sheath</text>

                        <rect x="60" y="380" width="260" height="70" className="box" />
                        <text x="80" y="415" className="text">Pranamaya</text>
                        <text x="80" y="438" className="small">Energy / prana sheath</text>

                        <rect x="60" y="460" width="260" height="70" className="box" />
                        <text x="80" y="495" className="text">Annamaya</text>
                        <text x="80" y="518" className="small">Physical / food sheath</text>

                        {/* CENTER: NADIS + CHAKRAS */}
                        <text x="520" y="110" className="section-title">Chakras & Nadis</text>

                        {/* Sushumna */}
                        <line x1="600" y1="140" x2="600" y2="620" className="sushumna" />
                        <text x="560" y="380" className="medium">Sushumna</text>

                        {/* Ida (left spiral) */}
                        <path d="M550 150 C510 210, 510 280, 550 340
                               C590 400, 590 470, 550 530
                               C510 590, 510 640, 550 670" className="ida" />
                        <text x="500" y="330" className="medium">Ida</text>

                        {/* Pingala (right spiral) */}
                        <path d="M650 150 C690 210, 690 280, 650 340
                               C610 400, 610 470, 650 530
                               C690 590, 690 640, 650 670" className="pingala" />
                        <text x="675" y="330" className="medium">Pingala</text>

                        {/* Chakras on Sushumna */}
                        {/* Sahasrara */}
                        <circle cx="600" cy="160" r="18" className="chakra" fill="#a078d6" />
                        <text x="625" y="166" className="small">Sahasrara</text>

                        {/* Ajna */}
                        <circle cx="600" cy="220" r="16" className="chakra" fill="#6c5ce7" />
                        <text x="625" y="226" className="small">Ajna</text>

                        {/* Vishuddha */}
                        <circle cx="600" cy="280" r="16" className="chakra" fill="#0984e3" />
                        <text x="625" y="286" className="small">Vishuddha</text>

                        {/* Anahata */}
                        <circle cx="600" cy="340" r="16" className="chakra" fill="#00b894" />
                        <text x="625" y="346" className="small">Anahata</text>

                        {/* Manipura */}
                        <circle cx="600" cy="400" r="16" className="chakra" fill="#fdcb6e" />
                        <text x="625" y="406" className="small">Manipura</text>

                        {/* Svadhisthana */}
                        <circle cx="600" cy="460" r="16" className="chakra" fill="#e17055" />
                        <text x="625" y="466" className="small">Svadhisthana</text>

                        {/* Muladhara */}
                        <circle cx="600" cy="520" r="16" className="chakra" fill="#d63031" />
                        <text x="625" y="526" className="small">Muladhara</text>

                        {/* RIGHT: EIGHT LIMBS */}
                        <text x="880" y="110" className="section-title">Eight Limbs of Yoga</text>

                        <rect x="840" y="140" width="300" height="60" className="box" />
                        <text x="855" y="170" className="text">1. Yama</text>
                        <text x="855" y="192" className="small">Ethical restraints</text>

                        <rect x="840" y="210" width="300" height="60" className="box" />
                        <text x="855" y="240" className="text">2. Niyama</text>
                        <text x="855" y="262" className="small">Inner discipline</text>

                        <rect x="840" y="280" width="300" height="60" className="box" />
                        <text x="855" y="310" className="text">3. Asana</text>
                        <text x="855" y="332" className="small">Stable posture</text>

                        <rect x="840" y="350" width="300" height="60" className="box" />
                        <text x="855" y="380" className="text">4. Pranayama</text>
                        <text x="855" y="402" className="small">Regulated breath</text>

                        <rect x="840" y="420" width="300" height="60" className="box" />
                        <text x="855" y="450" className="text">5. Pratyahara</text>
                        <text x="855" y="472" className="small">Withdrawal of senses</text>

                        <rect x="840" y="490" width="300" height="60" className="box" />
                        <text x="855" y="520" className="text">6. Dharana</text>
                        <text x="855" y="542" className="small">Concentration</text>

                        <rect x="840" y="560" width="300" height="60" className="box" />
                        <text x="855" y="590" className="text">7. Dhyana</text>
                        <text x="855" y="612" className="small">Meditation</text>

                        <rect x="840" y="630" width="300" height="60" className="box" />
                        <text x="855" y="660" className="text">8. Samadhi</text>
                        <text x="855" y="682" className="small">Absorption / unity</text>

                        {/* BOTTOM: GUNAS */}
                        <text x="510" y="660" className="section-title">Three Gunas</text>

                        <rect x="380" y="690" width="140" height="70" className="guna-box" />
                        <text x="395" y="720" className="text">Tamas</text>
                        <text x="395" y="742" className="small">Inertia, dullness</text>

                        <rect x="530" y="690" width="140" height="70" className="guna-box" />
                        <text x="545" y="720" className="text">Rajas</text>
                        <text x="545" y="742" className="small">Activity, restlessness</text>

                        <rect x="680" y="690" width="140" height="70" className="guna-box" />
                        <text x="695" y="720" className="text">Sattva</text>
                        <text x="695" y="742" className="small">Clarity, harmony</text>
                    </svg>
                </div>

                <div className={styles.sutraCard}>
                    <h3 className={styles.cardTitle}>The Essence of Patanjali Patanjali Yoga Sutras</h3>
                    <p className={styles.cardIntro}>Patanjali explains how the mind works and how to reach freedom through disciplined practice.</p>

                    <div className={styles.sutraSection}>
                        <h4>1. Definition of Yoga</h4>
                        <blockquote className={styles.sanskrit}>
                            <strong>Yogaḥ citta-vṛtti-nirodhaḥ</strong><br />
                            <em>Yoga = Stilling the fluctuations of the mind.</em>
                        </blockquote>
                        <p className={styles.explanation}>Yoga is not about physical postures or breathing techniques primarily — it's about controlling the restless mind.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>2. The Problem</h4>
                        <p>Mind is scattered by five types of mental fluctuations:</p>
                        <ul className={styles.problemList}>
                            <li><strong>Restlessness</strong> (uddharika) - inability to stay focused</li>
                            <li><strong>Doubts</strong> (vicikitsa) - uncertainty and confusion</li>
                            <li><strong>Laziness</strong> (styana) - mental and physical inertia</li>
                            <li><strong>Craving</strong> (raga) - attachment to pleasure</li>
                            <li><strong>Fear</strong> (dvesha) - aversion to pain</li>
                            <li><strong>Wrong perception</strong> (viparyaya) - misunderstanding reality</li>
                        </ul>
                        <p className={styles.note}>These create suffering (duhkha) and prevent us from seeing things as they really are.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3. The Eight Limbs (Ashtanga Yoga)</h4>
                        <p>Patanjali's complete system for achieving yoga:</p>
                        <ol className={styles.limbsList}>
                            <li><strong>Yama</strong> – Ethics (non-violence, truth, non-stealing, moderation, non-greed)</li>
                            <li><strong>Niyama</strong> – Personal discipline (purity, contentment, austerity, self-study, surrender)</li>
                            <li><strong>Asana</strong> – Steady posture (comfortable seat for meditation)</li>
                            <li><strong>Pranayama</strong> – Regulating breath (control of life force)</li>
                            <li><strong>Pratyahara</strong> – Withdrawal from sense distractions</li>
                            <li><strong>Dharana</strong> – Concentration (one-pointed focus)</li>
                            <li><strong>Dhyana</strong> – Meditation flow (continuous awareness)</li>
                            <li><strong>Samadhi</strong> – Oneness / absorption (union with the divine)</li>
                        </ol>
                    </div>
                </div>
            </div>

            <section className={styles.resources}>
                <h3 className={styles.resourcesTitle}>🔗 Related Resources</h3>
                <div className={styles.resourcesGrid}>
                    <div className={styles.resourceCard}>
                        <h4>Meditation (Dhyāna)</h4>
                        <p>Practical guidance on meditation, the 7th limb of Patanjali's yoga.</p>
                        <a href="/knowledge-base/meditation" className={styles.resourceLink}>
                            Learn Meditation →
                        </a>
                    </div>

                    <div className={styles.resourceCard}>
                        <h4>Historical References</h4>
                        <p>Timeline of yoga history including Patanjali's classical era.</p>
                        <a href="/knowledge-base/historical-references" className={styles.resourceLink}>
                            View History →
                        </a>
                    </div>

                    <div className={styles.resourceCard}>
                        <h4>Essential Yoga Books</h4>
                        <p>Recommended texts for studying Patanjali's Yoga Sutras in depth.</p>
                        <a href="/knowledge-base/yoga-books" className={styles.resourceLink}>
                            Browse Books →
                        </a>
                    </div>

                    <div className={styles.resourceCard}>
                        <h4>Learning Paths</h4>
                        <p>Structured study paths incorporating philosophical foundations.</p>
                        <a href="/knowledge-base/learning-paths" className={styles.resourceLink}>
                            View Paths →
                        </a>
                    </div>
                </div>
            </section>

            <div className={styles.navigation}>
                <a href="/knowledge-base" className={styles.backLink}>
                    ← Back to Knowledge base
                </a>
                <a href="/knowledge-base/meditation" className={styles.relatedLink}>
                    Next: Meditation →
                </a>
            </div>

            <Footer />
        </main>
    );
}

