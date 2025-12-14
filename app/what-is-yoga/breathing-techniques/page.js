import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './breathing-techniques.module.css';

export const metadata = {
    title: "Breathing Control Techniques (Prāṇāyāma Variants) | Nirog Yoga",
    description: "A comprehensive overview of yogic breathing control techniques - from foundational practices to advanced prāṇāyāma variants for students and practitioners.",
};

export default function BreathingTechniques() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Breathing Control Techniques</h1>
                    <p className={styles.subtitle}>
                        Prāṇāyāma Variants: A Comprehensive Overview for Students & Practitioners
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Breathing control in yoga is not accidental — it is a deliberate, scientific method to regulate the autonomic nervous system, balance prāṇa, and prepare the mind for deeper practices like meditation. Below are the major categories and techniques of yogic breath control, explained with precision and purpose.
                    </p>

                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <Image
                            src="/breathing-techniques.png"
                            alt="Yogic Breathing Techniques Guide"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            width={800}
                            height={450}
                        />
                    </div>
                </section>

                {/* FOUNDATIONAL TECHNIQUES */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>
                        1. Foundational Techniques {' '}
                        <span className={styles.levelBadge + ' ' + styles.beginner}>Beginner Level</span>
                    </h2>
                    <p className={styles.text}>
                        These build awareness, steadiness, and baseline lung capacity.
                    </p>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>1.1 Dirgha Shvāsa — Deep Yogic Breathing (3-Part Breath)</h3>
                        <div className={styles.techniquePattern}>
                            Focus: Chest → ribs → abdomen expansion
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Improves lung function</li>
                                <li>Reduces anxiety</li>
                                <li>Ideal warm-up before all pranayamas</li>
                            </ul>
                        </div>
                        <div className={styles.useBox}>
                            <div className={styles.useTitle}>Use for beginners:</div>
                            Helps students understand diaphragmatic breathing.
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>1.2 Sama Vritti — Equal Ratio Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale = Exhale (e.g., 4 seconds in, 4 seconds out)
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Balances sympathetic & parasympathetic systems</li>
                                <li>Increases mental steadiness</li>
                            </ul>
                        </div>
                        <div className={styles.useBox}>
                            <div className={styles.useTitle}>Use:</div>
                            Best for students with stress, restlessness, or shallow breathing.
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>1.3 Vishama Vritti — Unequal Ratio Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Exhale longer than inhale (e.g., 4 in → 6 out)
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Deep relaxation</li>
                                <li>Reduces heart rate</li>
                                <li>Helps with insomnia</li>
                            </ul>
                        </div>
                        <div className={styles.useBox}>
                            <div className={styles.useTitle}>Use:</div>
                            Evening practice & pre-meditation calming.
                        </div>
                    </div>
                </section>

                {/* CLEANSING & ENERGIZING */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>
                        2. Cleansing & Energizing Techniques
                        <span className={styles.levelBadge + ' ' + styles.intermediate}>Intermediate</span>
                    </h2>
                    <p className={styles.text}>
                        These activate prāṇa, improve circulation, and energize the system.
                    </p>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>2.1 Kapalabhati — Skull-Shining Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Active exhale (quick, sharp) + Passive inhale
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Clears sinuses</li>
                                <li>Stimulates digestion</li>
                                <li>Activates solar plexus (Manipura chakra)</li>
                                <li>Increases alertness</li>
                            </ul>
                        </div>
                        <div className={styles.cautionBox}>
                            <div className={styles.cautionTitle}>Caution:</div>
                            Avoid in hypertension, pregnancy, hernia.
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>2.2 Bhastrika — Bellows Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Forceful inhale + forceful exhale with equal intensity
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Strong energy booster</li>
                                <li>Improves lung power</li>
                                <li>Warms the body</li>
                            </ul>
                        </div>
                        <div className={styles.cautionBox}>
                            <div className={styles.cautionTitle}>Caution:</div>
                            Not for anxiety-sensitive individuals or cardiac conditions.
                        </div>
                    </div>
                </section>

                {/* COOLING TECHNIQUES */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>3. Cooling Techniques (Therapeutic Use)</h2>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>3.1 Sheetali — Cooling Tongue Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Roll tongue → inhale through the tube → exhale through nose
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Reduces heat</li>
                                <li>Helps anger, acidity, hot climates</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>3.2 Sheetkari — Hissing Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Teeth slightly open → inhale through teeth → exhale through nose
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Similar cooling effect</li>
                                <li>Useful when tongue cannot be rolled</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>3.3 Chandra Bhedana — Left Nostril Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale left → exhale right
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Calms, cools, lowers heart rate</li>
                                <li>Good for anxiety and insomnia</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* BALANCING TECHNIQUES */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>4. Balancing Techniques (Core Prāṇāyāma Practices)</h2>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>4.1 Nadi Shodhana — Alternate Nostril Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale left → exhale right → inhale right → exhale left
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Purifies nadis</li>
                                <li>Balances hemispheres of brain</li>
                                <li>Deep mental clarity</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            This is <em>the most important</em> pranayama for emotional balance.
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>4.2 Anuloma Viloma — Ratio-Based Alternate Nostril Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Uses time ratios (e.g., 4-16-8)
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Strengthens nervous system</li>
                                <li>Improves breath-holding capacity</li>
                                <li>Leads to subtle inner awareness</li>
                            </ul>
                        </div>
                        <p className={styles.text}>
                            Often taught after Nadi Shodhana mastery.
                        </p>
                    </div>
                </section>

                {/* RETENTION-BASED */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>
                        5. Retention-Based Techniques
                        <span className={styles.levelBadge + ' ' + styles.advanced}>Advanced</span>
                    </h2>
                    <p className={styles.text}>
                        <em>Kumbhaka = breath retention</em><br />
                        Must be taught slowly and carefully.
                    </p>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>5.1 Antar Kumbhaka — Internal Retention</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale → hold → exhale
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Builds lung capacity</li>
                                <li>Strengthens mind control</li>
                                <li>Heightens pranic pressure</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>5.2 Bahya Kumbhaka — External Retention</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Exhale → hold
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Strong parasympathetic activation</li>
                                <li>Deep stillness</li>
                                <li>Used in advanced hatha yoga</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>5.3 Kevala Kumbhaka — Spontaneous Retention</h3>
                        <p className={styles.text}>
                            A natural, effortless suspension of breath in deep meditation.
                        </p>
                        <div className={styles.highlight}>
                            This is not practiced; it <em>emerges</em> naturally with mastery.
                        </div>
                    </div>
                </section>

                {/* SOUND-BASED */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>6. Sound-Based Techniques (Calming & Meditative)</h2>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>6.1 Ujjayi — Victorious Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Slight constriction at the throat (ocean sound)
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Builds focus</li>
                                <li>Warms the body</li>
                                <li>Used heavily in Ashtanga Vinyasa and meditation</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>6.2 Bhramari — Humming Bee Breath</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale → exhale with humming sound
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Reduces anger, anxiety</li>
                                <li>Improves sleep</li>
                                <li>Vibrations calm the limbic system</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ADVANCED YOGIC */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>
                        7. Advanced Yogic Techniques (Subtle Body Work)
                        <span className={styles.levelBadge + ' ' + styles.advanced}>Advanced</span>
                    </h2>
                    <p className={styles.text}>
                        Used in serious yoga sadhana and energy practices.
                    </p>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>7.1 Surya Bhedana — Right Nostril Breathing</h3>
                        <div className={styles.techniquePattern}>
                            Pattern: Inhale right → exhale left
                        </div>
                        <div className={styles.benefitsList}>
                            <strong>Benefits:</strong>
                            <ul className={styles.list}>
                                <li>Generates heat</li>
                                <li>Activates Pingala Nadi</li>
                                <li>Increases alertness</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.techniqueBox}>
                        <h3 className={styles.techniqueTitle}>7.2 Moorcha, Plavini, and Other Rare Pranayamas</h3>
                        <ul className={styles.list}>
                            <li>Alter consciousness</li>
                            <li>Used in advanced ritual and meditative practices</li>
                            <li>Taught only under direct supervision</li>
                        </ul>
                    </div>
                </section>

                {/* SAFETY */}
                <section className={styles.section}>
                    <div className={styles.warningBox}>
                        <h2 className={styles.warningTitle}>8. Safety & Contraindications (Important for Teaching)</h2>
                        <ul className={styles.list}>
                            <li>No breath retentions in <strong>hypertension, pregnancy, cardiac issues</strong></li>
                            <li>Avoid forceful practices in <strong>anxiety, panic disorder</strong></li>
                            <li>Asthmatic students should practice <strong>slow breathing</strong>, not Kapalabhati/Bhastrika</li>
                            <li>Always begin with normal breathing and end with relaxation</li>
                        </ul>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
