'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import styles from './testimonials.module.css';


export default function Testimonials() {
    const [activeForm, setActiveForm] = useState('interest');

    const forms = {
        interest: {
            title: 'Interest',
            icon: '🌟',
            description: 'Interested in our programs? Let us know what you\'re looking for and we\'ll get in touch.',
            banner: 'Need based discounts available on individual basis',
            bannerIcon: '🎁',
            url: 'https://forms.gle/4two5f7HTLp2xmkj9'
        },
        review: {
            title: 'Review',
            icon: '⭐',
            description: 'Share your experience with our programs and instructors. Your review helps others make informed decisions.',
            url: 'https://forms.gle/9UPXK4mNDbZnMxMUA'
        },
        feedback: {
            title: 'Feedback',
            icon: '💬',
            description: 'Provide suggestions, report issues, or share ideas for improvement. We\'re always listening!',
            url: 'https://forms.gle/MvdxQm6mUesQFRXS9'
        }
    };

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

                {/* Form Selection Tabs */}
                <section className={styles.formsContainer}>
                    <h2 className={styles.formsMainTitle}>Choose a Form</h2>

                    <div className={styles.tabsContainer}>
                        {Object.entries(forms).map(([key, form]) => (
                            <button
                                key={key}
                                className={`${styles.tabButton} ${activeForm === key ? styles.activeTab : ''}`}
                                onClick={() => setActiveForm(key)}
                            >
                                <span className={styles.tabIcon}>{form.icon}</span>
                                <span className={styles.tabTitle}>{form.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active Form Display */}
                    <div className={styles.formCard}>
                        <div className={styles.formCardHeader}>
                            <span className={styles.formIcon}>{forms[activeForm].icon}</span>
                            <h3 className={styles.formCardTitle}>{forms[activeForm].title}</h3>
                        </div>
                        <p className={styles.formCardDescription}>
                            {forms[activeForm].description}
                        </p>
                        {forms[activeForm].banner && (
                            <div className={styles.cardBanner}>
                                <span className={styles.cardBannerIcon}>{forms[activeForm].bannerIcon}</span>
                                <span className={styles.cardBannerText}>{forms[activeForm].banner}</span>
                            </div>
                        )}
                        <iframe
                            src={forms[activeForm].url}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className={styles.formIframe}
                            title={`${forms[activeForm].title} Form`}
                        >
                            Loading…
                        </iframe>
                    </div>
                </section>


            </div>

            <Footer />
        </main>
    );
}
