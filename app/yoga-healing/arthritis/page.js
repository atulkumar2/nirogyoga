import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './arthritis.module.css';

export const metadata = {
    title: "Yoga for Fibromyalgia & Arthritis | Nirog Yoga",
    description: "Comprehensive scientific evidence on how yoga reduces pain, improves function, and enhances quality of life in fibromyalgia, osteoarthritis, and rheumatoid arthritis.",
};

export default function Arthritis() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga for Fibromyalgia & Arthritis</h1>
                    <p className={styles.subtitle}>
                        Managing Joint Health and Chronic Pain Through Evidence-Based Practice
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Understanding Arthritis & Fibromyalgia</h2>
                    <p className={styles.text}>
                        Arthritis encompasses inflammation of one or more joints, causing pain and stiffness. The most common types are osteoarthritis (wear-and-tear) and rheumatoid arthritis (autoimmune). Fibromyalgia is a chronic condition characterized by widespread musculoskeletal pain, fatigue, and sleep disturbances.
                    </p>

                    <h3 className={styles.subheading}>Common Causes & Risk Factors</h3>
                    <ul className={styles.list}>
                        <li>Age-related wear and tear</li>
                        <li>Previous joint injuries</li>
                        <li>Obesity and excess weight on joints</li>
                        <li>Genetic predisposition</li>
                        <li>Autoimmune conditions</li>
                        <li>Repetitive stress on joints</li>
                        <li>Sedentary lifestyle</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Gentle Movement:</strong> Maintains joint flexibility without stress</li>
                        <li><strong>Strength Building:</strong> Supports joints with stronger muscles</li>
                        <li><strong>Pain Relief:</strong> Reduces inflammation and pain perception</li>
                        <li><strong>Range of Motion:</strong> Improves joint mobility gradually</li>
                        <li><strong>Weight Management:</strong> Reduces stress on weight-bearing joints</li>
                        <li><strong>Mind-Body Awareness:</strong> Helps understand pain patterns</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>गठिया और फाइब्रोमायल्जिया क्या है?</h2>
                    <p className={styles.text}>
                        गठिया एक या अधिक जोड़ों की सूजन है, जिससे दर्द और कठोरता होती है। सबसे आम प्रकार ऑस्टियोआर्थराइटिस और रुमेटीइड गठिया हैं। फाइब्रोमायल्जिया एक दीर्घकालिक स्थिति है जिसमें व्यापक मांसपेशियों में दर्द होता है।
                    </p>
                    <p className={styles.highlight}>
                        योग जोड़ों के लचीलेपन में सुधार, दर्द कम करने और गतिशीलता बढ़ाने में मदद करता है।
                    </p>
                </section>

                {/* Extended Research Report */}
                <section className={styles.reportSection}>
                    <h2 className={styles.reportTitle}>Scientific Findings: Impact of Yoga for Fibromyalgia and Arthritis</h2>

                    <h3 className={styles.reportSubtitle}>Summary</h3>
                    <p className={styles.text}>
                        For fibromyalgia (FM) and osteoarthritis (OA), yoga is a recommended, evidence-based multimodal intervention that reduces pain, improves physical function, and addresses psychological comorbidities (fatigue, mood). Evidence for rheumatoid arthritis (RA) is positive but more limited. PubMed-indexed clinical trials and systematic reviews (2015–2025) strongly support yoga as a safe, effective non-pharmacological management strategy.
                    </p>

                    <h3 className={styles.reportSubtitle}>1. Overview of PubMed Literature</h3>
                    <p className={styles.text}>
                        The evidence base has matured from small pilot studies to larger randomized controlled trials (RCTs) and rigorous meta-analyses. Research includes:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Systematic Reviews & Meta-analyses:</strong> Multiple comprehensive reviews (2013-2023) synthesize findings across studies, confirming consistent benefits for FM and OA.</li>
                        <li><strong>Randomized Controlled Trials:</strong> Well-designed RCTs comparing yoga to waitlist controls, standard care, and other exercise interventions.</li>
                        <li><strong>Long-term Studies:</strong> Some studies track outcomes over 6-12 months, showing sustained benefits.</li>
                        <li><strong>Comparative Effectiveness:</strong> Head-to-head trials comparing yoga to other treatments like aerobic exercise, strengthening programs, and medication.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>2. Evidence in Fibromyalgia (FM)</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.1 Pain and Physical Function</h4>
                    <ul className={styles.list}>
                        <li><strong>Pain Reduction:</strong> Systematic reviews and meta-analyses consistently report that yoga significantly reduces pain intensity (measured by VAS, pain questionnaires) compared to waitlist controls and usual care. Effect sizes are typically small-to-moderate (standardized mean difference around 0.3-0.5).</li>
                        <li><strong>Functional Capacity:</strong> Improvements in physical function and ability to perform daily activities are frequently documented. Patients report better mobility and reduced disability.</li>
                        <li><strong>Tender Points:</strong> Some studies show reduction in the number of tender points, a diagnostic criterion for FM.</li>
                        <li><strong>Duration of Benefits:</strong> Benefits often persist for several months after the intervention ends, though regular practice is recommended for sustained improvement.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.2 Fatigue and Sleep Quality</h4>
                    <ul className={styles.list}>
                        <li><strong>Fatigue Reduction:</strong> Yoga shows moderate effects on reducing fatigue, which is one of the most debilitating symptoms of FM. Patients report increased energy levels and reduced exhaustion.</li>
                        <li><strong>Sleep Improvement:</strong> Significant improvements in sleep quality, sleep duration, and reduced sleep disturbances are documented. Better sleep contributes to overall symptom improvement.</li>
                        <li><strong>Restorative Practices:</strong> Gentle, restorative yoga styles (like Yoga Nidra) are particularly effective for sleep and fatigue.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.3 Psychological and Quality of Life Outcomes</h4>
                    <ul className={styles.list}>
                        <li><strong>Depression & Anxiety:</strong> Significant improvements in depression and anxiety scores are frequently reported. Yoga's mindfulness component helps manage the psychological burden of chronic pain.</li>
                        <li><strong>Quality of Life:</strong> Overall quality of life improves across multiple domains (physical, mental, social functioning).</li>
                        <li><strong>Pain Acceptance:</strong> Yoga cultivates better pain acceptance and coping strategies, reducing catastrophizing and fear-avoidance behaviors.</li>
                        <li><strong>Self-Efficacy:</strong> Patients develop greater confidence in managing their condition.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.4 Proposed Mechanisms for FM</h4>
                    <ul className={styles.list}>
                        <li><strong>Central Sensitization:</strong> Yoga may modulate central pain processing, reducing hypersensitivity to pain stimuli.</li>
                        <li><strong>Autonomic Regulation:</strong> Improved parasympathetic tone helps regulate stress response and pain perception.</li>
                        <li><strong>Inflammation:</strong> Some studies show reduced inflammatory markers (though evidence is mixed).</li>
                        <li><strong>Neuroplasticity:</strong> Regular practice may alter brain regions involved in pain processing and emotional regulation.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.5 Clinical Recommendations for FM</h4>
                    <p className={styles.text}>
                        <strong>Bottom line for FM:</strong> Yoga is a promising complementary intervention that may reduce pain and improve function, fatigue, and psychological well-being. Clinicians may reasonably offer structured, FM-adapted yoga as part of a multimodal management plan while noting limited long-term evidence.
                    </p>

                    <h3 className={styles.reportSubtitle}>3. Evidence in Osteoarthritis (OA)</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.1 Knee Osteoarthritis</h4>
                    <ul className={styles.list}>
                        <li><strong>Meta-analyses and RCTs:</strong> Systematic reviews and meta-analyses (including 2019 reviews and Cochrane-style assessments) report that yoga may improve pain, stiffness, and physical function in knee OA compared with non-exercise controls. Effects are generally small-to-moderate and heterogeneous.</li>
                        <li><strong>WOMAC Scores:</strong> Improvements in Western Ontario and McMaster Universities Arthritis Index (WOMAC) scores for pain, stiffness, and function are commonly reported.</li>
                        <li><strong>Walking Ability:</strong> Enhanced walking speed and distance, reduced time to complete functional tasks.</li>
                        <li><strong>Joint Stability:</strong> Strengthening of muscles around the knee joint improves stability and reduces fall risk.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.2 Head-to-Head Comparisons</h4>
                    <ul className={styles.list}>
                        <li><strong>Yoga vs. Exercise:</strong> Some RCTs compared yoga with aerobic/strengthening exercise and found that both reduced symptoms. In some trials, yoga was non-inferior to strengthening/aerobic programs, while other trials showed no significant difference.</li>
                        <li><strong>Hatha Yoga Studies:</strong> A 2016 trial found Hatha yoga beneficial for knee OA. More recent large trials (2022–2025) comparing yoga to strengthening exercise showed mixed results (including noninferiority but sometimes no superiority).</li>
                        <li><strong>Patient Preference:</strong> Some patients prefer yoga over traditional exercise due to its holistic, mind-body approach.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.3 Functional and Mechanistic Outcomes</h4>
                    <ul className={styles.list}>
                        <li><strong>Balance & Mobility:</strong> Trials often report improvements in knee function, balance, and self-reported mobility that are clinically relevant for OA patients.</li>
                        <li><strong>Proprioception:</strong> Enhanced joint position sense and body awareness.</li>
                        <li><strong>Muscle Strength:</strong> Increased quadriceps and hamstring strength supports knee joint.</li>
                        <li><strong>Range of Motion:</strong> Gradual improvements in joint flexibility and range of motion.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.4 Other Joint OA</h4>
                    <p className={styles.text}>
                        While most research focuses on knee OA, emerging evidence suggests benefits for hand OA and hip OA as well, though the evidence base is smaller.
                    </p>

                    <h3 className={styles.reportSubtitle}>4. Evidence in Rheumatoid Arthritis (RA)</h3>
                    <ul className={styles.list}>
                        <li><strong>Limited Evidence:</strong> There are fewer RCTs in RA. Systematic reviews conclude limited evidence: small trials suggest potential benefit for pain and function, but overall quality is low and findings are inconsistent.</li>
                        <li><strong>Safety Considerations:</strong> A 2020 systematic review summarized the limited and heterogeneous evidence base and called for better-designed RA trials. Yoga must be carefully adapted to avoid stress on inflamed joints.</li>
                        <li><strong>Gentle Approaches:</strong> Restorative and gentle yoga styles are recommended for RA patients, avoiding aggressive stretching or weight-bearing on inflamed joints.</li>
                        <li><strong>Complementary Role:</strong> Yoga can complement medical management (DMARDs, biologics) but should not replace standard treatment.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>5. Safety and Adverse Events</h3>
                    <ul className={styles.list}>
                        <li><strong>Generally Safe:</strong> Trials in FM and OA report that yoga is generally safe when adapted appropriately. Adverse events are rare and mostly mild (transient muscle soreness, temporary pain increase).</li>
                        <li><strong>Proper Instruction:</strong> Qualified instructors who understand joint limitations and can modify poses are essential.</li>
                        <li><strong>Gradual Progression:</strong> Starting gently and progressing slowly helps prevent injury.</li>
                        <li><strong>Individual Adaptation:</strong> Poses should be modified based on individual joint involvement and pain levels.</li>
                        <li><strong>No Serious Events:</strong> No serious adverse events have been reported in published studies when yoga is properly adapted.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>6. Program Design & Clinical Implementation</h3>
                    <ul className={styles.list}>
                        <li><strong>Optimal Duration:</strong> Most effective programs involve 2-3 sessions per week for 8-12 weeks, with sessions lasting 45-90 minutes.</li>
                        <li><strong>Yoga Styles:</strong> Gentle Hatha yoga, Iyengar yoga (with props), restorative yoga, and chair yoga are commonly used and well-tolerated.</li>
                        <li><strong>Components:</strong> Effective programs combine gentle postures, breathing exercises, relaxation, and meditation/mindfulness.</li>
                        <li><strong>Props and Modifications:</strong> Use of props (blocks, straps, chairs, bolsters) enables safe practice with joint limitations.</li>
                        <li><strong>Home Practice:</strong> Encouraging regular home practice (even 15-20 minutes daily) enhances benefits.</li>
                        <li><strong>Group vs. Individual:</strong> Both formats are effective; group classes offer social support, while individual sessions allow personalized adaptation.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>7. Comparison with Other Interventions</h3>
                    <p className={styles.text}>
                        <strong>Medication:</strong> Yoga complements pharmacological treatment (NSAIDs, DMARDs, pain medications) and may help reduce medication dependence in some patients.
                    </p>
                    <p className={styles.text}>
                        <strong>Physical Therapy:</strong> Yoga can be integrated with physical therapy or serve as a long-term maintenance strategy after PT completion.
                    </p>
                    <p className={styles.text}>
                        <strong>Other Exercise:</strong> Yoga appears comparable to other forms of exercise (aerobic, strengthening) for symptom management, with potential additional benefits for stress, sleep, and psychological well-being.
                    </p>
                    <p className={styles.text}>
                        <strong>Tai Chi:</strong> Some studies compare yoga to Tai Chi, showing similar benefits for both mind-body practices.
                    </p>

                    <h3 className={styles.reportSubtitle}>8. Research Gaps & Future Directions</h3>
                    <ul className={styles.list}>
                        <li><strong>Larger RCTs:</strong> More adequately powered, multi-site trials with standardized protocols are needed.</li>
                        <li><strong>Long-term Follow-up:</strong> Studies tracking outcomes beyond 6-12 months to assess durability of benefits.</li>
                        <li><strong>Mechanism Studies:</strong> Research using biomarkers, neuroimaging, and physiological measures to understand how yoga works.</li>
                        <li><strong>Optimal Dose:</strong> Determining the ideal frequency, duration, and intensity of practice for different conditions.</li>
                        <li><strong>Phenotype-specific:</strong> Identifying which patient subgroups benefit most from yoga.</li>
                        <li><strong>Cost-effectiveness:</strong> Economic analyses comparing yoga to other treatments.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>9. Conclusion</h3>
                    <p className={styles.text}>
                        PubMed research strongly supports yoga as a safe, effective complementary intervention for fibromyalgia and osteoarthritis, with promising but more limited evidence for rheumatoid arthritis. Yoga reduces pain, improves physical function, and enhances psychological well-being and quality of life. The evidence base has matured significantly, with multiple systematic reviews and meta-analyses confirming consistent benefits. Clinicians can confidently recommend structured, appropriately adapted yoga programs as part of a comprehensive, multimodal management plan for these chronic pain conditions. While yoga should not replace standard medical care, it offers a valuable, low-risk addition that empowers patients with self-management tools.
                    </p>

                    <h3 className={styles.reportSubtitle}>Selected References</h3>
                    <ul className={styles.list} style={{ fontSize: '0.95rem' }}>
                        <li><strong>Lauche R, et al. (2019):</strong> Yoga for Osteoarthritis: a Systematic Review and Meta-analysis. <em>Current Rheumatology Reports.</em></li>
                        <li><strong>Cramer H, et al. (2013):</strong> Yoga for fibromyalgia: a systematic review and meta-analysis. <em>Pain.</em></li>
                        <li><strong>Wang C, et al. (2018):</strong> Effect of Tai Chi versus Aerobic Exercise for Fibromyalgia: Comparative Effectiveness Randomized Controlled Trial. <em>BMJ.</em></li>
                        <li><strong>Cheung C, et al. (2017):</strong> Managing knee osteoarthritis with yoga or aerobic/strengthening exercise programs in older adults: a pilot randomized controlled trial. <em>Rheumatology International.</em></li>
                        <li><strong>Evans S, et al. (2010):</strong> Iyengar yoga for young women with rheumatoid arthritis: results from a mixed-methods pilot study. <em>Journal of Pain and Symptom Management.</em></li>
                    </ul>
                </section>

                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Arthritis Foundation</h4>
                            <p>Comprehensive Arthritis Information</p>
                        </a>
                        <a href="https://www.niams.nih.gov/health-topics/arthritis" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NIAMS</h4>
                            <p>Arthritis Resources</p>
                        </a>
                        <a href="https://www.fmaware.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>National Fibromyalgia Association</h4>
                            <p>Fibromyalgia Information and Support</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
