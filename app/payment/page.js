import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './payment.module.css';

export const metadata = {
    title: "Payment Options | Nirog Yoga",
    description: "Payment information for enrollment in Nirog Yoga programs.",
};

export default function Payment() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Payment Options</h1>
                    <p className={styles.subtitle}>
                        Please use the following details to complete your payment. You will need to enter your transaction ID in the enrollment form.
                    </p>
                </header>

                <div className={styles.paymentGrid}>
                    <div className={styles.paymentInfo}>
                        <h3 className={styles.paymentMethod}>Bank Transfer</h3>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Bank:</span>
                            <span className={styles.value}>HDFC Kankanadi, Mangalore</span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Account No:</span>
                            <span className={styles.value}>50100310959803</span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>IFSC Code:</span>
                            <span className={styles.value}>HDFC0003699</span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Account Name:</span>
                            <span className={styles.value}>Parvathi MG</span>
                        </div>

                        <h3 className={styles.paymentMethod} style={{ marginTop: '2rem' }}>UPI Payment</h3>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>UPI ID:</span>
                            <span className={styles.value}>8123690515@yescred</span>
                        </div>
                    </div>

                    <div className={styles.qrCodeContainer}>
                        <div className={styles.warningBanner}>
                            <Link href="/programs-events" className={styles.warningLink}>View Programs</Link> | Have doubts? <Link href="/contact" className={styles.warningLink}>Contact us</Link> before payment.
                        </div>
                        <img
                            src="/payment-qr-code.jpg"
                            alt="Payment QR Code"
                            className={styles.qrCode}
                        />
                        <p className={styles.qrLabel}>Scan to Pay via UPI</p>
                    </div>
                </div>

                <div className={styles.noteSection}>
                    <p className={styles.note}>
                        <strong>Note:</strong> After completing your payment, please save your transaction ID.
                        You will need to enter it in the enrollment questionnaire.
                    </p>
                </div>

                <div className={styles.ctaSection}>
                    <p className={styles.ctaText}>
                        Ready to complete your enrollment?
                        <br />
                        Fill out the enrollment form or register your interest to get started.
                        <br />
                        <i><b>Need based discounts are available on individual basis.</b></i>
                    </p>
                    <div className={styles.buttonGroup}>
                        <Link href="/programs-events" className={styles.ctaButton}>
                            View Programs
                        </Link>
                        <Link href="/enrollment-payment" className={styles.ctaButton}>
                            Enroll Now
                        </Link>
                        <Link href="/testimonials#interest" className={styles.secondaryButton}>
                            Register Interest
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
