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

                <div className={styles.grid}>
                    {/* Group Sessions */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.programTitle}>Group Sessions</h3>
                            <span className={styles.timing}>Morning: 5:30 AM - 7:00 AM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📅</span>
                                <span>4-5 days per week</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏱️</span>
                                <span>1.5 hours per day</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🧘</span>
                                <span>Minimum 20 days (35 hours) per month</span>
                            </div>
                        </div>

                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Duration</th>
                                    <th style={{ textAlign: 'right' }}>Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 Month</td>
                                    <td className={styles.price}>₹3,500</td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td className={styles.price}>₹9,000</td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td className={styles.price}>₹17,000</td>
                                </tr>
                                <tr>
                                    <td>12 Months</td>
                                    <td className={styles.price}>₹33,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Personal Consultation */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.programTitle}>Personal Consultation</h3>
                            <span className={styles.timing}>Evening: 5:30 PM - 7:00 PM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🤝</span>
                                <span>One-on-one Yoga Training</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏱️</span>
                                <span>1.5 hours per session</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>✨</span>
                                <span>Tailored to your specific needs</span>
                            </div>
                        </div>

                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Sessions</th>
                                    <th style={{ textAlign: 'right' }}>Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5 Sessions</td>
                                    <td className={styles.price}>₹4,000</td>
                                </tr>
                                <tr>
                                    <td>10 Sessions</td>
                                    <td className={styles.price}>₹7,000</td>
                                </tr>
                                <tr>
                                    <td>15 Sessions</td>
                                    <td className={styles.price}>₹10,000</td>
                                </tr>
                                <tr>
                                    <td>20 Sessions</td>
                                    <td className={styles.price}>₹12,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <Link href="/enrollment" className={styles.ctaButton}>
                        Enroll Now
                    </Link>
                    <Link href="/payment" className={styles.secondaryButton}>
                        Payment Options
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
