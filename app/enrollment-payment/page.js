'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './enrollment.module.css';

export default function Enrollment() {
    const router = useRouter();

    useEffect(() => {
        const hash = globalThis.location.hash.substring(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, []);

    const handleSessionClick = (sectionId) => {
        router.push(`/programs-events#${sectionId}`);
    };

    const handleKeyDown = (event, sectionId) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleSessionClick(sectionId);
        }
    };

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
                        <h2 className={styles.sessionTitle}>Choose Your Session Type</h2>

                        {/* Morning Group */}
                        <button
                            className={`${styles.sessionRowLink} ${styles.morningSession}`}
                            onClick={() => handleSessionClick('morning-daily')}
                            onKeyDown={(e) => handleKeyDown(e, 'morning-daily')}
                            type="button"
                            aria-label="Learn more about Morning Group sessions"
                            id="morning-daily"
                        >
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <span className={styles.sessionIcon}>🌅</span>
                                    <div className={styles.sessionText}>
                                        <h4 className={styles.sessionName}>Morning Group</h4>
                                        <p className={styles.sessionDescription}>Daily Yoga sessions</p>
                                    </div>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton} onClick={(e) => e.stopPropagation()}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </button>

                        {/* Morning Alternate */}
                        <button
                            className={`${styles.sessionRowLink} ${styles.morningSession}`}
                            onClick={() => handleSessionClick('morning-alternate')}
                            onKeyDown={(e) => handleKeyDown(e, 'morning-alternate')}
                            type="button"
                            aria-label="Learn more about Morning Alternate sessions"
                            id="morning-alternate"
                        >
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <span className={styles.sessionIcon}>🌄</span>
                                    <div className={styles.sessionText}>
                                        <h4 className={styles.sessionName}>Morning Alternate Days</h4>
                                        <p className={styles.sessionDescription}>Alternative Morning schedule</p>
                                    </div>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton} onClick={(e) => e.stopPropagation()}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </button>

                        {/* Evening Group */}
                        <button
                            className={`${styles.sessionRowLink} ${styles.eveningSession}`}
                            onClick={() => handleSessionClick('evening-group')}
                            onKeyDown={(e) => handleKeyDown(e, 'evening-group')}
                            type="button"
                            aria-label="Learn more about Evening Group sessions"
                            id="evening-group"
                        >
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <span className={styles.sessionIcon}>🌆</span>
                                    <div className={styles.sessionText}>
                                        <h4 className={styles.sessionName}>Evening Group</h4>
                                        <p className={styles.sessionDescription}>Alternate Evening sessions</p>
                                    </div>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton} onClick={(e) => e.stopPropagation()}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </button>

                        {/* Personal Consultation */}
                        <button
                            className={`${styles.sessionRowLink} ${styles.personalSession}`}
                            onClick={() => handleSessionClick('personal-consultation')}
                            onKeyDown={(e) => handleKeyDown(e, 'personal-consultation')}
                            type="button"
                            aria-label="Learn more about Personal Consultation sessions"
                            id="personal-consultation"
                        >
                            <div className={styles.sessionRow}>
                                <div className={styles.sessionInfo}>
                                    <span className={styles.sessionIcon}>🤝</span>
                                    <div className={styles.sessionText}>
                                        <h4 className={styles.sessionName}>Personal Consultation</h4>
                                        <p className={styles.sessionDescription}>One-on-one personalized sessions</p>
                                    </div>
                                </div>
                                <div className={styles.sessionButtons}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.enrollButton}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Enroll
                                    </a>
                                    <Link href="/payment" className={styles.payButton} onClick={(e) => e.stopPropagation()}>
                                        Pay
                                    </Link>
                                </div>
                            </div>
                        </button>
                    </div>

                    <p className={styles.contactNote}>
                        Have questions? <Link href="/contact" className={styles.contactLink}>Contact us</Link>
                    </p>
                </div>


                <div className={styles.timeline}>
                    <h2 className={styles.sectionHeading}>Details captured in Enrollment form</h2>
                    {/* Step 1 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h3 className={styles.stepTitle}>1. Basic Details</h3>
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
                            <h3 className={styles.stepTitle}>2. Health & Medical History</h3>
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
                            <h3 className={styles.stepTitle}>3. Yoga & Lifestyle Experience</h3>
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
                            <h3 className={styles.stepTitle}>4. Goals & Expectations</h3>
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
                            <h3 className={styles.stepTitle}>5. Consent & Declaration</h3>
                            <span className={styles.time}>30 seconds</span>
                        </div>
                        <p className={styles.description}>A quick confirmation of your readiness.</p>
                    </div>

                    {/* Step 6 */}
                    <div className={styles.step}>
                        <div className={styles.stepHeader}>
                            <h3 className={styles.stepTitle}>6. Payment Information</h3>
                            <span className={styles.time}>1–2 minutes</span>
                        </div>
                        <p className={styles.description}>Choose your session type and complete the contribution.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Morning group sessions OR Evening personal consultation</li>
                            <li className={styles.listItem}>Transaction ID entry</li>
                        </ul>
                    </div>
                </div>


                {/* Bottom CTA Section */}
                <div className={styles.bottomCtaSection}>
                    <div className={styles.bottomButtonGroup}>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfKyn1PpqrUPOABP_zKrWz4X2orMMrm03EO9s4gJq1QiYgLdg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bottomEnrollButton}
                        >
                            Enroll Now
                        </a>
                        <Link href="/testimonials#interest" className={styles.bottomRegisterButton}>
                            Register Interest
                        </Link>
                        <button
                            onClick={() => globalThis.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={styles.bottomTopButton}
                            type="button"
                            aria-label="Go to top of page"
                        >
                            Go To Top
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
