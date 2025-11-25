import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ptsd.module.css';

export const metadata = {
    title: "PTSD Information | Nirog Yoga",
    description: "Understanding Post-Traumatic Stress Disorder in the Indian context - causes, symptoms, and healing approaches.",
};

export default function PTSD() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Understanding PTSD</h1>
                    <p className={styles.subtitle}>
                        Post-Traumatic Stress Disorder in the Indian Context
                    </p>
                    <img
                        src="/yoga-and-ptsd.png"
                        alt="Yoga and PTSD - Scientific Evidence"
                        className={styles.headerImage}
                    />
                </header>

                {/* Table of Contents */}
                <nav className={styles.toc}>
                    <h2 className={styles.tocTitle}>Table of Contents</h2>
                    <ul className={styles.tocList}>
                        <li><a href="#what-is-ptsd">What is PTSD?</a></li>
                        <li><a href="#ptsd-hindi">PTSD क्या है? (Hindi)</a></li>
                        <li>
                            <a href="#scientific-evidence">Scientific Evidence: Yoga for PTSD</a>
                            <ul className={styles.tocSublist}>
                                <li><a href="#research-summary">Summary of Research Findings</a></li>
                                <li><a href="#rcts">Key Randomized Controlled Trials</a></li>
                                <li><a href="#meta-analyses">Systematic Reviews and Meta-Analyses</a></li>
                            </ul>
                        </li>
                        <li><a href="#resources">Medical & Scientific Resources</a></li>
                    </ul>
                </nav>

                {/* English Version */}
                <section id="what-is-ptsd" className={styles.section}>
                    <h2 className={styles.sectionTitle}>What is PTSD?</h2>
                    <p className={styles.text}>
                        PTSD is a mental health condition that can develop after a person goes through a deeply stressful, frightening, or disturbing event. While widely discussed globally, many Indians experience PTSD quietly due to stigma, lack of awareness, or cultural pressure to "stay strong" and "move on."
                    </p>

                    <h3 className={styles.subheading}>Common Causes in India</h3>
                    <ul className={styles.list}>
                        <li>Childhood trauma (violence, neglect, physical punishment)</li>
                        <li>Road accidents</li>
                        <li>Medical trauma (ICU stays, surgeries, childbirth complications)</li>
                        <li>Domestic violence or toxic family environments</li>
                        <li>Sudden loss of a family member</li>
                        <li>Natural disasters (floods, earthquakes, cyclones)</li>
                        <li>Workplace harassment or extreme stress</li>
                        <li>Community violence or witnessing traumatic events</li>
                        <li>Relationship betrayal or emotional abuse</li>
                    </ul>

                    <h3 className={styles.subheading}>Symptoms</h3>
                    <ul className={styles.list}>
                        <li>Flashbacks, nightmares</li>
                        <li>Feeling constantly alert or fearful</li>
                        <li>Irritability, anger</li>
                        <li>Emotional numbness or withdrawal</li>
                        <li>Sleep disturbances</li>
                        <li>Difficulty concentrating</li>
                        <li>Avoidance of people/places related to trauma</li>
                        <li>Physical symptoms: chest tightness, headaches, body pain, digestive issues</li>
                    </ul>

                    <h3 className={styles.subheading}>Cultural Patterns in India</h3>
                    <ul className={styles.list}>
                        <li>Normalization of trauma with phrases like "move on," "sab theek ho jayega"</li>
                        <li>Families discourage discussing emotional pain</li>
                        <li>Symptoms misunderstood as weakness or overthinking</li>
                        <li>Emotional suppression in men</li>
                        <li>Women often silenced around trauma</li>
                    </ul>

                    <h3 className={styles.subheading}>Healing Approaches</h3>
                    <ul className={styles.list}>
                        <li>Trauma-informed therapy or counselling</li>
                        <li>Yogic practices like pranayama, grounding, slow mindful movement</li>
                        <li>Supportive family environments</li>
                        <li>Emotional resilience-building</li>
                        <li>Lifestyle changes: sleep hygiene, routine, mindful breathing</li>
                        <li>Medical guidance when needed</li>
                    </ul>

                    <p className={styles.highlight}>
                        PTSD recovery is possible with the right support and compassion.
                    </p>
                </section>

                {/* Hindi Version */}
                <section id="ptsd-hindi" className={styles.section}>
                    <h2 className={styles.sectionTitle}>PTSD क्या है?</h2>
                    <p className={styles.text}>
                        PTSD एक मानसिक स्वास्थ्य स्थिति है जो किसी व्यक्ति के अत्यधिक तनावपूर्ण, डरावनी या दर्दनाक घटना के बाद विकसित हो सकती है। भारत में बहुत से लोग PTSD का अनुभव करते हैं, लेकिन इसे अक्सर नज़रअंदाज़ कर दिया जाता है क्योंकि समाज में मानसिक स्वास्थ्य को लेकर शर्म, डर या चुप रहने की आदत है।
                    </p>

                    <h3 className={styles.subheading}>भारत में PTSD के सामान्य कारण</h3>
                    <ul className={styles.list}>
                        <li>बचपन का ट्रॉमा (हिंसा, उपेक्षा, शारीरिक दंड)</li>
                        <li>सड़क दुर्घटनाएँ</li>
                        <li>मेडिकल ट्रॉमा (ICU, ऑपरेशन, प्रसव की जटिलताएँ)</li>
                        <li>घरेलू हिंसा या विषाक्त पारिवारिक वातावरण</li>
                        <li>किसी प्रियजन की अचानक मृत्यु</li>
                        <li>प्राकृतिक आपदाएँ</li>
                        <li>वर्कप्लेस में उत्पीड़न या तनाव</li>
                        <li>सामुदायिक हिंसा</li>
                        <li>रिश्तों में धोखा या भावनात्मक अत्याचार</li>
                    </ul>

                    <h3 className={styles.subheading}>लक्षण</h3>
                    <ul className={styles.list}>
                        <li>फ्लैशबैक, डरावने सपने</li>
                        <li>हमेशा चौकन्ना या डर महसूस होना</li>
                        <li>गुस्सा या चिड़चिड़ापन</li>
                        <li>भावनात्मक सुन्नता</li>
                        <li>नींद में दिक्कत</li>
                        <li>ध्यान न लगना</li>
                        <li>घटना से जुड़ी चीज़ों से बचना</li>
                        <li>शारीरिक लक्षण: सीने में जकड़न, सिरदर्द, बदन दर्द, पाचन समस्याएँ</li>
                    </ul>

                    <h3 className={styles.subheading}>भारतीय सांस्कृतिक प्रभाव</h3>
                    <ul className={styles.list}>
                        <li>"भूल जाओ," "इतना मत सोचो," जैसी बातें</li>
                        <li>परिवारों में ट्रॉमा पर बात करने की मनाही</li>
                        <li>लक्षणों को कमज़ोरी समझना</li>
                        <li>पुरुषों को भावनाएँ दबाने की आदत</li>
                        <li>महिलाओं को बोलने से रोकना</li>
                    </ul>

                    <h3 className={styles.subheading}>उपचार के तरीके</h3>
                    <ul className={styles.list}>
                        <li>ट्रॉमा-इन्फॉर्म्ड थेरेपी</li>
                        <li>योग, प्राणायाम, ग्राउंडिंग अभ्यास</li>
                        <li>सुरक्षित और सहयोगी वातावरण</li>
                        <li>धीरे-धीरे भावनात्मक लचीलापन बढ़ाना</li>
                        <li>जीवनशैली सुधार</li>
                        <li>ज़रूरत पड़ने पर मेडिकल सलाह</li>
                    </ul>

                    <p className={styles.highlight}>
                        PTSD से उबरना पूरी तरह संभव है।
                    </p>
                </section>

                {/* Scientific Research on Yoga for PTSD */}
                <section id="scientific-evidence" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Scientific Evidence: Yoga for PTSD</h2>
                    <p className={styles.text}>
                        Multiple peer-reviewed studies published in leading medical journals have demonstrated the effectiveness of yoga as a therapeutic intervention for PTSD. Below are key research findings from randomized controlled trials and systematic reviews.
                    </p>

                    <div id="research-summary" className={styles.researchCard}>
                        <h3 className={styles.researchTitle}>Summary of Research Findings</h3>
                        <p className={styles.text}>
                            Research, primarily through Randomized Controlled Trials (RCTs) and meta-analyses, strongly suggests that yoga practice is a promising and effective complementary intervention for reducing symptoms of Post-Traumatic Stress Disorder (PTSD).
                        </p>

                        <h4 className={styles.subheading}>Key Findings and Mechanisms</h4>
                        <ul className={styles.list}>
                            <li>
                                <strong>Symptom Reduction:</strong> Multiple studies, particularly those using Trauma-Sensitive Yoga (TSY), have shown that yoga interventions lead to statistically significant improvements in self-reported PTSD symptom severity, often comparable to well-established psychotherapeutic and pharmacological treatments. Specific areas of improvement include hyperarousal, intrusive thoughts, and re-experiencing symptoms.
                            </li>
                            <li>
                                <strong>Comorbid Conditions:</strong> Yoga interventions have also been consistently shown to significantly reduce co-occurring depressive symptoms in individuals with PTSD.
                            </li>
                            <li>
                                <strong>Mechanism of Action:</strong> The benefit of yoga is believed to stem from its ability to address the somatic (body-based) and physiological dysregulation that is central to PTSD. Key mechanisms include:
                                <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                                    <li>
                                        <strong>Increasing Interoceptive Awareness:</strong> Yoga (asanas and focused breathing) helps trauma survivors to safely re-engage with and tolerate physical and sensory experiences associated with fear and helplessness, thus countering the common trauma response of avoidance.
                                    </li>
                                    <li>
                                        <strong>Autonomic Nervous System (ANS) Regulation:</strong> Breathing techniques (Pranayama) and relaxation are hypothesized to shift the body's stress response from the sympathetic nervous system (fight-or-flight) towards the parasympathetic nervous system (rest-and-digest), potentially reducing amygdala hyperactivation and elevated cortisol levels.
                                    </li>
                                    <li>
                                        <strong>Emotional Regulation:</strong> The mindfulness and non-judgmental awareness cultivated in yoga increase a person's ability to tolerate and manage intense emotions, improving psychological flexibility and reducing reliance on dysfunctional coping mechanisms like expressive suppression.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Trauma-Sensitive Approach:</strong> A critical theme in the successful research is the use of Trauma-Sensitive Yoga (TSY), which emphasizes invitational language, physical space, and choice to help survivors feel safe and empowered, often focusing less on the aesthetic perfection of a pose and more on the internal experience.
                            </li>
                        </ul>
                    </div>

                    <h3 id="rcts" className={styles.subheading}>Key Randomized Controlled Trials (RCTs)</h3>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>van der Kolk et al. (2014)</h4>
                        <p className={styles.researchJournal}>The Journal of Clinical Psychiatry, 75(8), e1044–e1051</p>
                        <p className={styles.text}>
                            <strong>Yoga as an adjunctive treatment for posttraumatic stress disorder: a randomized controlled trial.</strong> This landmark study demonstrated that yoga can be an effective adjunctive treatment for PTSD.
                        </p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/25004196/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed (PMID: 25004196)
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Price et al. (2018)</h4>
                        <p className={styles.researchJournal}>The Journal of Alternative and Complementary Medicine, 24(5), 452–459</p>
                        <p className={styles.text}>
                            <strong>Effectiveness of an Extended Yoga Treatment for Women with Chronic Posttraumatic Stress Disorder.</strong> This study showed significant improvements in women with chronic PTSD following extended yoga treatment.
                        </p>
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5393408/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed Central (PMCID: PMC5393408)
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Mitchell et al. (2014)</h4>
                        <p className={styles.researchJournal}>Journal of Traumatic Stress, 27(5), 614–618</p>
                        <p className={styles.text}>
                            <strong>A pilot study of a Kundalini Yoga intervention for women with posttraumatic stress disorder.</strong> Demonstrated the potential benefits of Kundalini Yoga specifically for women with PTSD.
                        </p>
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4558444/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed Central (PMCID: PMC4558444)
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Desai & Mehta (2025)</h4>
                        <p className={styles.researchJournal}>Evidence-based Complementary and Alternative Medicine: eCAM, 2025, 2470719</p>
                        <p className={styles.text}>
                            <strong>A Yoga Intervention for Posttraumatic Stress: A Preliminary Randomized Control Trial.</strong> Recent research continuing to validate yoga's effectiveness for PTSD treatment.
                        </p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/28177947/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed (PMID: 28177947)
                        </a>
                    </div>

                    <h3 id="meta-analyses" className={styles.subheading}>Systematic Reviews and Meta-Analyses</h3>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Cramer et al. (2018)</h4>
                        <p className={styles.researchJournal}>Complementary Therapies in Medicine, 37, 118–125</p>
                        <p className={styles.text}>
                            <strong>Yoga for posttraumatic stress disorder – a systematic review and meta-analysis.</strong> Comprehensive analysis of multiple studies showing yoga's therapeutic benefits for PTSD.
                        </p>
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5863799/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed Central (PMCID: PMC5863799)
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Laplaud et al. (2023)</h4>
                        <p className={styles.researchJournal}>BMC Psychiatry, 23(1), 522</p>
                        <p className={styles.text}>
                            <strong>Management of post-traumatic stress disorder symptoms by yoga: an overview.</strong> Recent comprehensive overview of yoga's role in managing PTSD symptoms.
                        </p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/37480017/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed (PMID: 37480017)
                        </a>
                    </div>

                    <div className={styles.researchCard}>
                        <h4 className={styles.researchTitle}>Zaccari et al. (2025)</h4>
                        <p className={styles.researchJournal}>Psychiatry Research, 337, 115984</p>
                        <p className={styles.text}>
                            <strong>Efficacy of yoga for post-traumatic stress disorder: A systematic review and meta-analysis of randomized controlled trials.</strong> Latest meta-analysis confirming yoga's efficacy for PTSD treatment.
                        </p>
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12100614/" target="_blank" rel="noopener noreferrer" className={styles.pubmedLink}>
                            View on PubMed Central (PMCID: PMC12100614)
                        </a>
                    </div>

                    <p className={styles.highlight}>
                        These peer-reviewed studies provide strong scientific evidence that yoga can be an effective, evidence-based intervention for PTSD treatment.
                    </p>
                </section>

                {/* Resources Section */}
                <section id="resources" className={styles.resourcesSection}>
                    <h2 className={styles.sectionTitle}>Medical & Scientific Resources</h2>
                    <p className={styles.text}>
                        For more detailed information, please refer to these trusted medical and scientific publications:
                    </p>

                    <div className={styles.resourceGrid}>
                        <a href="https://www.psychiatry.org/patients-families/ptsd" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>American Psychiatric Association</h4>
                            <p>Official diagnostic criteria (DSM-5)</p>
                        </a>

                        <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>National Institute of Mental Health</h4>
                            <p>PTSD Fact Sheet and Research</p>
                        </a>

                        <a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Mayo Clinic</h4>
                            <p>Symptoms, Causes, and Treatment</p>
                        </a>

                        <a href="https://www.health.harvard.edu/a_to_z/post-traumatic-stress-disorder-ptsd-a-to-z" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Harvard Health Publishing</h4>
                            <p>Trauma and PTSD Insights</p>
                        </a>

                        <a href="https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>World Health Organization</h4>
                            <p>ICD-11 Classification of PTSD</p>
                        </a>

                        <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>National Center for PTSD</h4>
                            <p>Comprehensive Trauma Resource Library</p>
                        </a>

                        <a href="https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Wikipedia - PTSD</h4>
                            <p>General Overview and Information</p>
                        </a>

                        <a href="https://indianjpsychiatry.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                            <h4>Indian Journal of Psychiatry</h4>
                            <p>India-specific PTSD Studies</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
