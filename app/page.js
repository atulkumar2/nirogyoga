import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InstructorProfile from '@/components/InstructorProfile';
import Navbar from '@/components/Navbar';
import ProgramsSection from '@/components/ProgramsSection';
import TherapyList from '@/components/TherapyList';
import Image from 'next/image';
import Link from 'next/link';
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

      <section className={styles.kitchenBanner} aria-labelledby="kitchen-banner-title">
        <div className={styles.kitchenImageWrap}>
          <Image
            src="/parvati-kitchen-preview.jpeg"
            alt="Homemade multigrain cake from Parvati's Kitchen"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className={styles.kitchenImage}
          />
        </div>
        <div className={styles.kitchenContent}>
          <p className={styles.kitchenEyebrow}>Fresh homemade food</p>
          <h2 id="kitchen-banner-title" className={styles.kitchenTitle}>Parvati&apos;s Kitchen</h2>
          <p className={styles.kitchenText}>
            Explore Parvathi&apos;s small-batch menu of multigrain cakes, jaggery-sweetened bakes, desserts, and nourishing homemade spreads.
          </p>
          <Link href="/parvati-kitchen" className={styles.kitchenLink}>
            View Kitchen Menu
          </Link>
        </div>
      </section>

      <TherapyList />
      <Footer />
      <Chatbot />
    </main>
  );
}
