import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './meditation.module.css';

export const metadata = {
    title: "Meditation (Dhyāna) | Nirog Yoga",
    description: "Cultivating steady awareness and inner clarity through structured meditation practice - exploring foundations, scientific evidence, and practical training methods.",
};

export default function Meditation() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Meditation (Dhyāna)</h1>
                    <p className={styles.subtitle}>
                        Cultivating Steady Awareness and Inner Clarity
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Meditation is a central pillar of the yogic path and one of the most studied mind–body practices in modern science. In the yogic tradition, <em>dhyāna</em> is a state of sustained, effortless awareness in which the mind becomes steady, clear, and quiet, allowing deeper insights into one's own nature.
                    </p>
                    <p className={styles.text}>
                        At Nirog Yoga University, meditation is taught not as a vague relaxation technique, but as a structured discipline rooted in classical texts and supported by contemporary research in psychology, neuroscience, and medicine.
                    </p>
                </section>

                <section className={styles.section} style={{ background: '#f0f9ff', borderLeft: '5px solid var(--primary-color)' }}>
                    <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-color)' }}>How to Start Meditation (Beginner Guide)</h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                        A simple, safe, and effective way to begin
                    </p>
                    <p className={styles.text}>
                        Meditation doesn't need special skills, equipment, or prior experience. What matters is consistency and a gentle approach. Here's the easiest roadmap for students and newcomers:
                    </p>

                    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <Image
                            src="/meditation-guide.png"
                            alt="Meditation Guide - Postures and Techniques"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            width={800}
                            height={450}
                        />
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>1. Start with Just 5 Minutes</h3>
                        <p className={styles.text}>
                            Don't aim for 20–30 minutes in the beginning. <strong>5 minutes is enough to build the habit</strong>. You can slowly increase it to 10, 15, or 20 minutes as it becomes natural.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>2. Choose a Comfortable Position</h3>
                        <p className={styles.text}>You can meditate:</p>
                        <ul className={styles.list}>
                            <li>sitting on a chair</li>
                            <li>on a cushion</li>
                            <li>on a yoga mat</li>
                            <li>or even on your bed (but sitting upright)</li>
                        </ul>
                        <p className={styles.text}>
                            <strong>The spine should be comfortably straight, not stiff.</strong> If sitting cross-legged is uncomfortable, avoid it.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>3. Focus on the Breath (Easiest Method)</h3>
                        <p className={styles.text}>Gently bring attention to:</p>
                        <ul className={styles.list}>
                            <li>the cool air entering your nose</li>
                            <li>the warm air leaving</li>
                            <li>the rise/fall of your chest or belly</li>
                        </ul>
                        <p className={styles.text}>
                            Do not try to "control" the breath. Just <strong>observe</strong> it.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>4. Expect the Mind to Wander — It's Normal</h3>
                        <p className={styles.text}>You will think about work, family, groceries, random thoughts. This is natural.</p>
                        <p className={styles.text}>
                            When you notice wandering, <strong>gently bring your attention back to the breath</strong>. This "returning" is the actual meditation skill.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>5. Keep the Face, Jaw, and Shoulders Relaxed</h3>
                        <p className={styles.text}>
                            Tension often hides here. Check in every few minutes and soften these areas.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>6. Use a Simple Anchor</h3>
                        <p className={styles.text}>Beginners may use:</p>
                        <ul className={styles.list}>
                            <li><strong>Breath</strong> (most common)</li>
                            <li><strong>A mantra</strong> like "So–Hum" or simply "Om" silently</li>
                            <li><strong>A point between the eyebrows</strong></li>
                            <li><strong>A candle flame</strong> (for trataka meditation)</li>
                        </ul>
                        <p className={styles.text}>Choose what feels natural.</p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>7. Set a Soft Timer</h3>
                        <p className={styles.text}>
                            Use a timer with a gentle bell. This frees your mind from constantly checking the time.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>8. Meditate at the Same Time Daily (If Possible)</h3>
                        <p className={styles.text}>Best times are:</p>
                        <ul className={styles.list}>
                            <li><strong>Morning</strong> — creates clarity for the day</li>
                            <li><strong>Evening</strong> — reduces mental fatigue</li>
                            <li><strong>After yoga or pranayama</strong> — mind is already calm</li>
                        </ul>
                        <p className={styles.text}>Consistency matters more than duration.</p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>9. Don't Judge Your Sessions</h3>
                        <p className={styles.text}>
                            Some days feel peaceful, some feel chaotic. Both are normal. Meditation is not about achieving a "blank mind." It's about <strong>building awareness</strong>.
                        </p>
                    </div>

                    <div className={styles.categoryBox} style={{ background: 'white' }}>
                        <h3 className={styles.categoryTitle}>10. End with 30 Seconds of Gratitude</h3>
                        <p className={styles.text}>Before opening your eyes, silently acknowledge:</p>
                        <ul className={styles.list}>
                            <li>your effort</li>
                            <li>your breath</li>
                            <li>your direction</li>
                            <li>your intention to take care of yourself</li>
                        </ul>
                        <p className={styles.text}>This makes the practice emotionally grounding.</p>
                    </div>

                    <div className={styles.highlight} style={{ background: '#e8f5e9', border: '2px solid #4caf50', marginTop: '2rem' }}>
                        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Beginner Quick Start Routine (3 Steps)</h3>
                        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                            <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                                <strong>Step 1:</strong> Sit comfortably → relax shoulders & face
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                                <strong>Step 2:</strong> Observe your natural breath for 3–5 minutes
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                                <strong>Step 3:</strong> When mind wanders, gently bring it back
                            </p>
                        </div>
                        <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '1rem' }}>
                            That's it. Simple, accessible, powerful.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Historical and Philosophical Foundations</h2>
                    <p className={styles.text}>
                        Meditation has deep roots in Indian philosophical systems:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Patañjali's Yoga Sūtra</strong> describes the triad of <em>dhāraṇā</em> (concentration), <em>dhyāna</em> (meditation), and <em>samādhi</em> (absorption) as the higher limbs of Ashtanga Yoga, leading to <em>samāpatti</em> or transformative insight.</li>
                        <li>The <strong>Bhagavad Gītā</strong> outlines meditative states within the paths of Karma, Bhakti, and Jñāna Yoga, emphasizing equanimity, non-attachment, and steadiness of mind.</li>
                        <li><strong>Buddhist traditions</strong> (e.g., Vipassanā, Śamatha) systematize meditation as a way to cultivate mindfulness, compassion, and insight into impermanence and suffering.</li>
                        <li><strong>Hatha and Tantra traditions</strong> integrate meditation with mantra, visualization, and subtle-body practices.</li>
                    </ul>
                    <p className={styles.highlight}>
                        These sources agree on a common theme: meditation refines attention, purifies the mind, and opens the possibility of inner freedom.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. What Meditation Trains</h2>
                    <p className={styles.text}>
                        From an educational and scientific perspective, meditation can be understood as systematic training in:
                    </p>
                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>1. Attention Regulation</h3>
                        <p className={styles.text}>Sustaining focus, shifting attention deliberately, and reducing mind-wandering.</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>2. Emotional Regulation</h3>
                        <p className={styles.text}>Observing emotions without being overwhelmed, leading to greater resilience.</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>3. Self-Awareness</h3>
                        <p className={styles.text}>Recognizing thoughts, patterns, and habits with clarity and non-judgment.</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>4. Compassion and Prosocial Qualities</h3>
                        <p className={styles.text}>Many traditions explicitly cultivate kindness, empathy, and patience.</p>
                    </div>
                    <p className={styles.text}>
                        These skills are directly relevant to students, professionals, clinicians, and educators.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Forms of Meditation Taught at Nirog Yoga University</h2>
                    <p className={styles.text}>
                        Our curriculum exposes students to a spectrum of meditation methods while keeping yogic principles central:
                    </p>

                    <h3 className={styles.subheading}>3.1 Yogic Meditation (Dhyāna based on Patañjali)</h3>
                    <ul className={styles.list}>
                        <li>Focus on breath, mantra, or inner light.</li>
                        <li>Progression from <em>dhāraṇā</em> (single-pointed focus) to <em>dhyāna</em> (unbroken flow of awareness).</li>
                        <li>Used to stabilize the mind after asana and pranayama.</li>
                    </ul>

                    <h3 className={styles.subheading}>3.2 Mindfulness-Based Practices</h3>
                    <ul className={styles.list}>
                        <li>Non-judgmental observation of sensations, thoughts, and emotions in the present moment.</li>
                        <li>Includes body-scan, breath awareness, and open monitoring.</li>
                        <li>Forms the basis of many clinical programs like Mindfulness-Based Stress Reduction (MBSR).</li>
                    </ul>

                    <h3 className={styles.subheading}>3.3 Mantra and Japa Meditation</h3>
                    <ul className={styles.list}>
                        <li>Repetition of a sacred sound or phrase (e.g., <em>Om</em> or bija mantras).</li>
                        <li>Stabilizes attention and has measurable calming effects on the nervous system.</li>
                    </ul>

                    <h3 className={styles.subheading}>3.4 Compassion- and Heart-Based Meditation</h3>
                    <ul className={styles.list}>
                        <li>Practices cultivating loving-kindness, gratitude, and forgiveness.</li>
                        <li>Helpful for emotional healing, interpersonal relationships, and burnout.</li>
                    </ul>

                    <h3 className={styles.subheading}>3.5 Contemplative and Reflective Practices</h3>
                    <ul className={styles.list}>
                        <li>Guided inquiry using scriptural verses or key themes (e.g., impermanence, equanimity).</li>
                        <li>Bridges philosophical study and lived experience.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Scientific Evidence and Health Benefits</h2>
                    <p className={styles.text}>
                        Over the past three decades, thousands of studies have examined meditation and mindfulness. Key, reasonably well-supported findings include:
                    </p>

                    <h3 className={styles.subheading}>Psychological Stress & Mental Health</h3>
                    <ul className={styles.list}>
                        <li>Systematic reviews in <em>JAMA Internal Medicine</em> show that meditation programs yield small to moderate reductions in anxiety, depression, and perceived stress.</li>
                        <li>Brief mindfulness-based programs have been shown to significantly reduce stress even in high-pressure groups such as healthcare professionals.</li>
                    </ul>

                    <h3 className={styles.subheading}>Physical Health</h3>
                    <ul className={styles.list}>
                        <li>Evidence maps and fact sheets from NCCIH indicate potential benefits for high blood pressure, chronic pain, and general quality of life, especially when meditation is part of structured programs like MBSR.</li>
                        <li>Studies suggest beneficial effects on specific immune markers and inflammation, indicating possible roles in healthy aging and disease resilience.</li>
                    </ul>

                    <h3 className={styles.subheading}>Sleep and Emotional Regulation</h3>
                    <ul className={styles.list}>
                        <li>Mindfulness practices may reduce insomnia and improve sleep quality, with effects comparable to cognitive-behavioural approaches in some studies.</li>
                        <li>Recent trials show improvements in emotion regulation, depressive symptoms, and overall well-being in diverse populations, including older adults and caregivers.</li>
                    </ul>

                    <p className={styles.text}>
                        While not a cure-all, the evidence strongly supports meditation as a useful adjunct in mental and physical healthcare.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Structure of Meditation Training at Nirog Yoga University</h2>
                    <p className={styles.text}>
                        Meditation is integrated across our programs in a <strong>progressive and evidence-informed</strong> way:
                    </p>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>1. Foundational Stage</h3>
                        <ul className={styles.list}>
                            <li>Posture, breath awareness, basic concentration.</li>
                            <li>5–10 minute practices linked to asana and pranayama sessions.</li>
                            <li>Basic psychoeducation on stress, nervous system, and attention.</li>
                        </ul>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>2. Intermediate Stage</h3>
                        <ul className={styles.list}>
                            <li>Formal sitting periods of 15–30 minutes.</li>
                            <li>Introduction to mindfulness, mantra, and guided practices.</li>
                            <li>Journaling and reflection to integrate insights into daily life.</li>
                        </ul>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>3. Advanced Stage</h3>
                        <ul className={styles.list}>
                            <li>Deeper work with dhāraṇā–dhyāna–samādhi framework.</li>
                            <li>Silent retreats, extended practice days, and intensive modules.</li>
                            <li>Study of classical texts alongside research literature.</li>
                        </ul>
                    </div>

                    <div className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>4. Professional & Therapeutic Application</h3>
                        <ul className={styles.list}>
                            <li>How to guide safe meditation sessions for groups and individuals.</li>
                            <li>Scope and limitations of meditation in clinical and educational settings.</li>
                            <li>Ethical guidelines and referral protocols for students with complex needs.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.warningBox}>
                        <h3 className={styles.warningTitle}>6. Safety, Ethics, and Responsible Use</h3>
                        <p className={styles.text}>
                            Although meditation is generally considered safe, recent scholarship highlights that it is <strong>not</strong> a one-size-fits-all intervention. Some individuals may experience temporary increases in anxiety, emotional discomfort, or resurfacing of difficult memories, especially during intensive practice.
                        </p>
                        <p className={styles.text}>
                            Therefore, Nirog Yoga University emphasises:
                        </p>
                        <ul className={styles.list}>
                            <li>Proper screening, especially for those with severe trauma or psychiatric history.</li>
                            <li>Gradual progression of practice intensity and duration.</li>
                            <li>Clear guidance on when to pause, modify, or seek professional support.</li>
                            <li>Respect for cultural, religious, and personal backgrounds of students.</li>
                        </ul>
                        <p className={styles.text}>
                            Meditation is taught as a <strong>powerful tool</strong> that must be used with awareness and sensitivity.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.outcomeBox}>
                        <h3 className={styles.outcomeTitle}>7. Educational Outcomes</h3>
                        <p className={styles.text}>
                            By the end of their training, students are expected to:
                        </p>
                        <ul className={styles.list}>
                            <li>Demonstrate personal consistency in meditation practice.</li>
                            <li>Explain key theoretical frameworks (Patañjali, mindfulness, contemporary models).</li>
                            <li>Understand major research findings and their practical implications.</li>
                            <li>Facilitate basic meditation sessions safely and ethically.</li>
                            <li>Integrate meditation with asana, pranayama, and lifestyle guidance for holistic well-being.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.references}>
                    <h2 className={styles.sectionTitle}>References (Selected)</h2>
                    <ol className={styles.referencesList}>
                        <li>Patañjali. <em>Yoga Sūtra</em> (various translations).</li>
                        <li><em>Bhagavad Gītā</em> – Chapters 2, 6, 12 (meditation and equanimity).</li>
                        <li>Goyal, M. et al. "Meditation Programs for Psychological Stress and Well-being." <em>JAMA Internal Medicine</em>, 2014.</li>
                        <li>NCCIH. "Meditation and Mindfulness: Effectiveness and Safety." Fact sheet, 2022.</li>
                        <li>Grossman, P. et al. "Mindfulness-Based Stress Reduction and Health Benefits." <em>NCBI Bookshelf</em>, 2004.</li>
                        <li>Black, D. S. & Slavich, G. M. "Mindfulness Meditation and the Immune System: A Systematic Review." 2016.</li>
                        <li>Schlechta Portella, C. F. et al. "Meditation: Evidence Map of Systematic Reviews." <em>Frontiers in Public Health</em>, 2021.</li>
                        <li>Harvard Health, Mayo Clinic, and NCCIH online resources on meditation and mindfulness.</li>
                    </ol>
                </section>
            </div>

            <Footer />
        </main>
    );
}
