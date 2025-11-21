import styles from './TherapyList.module.css';

const conditions = [
    { name: "Post-Traumatic Stress Disorder (PTSD)", link: "https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder" },
    { name: "Chronic Stress, Anxiety & Depression", link: "https://en.wikipedia.org/wiki/Anxiety_disorder" },
    { name: "ADHD in children", link: "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder" },
    { name: "Chronic Low Back Pain", link: "https://en.wikipedia.org/wiki/Low_back_pain" },
    { name: "Fibromyalgia & Arthritis", link: "https://en.wikipedia.org/wiki/Fibromyalgia" },
    { name: "Mobility & Balance issues (including Parkinson's)", link: "https://en.wikipedia.org/wiki/Parkinson%27s_disease" },
    { name: "Migraine & Chronic Headaches", link: "https://en.wikipedia.org/wiki/Migraine" },
    { name: "Insomnia & Sleep Disorders", link: "https://en.wikipedia.org/wiki/Insomnia" },
    { name: "Thickening of cerebral cortex", link: "https://en.wikipedia.org/wiki/Cerebral_cortex" },
    { name: "Acid-peptic diseases", link: "https://en.wikipedia.org/wiki/Peptic_ulcer_disease" },
    { name: "Lipid & Liver disorders", link: "https://en.wikipedia.org/wiki/Dyslipidemia" },
    { name: "Irritable Bowel Syndrome (IBS)", link: "https://en.wikipedia.org/wiki/Irritable_bowel_syndrome" },
    { name: "Blood Pressure disorders", link: "https://en.wikipedia.org/wiki/Hypertension" },
    { name: "Coronary Artery Disease", link: "https://en.wikipedia.org/wiki/Coronary_artery_disease" },
    { name: "Type 2 Diabetes Mellitus", link: "https://en.wikipedia.org/wiki/Type_2_diabetes" },
    { name: "Obesity & Metabolic Syndrome", link: "https://en.wikipedia.org/wiki/Metabolic_syndrome" },
    { name: "Asthma & COPD (mild to moderate)", link: "https://en.wikipedia.org/wiki/Asthma" },
    { name: "Endocrine Dysregulation", link: "https://en.wikipedia.org/wiki/Endocrine_disease" },
    { name: "PCOS (Polycystic Ovary Syndrome)", link: "https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome" },
    { name: "Menstrual & Menopausal symptoms", link: "https://en.wikipedia.org/wiki/Menopause" },
    { name: "Reversal of age-related changes", link: "https://en.wikipedia.org/wiki/Ageing" }
];

const TherapyList = () => {
    return (
        <section id="therapy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Therapeutic Benefits</h2>
                <p className={styles.subtext}>
                    Yoga is proven to be therapeutic for many cases. Our specialized programs address a wide range of physical and mental health conditions.
                </p>
                <div className={styles.grid}>
                    {conditions.map((condition, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TherapyList;
