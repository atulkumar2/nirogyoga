import styles from './TherapyList.module.css';

const conditions = [
    { name: "Post-Traumatic Stress Disorder (PTSD)", link: "/yoga-healing/ptsd" },
    { name: "Chronic Stress, Anxiety & Depression", link: "/yoga-healing/anxiety-depression" },
    { name: "ADHD in children", link: "/yoga-healing/adhd" },
    { name: "Chronic Low Back Pain", link: "/yoga-healing/chronic-pain" },
    { name: "Fibromyalgia & Arthritis", link: "/yoga-healing/arthritis" },
    { name: "Mobility & Balance issues (including Parkinson's)", link: "/yoga-healing/mobility-balance" },
    { name: "Migraine & Chronic Headaches", link: "https://en.wikipedia.org/wiki/Migraine" },
    { name: "Insomnia & Sleep Disorders", link: "/yoga-healing/insomnia" },
    { name: "Thickening of cerebral cortex", link: "https://en.wikipedia.org/wiki/Cerebral_cortex" },
    { name: "Acid-peptic diseases", link: "https://en.wikipedia.org/wiki/Peptic_ulcer_disease" },
    { name: "Lipid & Liver disorders", link: "https://en.wikipedia.org/wiki/Dyslipidemia" },
    { name: "Irritable Bowel Syndrome (IBS)", link: "https://en.wikipedia.org/wiki/Irritable_bowel_syndrome" },
    { name: "Blood Pressure disorders", link: "/yoga-healing/hypertension" },
    { name: "Coronary Artery Disease", link: "https://en.wikipedia.org/wiki/Coronary_artery_disease" },
    { name: "Type 2 Diabetes Mellitus", link: "/yoga-healing/diabetes" },
    { name: "Obesity & Metabolic Syndrome", link: "https://en.wikipedia.org/wiki/Metabolic_syndrome" },
    { name: "Asthma & COPD (mild to moderate)", link: "/yoga-healing/asthma" },
    { name: "Endocrine Dysregulation", link: "https://en.wikipedia.org/wiki/Endocrine_disease" },
    { name: "PCOS (Polycystic Ovary Syndrome)", link: "/yoga-healing/pcos" },
    { name: "Menstrual & Menopausal symptoms", link: "https://en.wikipedia.org/wiki/Menopause" },
    { name: "Reversal of age-related changes", link: "https://en.wikipedia.org/wiki/Ageing" }
];

const TherapyList = () => {
    return (
        <section id="therapy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Benefits from Medically verified Yoga Healing</h2>
                <p className={styles.subtext}>
                    Yoga is proven to be therapeutic for many cases. Our specialized programs address a wide range of physical and mental health conditions.
                </p>
                <div className={styles.grid}>
                    {conditions.sort((a, b) => {
                        const aInternal = a.link.startsWith('/');
                        const bInternal = b.link.startsWith('/');
                        if (aInternal && !bInternal) return -1;
                        if (!aInternal && bInternal) return 1;
                        return 0;
                    }).map((condition, index) => {
                        const isInternal = condition.link.startsWith('/');

                        return (
                            <a
                                key={index}
                                href={condition.link}
                                target={isInternal ? undefined : "_blank"}
                                rel={isInternal ? undefined : "noopener noreferrer"}
                                className={styles.card}
                            >
                                <span className={styles.icon}>✦</span>
                                <div className={styles.textContainer}>
                                    <span className={styles.text}>{condition.name}</span>
                                    <span className={styles.insightLabel}>
                                        {isInternal ? "(Research insights available)" : "(Research insights upcoming)"}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TherapyList;
