import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './anxiety-depression.module.css';

export const metadata = {
    title: "Yoga for Chronic Stress, Anxiety & Depression | Nirog Yoga",
    description: "Comprehensive scientific evidence on how yoga reduces chronic stress, anxiety, and depression through HPA-axis modulation, autonomic balance, and neuroplastic changes.",
};

export default function AnxietyDepression() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga for Chronic Stress, Anxiety & Depression</h1>
                    <p className={styles.subtitle}>
                        Evidence-Based Mental Health Management Through Mind-Body Practice
                    </p>
                </header>

                {/* English Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Understanding Anxiety, Depression & Chronic Stress</h2>
                    <p className={styles.text}>
                        Anxiety disorders and depression are among the most common mental health conditions worldwide. Anxiety involves persistent worry, fear, and physical symptoms like rapid heartbeat, while depression is characterized by persistent sadness, loss of interest, and low energy. Chronic stress, when prolonged, can contribute to both conditions and impact physical health.
                    </p>

                    <h3 className={styles.subheading}>Common Causes</h3>
                    <ul className={styles.list}>
                        <li>Work-related stress and job insecurity</li>
                        <li>Academic pressure and competitive environments</li>
                        <li>Family and relationship conflicts</li>
                        <li>Financial difficulties and economic uncertainty</li>
                        <li>Social stigma around mental health</li>
                        <li>Rapid urbanization and lifestyle changes</li>
                        <li>Genetic predisposition and brain chemistry</li>
                        <li>Traumatic life events</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <p className={styles.text}>
                        Yoga offers a holistic approach to managing anxiety and depression through:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Stress Reduction:</strong> Pranayama (breathing exercises) activates the parasympathetic nervous system, reducing stress hormones</li>
                        <li><strong>Mood Enhancement:</strong> Physical practice increases serotonin and endorphin levels</li>
                        <li><strong>Mindfulness:</strong> Meditation cultivates present-moment awareness, reducing rumination</li>
                        <li><strong>Body-Mind Connection:</strong> Asanas help release physical tension associated with mental stress</li>
                        <li><strong>Sleep Improvement:</strong> Regular practice improves sleep quality, crucial for mental health</li>
                        <li><strong>Self-Compassion:</strong> Yoga philosophy promotes self-acceptance and reduces self-criticism</li>
                    </ul>
                </section>

                {/* Hindi Version */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>चिंता, अवसाद और दीर्घकालिक तनाव क्या हैं?</h2>
                    <p className={styles.text}>
                        चिंता विकार और अवसाद दुनिया भर में सबसे आम मानसिक स्वास्थ्य स्थितियों में से हैं। चिंता में लगातार चिंता, भय और तेज़ दिल की धड़कन जैसे शारीरिक लक्षण शामिल हैं, जबकि अवसाद लगातार उदासी, रुचि की कमी और कम ऊर्जा की विशेषता है।
                    </p>

                    <p className={styles.highlight}>
                        योग तनाव प्रबंधन, मूड सुधार और मानसिक स्वास्थ्य के लिए एक सिद्ध प्राकृतिक उपचार है।
                    </p>
                </section>

                {/* Extended Research Report */}
                <section className={styles.reportSection}>
                    <h2 className={styles.reportTitle}>Scientific Findings: Impact of Yoga on Chronic Stress, Anxiety, and Depression</h2>

                    <h3 className={styles.reportSubtitle}>Summary</h3>
                    <p className={styles.text}>
                        Across multiple randomized trials and systematic reviews, yoga shows small-to-moderate, clinically meaningful benefits for reducing symptoms of chronic stress, anxiety, and depression. Plausible biological mechanisms include HPA-axis modulation, improved autonomic balance, reduced inflammation, and neuroplastic changes. The evidence base has grown substantially over the past decade, with multiple high-quality meta-analyses confirming consistent benefits.
                    </p>

                    <h3 className={styles.reportSubtitle}>1. Overview of PubMed Literature</h3>
                    <p className={styles.text}>
                        PubMed-indexed randomized controlled trials (RCTs), systematic reviews, and meta-analyses over the last decade examine yoga as an intervention for stress, anxiety disorders, and depressive disorders. The research landscape includes:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Systematic Reviews & Meta-analyses:</strong> Multiple comprehensive reviews (2013-2024) synthesize findings from dozens of RCTs, confirming reproducible benefits across populations and yoga styles.</li>
                        <li><strong>Clinical Trials:</strong> Studies ranging from single-arm pilot trials to larger RCTs comparing yoga with waitlist/usual care, active comparators (exercise, relaxation, CBT), or standardized treatments for major depressive disorder (MDD).</li>
                        <li><strong>Population Diversity:</strong> Research includes clinical populations (diagnosed anxiety/depression), subclinical populations (elevated symptoms), and specific groups (students, healthcare workers, cancer patients).</li>
                        <li><strong>Recent Evidence:</strong> Reviews from 2023–2025 strengthen earlier conclusions that yoga reduces symptom severity for anxiety and depression and can lower subjective and some objective markers of stress.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>2. Effects on Anxiety</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.1 Meta-analytic Evidence</h4>
                    <ul className={styles.list}>
                        <li><strong>Effect Sizes:</strong> Systematic reviews report small-to-moderate short-term reductions in anxiety symptoms when yoga is compared with no treatment or usual care. Influential meta-analyses found standardized mean differences (SMD) around −0.4 for anxiety versus no treatment, which is clinically meaningful.</li>
                        <li><strong>Consistency:</strong> Benefits are reproducible across different yoga styles (Hatha, Vinyasa, Iyengar, restorative), suggesting common therapeutic mechanisms.</li>
                        <li><strong>Dose-Response:</strong> Greater frequency and duration of practice (8-12 weeks, 2-3 sessions/week) tend to show larger effects.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.2 Clinical Populations</h4>
                    <ul className={styles.list}>
                        <li><strong>Generalized Anxiety Disorder (GAD):</strong> RCTs show significant reductions in GAD-7 and other anxiety scales. Yoga appears particularly effective for worry and somatic anxiety symptoms.</li>
                        <li><strong>Panic Disorder:</strong> Some studies report reduced panic attack frequency and anticipatory anxiety.</li>
                        <li><strong>Social Anxiety:</strong> Emerging evidence suggests benefits for social anxiety symptoms, possibly through improved self-efficacy and reduced self-consciousness.</li>
                        <li><strong>Medical Comorbidities:</strong> Benefits observed in anxiety associated with cancer, cardiac disease, chronic pain, and other medical conditions.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.3 Mechanisms for Anxiety Reduction</h4>
                    <ul className={styles.list}>
                        <li><strong>Autonomic Regulation:</strong> Yoga increases parasympathetic tone and reduces sympathetic overdrive, normalizing the fight-or-flight response.</li>
                        <li><strong>Breathing Patterns:</strong> Pranayama directly influences respiratory sinus arrhythmia and vagal tone, promoting calm states.</li>
                        <li><strong>Cognitive Mechanisms:</strong> Mindfulness components reduce worry, rumination, and catastrophizing—key cognitive features of anxiety.</li>
                        <li><strong>Interoceptive Awareness:</strong> Enhanced body awareness helps individuals recognize and respond to early anxiety signals.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>3. Effects on Depression</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.1 Magnitude of Effect</h4>
                    <ul className={styles.list}>
                        <li><strong>Meta-analytic Findings:</strong> Meta-analyses and recent systematic reviews (up to 2023–2024) report small-to-moderate reductions in depressive symptom severity. Some pooled estimates for clinical depression report effect sizes in the moderate range (Cohen's d ≈ −0.5 to −0.6) compared with control conditions.</li>
                        <li><strong>Clinical Significance:</strong> Reductions often meet criteria for clinically meaningful change on standard depression scales (BDI, HAM-D, PHQ-9).</li>
                        <li><strong>Remission Rates:</strong> Some studies report higher remission rates in yoga groups compared to controls, though more research is needed.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.2 Types of Depression</h4>
                    <ul className={styles.list}>
                        <li><strong>Major Depressive Disorder (MDD):</strong> Multiple RCTs in diagnosed MDD show yoga as effective adjunct to medication or as monotherapy for mild-to-moderate depression.</li>
                        <li><strong>Persistent Depressive Disorder:</strong> Limited but promising evidence for chronic, low-grade depression.</li>
                        <li><strong>Perinatal Depression:</strong> Growing evidence for prenatal and postpartum depression, with yoga being safe and well-tolerated.</li>
                        <li><strong>Bipolar Depression:</strong> Preliminary evidence suggests safety and potential benefit as adjunct therapy.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.3 Comparators and Durability</h4>
                    <ul className={styles.list}>
                        <li><strong>Versus Passive Controls:</strong> Effects are most consistent versus waitlist, usual care, or no treatment controls.</li>
                        <li><strong>Versus Active Treatments:</strong> Comparisons with exercise show similar benefits; comparisons with psychotherapy (CBT) show smaller differences, suggesting yoga may be comparable to other evidence-based treatments.</li>
                        <li><strong>Long-term Benefits:</strong> Follow-up studies (3-12 months) suggest sustained benefits with continued practice, though effects may diminish if practice is discontinued.</li>
                        <li><strong>Relapse Prevention:</strong> Some evidence suggests yoga may reduce relapse rates in recurrent depression.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.4 Mechanisms for Depression</h4>
                    <ul className={styles.list}>
                        <li><strong>Neurotransmitter Modulation:</strong> Yoga may increase serotonin, GABA, and endorphins while reducing stress-related neurotransmitter depletion.</li>
                        <li><strong>Neuroplasticity:</strong> Potential alterations in brain regions involved in mood regulation (prefrontal cortex, hippocampus, amygdala). Some neuroimaging studies show increased hippocampal volume.</li>
                        <li><strong>Inflammation:</strong> Depression is associated with inflammation; yoga may reduce pro-inflammatory cytokines (IL-6, TNF-α).</li>
                        <li><strong>Behavioral Activation:</strong> Physical practice provides structure, social connection, and sense of accomplishment—all protective against depression.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>4. Effects on Chronic Stress</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.1 Subjective Stress Measures</h4>
                    <ul className={styles.list}>
                        <li><strong>Perceived Stress:</strong> RCTs consistently report reductions in Perceived Stress Scale (PSS) scores, particularly in workplace and student populations.</li>
                        <li><strong>Burnout:</strong> Studies in healthcare workers, teachers, and caregivers show reduced burnout and improved resilience.</li>
                        <li><strong>Quality of Life:</strong> Improvements in stress-related quality of life domains (vitality, mental health, social functioning).</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.2 Biological Stress Markers</h4>
                    <ul className={styles.list}>
                        <li><strong>Cortisol:</strong> Several studies measured salivary or serum cortisol. Results are heterogeneous but suggest yoga can modulate HPA-axis activity, with some studies showing reduced morning cortisol or flattened diurnal rhythm normalization.</li>
                        <li><strong>Heart Rate Variability (HRV):</strong> Multiple studies show increased HRV, indicating improved autonomic balance and stress resilience.</li>
                        <li><strong>Inflammatory Markers:</strong> Some studies report reductions in C-reactive protein (CRP), interleukin-6 (IL-6), and other inflammatory markers associated with chronic stress.</li>
                        <li><strong>Blood Pressure:</strong> Reductions in stress-related hypertension documented in several trials.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.3 Stress-Related Conditions</h4>
                    <ul className={styles.list}>
                        <li><strong>Workplace Stress:</strong> Corporate yoga programs show reduced stress, improved productivity, and decreased absenteeism.</li>
                        <li><strong>Academic Stress:</strong> Student populations show improved exam anxiety, better sleep, and enhanced academic performance.</li>
                        <li><strong>Caregiver Stress:</strong> Family caregivers report reduced burden and improved coping.</li>
                        <li><strong>Medical Stress:</strong> Patients with chronic illness show better stress management and quality of life.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>5. Proposed Mechanisms</h3>
                    <ul className={styles.list}>
                        <li><strong>HPA-Axis Regulation:</strong> Down-regulation of the hypothalamic-pituitary-adrenal axis, leading to reduced cortisol output and improved stress response.</li>
                        <li><strong>Autonomic Nervous System Changes:</strong> Improved heart-rate variability, increased parasympathetic (vagal) tone, and reduced sympathetic overdrive.</li>
                        <li><strong>Inflammation & Immune Effects:</strong> Reductions in pro-inflammatory cytokines (IL-6, TNF-α, CRP) and improved immune function.</li>
                        <li><strong>Neuroplasticity:</strong> Structural and functional changes in brain regions involved in emotion regulation (prefrontal cortex, amygdala, hippocampus, insula).</li>
                        <li><strong>Neurotransmitter Systems:</strong> Modulation of serotonin, GABA, dopamine, and endorphin systems.</li>
                        <li><strong>Psychological Pathways:</strong> Improvements in emotion regulation, self-efficacy, mindfulness, self-compassion, and cognitive flexibility.</li>
                        <li><strong>Social Connection:</strong> Group yoga classes provide social support and reduce isolation.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>6. Strengths and Limitations of Evidence</h3>
                    <p className={styles.text}>
                        <strong>Strengths:</strong> Multiple RCTs and high-quality systematic reviews exist. Effects are reproducible across populations, settings, and yoga styles. Interventions are generally safe and well-tolerated. Biological plausibility is supported by mechanistic studies.
                    </p>
                    <p className={styles.text}>
                        <strong>Limitations:</strong> Heterogeneity in yoga styles, intervention duration, and study populations makes direct comparisons difficult. Many trials are small and unblinded (though blinding is challenging for behavioral interventions). Active comparator trials and long-term follow-ups are fewer. Publication bias may favor positive results.
                    </p>

                    <h3 className={styles.reportSubtitle}>7. Practical and Clinical Implications</h3>
                    <ul className={styles.list}>
                        <li><strong>Adjunctive Treatment:</strong> Yoga is a viable add-on to pharmacotherapy and psychotherapy for anxiety and depression. It should not replace standard care for severe conditions but can enhance treatment outcomes.</li>
                        <li><strong>Dose-Response:</strong> Regular practice (e.g., 2–3 times/week for 8-12 weeks) appears necessary for sustained benefit. Daily home practice (even 15-20 minutes) enhances effects.</li>
                        <li><strong>Yoga Styles:</strong> Various styles show benefits; choice can be based on patient preference, physical ability, and availability. Gentle, trauma-informed approaches are recommended for vulnerable populations.</li>
                        <li><strong>Components:</strong> Effective programs typically combine physical postures, breathing exercises, and meditation/relaxation. The relative contribution of each component is unclear.</li>
                        <li><strong>Safety:</strong> Generally safe; modifications may be needed for those with physical comorbidities. Trauma-sensitive approaches are important for individuals with PTSD or trauma history.</li>
                        <li><strong>Accessibility:</strong> Online and app-based yoga programs show promise for increasing accessibility, though in-person instruction may be preferable for beginners.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>8. Comparison with Other Interventions</h3>
                    <p className={styles.text}>
                        <strong>Medication:</strong> Yoga can complement antidepressants/anxiolytics and may help reduce medication dependence in some patients. Not a replacement for medication in severe cases.
                    </p>
                    <p className={styles.text}>
                        <strong>Psychotherapy:</strong> Comparable effects to some psychotherapies for mild-to-moderate symptoms. Can be combined with CBT, mindfulness-based therapies, or other approaches.
                    </p>
                    <p className={styles.text}>
                        <strong>Exercise:</strong> Similar benefits to aerobic exercise for depression/anxiety, with potential additional advantages for stress, sleep, and mind-body awareness.
                    </p>
                    <p className={styles.text}>
                        <strong>Mindfulness/Meditation:</strong> Yoga combines physical activity with mindfulness, potentially offering synergistic benefits.
                    </p>

                    <h3 className={styles.reportSubtitle}>9. Research Gaps & Future Directions</h3>
                    <ul className={styles.list}>
                        <li><strong>Larger RCTs:</strong> More adequately powered, multi-site trials with standardized protocols and active comparators.</li>
                        <li><strong>Mechanism Studies:</strong> Research using biomarkers, neuroimaging, and physiological measures to understand how yoga works and identify responders.</li>
                        <li><strong>Long-term Follow-up:</strong> Studies tracking outcomes beyond 6-12 months to assess durability and relapse prevention.</li>
                        <li><strong>Optimal Dose:</strong> Determining ideal frequency, duration, intensity, and components for different populations and conditions.</li>
                        <li><strong>Personalization:</strong> Identifying which patients benefit most from yoga and tailoring interventions accordingly.</li>
                        <li><strong>Implementation Science:</strong> Research on how to effectively integrate yoga into clinical care and community settings.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>10. Conclusion</h3>
                    <p className={styles.text}>
                        PubMed literature strongly supports the conclusion that yoga produces small-to-moderate, clinically meaningful improvements in anxiety and depressive symptoms and can reduce subjective chronic stress. The evidence base has matured significantly, with multiple systematic reviews and meta-analyses confirming consistent benefits across diverse populations and settings. Plausible biological mechanisms include HPA-axis modulation, improved autonomic balance, reduced inflammation, and neuroplastic changes. Yoga is a safe, acceptable adjunctive intervention with clinical promise that can be confidently recommended as part of a comprehensive mental health treatment plan. While not a replacement for standard care in severe cases, yoga offers a valuable, low-risk addition that empowers patients with self-management tools and addresses the mind-body connection central to mental health.
                    </p>

                    <h3 className={styles.reportSubtitle}>Selected References</h3>
                    <ul className={styles.list} style={{ fontSize: '0.95rem' }}>
                        <li><strong>Cramer H, et al. (2018):</strong> Yoga for anxiety: a systematic review and meta-analysis of randomized controlled trials. <em>Depression and Anxiety.</em></li>
                        <li><strong>Cramer H, et al. (2013):</strong> Yoga for depression: a systematic review and meta-analysis. <em>Depression Research and Treatment.</em></li>
                        <li><strong>Wu Y, et al. (2023):</strong> Effectiveness of yoga for major depressive disorder: A systematic review and meta-analysis. <em>Frontiers in Psychiatry.</em></li>
                        <li><strong>Pascoe MC, et al. (2017):</strong> Yoga, mindfulness-based stress reduction and stress-related physiological measures: A meta-analysis. <em>Psychoneuroendocrinology.</em></li>
                        <li><strong>Hofmann SG, et al. (2016):</strong> Effect of Hatha yoga on anxiety: A meta-analysis. <em>Journal of Evidence-Based Medicine.</em></li>
                    </ul>
                </section>

                {/* Resources */}
                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Medical & Scientific Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.nimhans.ac.in/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NIMHANS</h4>
                            <p>National Institute of Mental Health and Neurosciences, Bangalore</p>
                        </a>
                        <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>WHO Mental Health</h4>
                            <p>World Health Organization resources</p>
                        </a>
                        <a href="https://www.apa.org/topics/anxiety" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>APA - Anxiety</h4>
                            <p>American Psychological Association</p>
                        </a>
                        <a href="https://www.apa.org/topics/depression" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>APA - Depression</h4>
                            <p>American Psychological Association</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
