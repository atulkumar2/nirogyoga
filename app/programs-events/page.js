import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './programs-events.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Programs & Events | Nirog Yoga",
    description: "Explore our yoga programs, group sessions, personal consultation packages, and upcoming events.",
};

export default function ProgramsEvents() {
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
                    Quicker Healing with Happier mind
                    <span className={styles.bannerHighlight}>— <Link href="/contact" className={styles.bannerLink}>Contact us for Early Seekers Privilege</Link></span>
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

                <div className={styles.grid}>
                    {/* Group Sessions */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2 className={styles.programTitle}>Group Sessions</h2>
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
                            <h2 className={styles.programTitle}>Personal Consultation</h2>
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
