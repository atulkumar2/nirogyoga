import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './surya-namaskara.module.css';

export const metadata = {
    title: "Surya Namaskara - Sun Salutation | Nirog Yoga",
    description: "A comprehensive study of the yogic Sun Salutation sequence - exploring historical foundations, scientific benefits, and the complete 12-step classical practice.",
};

export default function SuryaNamaskara() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Surya Namaskara</h1>
                    <p className={styles.subtitle}>
                        A Comprehensive Study of the Yogic Sun Salutation Sequence
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Surya Namaskara, commonly known as the <em>Sun Salutation</em>, is one of the most complete and transformative practices in yoga. Traditionally performed at sunrise, it is both a physical sequence and a meditative ritual that expresses gratitude to <em>Surya</em> — the solar energy that sustains life. Rooted in ancient yogic wisdom and supported by modern physiological research, Surya Namaskara is widely taught in universities, wellness institutes, and yoga therapy programs.
                    </p>
                    <p className={styles.text}>
                        It integrates <em>asana</em>, <em>pranayama</em>, <em>mantra</em>, and <em>mindfulness</em>, making it a multidimensional discipline that benefits both beginners and advanced practitioners.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Historical and Yogic Foundations</h2>
                    <p className={styles.text}>
                        The origins of Surya Namaskara are referenced across classical and medieval traditions:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Vedic Literature</strong> describes rituals honoring the Sun as a symbol of vitality, clarity, and consciousness (<em>Aditya Hṛdayam</em>, <em>Rig Veda</em> hymns).</li>
                        <li><strong>Hatha Yoga Texts</strong> such as <em>Hatha Yoga Pradipika</em> and <em>Gheranda Samhita</em> emphasize dynamic practices that purify nadis, stimulate prana, and prepare the body for higher yoga.</li>
                        <li><strong>Modern Yoga Lineages</strong> (Bihar School of Yoga, Mysore/Ashtanga School, Kaivalyadhama) systematized Surya Namaskara into structured sequences for teaching and research.</li>
                    </ul>
                    <p className={styles.text}>
                        Throughout history, Surya Namaskara evolved into a practical tool for preparing the body, focusing the mind, and awakening energy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Surya Namaskara Is Unique</h2>
                    <p className={styles.text}>
                        Surya Namaskara is considered a "master practice" because it simultaneously influences:
                    </p>

                    <div className={styles.benefitBox}>
                        <h3 className={styles.benefitTitle}>1. Musculoskeletal System</h3>
                        <ul className={styles.list}>
                            <li>Mobilizes the spine in flexion & extension</li>
                            <li>Strengthens core, legs, arms, hips, shoulders</li>
                            <li>Enhances flexibility of hamstrings, back, and chest</li>
                            <li>Activates all major muscle groups</li>
                        </ul>
                    </div>

                    <div className={styles.benefitBox}>
                        <h3 className={styles.benefitTitle}>2. Cardiovascular & Respiratory Systems</h3>
                        <ul className={styles.list}>
                            <li>Elevates heart rate safely</li>
                            <li>Improves lung efficiency</li>
                            <li>Enhances oxygen uptake and circulation</li>
                            <li>Increases stamina and metabolic rate</li>
                        </ul>
                    </div>

                    <div className={styles.benefitBox}>
                        <h3 className={styles.benefitTitle}>3. Nervous System & Stress Regulation</h3>
                        <ul className={styles.list}>
                            <li>Rhythmic movement + breath synchronisation induces parasympathetic balance</li>
                            <li>Reduces cortisol and anxiety markers</li>
                            <li>Enhances mental clarity, focus, and emotional regulation</li>
                        </ul>
                    </div>

                    <div className={styles.benefitBox}>
                        <h3 className={styles.benefitTitle}>4. Endocrine System</h3>
                        <p className={styles.text}>Stimulates major glands including:</p>
                        <ul className={styles.list}>
                            <li>Thyroid (through neck extension in Bhujangasana)</li>
                            <li>Adrenal glands (via back bends)</li>
                            <li>Pancreas (via forward bends & compression)</li>
                            <li>Reproductive system (via hip opening)</li>
                        </ul>
                    </div>

                    <div className={styles.benefitBox}>
                        <h3 className={styles.benefitTitle}>5. Energetic System (Pranic Flow)</h3>
                        <ul className={styles.list}>
                            <li>Activates Pingala Nadi (solar channel)</li>
                            <li>Balances Pranamaya Kosha</li>
                            <li>Enhances vitality and internal heat (Agni)</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The 12-Step Classical Sequence (Hatha Tradition)</h2>
                    <p className={styles.text}>
                        Below is the academically recognized 12-step classical version. Each movement corresponds to coordinated breath cycles:
                    </p>

                    <h3 className={styles.subheading}>Visual Sequence Overview</h3>
                    <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#f8f9fa', borderRadius: 'var(--radius-lg)' }}>
                        <svg width="100%" height="100%" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
                            <style>{`
                                .pose-box { fill: #f5f5f5; stroke: #444; stroke-width: 2; rx: 8; }
                                .label { font-size: 18px; fill: #222; font-weight: 600; text-anchor: middle; }
                                .sub { font-size: 14px; fill: #555; text-anchor: middle; }
                                .icon { stroke: #222; stroke-width: 4; fill: none; stroke-linecap: round; }
                            `}</style>

                            <g transform="translate(100, 60)">
                                <rect width="200" height="120" className="pose-box" />
                                <circle cx="100" cy="55" r="20" className="icon" />
                                <line x1="100" y1="75" x2="100" y2="105" className="icon" />
                                <text x="100" y="140" className="label">Pranamasana</text>
                                <text x="100" y="165" className="sub">Prayer Pose</text>
                            </g>

                            <g transform="translate(350, 60)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="100" y1="105" x2="100" y2="40" className="icon" />
                                <line x1="100" y1="40" x2="60" y2="20" className="icon" />
                                <line x1="100" y1="40" x2="140" y2="20" className="icon" />
                                <text x="100" y="140" className="label">Hasta Uttanasana</text>
                                <text x="100" y="165" className="sub">Raised Arms Pose</text>
                            </g>

                            <g transform="translate(600, 60)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="100" y1="105" x2="70" y2="60" className="icon" />
                                <line x1="70" y1="60" x2="100" y2="20" className="icon" />
                                <text x="100" y="140" className="label">Uttanasana</text>
                                <text x="100" y="165" className="sub">Forward Bend</text>
                            </g>

                            <g transform="translate(850, 60)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="50" y1="105" x2="80" y2="60" className="icon" />
                                <line x1="150" y1="105" x2="120" y2="60" className="icon" />
                                <line x1="80" y1="60" x2="120" y2="60" className="icon" />
                                <text x="100" y="140" className="label">Ashwa Sanchalanasana</text>
                                <text x="100" y="165" className="sub">Equestrian Pose</text>
                            </g>

                            <g transform="translate(100, 260)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="30" y1="105" x2="170" y2="105" className="icon" />
                                <line x1="60" y1="105" x2="60" y2="60" className="icon" />
                                <text x="100" y="140" className="label">Dandasana</text>
                                <text x="100" y="165" className="sub">Plank Pose</text>
                            </g>

                            <g transform="translate(350, 260)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="40" y1="105" x2="160" y2="105" className="icon" />
                                <line x1="100" y1="105" x2="100" y2="80" className="icon" />
                                <text x="100" y="140" className="label">Ashtanga Namaskara</text>
                                <text x="100" y="165" className="sub">Eight-Limbed Pose</text>
                            </g>

                            <g transform="translate(600, 260)">
                                <rect width="200" height="120" className="pose-box" />
                                <path d="M40 105 Q100 20 160 105" className="icon" />
                                <text x="100" y="140" className="label">Bhujangasana</text>
                                <text x="100" y="165" className="sub">Cobra Pose</text>
                            </g>

                            <g transform="translate(850, 260)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="40" y1="105" x2="100" y2="40" className="icon" />
                                <line x1="160" y1="105" x2="100" y2="40" className="icon" />
                                <text x="100" y="140" className="label">Adho Mukha Svanasana</text>
                                <text x="100" y="165" className="sub">Downward Dog</text>
                            </g>

                            <g transform="translate(100, 460)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="50" y1="105" x2="80" y2="60" className="icon" />
                                <line x1="150" y1="105" x2="120" y2="60" className="icon" />
                                <text x="100" y="140" className="label">Ashwa Sanchalanasana</text>
                                <text x="100" y="165" className="sub">Opposite Side</text>
                            </g>

                            <g transform="translate(350, 460)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="70" y1="105" x2="100" y2="60" className="icon" />
                                <line x1="100" y1="60" x2="130" y2="105" className="icon" />
                                <text x="100" y="140" className="label">Uttanasana</text>
                                <text x="100" y="165" className="sub">Forward Bend</text>
                            </g>

                            <g transform="translate(600, 460)">
                                <rect width="200" height="120" className="pose-box" />
                                <line x1="100" y1="105" x2="100" y2="40" className="icon" />
                                <line x1="100" y1="40" x2="60" y2="20" className="icon" />
                                <line x1="100" y1="40" x2="140" y2="20" className="icon" />
                                <text x="100" y="140" className="label">Hasta Uttanasana</text>
                                <text x="100" y="165" className="sub">Raised Arms</text>
                            </g>

                            <g transform="translate(850, 460)">
                                <rect width="200" height="120" className="pose-box" />
                                <circle cx="100" cy="55" r="20" className="icon" />
                                <line x1="100" y1="75" x2="100" y2="105" className="icon" />
                                <text x="100" y="140" className="label">Pranamasana</text>
                                <text x="100" y="165" className="sub">Prayer Pose</text>
                            </g>
                        </svg>
                    </div>

                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <img
                            src="/surya-namaskara-sequence.png"
                            alt="Surya Namaskara Complete Sequence"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                        />
                    </div>

                    <h3 className={styles.subheading}>Detailed Step-by-Step Guide</h3>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>1. Pranamasana — Prayer Pose</div>
                        <span className={styles.breathLabel}>Breath: Normal</span>
                        <ul className={styles.list}>
                            <li>Establishes grounding</li>
                            <li>Induces mental centering</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>2. Hasta Uttanasana — Raised Arms Pose</div>
                        <span className={styles.breathLabel}>Breath: Inhale</span>
                        <ul className={styles.list}>
                            <li>Expands chest</li>
                            <li>Stretches abdomen & diaphragm</li>
                            <li>Stimulates respiratory system</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>3. Uttanasana — Standing Forward Bend</div>
                        <span className={styles.breathLabel}>Breath: Exhale</span>
                        <ul className={styles.list}>
                            <li>Lengthens spine</li>
                            <li>Compresses abdomen</li>
                            <li>Improves digestion</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>4. Ashwa Sanchalanasana — Equestrian Pose</div>
                        <span className={styles.breathLabel}>Breath: Inhale</span>
                        <ul className={styles.list}>
                            <li>Opens hips</li>
                            <li>Strengthens legs</li>
                            <li>Improves balance</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>5. Dandasana — Plank Pose</div>
                        <span className={styles.breathLabel}>Breath: Retain</span>
                        <ul className={styles.list}>
                            <li>Strengthens arms, wrists, core</li>
                            <li>Prepares body for Chaturanga alignment</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>6. Ashtanga Namaskara — Eight-Limbed Pose</div>
                        <span className={styles.breathLabel}>Breath: Exhale</span>
                        <ul className={styles.list}>
                            <li>Tones arms and shoulders</li>
                            <li>Enhances spine flexibility</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>7. Bhujangasana — Cobra Pose</div>
                        <span className={styles.breathLabel}>Breath: Inhale</span>
                        <ul className={styles.list}>
                            <li>Expands chest</li>
                            <li>Activates spinal extensors</li>
                            <li>Stimulates adrenal & thyroid glands</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>8. Adho Mukha Svanasana — Downward-Facing Dog</div>
                        <span className={styles.breathLabel}>Breath: Exhale</span>
                        <ul className={styles.list}>
                            <li>Stretches hamstrings & calves</li>
                            <li>Strengthens shoulders</li>
                            <li>Improves circulation</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>9. Ashwa Sanchalanasana — Equestrian Pose (Opposite Leg)</div>
                        <span className={styles.breathLabel}>Breath: Inhale</span>
                        <ul className={styles.list}>
                            <li>Opens second hip</li>
                            <li>Improves symmetry</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>10. Uttanasana — Forward Fold</div>
                        <span className={styles.breathLabel}>Breath: Exhale</span>
                        <ul className={styles.list}>
                            <li>Calms nervous system</li>
                            <li>Restores spinal alignment</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>11. Hasta Uttanasana — Raised Arms Pose</div>
                        <span className={styles.breathLabel}>Breath: Inhale</span>
                        <ul className={styles.list}>
                            <li>Expands ribcage</li>
                            <li>Re-energizes body</li>
                        </ul>
                    </div>

                    <div className={styles.stepBox}>
                        <div className={styles.stepNumber}>12. Pranamasana — Prayer Pose</div>
                        <span className={styles.breathLabel}>Breath: Exhale</span>
                        <ul className={styles.list}>
                            <li>Returns to balance</li>
                            <li>Closes the cycle with awareness</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Traditional Mantras (Optional in University Curriculum)</h2>
                    <p className={styles.text}>
                        Each step can be synchronized with a Surya mantra such as:
                    </p>
                    <ul className={styles.list}>
                        <li><em>Om Mitraya Namaha</em></li>
                        <li><em>Om Ravaye Namaha</em></li>
                        <li><em>Om Suryaya Namaha</em></li>
                    </ul>
                    <p className={styles.text}>
                        This adds a meditative and devotional dimension to the practice.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence Supporting Surya Namaskara</h2>

                    <h3 className={styles.subheading}>1. Physical Health</h3>
                    <ul className={styles.list}>
                        <li>Improves muscle endurance and flexibility (<em>Journal of Bodywork & Movement Therapies</em>, 2016)</li>
                        <li>Enhances BMI, lipid profile, and metabolic health in adults (<em>International Journal of Yoga</em>, 2015)</li>
                    </ul>

                    <h3 className={styles.subheading}>2. Cardiovascular Benefits</h3>
                    <ul className={styles.list}>
                        <li>Increases VO₂ max and improves aerobic capacity (<em>Ayurveda Research & Education Foundation</em>, 2018)</li>
                    </ul>

                    <h3 className={styles.subheading}>3. Endocrine & Metabolic Effects</h3>
                    <ul className={styles.list}>
                        <li>Enhances insulin sensitivity and reduces fasting glucose (<em>Indian Journal of Endocrinology</em>, 2017)</li>
                    </ul>

                    <h3 className={styles.subheading}>4. Mental Health</h3>
                    <ul className={styles.list}>
                        <li>Reduces anxiety, improves mood, and enhances cognitive functioning (<em>Frontiers in Psychology</em>, 2020)</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Pedagogical Approach at Nirog Yoga University</h2>
                    <p className={styles.text}>
                        Our teaching strategy includes:
                    </p>
                    <ul className={styles.list}>
                        <li>Proper alignment and biomechanics</li>
                        <li>Breath synchronization</li>
                        <li>Progressive variations (beginner → intermediate → classical)</li>
                        <li>Safety guidelines for hypertension, pregnancy, vertigo, and spinal issues</li>
                        <li>Use of props and modifications</li>
                        <li>Integration with pranayama and meditation modules</li>
                    </ul>
                    <p className={styles.text}>
                        Each student learns both <em>practice</em> and <em>theory</em>, enabling them to teach Surya Namaskara professionally.
                    </p>
                </section>

                <section className={styles.section}>
                    <div className={styles.warningBox}>
                        <h3 className={styles.warningTitle}>Precautions & Contraindications</h3>
                        <p className={styles.text}>
                            Surya Namaskara should be modified or avoided in:
                        </p>
                        <ul className={styles.list}>
                            <li>Uncontrolled hypertension</li>
                            <li>Recent surgeries</li>
                            <li>Severe back pain or herniated discs</li>
                            <li>Pregnancy (traditional sequence is modified)</li>
                            <li>Vertigo or dizziness</li>
                            <li>Cardiac conditions (require slower pace)</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.text}>
                        Surya Namaskara is not just a warm-up routine — it is a structured, intelligent, and scientifically validated practice that harmonizes the entire human system. Its elegance lies in the seamless integration of movement, breath, awareness, and rhythm. Within the academic framework of Nirog Yoga University, Surya Namaskara forms a foundational pillar for physical conditioning, mental focus, and energetic awakening.
                    </p>
                </section>
            </div>

            <Footer />
        </main>
    );
}
