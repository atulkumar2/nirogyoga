import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './learning-paths.module.css';

export const metadata = {
  title: "Yoga Learning Paths | Nirog Yoga",
  description: "Structured step-by-step guides for your yoga journey from beginner to expert level.",
};

export default function YogaLearningPaths() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Yoga Learning Paths</h1>
          <p className={styles.subtitle}>
            Structured, step-by-step guides for your yoga journey — from beginner to expert level.
          </p>
          <p className={styles.description}>
            This is the official-style progression followed by reputable yoga institutes worldwide. Each level builds upon the previous one, creating a solid foundation for authentic yoga practice and understanding.
          </p>
        </header>

        <div className={styles.pathContainer}>
          <h3 className={styles.pathMainTitle}>🌱 YOGA READING ROADMAP (Beginner → Expert)</h3>
          <p className={styles.pathDesc}>This is the official-style progression followed by reputable yoga institutes worldwide.</p>

          <div className={styles.levelPath}>
            <h4 className={styles.levelTitle}>🟢 BEGINNER (Weeks 1–8)</h4>
            <p className={styles.levelGoal}><strong>Goal:</strong> Build foundation — what yoga is, how body–breath–mind connect.</p>
            <div className={styles.booksInLevel}>
              <div className={styles.levelBook}>
                <h5>1) Light on Yoga – B.K.S. Iyengar</h5>
                <p>Basic asanas, alignment, breathing during practice</p>
              </div>
              <div className={styles.levelBook}>
                <h5>2) The Heart of Yoga – T.K.V. Desikachar</h5>
                <p>Breath-led movement, personal practice design, simple pranayama</p>
              </div>
              <div className={styles.levelBook}>
                <h5>3) Asana Pranayama Mudra Bandha (APMB) – Bihar School</h5>
                <p>Beginner postures, intro mudras & bandhas, clear diagrams</p>
              </div>
            </div>
            <p className={styles.outcome}><strong>Outcome:</strong> Solid understanding of posture, breath, and purpose of yoga.</p>
          </div>

          <div className={styles.levelPath}>
            <h4 className={styles.levelTitle}>🟡 INTERMEDIATE (Months 2–6)</h4>
            <p className={styles.levelGoal}><strong>Goal:</strong> Learn philosophy, deepen breath & meditation.</p>
            <div className={styles.booksInLevel}>
              <div className={styles.levelBook}>
                <h5>4) Yoga Sutras (Beginner Commentary – Satchidananda)</h5>
                <p>8 limbs of yoga, mind control, obstacles + solutions</p>
              </div>
              <div className={styles.levelBook}>
                <h5>5) Hatha Yoga Pradipika (Muktibodhananda)</h5>
                <p>Classic Hatha methods, shatkarmas, bandhas & pranayama fundamentals</p>
              </div>
              <div className={styles.levelBook}>
                <h5>6) Prana & Pranayama – Bihar Yoga</h5>
                <p>Nadi flow, breath ratios, preparatory practices</p>
              </div>
            </div>
            <p className={styles.outcome}><strong>Outcome:</strong> You now understand real yoga beyond asana — mind training, discipline, breath mastery.</p>
          </div>

          <div className={styles.levelPath}>
            <h4 className={styles.levelTitle}>🔵 ADVANCED (Months 6–18)</h4>
            <p className={styles.levelGoal}><strong>Goal:</strong> Master inner practices, subtle body, meditation science.</p>
            <div className={styles.booksInLevel}>
              <div className={styles.levelBook}>
                <h5>7) Yoga Sutras (Advanced Commentary – Edwin Bryant)</h5>
                <p>Subtle psychology, samadhi structure, detailed classical meaning</p>
              </div>
              <div className={styles.levelBook}>
                <h5>8) Shiva Samhita (Mallinson)</h5>
                <p>Kundalini system, nadis, chakras, advanced pranayama</p>
              </div>
              <div className={styles.levelBook}>
                <h5>9) Gheranda Samhita</h5>
                <p>Seven limbs of Gheranda Yoga, full-body purification, meditation intensives</p>
              </div>
            </div>
            <p className={styles.outcome}><strong>Outcome:</strong> Knowledge of classical yogic science with practical application to meditation.</p>
          </div>

          <div className={styles.levelPath}>
            <h4 className={styles.levelTitle}>🟣 EXPERT / TEACHER TRACK (18–36 months)</h4>
            <p className={styles.levelGoal}><strong>Goal:</strong> Yoga as a life path; deep meditative realization.</p>
            <div className={styles.booksInLevel}>
              <div className={styles.levelBook}>
                <h5>10) Upanishads (selected)</h5>
                <p>Katha (mind mastery), Taittiriya (koshas), Mandukya (consciousness)</p>
              </div>
              <div className={styles.levelBook}>
                <h5>11) Bhagavad Gita – Chapters 2, 3, 6, 12, 14</h5>
                <p>Yoga framework for life, not just practice</p>
              </div>
              <div className={styles.levelBook}>
                <h5>12) Vivekachudamani</h5>
                <p>Discrimination between real/unreal — essential for meditation maturity</p>
              </div>
            </div>
            <p className={styles.outcome}><strong>Outcome:</strong> You know true purpose of yoga, classical texts, physiology of breath, meditation mechanics, lifestyle & inner transformation.</p>
          </div>
        </div>

        <div className={styles.practicePath}>
          <h3 className={styles.practiceTitle}>🧘‍♂️ Practice Progression Path</h3>
          <p className={styles.practiceDesc}>Beyond reading, here's how your actual practice should evolve:</p>

          <div className={styles.practiceStages}>
            <div className={styles.stage}>
              <h4>Foundation Phase (0-3 months)</h4>
              <ul>
                <li>Learn basic asanas and alignment</li>
                <li>Establish daily breath awareness</li>
                <li>Begin short meditation sessions</li>
                <li>Focus on consistency over intensity</li>
              </ul>
            </div>

            <div className={styles.stage}>
              <h4>Development Phase (3-12 months)</h4>
              <ul>
                <li>Deepen asana practice with sequences</li>
                <li>Learn structured pranayama techniques</li>
                <li>Extend meditation to 20-30 minutes</li>
                <li>Study philosophy alongside practice</li>
              </ul>
            </div>

            <div className={styles.stage}>
              <h4>Integration Phase (1-3 years)</h4>
              <ul>
                <li>Integrate all eight limbs of yoga</li>
                <li>Practice becomes meditation in motion</li>
                <li>Deepen understanding of subtle body</li>
                <li>Apply yogic principles to daily life</li>
              </ul>
            </div>

            <div className={styles.stage}>
              <h4>Mastery Phase (3+ years)</h4>
              <ul>
                <li>Teaching and sharing knowledge</li>
                <li>Advanced meditation and contemplation</li>
                <li>Living yoga as a complete lifestyle</li>
                <li>Continuous learning and refinement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📚 Related Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Essential Yoga Books</h4>
              <p>Complete guide to the most important yoga texts and modern works.</p>
              <Link href="/knowledge-base/yoga-books" className={styles.resourceLink}>
                Browse Books →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Patanjali Yoga Sutras</h4>
              <p>One-page summary of the foundational yoga philosophy.</p>
              <Link href="/knowledge-base/patanjali-sutras" className={styles.resourceLink}>
                Read Summary →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Practice Curriculum</h4>
              <p>8-week to 1-year structured practice plan with asana, pranayama, and meditation.</p>
              <Link href="/knowledge-base/curriculum" className={styles.resourceLink}>
                View Curriculum →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/yoga-books" className={styles.relatedLink}>
            Browse Essential Books →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
