import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Healing Yoga Sadhana</h3>
                    <p className={styles.text}>
                        A pathway back to calmness, focus, and health.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <span className={styles.text}>Phone: 8792873242 / 8123690515</span>
                    <span className={styles.text}>Email: drkunal10@gmail.com</span>
                </div>

                <div className={styles.column}>
                    <h3>Visit Us</h3>
                    <address className={styles.text} style={{ fontStyle: 'normal' }}>
                        Shree Divya Shakthi Dham,<br />
                        4th Cross, Kodialguttu East,<br />
                        M.G. Road, Mangalore.
                    </address>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Parvathi Kunal Yoga. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
