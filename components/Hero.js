import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.tagline}>Namaste, Welcome to Nirog Yoga</h1>
                <p className={styles.subhead}>
                    Yoga is far more than flexibility or fitness — in a world filled with stress, distraction, and disease, it is a pathway back to calmness, focus, and health.
                </p>
            </div>
            <div className={styles.scrollIndicator}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
