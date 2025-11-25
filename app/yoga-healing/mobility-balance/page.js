import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './mobility-balance.module.css';

export const metadata = {
    title: "Yoga for Mobility, Balance & Parkinson's Disease | Nirog Yoga",
    description: "Comprehensive scientific evidence on how yoga improves mobility, balance, gait, and quality of life in aging adults and Parkinson's disease patients.",
};

export default function MobilityBalance() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga for Mobility, Balance & Parkinson's Disease</h1>
                    <p className={styles.subtitle}>
                        Enhancing Movement, Stability, and Quality of Life Through Evidence-Based Practice
                    </p>
                </header>

                {/* Table of Contents */}
                <nav className={styles.toc}>
                    <h2 className={styles.tocTitle}>Table of Contents</h2>
                    <ul className={styles.tocList}>
                        <li><a href="#understanding">Understanding Mobility, Balance & Parkinson's Disease</a></li>
                        <li>
                            <a href="#scientific-findings">Scientific Findings</a>
                            <ul className={styles.tocSublist}>
                                <li><a href="#summary">Summary</a></li>
                                <li><a href="#overview">Overview of PubMed Literature</a></li>
                                <li><a href="#balance">Effects on Balance in Older Adults</a></li>
                                <li><a href="#mobility">Effects on Mobility and Gait</a></li>
                                <li><a href="#parkinsons">Evidence in Parkinson's Disease</a></li>
                                <li><a href="#program-design">Program Design & Clinical Implementation</a></li>
                                <li><a href="#comparisons">Comparison with Other Interventions</a></li>
                                <li><a href="#research-gaps">Research Gaps & Future Directions</a></li>
                                <li><a href="#conclusion">Conclusion</a></li>
                                <li><a href="#references">Selected References</a></li>
                            </ul>
                        </li>
                        <li><a href="#resources">Resources</a></li>
                    </ul>
                </nav>

                <section id="understanding" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Understanding Mobility, Balance & Parkinson's Disease</h2>
                    <p className={styles.text}>
                        Mobility and balance challenges are common in aging adults and neurological conditions like Parkinson's disease (PD). These issues increase fall risk, reduce independence, and impact quality of life. Parkinson's disease is a progressive neurodegenerative disorder characterized by motor symptoms (tremor, rigidity, bradykinesia, postural instability) and non-motor symptoms (depression, anxiety, sleep disturbances).
                    </p>

                    <h3 className={styles.subheading}>Common Challenges</h3>
                    <ul className={styles.list}>
                        <li>Reduced balance and increased fall risk</li>
                        <li>Gait disturbances and shuffling walk</li>
                        <li>Muscle weakness and reduced flexibility</li>
                        <li>Postural instability and stooped posture</li>
                        <li>Fear of falling leading to reduced activity</li>
                        <li>Loss of independence in daily activities</li>
                        <li>Depression and anxiety related to mobility limitations</li>
                    </ul>

                    <h3 className={styles.subheading}>How Yoga Helps</h3>
                    <ul className={styles.list}>
                        <li><strong>Balance Training:</strong> Standing poses and balance exercises improve stability and reduce fall risk</li>
                        <li><strong>Strength Building:</strong> Weight-bearing poses strengthen muscles supporting mobility</li>
                        <li><strong>Flexibility:</strong> Gentle stretching improves range of motion and reduces stiffness</li>
                        <li><strong>Gait Improvement:</strong> Mindful movement practices enhance walking patterns</li>
                        <li><strong>Postural Awareness:</strong> Body awareness exercises improve posture and alignment</li>
                        <li><strong>Confidence Building:</strong> Progressive practice reduces fear of falling</li>
                        <li><strong>Mental Health:</strong> Meditation and breathing reduce anxiety and depression</li>
                    </ul>
                </section>

                {/* Extended Research Report */}
                <section id="scientific-findings" className={styles.reportSection}>
                    <h2 className={styles.reportTitle}>Scientific Findings: Impact of Yoga on Mobility, Balance, and Parkinson's Disease</h2>

                    <h3 id="summary" className={styles.reportSubtitle}>Summary</h3>
                    <p className={styles.text}>
                        PubMed-indexed systematic reviews and randomized controlled trials demonstrate that yoga improves balance, mobility, gait, and quality of life in older adults and individuals with Parkinson's disease. Evidence is strongest for balance outcomes in healthy older adults and shows promise for motor and non-motor symptoms in PD. Yoga is safe when appropriately adapted and offers a holistic approach addressing physical, cognitive, and emotional aspects of movement disorders.
                    </p>

                    <h3 id="overview" className={styles.reportSubtitle}>1. Overview of PubMed Literature</h3>
                    <p className={styles.text}>
                        The evidence base includes:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Systematic Reviews & Meta-analyses:</strong> Multiple comprehensive reviews (2015-2024) synthesize findings on yoga for balance, falls prevention, and Parkinson's disease.</li>
                        <li><strong>Randomized Controlled Trials:</strong> Well-designed RCTs comparing yoga to usual care, exercise programs, and other interventions in older adults and PD patients.</li>
                        <li><strong>Population Diversity:</strong> Studies include healthy older adults, community-dwelling seniors at risk for falls, and individuals with mild-to-moderate Parkinson's disease.</li>
                        <li><strong>Intervention Variety:</strong> Research examines various yoga styles (Hatha, Iyengar, chair yoga) adapted for mobility limitations.</li>
                    </ul>

                    <h3 id="balance" className={styles.reportSubtitle}>2. Effects on Balance in Older Adults</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.1 Meta-analytic Evidence</h4>
                    <ul className={styles.list}>
                        <li><strong>Static Balance:</strong> Systematic reviews consistently report improvements in static balance measures (e.g., single-leg stance time, Berg Balance Scale) with moderate effect sizes.</li>
                        <li><strong>Dynamic Balance:</strong> Improvements in dynamic balance tests (e.g., Timed Up and Go, functional reach) are documented across multiple studies.</li>
                        <li><strong>Fall Risk Reduction:</strong> Some studies show reduced fall risk scores, though direct evidence of fall prevention requires larger trials.</li>
                        <li><strong>Dose-Response:</strong> Programs of 8-12 weeks with 2-3 sessions per week show optimal benefits.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.2 Mechanisms for Balance Improvement</h4>
                    <ul className={styles.list}>
                        <li><strong>Proprioception:</strong> Yoga enhances body awareness and joint position sense, critical for balance.</li>
                        <li><strong>Muscle Strength:</strong> Strengthening of ankle, hip, and core muscles improves postural control.</li>
                        <li><strong>Attention & Focus:</strong> Mindful movement practice improves cognitive aspects of balance control.</li>
                        <li><strong>Vestibular Integration:</strong> Head movements in yoga poses may enhance vestibular function.</li>
                        <li><strong>Confidence:</strong> Reduced fear of falling through progressive challenge and mastery.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>2.3 Comparison with Other Interventions</h4>
                    <ul className={styles.list}>
                        <li><strong>Versus Exercise:</strong> Some studies show yoga comparable to conventional balance training or Tai Chi for balance outcomes.</li>
                        <li><strong>Versus Usual Care:</strong> Consistent superiority over no-treatment controls.</li>
                        <li><strong>Unique Benefits:</strong> Yoga may offer additional advantages for flexibility, stress reduction, and mind-body integration.</li>
                    </ul>

                    <h3 id="mobility" className={styles.reportSubtitle}>3. Effects on Mobility and Gait</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.1 Gait Parameters</h4>
                    <ul className={styles.list}>
                        <li><strong>Walking Speed:</strong> Improvements in gait speed documented in several RCTs, clinically meaningful for functional independence.</li>
                        <li><strong>Stride Length:</strong> Some studies show increased stride length, reducing shuffling gait patterns.</li>
                        <li><strong>Gait Variability:</strong> Reduced gait variability may improve stability and reduce fall risk.</li>
                        <li><strong>Dual-Task Performance:</strong> Improved ability to walk while performing cognitive tasks.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>3.2 Functional Mobility</h4>
                    <ul className={styles.list}>
                        <li><strong>Timed Up and Go (TUG):</strong> Consistent improvements in TUG test times across studies.</li>
                        <li><strong>Six-Minute Walk Test:</strong> Increased walking distance indicating improved endurance.</li>
                        <li><strong>Activities of Daily Living:</strong> Better performance in functional tasks like climbing stairs, getting up from a chair.</li>
                        <li><strong>Independence:</strong> Maintained or improved ability to perform daily activities independently.</li>
                    </ul>

                    <h3 id="parkinsons" className={styles.reportSubtitle}>4. Evidence in Parkinson's Disease</h3>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.1 Motor Symptoms</h4>
                    <ul className={styles.list}>
                        <li><strong>UPDRS Scores:</strong> Several RCTs report improvements in Unified Parkinson's Disease Rating Scale (UPDRS) motor scores, indicating reduced motor symptom severity.</li>
                        <li><strong>Balance & Postural Stability:</strong> Significant improvements in balance measures and reduced postural instability, addressing a major fall risk factor in PD.</li>
                        <li><strong>Gait & Mobility:</strong> Enhanced gait speed, stride length, and functional mobility (TUG, 6-minute walk test).</li>
                        <li><strong>Flexibility & Range of Motion:</strong> Reduced rigidity and improved joint flexibility, particularly beneficial for PD-related stiffness.</li>
                        <li><strong>Freezing of Gait:</strong> Some evidence for reduced freezing episodes, though more research needed.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.2 Non-Motor Symptoms</h4>
                    <ul className={styles.list}>
                        <li><strong>Depression & Anxiety:</strong> Significant improvements in mood and anxiety symptoms, which are common and debilitating in PD.</li>
                        <li><strong>Sleep Quality:</strong> Better sleep reported in several studies, addressing a major quality of life issue.</li>
                        <li><strong>Cognitive Function:</strong> Some evidence for improved attention, executive function, and processing speed.</li>
                        <li><strong>Fatigue:</strong> Reduced fatigue levels, improving daily functioning.</li>
                        <li><strong>Quality of Life:</strong> Consistent improvements in PD-specific quality of life measures (PDQ-39).</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.3 Proposed Mechanisms in PD</h4>
                    <ul className={styles.list}>
                        <li><strong>Neuroplasticity:</strong> Yoga may promote neuroplastic changes in motor and cognitive networks, potentially slowing disease progression.</li>
                        <li><strong>Dopaminergic Modulation:</strong> Physical activity and mindfulness may influence dopamine systems.</li>
                        <li><strong>Stress Reduction:</strong> Reduced stress and cortisol may have neuroprotective effects.</li>
                        <li><strong>Inflammation:</strong> Anti-inflammatory effects may benefit neurodegeneration.</li>
                        <li><strong>Motor Learning:</strong> Repetitive, mindful movement practice enhances motor learning and compensation strategies.</li>
                        <li><strong>Autonomic Function:</strong> Improved autonomic balance may address non-motor symptoms.</li>
                    </ul>

                    <h4 className={styles.text} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>4.4 Safety in Parkinson's Disease</h4>
                    <ul className={styles.list}>
                        <li><strong>Generally Safe:</strong> Yoga is safe when appropriately adapted for PD patients with balance issues and motor limitations.</li>
                        <li><strong>Adaptations Needed:</strong> Use of chairs, props, and modifications for balance challenges; close supervision initially.</li>
                        <li><strong>No Serious Adverse Events:</strong> Published studies report no serious adverse events when yoga is properly adapted.</li>
                        <li><strong>Fall Prevention:</strong> Proper instruction and environmental safety (mats, wall support) minimize fall risk during practice.</li>
                    </ul>

                    <h3 id="program-design" className={styles.reportSubtitle}>5. Program Design & Clinical Implementation</h3>
                    <ul className={styles.list}>
                        <li><strong>Optimal Duration:</strong> Most effective programs involve 2-3 sessions per week for 8-12 weeks, with ongoing practice for maintenance.</li>
                        <li><strong>Yoga Styles:</strong> Gentle Hatha yoga, Iyengar yoga (with props), chair yoga, and PD-specific adapted programs are commonly used.</li>
                        <li><strong>Components:</strong> Effective programs combine standing balance poses, strengthening postures, flexibility exercises, breathing practices, and relaxation.</li>
                        <li><strong>Props & Modifications:</strong> Essential use of chairs, walls, blocks, straps, and other props to ensure safety and accessibility.</li>
                        <li><strong>Qualified Instruction:</strong> Instructors should have training in working with older adults and/or neurological conditions.</li>
                        <li><strong>Individualization:</strong> Programs should be adapted to individual disease stage, mobility level, and comorbidities.</li>
                        <li><strong>Home Practice:</strong> Encouraging safe home practice (with caregiver support if needed) enhances benefits.</li>
                    </ul>

                    <h3 id="comparisons" className={styles.reportSubtitle}>6. Comparison with Other Interventions</h3>
                    <p className={styles.text}>
                        <strong>Physical Therapy:</strong> Yoga can complement PT or serve as a long-term maintenance strategy. Some studies show comparable benefits to conventional PT for balance.
                    </p>
                    <p className={styles.text}>
                        <strong>Tai Chi:</strong> Both yoga and Tai Chi show benefits for balance and mobility; choice may depend on patient preference and availability.
                    </p>
                    <p className={styles.text}>
                        <strong>Conventional Exercise:</strong> Yoga appears comparable to strengthening and balance training programs, with potential additional benefits for flexibility, stress, and mind-body integration.
                    </p>
                    <p className={styles.text}>
                        <strong>Medication (PD):</strong> Yoga complements pharmacological treatment (levodopa, dopamine agonists) and may help manage medication side effects and non-motor symptoms.
                    </p>

                    <h3 id="research-gaps" className={styles.reportSubtitle}>7. Research Gaps & Future Directions</h3>
                    <ul className={styles.list}>
                        <li><strong>Larger PD Trials:</strong> More adequately powered RCTs in Parkinson's disease with longer follow-up periods.</li>
                        <li><strong>Fall Prevention:</strong> Direct measurement of fall rates and injuries in large prospective studies.</li>
                        <li><strong>Disease Modification:</strong> Research on whether yoga can slow PD progression or have neuroprotective effects.</li>
                        <li><strong>Mechanism Studies:</strong> Neuroimaging and biomarker research to understand how yoga affects brain structure and function in PD.</li>
                        <li><strong>Optimal Dose:</strong> Determining ideal frequency, duration, and intensity for different populations and disease stages.</li>
                        <li><strong>Cost-Effectiveness:</strong> Economic analyses comparing yoga to other interventions for balance and PD.</li>
                        <li><strong>Implementation:</strong> Research on how to effectively integrate yoga into clinical care and community settings.</li>
                    </ul>

                    <h3 id="conclusion" className={styles.reportSubtitle}>8. Conclusion</h3>
                    <p className={styles.text}>
                        PubMed research strongly supports yoga as a safe, effective intervention for improving balance, mobility, and gait in older adults and individuals with Parkinson's disease. The evidence is strongest for balance outcomes in healthy seniors and shows consistent promise for both motor and non-motor symptoms in PD. Yoga offers a holistic approach that addresses physical, cognitive, and emotional aspects of movement disorders. Clinicians can confidently recommend appropriately adapted yoga programs as part of comprehensive care for mobility challenges and Parkinson's disease. While more research is needed, particularly larger trials in PD and fall prevention studies, the current evidence supports yoga as a valuable, low-risk intervention that empowers individuals with tools for maintaining and improving mobility, independence, and quality of life.
                    </p>

                    <h3 id="references" className={styles.reportSubtitle}>Selected References</h3>
                    <ul className={styles.list} style={{ fontSize: '0.95rem' }}>
                        <li><strong>Kwok JYY, et al. (2019):</strong> Effects of Mindfulness Yoga vs Stretching and Resistance Training Exercises on Anxiety and Depression for People With Parkinson Disease: A Randomized Clinical Trial. <em>JAMA Neurology.</em></li>
                        <li><strong>Ni M, et al. (2014):</strong> Comparative effect of power training and high-speed yoga on motor function in older patients with Parkinson disease. <em>Archives of Physical Medicine and Rehabilitation.</em></li>
                        <li><strong>Schmid AA, et al. (2012):</strong> Yoga leads to multiple physical improvements after stroke, a pilot study. <em>Complementary Therapies in Medicine.</em></li>
                        <li><strong>Youkhana S, et al. (2016):</strong> Yoga-based exercise improves balance and mobility in people aged 60 and over: a systematic review and meta-analysis. <em>Age and Ageing.</em></li>
                        <li><strong>Cheung C, et al. (2022):</strong> Effects of yoga on oxidative stress, motor function, and non-motor symptoms in Parkinson's disease: a pilot randomized controlled trial. <em>Pilot and Feasibility Studies.</em></li>
                    </ul>
                </section>

                <section id="resources" className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Resources</h2>
                    <div className={styles.resourceGrid}>
                        <a href="https://www.parkinson.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Parkinson's Foundation</h4>
                            <p>Comprehensive Parkinson's Disease Information</p>
                        </a>
                        <a href="https://www.michaeljfox.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Michael J. Fox Foundation</h4>
                            <p>Parkinson's Research and Resources</p>
                        </a>
                        <a href="https://www.nia.nih.gov/health/balance-problems-and-disorders" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>NIA - Balance Disorders</h4>
                            <p>National Institute on Aging</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
