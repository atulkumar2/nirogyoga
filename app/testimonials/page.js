import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './testimonials.module.css';

export const metadata = {
    title: "Testimonials | Nirog Yoga",
    description: "Read experiences and feedback from our yoga practitioners. Share your own journey with Nirog Yoga.",
};


export default function Testimonials() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Interest, Review & Feedback</h1>
                    <p className={styles.subtitle}>
                        Perspective, Assessment & Appraisal - Share your experience and read what others have to say about their journey with Nirog Yoga.
                    </p>
                </header>

                {/* Google Forms Section - Three Separate Forms */}
                <section className={styles.formsContainer}>
                    <h2 className={styles.formsMainTitle}>Choose a Form</h2>

                    <div className={styles.formsGrid}>
                        {/* Interest Form - Moved to Top for Emphasis */}
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <span className={styles.formIcon}>🌟</span>
                                <h3 className={styles.formCardTitle}>Interest</h3>
                            </div>
                            <p className={styles.formCardDescription}>
                                Interested in our programs? Let us know what you're looking for and we'll get in touch.
                            </p>
                            {/* Need based Banner */}
                            <div className={styles.cardBanner}>
                                <span className={styles.cardBannerIcon}>🎁</span>
                                <span className={styles.cardBannerText}>Need based discounts available on individual basis</span>
                            </div>
                            <iframe
                                src="https://forms.gle/4two5f7HTLp2xmkj9"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className={styles.formIframe}
                            >
                                Loading…
                            </iframe>
                        </div>

                        {/* Review Form */}
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <span className={styles.formIcon}>⭐</span>
                                <h3 className={styles.formCardTitle}>Review</h3>
                            </div>
                            <p className={styles.formCardDescription}>
                                Share your experience with our programs and instructors. Your review helps others make informed decisions.
                            </p>
                            <iframe
                                src="https://forms.gle/9UPXK4mNDbZnMxMUA"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className={styles.formIframe}
                            >
                                Loading…
                            </iframe>
                        </div>

                        {/* Feedback Form */}
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <span className={styles.formIcon}>💬</span>
                                <h3 className={styles.formCardTitle}>Feedback</h3>
                            </div>
                            <p className={styles.formCardDescription}>
                                Provide suggestions, report issues, or share ideas for improvement. We're always listening!
                            </p>
                            <iframe
                                src="https://forms.gle/MvdxQm6mUesQFRXS9"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className={styles.formIframe}
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </section>


            </div>

            <Footer />
        </main>
    );
}
