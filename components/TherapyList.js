import styles from './TherapyList.module.css';

const conditions = [
    { name: "Post-Traumatic Stress Disorder (PTSD)", link: "/disease/ptsd" },
    { name: "Chronic Stress, Anxiety & Depression", link: "/disease/anxiety-depression" },
    { name: "ADHD in children", link: "/disease/adhd" },
    { name: "Chronic Low Back Pain", link: "/disease/chronic-pain" },
    { name: "Fibromyalgia & Arthritis", link: "/disease/arthritis" },
    { name: "Mobility & Balance issues (including Parkinson's)", link: "/disease/mobility-balance" },
    { name: "Migraine & Chronic Headaches", link: "https://en.wikipedia.org/wiki/Migraine" },
    { name: "Insomnia & Sleep Disorders", link: "/disease/insomnia" },
    { name: "Thickening of cerebral cortex", link: "https://en.wikipedia.org/wiki/Cerebral_cortex" },
    { name: "Acid-peptic diseases", link: "https://en.wikipedia.org/wiki/Peptic_ulcer_disease" },
    { name: "Lipid & Liver disorders", link: "https://en.wikipedia.org/wiki/Dyslipidemia" },
    { name: "Irritable Bowel Syndrome (IBS)", link: "https://en.wikipedia.org/wiki/Irritable_bowel_syndrome" },
    { name: "Blood Pressure disorders", link: "/disease/hypertension" },
    { name: "Coronary Artery Disease", link: "https://en.wikipedia.org/wiki/Coronary_artery_disease" },
    { name: "Type 2 Diabetes Mellitus", link: "/disease/diabetes" },
    { name: "Obesity & Metabolic Syndrome", link: "https://en.wikipedia.org/wiki/Metabolic_syndrome" },
    { name: "Asthma & COPD (mild to moderate)", link: "/disease/asthma" },
    { name: "Endocrine Dysregulation", link: "https://en.wikipedia.org/wiki/Endocrine_disease" },
    { name: "PCOS (Polycystic Ovary Syndrome)", link: "/disease/pcos" },
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
                    {conditions.map((condition, index) => {
                        const isInternal = condition.link.startsWith('/');

                        if (isInternal) {
                            return (
                                <a
                                    key={index}
                                    href={condition.link}
                                    className={styles.card}
                                >
                                    <span className={styles.icon}>✦</span>
                                    <span className={styles.text}>{condition.name}</span>
                                </a>
                            );
                        }

                        return (
                            <a
                                key={index}
                                href={condition.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                            >
                                <span className={styles.icon}>✦</span>
                                <span className={styles.text}>{condition.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TherapyList;
