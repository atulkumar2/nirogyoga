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

                    <div className={styles.phase}>
                        <h3 className={styles.phaseTitle}>🟡 PHASE 2 — DEVELOPMENT (Months 3–6)</h3>
                        <p className={styles.phaseDesc}>
                            <strong>Focus:</strong> Expand your practice with dynamic sequences, deeper breathing techniques, and extended meditation.
                        </p>

                        <div className={styles.practiceArea}>
                            <h4>Asana Practice</h4>
                            <p className={styles.areaDesc}>Incorporate flowing sequences and more challenging postures to build endurance and flexibility.</p>
                            <ul>
                                <li><strong>Surya Namaskar (4–8 rounds)</strong> - Sun salutation sequence</li>
                                <li><strong>Virabhadrasana I & II</strong> - Warrior poses (strength and stability)</li>
                                <li><strong>Adho Mukha Svanasana</strong> - Downward dog (full-body stretch)</li>
                                <li><strong>Paschimottanasana</strong> - Seated forward bend (hamstring and back flexibility)</li>
                                <li><strong>Ardha Matsyendrasana</strong> - Seated spinal twist (detoxification and spinal mobility)</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 40 minutes/session × 4 days/week</p>
                            <p className={styles.tips}><strong>Tips:</strong> Link breath with movement. Build heat through consistent practice.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Pranayama Practice</h4>
                            <p className={styles.areaDesc}>Refine breath control with alternate nostril breathing and humming techniques.</p>
                            <ul>
                                <li><strong>Nadi Shodhana</strong> - Alternate nostril breathing for balance</li>
                                <li><strong>Ujjayi</strong> - Victorious breath with sound</li>
                                <li><strong>Bhramari</strong> - Bee breath for calming the mind</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 10–12 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> Practice on an empty stomach. Use right thumb for right nostril, ring finger for left.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Meditation Practice</h4>
                            <p className={styles.areaDesc}>Deepen concentration with mantra and body awareness techniques.</p>
                            <ul>
                                <li><strong>Breath + mantra</strong> - Combine breath awareness with sacred sound</li>
                                <li><strong>Body scan</strong> - Systematic awareness of body sensations</li>
                                <li><strong>12–15 minutes</strong> - Extended sitting practice</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> Daily practice</p>
                            <p className={styles.tips}><strong>Tips:</strong> Choose a simple mantra like "Om" or "So Hum". Scan from toes to crown.</p>
                        </div>
                    </div>

                    <div className={styles.phase}>
                        <h3 className={styles.phaseTitle}>🔵 PHASE 3 — ADVANCED PRACTICE (Months 6–12)</h3>
                        <p className={styles.phaseDesc}>
                            <strong>Focus:</strong> Master inversion and backbend practices, advanced pranayama, and deeper meditative states.
                        </p>

                        <div className={styles.practiceArea}>
                            <h4>Asana Practice</h4>
                            <p className={styles.areaDesc}>Challenge yourself with inversions, deep backbends, and complex sequences.</p>
                            <ul>
                                <li><strong>Padmasana (or half)</strong> - Lotus pose for seated meditation</li>
                                <li><strong>Sarvangasana</strong> - Shoulder stand (thyroid stimulation and inversion benefits)</li>
                                <li><strong>Halasana</strong> - Plow pose (spinal flexibility and nervous system calm)</li>
                                <li><strong>Dhanurasana</strong> - Bow pose (back strength and heart opening)</li>
                                <li><strong>Advanced standing sequences</strong> - Complex flows combining multiple poses</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 50–60 minutes/day × 5 days/week</p>
                            <p className={styles.tips}><strong>Tips:</strong> Always warm up properly. Use props for support when needed.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Pranayama Practice</h4>
                            <p className={styles.areaDesc}>Master advanced breathing techniques with retention and forceful practices.</p>
                            <ul>
                                <li><strong>Kapalbhati (light)</strong> - Skull-shining breath for purification</li>
                                <li><strong>Alternate nostril with ratios (4–2–6–2)</strong> - Inhale 4, hold 2, exhale 6, hold 2</li>
                                <li><strong>Ujjayi deep</strong> - Powerful victorious breath</li>
                                <li><strong>Bhastrika (moderate)</strong> - Bellows breath for energy</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 15–20 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> Never force the breath. Stop if you feel dizzy or uncomfortable.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Meditation Practice</h4>
                            <p className={styles.areaDesc}>Cultivate single-pointed concentration and witness consciousness.</p>
                            <ul>
                                <li><strong>Dharana on breath</strong> - One-pointed focus on breathing</li>
                                <li><strong>Om meditation</strong> - Deep resonance with universal sound</li>
                                <li><strong>Witness consciousness</strong> - Observe thoughts without attachment</li>
                                <li><strong>20–30 minutes daily</strong> - Extended practice for deeper states</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> Daily practice</p>
                            <p className={styles.tips}><strong>Tips:</strong> Find a quiet space. Use a timer to avoid clock-watching.</p>
                        </div>
                    </div>

                    <div className={styles.phase}>
                        <h3 className={styles.phaseTitle}>🟣 PHASE 4 — MASTERY (Year 1 → Year 3)</h3>
                        <p className={styles.phaseDesc}>
                            <strong>Focus:</strong> Integrate all aspects of practice into a seamless, lifelong sadhana.
                        </p>

                        <div className={styles.practiceArea}>
                            <h4>Asana Practice</h4>
                            <p className={styles.areaDesc}>Move beyond individual poses into integrated, mindful movement.</p>
                            <ul>
                                <li><strong>Full Hatha sequence</strong> - Complete traditional practice</li>
                                <li><strong>Bandhas integrated</strong> - Energy locks in all poses</li>
                                <li><strong>Slow, mindful movement</strong> - Awareness in every action</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 60–90 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> Practice becomes meditation in motion. Quality over quantity.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Pranayama Practice</h4>
                            <p className={styles.areaDesc}>Refine subtle breath control and internal energy awareness.</p>
                            <ul>
                                <li><strong>Advanced Nadi Shodhana ratios</strong> - Complex breath ratios for purification</li>
                                <li><strong>Retention practices</strong> - Extended breath holding with awareness</li>
                                <li><strong>Subtle internal breath</strong> - Barely perceptible, deeply refined breathing</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 20–30 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> Work with an experienced teacher for advanced practices.</p>
                        </div>

                        <div className={styles.practiceArea}>
                            <h4>Meditation Practice</h4>
                            <p className={styles.areaDesc}>Cultivate unbroken awareness and non-dual states of consciousness.</p>
                            <ul>
                                <li><strong>Dhyana (unbroken flow)</strong> - Continuous meditative absorption</li>
                                <li><strong>Non-dual witnessing</strong> - Beyond subject-object duality</li>
                                <li><strong>Deep silence training</strong> - Abiding in pure awareness</li>
                            </ul>
                            <p className={styles.schedule}><strong>Schedule:</strong> 30–60 minutes daily</p>
                            <p className={styles.tips}><strong>Tips:</strong> This level requires dedication and often guidance from a realized teacher.</p>
                        </div>
                    </div>

                    <div className={styles.guidance}>
                        <h3 className={styles.guidanceTitle}>🧑‍🏫 Practice Guidelines</h3>
                        <div className={styles.guidanceGrid}>
                            <div className={styles.guidanceCard}>
                                <h4>General Tips</h4>
                                <ul>
                                    <li>Practice on an empty stomach (2-3 hours after eating)</li>
                                    <li>Create a dedicated space for your practice</li>
                                    <li>Start and end with a few minutes of relaxation</li>
                                    <li>Be consistent rather than intense</li>
                                    <li>Listen to your body and modify as needed</li>
                                </ul>
                            </div>

                            <div className={styles.guidanceCard}>
                                <h4>When to Seek Guidance</h4>
                                <ul>
                                    <li>If you have injuries or medical conditions</li>
                                    <li>Before starting advanced pranayama</li>
                                    <li>When experiencing strong physical sensations</li>
                                    <li>If you want to deepen your understanding</li>
                                    <li>For personalized practice adjustments</li>
                                </ul>
                            </div>

                            <div className={styles.guidanceCard}>
                                <h4>Progress Tracking</h4>
                                <ul>
                                    <li>Maintain a practice journal</li>
                                    <li>Note physical and mental changes</li>
                                    <li>Track consistency and duration</li>
                                    <li>Observe energy levels and emotional balance</li>
                                    <li>Celebrate small improvements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link href="/knowledge-base" className={styles.backLink}>
                        ← Back to Knowledge base
                    </Link>
                    <Link href="/knowledge-base/major-asanas" className={styles.relatedLink}>
                        Explore Major Asanas →
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
