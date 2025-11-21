import styles from './InstructorProfile.module.css';

const InstructorProfile = () => {
    return (
        <section id="instructors" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Instructors</h2>
                <div className={styles.grid}>
                    {/* Dr. Kunal */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Dr. Kunal's image */}
                            <img
                                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop"
                                alt="Prof. (Dr.) Kunal"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>Prof. (Dr.) Kunal</h3>
                            <span className={styles.title}>MBBS, MD, PGDYS (PG Diploma in Yogic Sciences)</span>
                            <p className={styles.bio}>
                                A Professor of Physiology with deep expertise in Yogic Sciences. Dr. Kunal bridges the gap between modern medicine and traditional yoga to offer holistic healing solutions.
                            </p>
                        </div>
                    </div>

                    {/* Parvathi Katyayan */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Parvathi's image */}
                            <img
                                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorProfile;
