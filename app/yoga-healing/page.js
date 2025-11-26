import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TherapyList from '@/components/TherapyList';
import styles from './therapies.module.css';

export const metadata = {
    title: "Medically Verified Yoga Healing | Nirog Yoga",
    description: "Explore our specialized yoga therapy programs for various health conditions.",
};

export default function YogaHealing() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Medically Verified Yoga Healing</h1>
                    <p className={styles.subtitle}>
                        Healing through specialized practices tailored to your health needs.
                    </p>
                </header>

                <div className={styles.content}>
                    <p className={styles.intro}>
                        At Nirog Yoga, we believe in the power of Yoga to heal and restore balance.
                        Our therapeutic programs are designed based on scientific principles and traditional wisdom
                        to address specific health conditions.
                    </p>

                    {/* Need based Banner */}
                    <div className={styles.cardBanner}>
                        <span className={styles.cardBannerIcon}>🎁</span>
                        <span className={styles.cardBannerText}>Need based discounts available on individual basis</span>
                    </div>

                    {/* Reusing the existing TherapyList component */}
                    <TherapyList />
                </div>
            </div>

            <Footer />
        </main>
    );
}
