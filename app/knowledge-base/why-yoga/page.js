import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './why-yoga.module.css';

export const metadata = {
  title: "Why Yoga? | Knowledge base",
  description: "Discover why Yoga is the foundation of holistic human development and a preventive health approach for modern life.",
};

export default function WhyYoga() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Why Yoga?</h1>
          <p className={styles.subtitle}>The Foundation of Holistic Human Development</p>
        </header>

        <section className={styles.section}>
          <p className={styles.text}>
            Yoga is more than a practice — it is a complete science of human well-being. At Nirog Yoga, we view yoga as a structured discipline that cultivates physical health, mental clarity, emotional balance, and spiritual growth. It forms the core of our academic programs because it integrates ancient wisdom with modern scientific understanding.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. A Time-Tested System Backed by Modern Research</h2>
          <p className={styles.text}>
            Yoga has been practiced for thousands of years, and now global scientific studies confirm its benefits:
          </p>
          <ul className={styles.list}>
            <li>Reduces stress, anxiety, and depression</li>
            <li>Enhances breathing efficiency and lung capacity</li>
            <li>Supports BP, diabetes, and metabolic wellness</li>
            <li>Builds flexibility, balance, and joint mobility</li>
            <li>Strengthens spine and posture</li>
            <li>Improves sleep quality and daily energy</li>
          </ul>
          <p className={styles.text}>
            This makes yoga not just a cultural heritage — but a global health solution.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Yoga Strengthens the Whole Human System</h2>
          <p className={styles.text}>
            Unlike gym-based fitness that targets isolated muscles, yoga works at multiple layers:
          </p>
          <ul className={styles.list}>
            <li><strong>Physical:</strong> strength, flexibility, posture, digestion</li>
            <li><strong>Physiological:</strong> hormones, circulation, immunity</li>
            <li><strong>Mental:</strong> focus, awareness, calm</li>
            <li><strong>Emotional:</strong> resilience, stability, clarity</li>
            <li><strong>Spiritual:</strong> inner connection and harmony</li>
          </ul>
          <p className={styles.text}>
            This multi-dimensional growth is why yoga is ideal for personal development and higher learning.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. A Preventive Health Approach for Today’s Lifestyle</h2>
          <p className={styles.text}>
            Fast-paced life brings lifestyle disorders — chronic stress, sleep issues, back pain, diabetes.
            Yoga equips the body to prevent and manage these conditions naturally. It restores:
          </p>
          <ul className={styles.list}>
            <li>Breath rhythm</li>
            <li>Muscular balance</li>
            <li>Nervous system stability</li>
            <li>Emotional grounding</li>
          </ul>
          <p className={styles.text}>
            Students and professionals experience improved productivity, creativity, and overall well-being.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Accessible to All, Adaptable to Everyone</h2>
          <p className={styles.text}>
            Yoga fits every age, body type, and fitness level.
            It does not demand perfection — only consistency.
            Our programs teach progressions that allow individuals to evolve at their own pace.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. A Path to Inner Transformation</h2>
          <p className={styles.text}>
            Beyond the physical benefits, yoga cultivates deeper attributes:
          </p>
          <ul className={styles.list}>
            <li>Self-awareness</li>
            <li>Discipline</li>
            <li>Compassion</li>
            <li>Emotional intelligence</li>
            <li>Mindfulness in action</li>
          </ul>
          <p className={styles.text}>
            These qualities are essential for a balanced and meaningful life — and form the foundations of true education.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Integrating Tradition with Academic Excellence</h2>
          <p className={styles.text}>
            Nirog Yoga blends classical yogic sciences (Asana, Pranayama, Ayurveda, Philosophy, Meditation) with:
          </p>
          <ul className={styles.list}>
            <li>Evidence-based research</li>
            <li>Modern pedagogy</li>
            <li>Structured curriculum</li>
            <li>Practical training and internships</li>
          </ul>
          <p className={styles.text}>
            Students graduate not only with knowledge — but with the ability to teach, guide, and transform communities.
          </p>
        </section>

        <div className={styles.quote}>
          “Yoga is not just something you practice. It is something you become.”
        </div>

        <div className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Introduction to Yoga</h4>
              <p>A scholarly overview of Yoga as a complete science of well-being.</p>
              <Link href="/knowledge-base/introduction" className={styles.resourceLink}>
                Read Introduction →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Patanjali Yoga Sutras</h4>
              <p>One-page summary of the foundational yoga philosophy and method.</p>
              <Link href="/knowledge-base/patanjali-sutras" className={styles.resourceLink}>
                Read Summary →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Yoga Learning Paths</h4>
              <p>Structured roadmap from beginner to long-term practice and study.</p>
              <Link href="/knowledge-base/learning-paths" className={styles.resourceLink}>
                View Learning Paths →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/introduction" className={styles.relatedLink}>
            Next: Introduction →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
