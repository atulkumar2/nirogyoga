import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InstructorProfile from '@/components/InstructorProfile';
import Navbar from '@/components/Navbar';
import ProgramsSection from '@/components/ProgramsSection';
import TherapyList from '@/components/TherapyList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="philosophy" className={styles.philosophySection}>
        <h2 className={styles.title}>Our Philosophy</h2>
        <p className={styles.text}>
          Yoga offers holistic healing by enhancing immunity, reducing stress, and nurturing mental, emotional, and spiritual growth.
          Because it is adaptable for every age and ability, Yoga becomes a universally accessible tool for total well-being and lifelong health.
          We blend traditional yogic science with modern medical understanding to provide a safe and effective path to wellness.
        </p>
      </section>

      <ProgramsSection />
      <InstructorProfile />
      <TherapyList />
      <Footer />
      <Chatbot />
    </main>
  );
}
