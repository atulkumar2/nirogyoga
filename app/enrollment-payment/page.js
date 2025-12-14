import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './enrollment.module.css';

export const metadata = {
    title: "Enrollment | Nirog Yoga",
    description: "Begin your healing journey. Understand what to expect in our enrollment questionnaire.",
};

export default function Enrollment() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Begin Your Healing Journey</h1>
                    <p className={styles.subtitle}>
                        The Nirog Yoga enrollment form is designed to understand your health background, lifestyle, and goals so we can tailor your healing journey.
                    </p>
                </header>

                {/* Important Information Box */}
                <div className={styles.importantInfoBox}>
                    <div className={styles.importantInfoContent}>
                        <span className={styles.totalTime}>Total Expected Time for Enrollment: 10–15 minutes.
                            <br />
                            Payment is mandatory during Enrollment. Need based discounts are available.
                        </span>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.sessionOptions}>
                        <h3 className={styles.sessionTitle}>Choose Your Session Type</h3>

                        {/* Morning Group */}
                        <Link href="/programs-events#morning-daily" className={styles.sessionRowLink}>
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <h4 className={styles.sessionName}>Morning Group</h4>
                                    <p className={styles.sessionDescription}>Regular morning yoga sessions</p>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </Link>

                        {/* Morning Alternate */}
                        <Link href="/programs-events#morning-alternate" className={styles.sessionRowLink}>
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <h4 className={styles.sessionName}>Morning Alternate</h4>
                                    <p className={styles.sessionDescription}>Alternative morning schedule</p>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </Link>

                        {/* Evening Group */}
                        <Link href="/programs-events#evening-group" className={styles.sessionRowLink}>
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <h4 className={styles.sessionName}>Evening Group</h4>
                                    <p className={styles.sessionDescription}>Evening yoga sessions</p>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </Link>

                        {/* Personal Consultation */}
                        <Link href="/programs-events#personal-consultation" className={styles.sessionRowLink}>
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <h4 className={styles.sessionName}>Personal Consultation</h4>
                                    <p className={styles.sessionDescription}>One-on-one personalized sessions</p>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <p className={styles.contactNote}>
                        Have questions? <Link href="/contact" className={styles.contactLink}>Contact us</Link>
                    </p>
                </div>



                <div className={styles.timeline}>
                    {/* Step 1 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>1. Basic Details</h2>
                            <span className={styles.time}>1–2 minutes</span>
                        </div>
                        <p className={styles.description}>We'll start with some basics to create your participant profile.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Contact Information (Email, Phone)</li>
                            <li className={styles.listItem}>Personal Details (Name, Age)</li>
                            <li className={styles.listItem}>Physical Stats (Height, Weight)</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>2. Health & Medical History</h2>
                            <span className={styles.time}>4–6 minutes</span>
                        </div>
                        <p className={styles.description}>
                            This is the most important section. We need to know about your health to ensure your safety and personalize the sessions.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Current medical conditions or injuries</li>
                            <li className={styles.listItem}>Medications and symptoms</li>
                            <li className={styles.listItem}>Physical limitations</li>
                            <li className={styles.listItem}>Primary wellness goals</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>3. Yoga & Lifestyle Experience</h2>
                            <span className={styles.time}>1 minute</span>
                        </div>
                        <p className={styles.description}>Help us understand your familiarity with mind-body practices.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Current Yoga experience level</li>
                            <li className={styles.listItem}>Meditation & breathing practice habits</li>
                        </ul>
                    </div>

                    {/* Step 4 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>4. Goals & Expectations</h2>
                            <span className={styles.time}>2–3 minutes</span>
                        </div>
                        <p className={styles.description}>Tell us what you hope to achieve.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Specific goals (Stress, Pain relief, Sleep, etc.)</li>
                            <li className={styles.listItem}>Interest in scientific validation of yoga</li>
                        </ul>
                    </div>

                    {/* Step 5 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>5. Consent & Declaration</h2>
                            <span className={styles.time}>30 seconds</span>
                        </div>
                        <p className={styles.description}>A quick confirmation of your readiness.</p>
                    </div>

                    {/* Step 6 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h2 className={styles.stepTitle}>6. Payment Information</h2>
                            <span className={styles.time}>1–2 minutes</span>
                        </div>
                        <p className={styles.description}>Choose your session type and complete the contribution.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Morning group sessions OR Evening personal consultation</li>
                            <li className={styles.listItem}>Transaction ID entry</li>
                        </ul>
                    </div>
                </div>


            </div>

            <Footer />
        </main>
    );
}
