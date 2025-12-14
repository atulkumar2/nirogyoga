import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './contact.module.css';

export const metadata = {
    title: "Contact Us | Nirog Yoga",
    description: "Get in touch with Nirog Yoga. Visit our center in Mangalore or contact us via phone or email for inquiries about yoga classes and therapy.",
};

export default function Contact() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>
                        We are here to guide you on your journey to wellness. Reach out to us for any queries regarding our programs, therapy sessions, or events.
                    </p>
                </header>

                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Get in Touch</h2>
                        <span className={styles.text}>Phone: +91-8792873242 / +91-8123690515</span>
                        <span className={styles.text}>Email: nirogyoga@outlook.com</span>

                        <div className={styles.socials}>
                            {/* Instagram */}
                            <button className={styles.socialIcon} aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </button>
                            {/* Facebook */}
                            <button className={styles.socialIcon} aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </button>
                            {/* YouTube */}
                            <button className={styles.socialIcon} aria-label="YouTube">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </button>
                            {/* Twitter/X */}
                            <button className={styles.socialIcon} aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Address */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Visit Us</h2>
                        <address className={styles.text} style={{ fontStyle: 'normal' }}>
                            Shree Divya Shakthi Dham,<br />
                            4th Cross, Kodialguttu East,<br />
                            M.G. Road, Mangalore.
                        </address>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Shree+Divya+Shakthi+Dham+Mangalore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Get Directions →
                        </a>
                    </div>
                </div>

                {/* Call to Action - Interest Form */}
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Interested in Our Programs?</h2>
                    <p className={styles.ctaText}>
                        Register your interest and we'll get in touch with you to discuss how we can help you on your wellness journey.
                    </p>
                    <div className={styles.ctaButtonContainer}>
                        <div className={styles.ctaButtonGroup}>
                            <a href="/programs-events" className={styles.ctaButton}>
                                View Programs
                            </a>
                            <a href="/testimonials#interest" className={styles.ctaButton}>
                                Register Interest
                            </a>
                        </div>
                        <div className={styles.ctaButtonGroup}>
                            <a href="/enrollment-payment" className={styles.ctaButton}>
                                Enroll Now
                            </a>
                            <a href="/payment" className={styles.ctaButton}>
                                Pay Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className={styles.mapContainer}>
                    <iframe
                        title='Google map location'
                        src="https://maps.google.com/maps?q=Shree%20Divya%20Shakthi%20Dham%2C%20Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </main>
    );
}
