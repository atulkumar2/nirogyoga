import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './pranayama.module.css';

export const metadata = {
    title: "Introduction to Prāṇāyāma | Nirog Yoga",
    description: "The science of breath regulation in yogic tradition - exploring historical foundations, physiological benefits, and major pranayama techniques.",
};

export default function Pranayama() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Introduction to Prāṇāyāma</h1>
                    <p className={styles.subtitle}>
                        The Science of Breath Regulation in Yogic Tradition
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Prāṇāyāma is one of the most essential and sophisticated components of the yogic system. Rooted deeply in classical texts and validated by modern physiology, it represents the conscious regulation of breath to influence the flow of <em>prāṇa</em> — the vital life force that sustains the body and mind.
                    </p>
                    <p className={styles.text}>
                        The term <em>Prāṇāyāma</em> combines <em>prāṇa</em> (life force or vital energy) and <em>āyāma</em> (to expand, control, or regulate). Thus, pranayama is not merely breathing exercise; it is a deliberate method to expand one's inner vitality and harmonize the autonomic nervous system, leading to stability of body, clarity of mind, and emotional balance.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Historical and Scriptural Foundations</h2>
                    <p className={styles.text}>
                        Prāṇāyāma is extensively referenced across yogic literature:
                    </p>

                    <h3 className={styles.subheading}>1. Patanjali's Yoga Sutra (2.49–2.53)</h3>
                    <p className={styles.text}>
                        Patanjali places pranayama as the fourth limb of Ashtanga Yoga, after mastery of asana. He describes it as the controlled regulation of inhalation (<em>puraka</em>), exhalation (<em>rechaka</em>), and retention (<em>kumbhaka</em>), leading to steadiness of the mind and preparation for meditation.
                    </p>

                    <h3 className={styles.subheading}>2. Hatha Yoga Pradipika</h3>
                    <p className={styles.text}>
                        Svatmarama dedicates an entire chapter to pranayama, describing techniques such as Nadi Shodhana, Bhastrika, Kapalabhati, and Ujjayi. The text emphasizes purification of the <em>nadis</em> (energy channels) and regulation of internal heat and pranic flow.
                    </p>

                    <h3 className={styles.subheading}>3. Gheranda Samhita & Shiva Samhita</h3>
                    <p className={styles.text}>
                        These texts elaborate on preparatory cleansing techniques (<em>shatkarmas</em>) and advanced pranayama practices that influence the subtle body.
                    </p>

                    <p className={styles.highlight}>
                        These sources establish pranayama as both a physical discipline and a subtle mental practice.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Basis and Physiological Relevance</h2>
                    <p className={styles.text}>
                        Modern research highlights measurable effects of pranayama on the human system:
                    </p>

                    <h3 className={styles.subheading}>1. Autonomic Nervous System Regulation</h3>
                    <p className={styles.text}>
                        Slow, rhythmic breathing increases parasympathetic (rest-and-digest) activity and reduces sympathetic (fight-or-flight) arousal.
                    </p>
                    <ul className={styles.list}>
                        <li><em>Harvard Medical School (2020)</em> shows pranayama improves vagal tone and heart-rate variability (HRV).</li>
                        <li><em>AIIMS New Delhi</em> reports reductions in stress markers such as cortisol.</li>
                    </ul>

                    <h3 className={styles.subheading}>2. Improved Respiratory Efficiency</h3>
                    <p className={styles.text}>
                        Pranayama increases lung capacity, strengthens respiratory muscles, and enhances oxygen utilization.
                    </p>
                    <ul className={styles.list}>
                        <li><em>Journal of Clinical and Diagnostic Research (2019)</em> notes improved FEV1, FVC, and breath-holding capacity.</li>
                    </ul>

                    <h3 className={styles.subheading}>3. Cardiovascular Benefits</h3>
                    <p className={styles.text}>
                        Moderate pranayama reduces blood pressure, improves circulation, and supports cardiac function.
                    </p>
                    <ul className={styles.list}>
                        <li><em>NIH – NCCIH (2021)</em> confirms benefits for hypertension and heart-rate reduction.</li>
                    </ul>

                    <h3 className={styles.subheading}>4. Cognitive and Emotional Effects</h3>
                    <p className={styles.text}>
                        Slow breathing techniques enhance attention, working memory, and emotional regulation.
                    </p>
                    <ul className={styles.list}>
                        <li><em>Frontiers in Psychology (2020)</em> links pranayama to improved prefrontal cortex activity.</li>
                        <li><em>Sleep Science (2020)</em> documents better sleep quality.</li>
                    </ul>

                    <h3 className={styles.subheading}>5. Metabolic and Endocrine Impact</h3>
                    <p className={styles.text}>
                        Evidence suggests improved glucose metabolism, reduced inflammation, and hormonal balance — particularly beneficial for diabetes and lifestyle disorders.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Core Components of Prāṇāyāma</h2>
                    <p className={styles.text}>
                        Pranayama consists of structured phases and techniques, each serving a defined purpose:
                    </p>

                    <h3 className={styles.subheading}>The Three Phases of Breath</h3>
                    <div className={styles.phaseBox}>
                        <div className={styles.phaseName}>Puraka</div>
                        <p className={styles.text} style={{ marginBottom: '0.5rem' }}>Controlled inhalation</p>
                    </div>
                    <div className={styles.phaseBox}>
                        <div className={styles.phaseName}>Kumbhaka</div>
                        <p className={styles.text} style={{ marginBottom: '0.5rem' }}>Retention (internal or external)</p>
                    </div>
                    <div className={styles.phaseBox}>
                        <div className={styles.phaseName}>Rechaka</div>
                        <p className={styles.text} style={{ marginBottom: '0.5rem' }}>Controlled exhalation</p>
                    </div>
                    <p className={styles.text}>
                        Extended exhalation and retention are associated with deeper autonomic regulation.
                    </p>

                    <h3 className={styles.subheading}>The Complete Breath Cycle</h3>
                    <p className={styles.text}>
                        The pranayama breath cycle consists of four distinct phases, each with specific physiological effects:
                    </p>

                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <Image
                            src="/pranayama-breath-cycle.png"
                            alt="Pranayama Breath Cycle Diagram"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            width={900}
                            height={500}
                        />
                    </div>

                    <div className={styles.categoryBox} style={{ background: '#f0f9ff', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 className={styles.techniqueName} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Four-Phase Breath Cycle</h4>

                        <div className={styles.phaseBox} style={{ background: 'white', marginBottom: '1rem' }}>
                            <div className={styles.phaseName}>1. Puraka (Inhale)</div>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                <strong>Action:</strong> Smooth, controlled intake — expands lungs & diaphragm
                            </p>
                            <p className={styles.text} style={{ marginBottom: 0, fontSize: '0.95rem', color: '#666' }}>
                                <em>Effect:</em> Activates energy, expands chest, oxygenates blood
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', margin: '0.5rem 0', fontSize: '1.5rem', color: 'var(--primary-color)' }}>↓</div>

                        <div className={styles.phaseBox} style={{ background: 'white', marginBottom: '1rem' }}>
                            <div className={styles.phaseName}>2. Antar Kumbhaka (Internal Retention)</div>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                <strong>Action:</strong> Breath held after inhalation
                            </p>
                            <p className={styles.text} style={{ marginBottom: 0, fontSize: '0.95rem', color: '#666' }}>
                                <em>Effect:</em> Suspends breath, increases pranic pressure, enhances oxygen absorption
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', margin: '0.5rem 0', fontSize: '1.5rem', color: 'var(--primary-color)' }}>↓</div>

                        <div className={styles.phaseBox} style={{ background: 'white', marginBottom: '1rem' }}>
                            <div className={styles.phaseName}>3. Rechaka (Exhale)</div>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                <strong>Action:</strong> Controlled, elongated exhale
                            </p>
                            <p className={styles.text} style={{ marginBottom: 0, fontSize: '0.95rem', color: '#666' }}>
                                <em>Effect:</em> Releases tension, calms sympathetic activity, removes carbon dioxide
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', margin: '0.5rem 0', fontSize: '1.5rem', color: 'var(--primary-color)' }}>↓</div>

                        <div className={styles.phaseBox} style={{ background: 'white', marginBottom: '1rem' }}>
                            <div className={styles.phaseName}>4. Bahya Kumbhaka (External Retention)</div>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                <strong>Action:</strong> Breath held after exhaling
                            </p>
                            <p className={styles.text} style={{ marginBottom: 0, fontSize: '0.95rem', color: '#666' }}>
                                <em>Effect:</em> Deep parasympathetic activation, profound stillness, prepares for next cycle
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                            ↻ Cycle Repeats
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Major Categories of Prāṇāyāma</h2>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>1. Balancing Pranayamas</h3>
                        <p className={styles.text}>
                            These calm the nervous system and balance both hemispheres of the brain.
                        </p>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Nadi Shodhana (Alternate Nostril Breathing)</h4>
                            <ul className={styles.list}>
                                <li>Purifies nadis</li>
                                <li>Enhances focus</li>
                                <li>Reduces anxiety</li>
                                <li>Improves cardiovascular stability</li>
                            </ul>
                            <p className={styles.text} style={{ fontStyle: 'italic', marginBottom: 0 }}>
                                Widely recommended for beginners and therapeutic use.
                            </p>
                        </div>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>2. Cooling Pranayamas</h3>
                        <p className={styles.text}>
                            Useful for stress, anger, heat sensitivity, and metabolic imbalance.
                        </p>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Sheetali & Sheetkari</h4>
                            <ul className={styles.list}>
                                <li>Induce cooling effect</li>
                                <li>Reduce blood pressure</li>
                                <li>Soothe the mind</li>
                                <li>Beneficial for hyperacidity</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>3. Energizing Pranayamas</h3>
                        <p className={styles.text}>
                            Stimulate energy, metabolism, and alertness.
                        </p>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Bhastrika (Bellows Breath)</h4>
                            <ul className={styles.list}>
                                <li>Increases lung expansion</li>
                                <li>Boosts circulation</li>
                                <li>Improves vitality</li>
                                <li>Activates sympathetic response in a controlled manner</li>
                            </ul>
                        </div>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Kapalabhati</h4>
                            <p className={styles.text}>
                                Traditionally a <em>kriya</em>, not pranayama — involves rapid exhalations.
                            </p>
                            <ul className={styles.list}>
                                <li>Strengthens abdominal muscles</li>
                                <li>Improves digestion</li>
                                <li>Clears nasal passages</li>
                                <li>Enhances mental clarity</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>4. Meditative Pranayamas</h3>
                        <p className={styles.text}>
                            Lead to inner stillness and prepare for dhyana.
                        </p>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Ujjayi</h4>
                            <ul className={styles.list}>
                                <li>Creates mental focus</li>
                                <li>Calms the mind</li>
                                <li>Enhances internal heat</li>
                                <li>Improves concentration during meditation</li>
                            </ul>
                        </div>

                        <div className={styles.techniqueBox}>
                            <h4 className={styles.techniqueName}>✓ Bhramari</h4>
                            <ul className={styles.list}>
                                <li>Reduces stress</li>
                                <li>Lowers heart rate</li>
                                <li>Improves sleep</li>
                                <li>Particularly effective for anxiety</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Prāṇāyāma in Higher Yogic Practice</h2>
                    <p className={styles.text}>
                        Pranayama bridges physical practice and meditation. It helps:
                    </p>
                    <ul className={styles.list}>
                        <li>Deepen awareness of bodily sensations</li>
                        <li>Steady the fluctuations of the mind (<em>chitta vritti nirodha</em>)</li>
                        <li>Enhance sensitivity to subtle energy movements</li>
                        <li>Prepare practitioners for pratyahara, dharana, and dhyana</li>
                    </ul>
                    <p className={styles.text}>
                        At advanced levels, pranayama influences the <em>pranamaya kosha</em> — the energetic sheath of the human system.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Safety and Pedagogical Considerations</h2>
                    <p className={styles.text}>
                        At Nirog Yoga University, pranayama is taught with a scientific and methodical approach:
                    </p>
                    <ul className={styles.list}>
                        <li>Gradual progression from simple to advanced techniques</li>
                        <li>Emphasis on posture, breath awareness, and safety</li>
                        <li>Avoiding retentions for individuals with hypertension, pregnancy, or cardiac issues</li>
                        <li>Clear understanding of contraindications</li>
                        <li>Integration with asana, kriya, and meditation practices</li>
                    </ul>
                    <p className={styles.text}>
                        This ensures both effectiveness and safety.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Conclusion</h2>
                    <p className={styles.text}>
                        Prāṇāyāma is a profound science that unites ancient yogic wisdom with modern physiological understanding. It purifies, strengthens, and balances the entire human system — body, breath, nerves, and mind. As part of a structured academic program, it equips students to apply breathwork responsibly, therapeutically, and professionally.
                    </p>
                </section>

                <section className={styles.references}>
                    <h2 className={styles.sectionTitle}>References</h2>
                    <ol className={styles.referencesList}>
                        <li>Patanjali. <em>Yoga Sutra</em>, Chapter 2, Verses 49–53.</li>
                        <li>Svatmarama. <em>Hatha Yoga Pradipika</em>, Chapter 2.</li>
                        <li>Gheranda Samhita, Chapter 5.</li>
                        <li>Harvard Medical School. "Breathwork and its effect on the nervous system." 2020.</li>
                        <li>NCCIH, National Institutes of Health. "Yoga: Research and Benefits." 2021.</li>
                        <li>AIIMS Delhi. Studies on pranayama and stress biomarkers.</li>
                        <li>Journal of Clinical & Diagnostic Research. "Pulmonary benefits of pranayama." 2019.</li>
                        <li>Frontiers in Psychology. "Neural correlates of slow breathing." 2020.</li>
                        <li>Sleep Science Journal. "Impact of pranayama on sleep quality." 2020.</li>
                        <li>Ministry of AYUSH. "Scientific Evidence on Yoga & Pranayama."</li>
                    </ol>
                </section>
            </div>

            <Footer />
        </main>
    );
}
