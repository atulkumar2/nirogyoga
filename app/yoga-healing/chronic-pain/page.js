import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './chronic-pain.module.css';

export const metadata = {
    title: "Chronic Pain Management | Nirog Yoga",
    description: "Understanding chronic low back pain and how yoga therapy provides relief through gentle movement and strengthening.",
};

export default function ChronicPain() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding Chronic Pain</h1>
                    <p className={styles.subtitle}>
                        Managing Chronic Low Back Pain Through Yoga
                    </p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is Chronic Low Back Pain?</h2>
                    <p className={styles.text}>
                        Chronic low back pain is pain that persists for 12 weeks or longer, even after an initial injury or underlying cause has been treated. It affects millions of Indians, particularly those with sedentary jobs or poor posture.
                    </p>

                    <h3 className={styles.subheading}>Common Causes</h3>
                    <ul className={styles.list}>
                        <li>Prolonged sitting and sedentary lifestyle</li>
                        <li>Poor posture and ergonomics</li>
                        <li>Muscle weakness and imbalances</li>
                        <li>Degenerative disc disease</li>
                        <li>Stress and muscle tension</li>
                        <li>Previous injuries or trauma</li>
                        <li>Obesity and excess weight</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Strengthening:</strong> Builds core and back muscles for better support</li>
                        <li><strong>Flexibility:</strong> Improves range of motion and reduces stiffness</li>
                        <li><strong>Posture Correction:</strong> Develops body awareness and alignment</li>
                        <li><strong>Pain Relief:</strong> Releases endorphins and reduces inflammation</li>
                        <li><strong>Stress Reduction:</strong> Decreases muscle tension from psychological stress</li>
                        <li><strong>Mind-Body Connection:</strong> Helps understand pain patterns and triggers</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>पुराना दर्द क्या है?</h2>
                    <p className={styles.text}>
                        पुराना कमर दर्द वह दर्द है जो 12 सप्ताह या उससे अधिक समय तक बना रहता है। यह लाखों भारतीयों को प्रभावित करता है, विशेष रूप से उन लोगों को जो बैठे रहने वाली नौकरी करते हैं।
                    </p>
                    <p className={styles.highlight}>
                        योग पीठ दर्द के लिए एक सुरक्षित और प्रभावी उपचार है जो मांसपेशियों को मजबूत करता है और लचीलापन बढ़ाता है।
                    </p>
                </section>

                {/* Extended Research Report */}
                <section className={styles.reportSection}>
                    <h2 className={styles.reportTitle}>In-Depth Research: Impact of Yoga for Chronic Low Back Pain</h2>

                    <h3 className={styles.reportSubtitle}>Introduction</h3>
                    <p className={styles.text}>
                        Chronic low back pain (CLBP), commonly defined as pain localized below the costal margin and above the inferior gluteal folds persisting for 12 weeks or more, is a major cause of disability and health-care utilization worldwide. Because many conventional treatments produce modest and short-lived benefit, mind-body and exercise-based approaches such as yoga have attracted substantial research interest. Clinical trials, systematic reviews and meta-analyses indexed in PubMed have examined whether yoga reduces pain, improves function and quality of life, and whether it is safe and cost-effective for adults with CLBP.
                    </p>

                    <h3 className={styles.reportSubtitle}>Types of Studies and Methodological Features</h3>
                    <p className={styles.text}>
                        The literature on yoga for CLBP includes: randomized controlled trials (RCTs) comparing yoga programs to usual care, education, physical therapy, or other active comparators; pilot and feasibility trials; and several systematic reviews and meta-analyses synthesizing these trials. Trials have tested different yoga styles (commonly Hatha-based therapeutic sequences, Viniyoga variants, programmatic "yoga for back pain" classes) and differing delivery modes (in-person classes, home practice, and lately virtual/telehealth yoga). Systematic reviews typically assessed pain intensity, functional disability, quality of life, and adverse events, and often used standardized effect sizes for meta-analysis.
                    </p>

                    <h3 className={styles.reportSubtitle}>Main Clinical Outcomes - Pain and Function</h3>
                    <p className={styles.text}>
                        Overall, the preponderance of evidence indicates that yoga produces small to moderate short-term improvements in pain and functional disability for adults with CLBP when compared with no exercise or usual care. Several RCTs (including moderately sized trials) reported clinically meaningful improvements in back-related function and reductions in pain after 8-12 week yoga interventions compared with usual care or waitlist controls. For example, a landmark randomized trial offering a structured 12-week yoga program showed greater improvement in back function than usual care.
                    </p>
                    <p className={styles.text}>
                        Meta-analyses and systematic reviews generally find pooled effect sizes favoring yoga for pain intensity and disability, though effect magnitudes vary by comparison group and follow-up time. Compared with non-exercise controls, effects are more robust and often statistically significant; compared with active exercise comparators (e.g., physical therapy, general exercise), yoga usually performs similarly (no consistent superiority). Several systematic reviews concluded that yoga is at least as effective as other exercise-based interventions for improving function and pain in CLBP.
                    </p>

                    <h3 className={styles.reportSubtitle}>Duration and Persistence of Benefit</h3>
                    <p className={styles.text}>
                        Most trials report outcomes at immediate post-intervention (8-12 weeks). Some follow-ups extend to 6 months or 12 months; evidence for sustained long-term benefits is mixed. A subset of trials and meta-analyses report that benefits in pain and function may persist beyond the intervention period for some participants, but heterogeneity among trials (dose, adherence, baseline severity) limits firm conclusions about long-term durability. Thus, short-term improvements are well-supported; long-term maintenance likely requires ongoing practice or booster sessions, as with many exercise interventions.
                    </p>

                    <h3 className={styles.reportSubtitle}>Comparative Effectiveness vs Other Active Treatments</h3>
                    <p className={styles.text}>
                        When yoga is compared head-to-head with other active interventions (structured exercise, physical therapy, or multidisciplinary rehabilitation), most high-quality trials and pooled analyses show no consistent advantage of yoga over active exercise in pain or function. In plain terms: yoga appears comparable to other exercise therapies (neither clearly superior nor inferior), suggesting it is a reasonable and acceptable exercise option for patients who prefer it.
                    </p>

                    <h3 className={styles.reportSubtitle}>Mental-Health, Quality of Life, and Biopsychosocial Outcomes</h3>
                    <p className={styles.text}>
                        Several studies report that yoga yields improvements in psychological outcomes commonly associated with CLBP, including reductions in anxiety and depression symptoms, and improvements in health-related quality of life and perceived well-being. These effects reflect yoga's combined physical and mindfulness components and align with evidence that mind-body approaches can attenuate pain catastrophizing and improve coping. Systematic reviews note that psychological outcomes often improve alongside physical measures, though reporting is heterogeneous.
                    </p>

                    <h3 className={styles.reportSubtitle}>Mechanisms of Action</h3>
                    <p className={styles.text}>Multiple plausible mechanisms are proposed and partially supported by clinical and physiological studies:</p>
                    <ul className={styles.list}>
                        <li><strong>Physical conditioning:</strong> Improved trunk strength, flexibility, postural control and endurance reduce mechanical contributors to pain.</li>
                        <li><strong>Neurophysiological modulation:</strong> Yoga and associated breathing/meditation practices may alter central pain processing, decrease sympathetic arousal, and change pain perception thresholds.</li>
                        <li><strong>Psychosocial changes:</strong> Decreased fear-avoidance, improved mood, better sleep and increased self-efficacy encourage activity and functional recovery.</li>
                        <li><strong>Inflammatory and neurotrophic effects:</strong> Small studies have explored biomarkers (e.g., BDNF, serotonin) with preliminary signals but inconsistent results; larger mechanistic trials remain needed. Overall, the benefit is likely biopsychosocial and multi-modal.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>Safety and Adverse Events</h3>
                    <p className={styles.text}>
                        Across trials and reviews, yoga is generally safe for adults with non-specific CLBP when delivered by trained instructors and appropriately adapted. Reported adverse events are usually minor (transient soreness, increased back pain for a few sessions) and serious events are rare. Reviews emphasize the need for initial screening, tailoring poses (avoiding extreme spinal loading in early stages), and clear instructions for home practice.
                    </p>

                    <h3 className={styles.reportSubtitle}>Newer Developments: Virtual Delivery</h3>
                    <p className={styles.text}>
                        Recent trials (2023-2024) have evaluated virtual and telehealth yoga programs for CLBP and shown feasibility and clinically meaningful improvements in pain and function comparable to in-person programs in some studies. Virtual delivery increases accessibility but depends on user safety, clear instruction, and mechanisms to monitor form and adherence. These innovations are timely given the growth of remote care models.
                    </p>

                    <h3 className={styles.reportSubtitle}>Limitations of the Current Evidence</h3>
                    <p className={styles.text}>Important limitations temper confidence and generalizability:</p>
                    <ul className={styles.list}>
                        <li><strong>Heterogeneity:</strong> Trials vary widely in yoga style, dose, instructor expertise, comparator groups, and outcome measures.</li>
                        <li><strong>Risk of bias:</strong> Some trials have small sample sizes, incomplete blinding (inherent in behavioral interventions), and variable follow-up.</li>
                        <li><strong>Clinical significance:</strong> Pooled effect sizes are sometimes small and may not always reach thresholds deemed clinically important for every patient.</li>
                        <li><strong>Reporting gaps:</strong> Inconsistent reporting of adverse events, adherence, and concurrent therapies.</li>
                        <li><strong>Population differences:</strong> Many trials exclude complex pathology (e.g., severe radiculopathy, prior surgery), so applicability to those subgroups is uncertain.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>Clinical Implications and Practical Recommendations</h3>
                    <p className={styles.text}>
                        Based on the evidence, yoga can be recommended as a safe, evidence-based option for adults with chronic non-specific low back pain, especially for patients who prefer mind-body therapies. Practical points for clinicians:
                    </p>
                    <ul className={styles.list}>
                        <li>Offer yoga as part of an exercise-based treatment plan, or as an alternative to other exercise programs when patient preference favors yoga.</li>
                        <li>Ensure programs are therapeutic and adapted for CLBP (avoid extreme spinal flexion/extension initially, emphasize core control and graded progression).</li>
                        <li>Monitor adherence and pain response; encourage continued practice for maintenance of benefit.</li>
                        <li>Consider virtual programs for patients with access barriers, but ensure instructor guidance and safety checks.</li>
                    </ul>

                    <h3 className={styles.reportSubtitle}>Conclusions</h3>
                    <p className={styles.text}>
                        PubMed-indexed trials and systematic reviews support yoga as a reasonable, generally safe, and effective short-term treatment option for chronic non-specific low back pain. Effects on pain and function are typically small to moderate and often comparable to other exercise therapies; improvements in psychological well-being are an added benefit. Heterogeneity across studies and limited long-term data suggest ongoing research is needed—particularly rigorously powered RCTs comparing standardized therapeutic yoga programs to best-practice physical therapy, and mechanistic studies to clarify biological pathways. Meanwhile, clinicians may reasonably include yoga among exercise-based care options for motivated patients, ensuring safe, tailored instruction.
                    </p>

                    <h3 className={styles.reportSubtitle}>Key References (PubMed / PMC sources)</h3>
                    <ul className={styles.list} style={{ fontSize: '0.95rem' }}>
                        <li><strong>Wieland LS, et al. (2022):</strong> Yoga for chronic non-specific low back pain. <em>Cochrane Database Syst Rev.</em></li>
                        <li><strong>Tilbrook HE, et al. (2011):</strong> Yoga for chronic low back pain: a randomized trial. <em>Ann Intern Med.</em></li>
                        <li><strong>Chang DG, et al. (2016):</strong> Yoga as a treatment for chronic low back pain: a review of mechanisms and clinical evidence. <em>Evid Based Complement Alternat Med.</em></li>
                        <li><strong>Tankha H, et al. (2024):</strong> Effectiveness of Virtual Yoga for Chronic Low Back Pain. <em>JAMA Netw Open.</em></li>
                        <li><strong>Zou L, et al. (2019):</strong> Are mindful exercises (tai chi, qigong, and yoga) safe and beneficial for treating chronic low back pain? <em>Meta-analysis.</em></li>
                        <li><strong>Whitehead A, et al. (2017):</strong> Yoga treatment for chronic non-specific low back pain. <em>BMJ/Systematic review.</em></li>
                        <li><strong>Kim SD, et al. (2020):</strong> Twelve weeks of yoga for chronic nonspecific lower back pain: randomized controlled study.</li>
                        <li><strong>Nikolis A, et al. (2024):</strong> Yoga as an Adjunctive Treatment for Chronic Low Back Pain. <em>Pain Physician.</em></li>
                    </ul>
                </section>

                <section className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.ninds.nih.gov/low-back-pain-fact-sheet" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NINDS</h4>
                            <p>Low Back Pain Information</p>
                        </a>
                        <a href="https://www.mayoclinic.org/diseases-conditions/back-pain" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Mayo Clinic</h4>
                            <p>Back Pain Guide</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
