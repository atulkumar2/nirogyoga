import styles from './TherapyList.module.css';

const conditions = [
    { name: "Post-Traumatic Stress Disorder (PTSD)", link: "/yoga-healing/ptsd" },
    { name: "Chronic Stress, Anxiety & Depression", link: "/yoga-healing/anxiety-depression" },
    { name: "ADHD in children", link: "/yoga-healing/adhd" },
    { name: "Chronic Low Back Pain", link: "/yoga-healing/chronic-pain" },
    { name: "Fibromyalgia & Arthritis", link: "/yoga-healing/arthritis" },
    { name: "Mobility & Balance issues (including Parkinson's)", link: "/yoga-healing/mobility-balance" },
    { name: "Migraine & Chronic Headaches", link: "/yoga-healing/migraine-chronic-headaches" },
    { name: "Insomnia & Sleep Disorders", link: "/yoga-healing/insomnia" },
    { name: "Thickening of cerebral cortex", link: "/yoga-healing/cerebral-cortex-thickening" },
    { name: "Acid-peptic diseases", link: "/yoga-healing/acid-peptic-diseases" },
    { name: "Lipid & Liver disorders", link: "/yoga-healing/lipid-liver-disorders" },
    { name: "Irritable Bowel Syndrome (IBS)", link: "/yoga-healing/ibs" },
    { name: "Blood Pressure disorders", link: "/yoga-healing/hypertension" },
    { name: "Coronary Artery Disease", link: "/yoga-healing/coronary-artery-disease" },
    { name: "Type 2 Diabetes Mellitus", link: "/yoga-healing/diabetes" },
    { name: "Obesity & Metabolic Syndrome", link: "/yoga-healing/obesity-metabolic-syndrome" },
    { name: "Asthma & COPD (mild to moderate)", link: "/yoga-healing/asthma" },
    { name: "Endocrine Dysregulation", link: "/yoga-healing/endocrine-dysregulation" },
    { name: "PCOS (Polycystic Ovary Syndrome)", link: "/yoga-healing/pcos" },
    { name: "Menstrual & Menopausal symptoms", link: "/yoga-healing/menstrual-menopausal-symptoms" },
    { name: "Reversal of age-related changes", link: "/yoga-healing/age-related-changes" }
];

const TherapyList = () => {
    return (
        <section id="therapy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Medically verified Yoga Healing</h2>
                <p className={styles.subtext}>
                    Yoga is proven to be therapeutic for many cases. Our specialized programs address a wide range of physical and mental health conditions.
                </p>
                <div className={styles.grid}>
                    {[...conditions].sort((a, b) => {
                        const aInternal = a.link.startsWith('/');
                        const bInternal = b.link.startsWith('/');
                        if (aInternal && !bInternal) return -1;
                        if (!aInternal && bInternal) return 1;
                        return 0;
                    }).map((condition, index) => {
                        const isInternal = condition.link.startsWith('/');

                        return (
                            <a
                                key={condition.link}
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
