"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './programs-events.module.css';

export default function ProgramsEvents() {
    const router = useRouter();

    useEffect(() => {
        document.title = "Programs & Events | Nirog Yoga";
    }, []);

    const handleEnrollClick = (sectionId) => {
        router.push(`/enrollment-payment#${sectionId}`);
    };
    return (
        <main>
            <Navbar />

            {/* Navigation Links */}
            <div className={styles.quickNav}>
                <Link href="#programs" className={styles.navLink}>Programs</Link>
                <span className={styles.navSeparator}>|</span>
                <Link href="#events" className={styles.navLink}>Events</Link>
            </div>

            {/* Banner */}
            <div className={styles.permanentBanner}>
                <div className={styles.bannerMessage}>
                    Healing with Happier minds{' '}
                    <span className={styles.bannerHighlight}> <Link href="/contact" className={styles.bannerLink}>Ask us for Need based discounts</Link></span>
                </div>
            </div>

            {/* PROGRAMS SECTION */}
            <div id="programs" className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Programs Offered</h1>
                    <p className={styles.subtitle}>
                        Choose the path that suits your lifestyle. Whether you prefer the energy of a group or personalized attention, we have a program for you.
                    </p>
                </header>

                {/* Program Summary List */}
                <div className={styles.programSummary}>
                    <ul className={styles.summaryList}>
                        <li>
                            <a href="#morning-daily">🌅 Morning Group - Daily</a>
                            <div className={styles.summaryActions}>
                                <button className={styles.summaryEnrollButton} onClick={() => handleEnrollClick('morning-daily')}>Enroll</button>
                                <Link href="/payment" className={styles.summaryPayButton}>Pay</Link>
                            </div>
                        </li>
                        <li>
                            <a href="#morning-alternate">🌄 Morning Group - Alternate Days</a>
                            <div className={styles.summaryActions}>
                                <button className={styles.summaryEnrollButton} onClick={() => handleEnrollClick('morning-alternate')}>Enroll</button>
                                <Link href="/payment" className={styles.summaryPayButton}>Pay</Link>
                            </div>
                        </li>
                        <li>
                            <a href="#evening-group">🌆 Evening Group - 3 Days/week - Sat/Mon/Tues</a>
                            <div className={styles.summaryActions}>
                                <button className={styles.summaryEnrollButton} onClick={() => handleEnrollClick('evening-group')}>Enroll</button>
                                <Link href="/payment" className={styles.summaryPayButton}>Pay</Link>
                            </div>
                        </li>
                        <li>
                            <a href="#personal-consultation">🤝 Personal Consultation - Prior Appointments</a>
                            <div className={styles.summaryActions}>
                                <button className={styles.summaryEnrollButton} onClick={() => handleEnrollClick('personal-consultation')}>Enroll</button>
                                <Link href="/payment" className={styles.summaryPayButton}>Pay</Link>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.grid}>
                    {/* Morning Daily Group Sessions */}
                    <div id="morning-daily" className={`${styles.card} ${styles.morningCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sessionIcon}>🌅</span>
                            <h2 className={styles.programTitle}>Morning Group - Daily</h2>
                            <span className={styles.timing}>5:30 AM - 7:00 AM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>👥</span>
                                <span>Max 15±5 people per batch</span>
                            </div>
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
                                <span>Minimum 20 days (30 hours) per month</span>
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
                                    <td>1 Month (30 hours)</td>
                                    <td className={styles.price}>₹2,500</td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td className={styles.price}>₹7,000</td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td className={styles.price}>₹13,500</td>
                                </tr>
                                <tr>
                                    <td>12 Months</td>
                                    <td className={styles.price}>₹26,000</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Need based Banner */}
                        <div className={styles.cardBanner}>
                            <button className={styles.cardBannerButton} onClick={() => handleEnrollClick('morning-daily')}>Enroll</button>
                            <span className={styles.cardBannerIcon}>🎁</span>
                            <span className={styles.cardBannerText}>Need based discounts</span>
                            <button className={styles.cardBannerButton} onClick={() => router.push('/payment')}>Pay</button>
                        </div>
                    </div>

                    {/* Morning Alternate Days Group Sessions */}
                    <div id="morning-alternate" className={`${styles.card} ${styles.morningCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sessionIcon}>🌄</span>
                            <h2 className={styles.programTitle}>Morning Group - Alternate Days</h2>
                            <span className={styles.timing}>5:30 AM - 7:00 AM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>👥</span>
                                <span>Max 15±5 people per batch</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📅</span>
                                <span>3 days per week</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏱️</span>
                                <span>1.5 hours per day</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🧘</span>
                                <span>Minimum 13 days (20 hours) per month</span>
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
                                    <td>1 Month (20 hours)</td>
                                    <td className={styles.price}>₹1,500</td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td className={styles.price}>₹4,000</td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td className={styles.price}>₹7,500</td>
                                </tr>
                                <tr>
                                    <td>12 Months</td>
                                    <td className={styles.price}>₹14,000</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Need based Banner */}
                        <div className={styles.cardBanner}>
                            <button className={styles.cardBannerButton} onClick={() => handleEnrollClick('morning-alternate')}>Enroll</button>
                            <span className={styles.cardBannerIcon}>🎁</span>
                            <span className={styles.cardBannerText}>Need based discounts</span>
                            <button className={styles.cardBannerButton} onClick={() => router.push('/payment')}>Pay</button>
                        </div>
                    </div>

                    {/* Evening Group Sessions */}
                    <div id="evening-group" className={`${styles.card} ${styles.eveningCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sessionIcon}>🌆</span>
                            <h2 className={styles.programTitle}>Evening Group - 3 Days/Week</h2>
                            <span className={styles.timing}>5:00 PM - 6:30 PM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>👥</span>
                                <span>Max 15±5 people per batch</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📅</span>
                                <span>3 days per week - Saturday, Monday, Tuesday</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏱️</span>
                                <span>1.5 hours per day</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🧘</span>
                                <span>Minimum 13 days (20 hours) per month</span>
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
                                    <td>1 Month (20 hours)</td>
                                    <td className={styles.price}>₹1,500</td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td className={styles.price}>₹4,000</td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td className={styles.price}>₹7,500</td>
                                </tr>
                                <tr>
                                    <td>12 Months</td>
                                    <td className={styles.price}>₹14,000</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Need based Banner */}
                        <div className={styles.cardBanner}>
                            <button className={styles.cardBannerButton} onClick={() => handleEnrollClick('evening-group')}>Enroll</button>
                            <span className={styles.cardBannerIcon}>🎁</span>
                            <span className={styles.cardBannerText}>Need based discounts</span>
                            <button className={styles.cardBannerButton} onClick={() => router.push('/payment')}>Pay</button>
                        </div>
                    </div>
                </div>

                {/* Personal Consultation Section */}
                <div className={styles.personalSection}>
                    <div id="personal-consultation" className={`${styles.card} ${styles.personalCard}`} style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                        <div className={styles.cardHeader}>
                            <span className={styles.sessionIcon}>🤝</span>
                            <h2 className={styles.programTitle}>Personal Consultation</h2>
                            <span className={styles.timing}>Evening: 5:30 PM - 7:00 PM</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🤝</span>
                                <span>On Prior Appointment Only</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>🤝</span>
                                <span>Personalized Yoga Consultation; Tailored to your specific needs</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏱️</span>
                                <span>1.5 hours per session</span>
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

                        {/* Need based Banner */}
                        <div className={styles.cardBanner}>
                            <button className={styles.cardBannerButton} onClick={() => handleEnrollClick('personal-consultation')}>Enroll</button>
                            <span className={styles.cardBannerIcon}>🎁</span>
                            <span className={styles.cardBannerText}>Need based discounts</span>
                            <button className={styles.cardBannerButton} onClick={() => router.push('/payment')}>Pay</button>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <p className={styles.ctaText}>Ready to start your journey? Enroll now or <Link href="/contact" className={styles.bannerLink}>Contact Us</Link> for more details.</p>
                    <div className={styles.buttonGroup}>
                        <Link href="/enrollment-payment" className={styles.ctaButton}>
                            Enroll Now
                        </Link>
                        <Link href="/testimonials#interest" className={styles.secondaryButton}>
                            Register Interest
                        </Link>
                        <Link href="/payment" className={styles.payButton}>
                            Pay Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* EVENTS SECTION */}
            <div id="events" className={styles.eventsContainer}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Upcoming Events</h2>
                    <p className={styles.subtitle}>
                        Join us for transformative sessions and begin your journey to wellness.
                    </p>
                </header>

                <div className={styles.eventsList}>
                    {/* December 1st Event */}
                    <div className={styles.eventCard}>
                        <div className={styles.dateBox}>
                            <span className={styles.month}>DEC</span>
                            <span className={styles.day}>01</span>
                        </div>
                        <div className={styles.eventDetails}>
                            <h2 className={styles.eventTitle}>New Yoga Therapy Batch Begins</h2>
                            <div className={styles.metaInfo}>
                                <span className={styles.metaItem}>🕒 Morning Sessions</span>
                                <span className={styles.metaItem}>📍 Nirog Yoga Center, Mangalore</span>
                            </div>
                            <p className={styles.description}>
                                We are excited to announce the start of our new yoga therapy batch starting December 1st.
                                This comprehensive program is designed to address various health concerns including diabetes, hypertension, and stress management through specialized yoga practices.
                            </p>
                            <div className={styles.highlights}>
                                <h3>Program Highlights:</h3>
                                <ul>
                                    <li>Personalized attention and health assessment</li>
                                    <li>Guided Pranayama and Meditation sessions</li>
                                    <li>Therapeutic Asanas for specific conditions</li>
                                    <li>Lifestyle and diet counseling</li>
                                </ul>
                            </div>
                            <div className={styles.actions}>
                                <Link href="/enrollment-payment" className={styles.primaryButton}>Enroll Now</Link>
                                <Link href="/payment" className={styles.payButton}>Pay Now</Link>
                                <Link href="/#contact" className={styles.secondaryButton}>Contact for Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
