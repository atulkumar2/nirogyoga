import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstructorProfile from '@/components/InstructorProfile';
import styles from './instructors.module.css';

export const metadata = {
    title: "Our Instructors | Nirog Yoga",
    description: "Meet our experienced yoga instructors at Nirog Yoga.",
};

export default function Instructors() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Our Instructors</h1>
                    <p className={styles.subtitle}>
                        Meet our experienced yoga instructors dedicated to guiding you on your wellness journey.
                    </p>
                </header>
                <InstructorProfile />
            </div>

            <Footer />
        </main>
    );
}
