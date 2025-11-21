import styles from './TherapyList.module.css';

const conditions = [
    "Post-Traumatic Stress Disorder (PTSD)",
    "Chronic Stress, Anxiety & Depression",
    "ADHD in children",
    "Chronic Low Back Pain",
    "Fibromyalgia & Arthritis",
    "Mobility & Balance issues (including Parkinson’s)",
    "Migraine & Chronic Headaches",
    "Insomnia & Sleep Disorders",
    "Thickening of cerebral cortex",
    "Acid-peptic diseases",
    "Lipid & Liver disorders",
    "Irritable Bowel Syndrome (IBS)",
    "Blood Pressure disorders",
    "Coronary Artery Disease",
    "Type 2 Diabetes Mellitus",
    "Obesity & Metabolic Syndrome",
    "Asthma & COPD (mild to moderate)",
    "Endocrine Dysregulation",
    "PCOS (Polycystic Ovary Syndrome)",
    "Menstrual & Menopausal symptoms",
    "Reversal of age-related changes"
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
                        <div key={index} className={styles.card}>
                            <span className={styles.icon}>✦</span>
                            <span className={styles.text}>{condition}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TherapyList;
