import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TherapyList from '@/components/TherapyList';
import InstructorProfile from '@/components/InstructorProfile';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="philosophy" className="container section-padding text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Our Philosophy</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
          Yoga offers holistic healing by enhancing immunity, reducing stress, and nurturing mental, emotional, and spiritual growth.
          Because it is adaptable for every age and ability, Yoga becomes a universally accessible tool for total well-being and lifelong health.
          We blend traditional yogic science with modern medical understanding to provide a safe and effective path to wellness.
        </p>
      </section>

      <TherapyList />
      <InstructorProfile />
      <Footer />
      <Chatbot />
    </main>
  );
}
