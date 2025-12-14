import Link from 'next/link';
import styles from './ProgramsSection.module.css';

const ProgramsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Our Programs</h2>
                    <p className={styles.subtitle}>
                        Choose the path that suits your lifestyle. Whether you prefer the energy of a group or personalized attention, we have a program for you.
                    </p>
                    <div className={styles.earlySeekersBanner}>
                        <span className={styles.bannerIcon}>✨</span>
                        For limited time, Early seeker's privilege is available. <Link href="/contact" className={styles.bannerLink}>Contact Us</Link> for more details.
                    </div>
                </header>

                <div className={styles.compactGrid}>
                    {/* Morning Daily Sessions */}
                    <div className={`${styles.compactCard} ${styles.morningCard}`}>
                        <Link href="/programs-events#morning-daily" className={styles.cardContent}>
                            <div className={styles.cardIcon}>🌅</div>
                            <h3 className={styles.compactTitle}>Morning Group - Daily</h3>
                            <p className={styles.compactTiming}>5:30 AM - 7:00 AM</p>
                            <p className={styles.compactDetail}>4-5 days/week</p>
                        </Link>
                        <div className={styles.cardActions}>
                            <Link href="/enrollment-payment" className={styles.cardEnrollButton}>Enroll</Link>
                            <Link href="/payment" className={styles.cardPayButton}>Pay</Link>
                            <Link href="/programs-events#morning-daily" className={styles.cardLearnMore}>Learn More →</Link>
                        </div>
                    </div>

                    {/* Morning Alternate Days */}
                    <div className={`${styles.compactCard} ${styles.morningCard}`}>
                        <Link href="/programs-events#morning-alternate" className={styles.cardContent}>
                            <div className={styles.cardIcon}>🌄</div>
                            <h3 className={styles.compactTitle}>Morning Group - Alternate Days</h3>
                            <p className={styles.compactTiming}>5:30 AM - 7:00 AM</p>
                            <p className={styles.compactDetail}>3 days/week</p>
                        </Link>
                        <div className={styles.cardActions}>
                            <Link href="/enrollment-payment" className={styles.cardEnrollButton}>Enroll</Link>
                            <Link href="/payment" className={styles.cardPayButton}>Pay</Link>
                            <Link href="/programs-events#morning-alternate" className={styles.cardLearnMore}>Learn More →</Link>
                        </div>
                    </div>

                    {/* Evening Sessions */}
                    <div className={`${styles.compactCard} ${styles.eveningCard}`}>
                        <Link href="/programs-events#evening-group" className={styles.cardContent}>
                            <div className={styles.cardIcon}>🌆</div>
                            <h3 className={styles.compactTitle}>Evening Group - 3 Days/Week</h3>
                            <p className={styles.compactTiming}>5:00 PM - 6:30 PM</p>
                            <p className={styles.compactDetail}>3 days/week - Sat, Mon, Tues</p>
                        </Link>
                        <div className={styles.cardActions}>
                            <Link href="/enrollment-payment" className={styles.cardEnrollButton}>Enroll</Link>
                            <Link href="/payment" className={styles.cardPayButton}>Pay</Link>
                            <Link href="/programs-events#evening-group" className={styles.cardLearnMore}>Learn More →</Link>
                        </div>
                    </div>

                    {/* Personal Consultation */}
                    <div className={`${styles.compactCard} ${styles.personalCard}`}>
                        <Link href="/programs-events#personal-consultation" className={styles.cardContent}>
                            <div className={styles.cardIcon}>🤝</div>
                            <h3 className={styles.compactTitle}>Personal Consultation</h3>
                            <p className={styles.compactTiming}>Prior Appointment</p>
                            <p className={styles.compactDetail}>One-on-one session</p>
                        </Link>
                        <div className={styles.cardActions}>
                            <Link href="/enrollment-payment" className={styles.cardEnrollButton}>Enroll</Link>
                            <Link href="/payment" className={styles.cardPayButton}>Pay</Link>
                            <Link href="/programs-events#personal-consultation" className={styles.cardLearnMore}>Learn More →</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.buttonGroup}>
                        <Link href="/enrollment-payment" className={styles.mainEnrollButton}>
                            Enroll Now
                        </Link>
                        <Link href="/testimonials#interest" className={styles.mainRegisterButton}>
                            Register Interest
                        </Link>
                        <Link href="/payment" className={styles.mainPayButton}>
                            Pay Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
