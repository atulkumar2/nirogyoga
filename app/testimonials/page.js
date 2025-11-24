import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './testimonials.module.css';

export const metadata = {
    title: "Testimonials | Nirog Yoga",
    description: "Read experiences and feedback from our yoga practitioners. Share your own journey with Nirog Yoga.",
};

// Sample testimonials - Replace with your approved reviews
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        date: "November 2024",
        program: "Morning Group Sessions",
        text: "The yoga sessions have transformed my daily routine. I feel more energized and focused throughout the day. The instructors are knowledgeable and very supportive.",
        rating: 5
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        date: "October 2024",
        program: "Evening Personal Consultation",
        text: "After struggling with chronic back pain for years, the personalized yoga therapy sessions have made a significant difference. Highly recommend!",
        rating: 5
    },
    {
        id: 3,
        name: "Anonymous",
        date: "September 2024",
        program: "Stress Management Program",
        text: "The breathing techniques and meditation practices have helped me manage my anxiety better. Thank you for this wonderful program.",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Review/Feedback</h1>
                    <p className={styles.subtitle}>
                        Perspective, Assessment & Appraisal - Share your experience and read what others have to say about their journey with Nirog Yoga.
                    </p>
                </header>

                {/* Google Forms Section - Three Separate Forms */}
                <section className={styles.formsContainer}>
                    <h2 className={styles.formsMainTitle}>Share Your Thoughts</h2>
                    <p className={styles.formsDescription}>
                        We value your input! Choose the appropriate form to share your thoughts with us.
                    </p>

                    <div className={styles.formsGrid}>
                        {/* Review Form */}
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <span className={styles.formIcon}>⭐</span>
                                <h3 className={styles.formCardTitle}>Review</h3>
                            </div>
                            <p className={styles.formCardDescription}>
                                Share your experience with our programs and instructors. Your review helps others make informed decisions.
                            </p>
                            <div className={styles.formPlaceholder}>
                                <p><strong>📝 Review Form</strong></p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    Replace this with your Google Form iframe for collecting reviews.
                                </p>
                                <code style={{ fontSize: '0.8rem' }}>Form ID: REVIEW_FORM</code>
                            </div>
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
                            <div className={styles.formPlaceholder}>
                                <p><strong>📝 Feedback Form</strong></p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    Replace this with your Google Form iframe for collecting feedback.
                                </p>
                                <code style={{ fontSize: '0.8rem' }}>Form ID: FEEDBACK_FORM</code>
                            </div>
                        </div>

                        {/* Interest Form */}
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <span className={styles.formIcon}>🌟</span>
                                <h3 className={styles.formCardTitle}>Interest</h3>
                            </div>
                            <p className={styles.formCardDescription}>
                                Interested in our programs? Let us know what you're looking for and we'll get in touch.
                            </p>
                            <div className={styles.formPlaceholder}>
                                <p><strong>📝 Interest Form</strong></p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    Replace this with your Google Form iframe for collecting interest inquiries.
                                </p>
                                <code style={{ fontSize: '0.8rem' }}>Form ID: INTEREST_FORM</code>
                            </div>
                        </div>
                    </div>

                    {/* Integration Instructions */}
                    <div className={styles.integrationInstructions}>
                        <h4>How to Add Your Google Forms:</h4>
                        <ol>
                            <li>Create three separate Google Forms (Review, Feedback, Interest)</li>
                            <li>For each form, click "Send" → Click the embed icon (&lt;/&gt;)</li>
                            <li>Copy the iframe code</li>
                            <li>Replace each placeholder in <code>app/testimonials/page.js</code> with the corresponding iframe</li>
                        </ol>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                            Example: <code>&lt;iframe src="YOUR_FORM_URL" width="100%" height="600"&gt;&lt;/iframe&gt;</code>
                        </p>
                    </div>
                </section>

                {/* Testimonials Display Section */}
                <section className={styles.testimonialsSection}>
                    <h2 className={styles.sectionTitle}>What Our Practitioners Say</h2>

                    {testimonials.length > 0 ? (
                        <div className={styles.testimonialsGrid}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.testimonialCard}>
                                    <div className={styles.testimonialHeader}>
                                        <span className={styles.testimonialName}>{testimonial.name}</span>
                                        <span className={styles.testimonialDate}>{testimonial.date}</span>
                                    </div>

                                    <span className={styles.testimonialProgram}>{testimonial.program}</span>

                                    <p className={styles.testimonialText}>"{testimonial.text}"</p>

                                    <div className={styles.testimonialRating}>
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noTestimonials}>
                            <p>No testimonials yet. Be the first to share your experience!</p>
                        </div>
                    )}
                </section>

                {/* Instructions for adding testimonials */}
                <section style={{ background: '#f8f9fa', padding: '2rem', borderRadius: 'var(--radius-md)', marginTop: '3rem' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>How to Add Approved Testimonials</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        To add a new testimonial to this page, edit the <code>testimonials</code> array in <code>app/testimonials/page.js</code>.
                        Copy the format of existing testimonials and add your approved review. Each testimonial should include: name, date, program, text, and rating (1-5).
                    </p>
                </section>
            </div>

            <Footer />
        </main>
    );
}
