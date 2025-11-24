import styles from './InstructorProfile.module.css';

const InstructorProfile = () => {
    return (
        <section id="instructors" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Dr. Kunal */}
                    <a href="/instructors/dr-kunal" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/dr-kunal.jpg"
                                    alt="Prof. (Dr.) Kunal"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>Prof. (Dr.) Kunal Katyayan</h3>
                                <span className={styles.title}>MBBS, MD, PGDYS (PG Diploma in Yogic Sciences)</span>
                                <p className={styles.bio}>
                                    A Professor of Physiology with deep expertise in Yogic Sciences. Prof. (Dr.) Kunal Katyayan bridges the gap between modern medicine and traditional yoga to offer holistic healing solutions.
                                </p>
                                <span className={styles.readMore}>View Profile →</span>
                            </div>
                        </div>
                    </a>

                    {/* Parvathi Katyayan */}
                    <a href="/instructors/parvathi" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/parvathi.jpg"
                                    alt="Parvathi Katyayan"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>Parvathi Katyayan</h3>
                                <span className={styles.title}>Yoga Instructor & Therapist</span>
                                <p className={styles.bio}>
                                    Dedicated to guiding individuals on their path to wellness through personalized yoga practices and mindfulness techniques.
                                </p>
                                <span className={styles.readMore}>View Profile →</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstructorProfile;
