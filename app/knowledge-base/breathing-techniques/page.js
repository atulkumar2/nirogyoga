import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './breathing-techniques.module.css';

export const metadata = {
  title: "Breathing Control Techniques (Prāṇāyāma Variants) | Nirog Yoga",
  description: "A comprehensive overview of yogic breathing control techniques - from foundational practices to advanced prāṇāyāma variants for students and practitioners.",
};

export default function BreathingTechniques() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Breathing Control Techniques</h1>
          <p className={styles.subtitle}>
            Prāṇāyāma Variants: A Comprehensive Overview for Students & Practitioners
          </p>
        </header>

        <section className={styles.section}>
          <p className={styles.text}>
            Breathing control in yoga is not accidental — it is a deliberate, scientific method to regulate the autonomic nervous system, balance prāṇa, and prepare the mind for deeper practices like meditation. Below are the major categories and techniques of yogic breath control, explained with precision and purpose.
          </p>

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <Image
              src="/breathing-techniques.png"
              alt="Yogic Breathing Techniques Guide"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
              width={800}
              height={450}
            />
          </div>
        </section>

        {/* FOUNDATIONAL TECHNIQUES */}
        <section className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            1. Foundational Techniques {' '}
            <span className={styles.levelBadge + ' ' + styles.beginner}>Beginner Level</span>
          </h2>
          <p className={styles.text}>
            These build awareness, steadiness, and baseline lung capacity.
          </p>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>1.1 Dirgha Shvāsa — Deep Yogic Breathing (3-Part Breath)</h3>
            <div className={styles.techniquePattern}>
              Focus: Chest → ribs → abdomen expansion
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Improves lung function</li>
                <li>Reduces anxiety</li>
                <li>Ideal warm-up before all pranayamas</li>
              </ul>
            </div>
            <div className={styles.useBox}>
              <div className={styles.useTitle}>Use for beginners:</div>
              Helps students understand diaphragmatic breathing.
            </div>
          </div>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>1.2 Sama Vritti — Equal Ratio Breathing</h3>
            <div className={styles.techniquePattern}>
              Pattern: Inhale = Exhale (e.g., 4 seconds in, 4 seconds out)
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Balances sympathetic & parasympathetic systems</li>
                <li>Increases mental steadiness</li>
              </ul>
            </div>
            <div className={styles.useBox}>
              <div className={styles.useTitle}>Use:</div>
              Best for students with stress, restlessness, or shallow breathing.
            </div>
          </div>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>1.3 Vishama Vritti — Unequal Ratio Breathing</h3>
            <div className={styles.techniquePattern}>
              Pattern: Exhale longer than inhale (e.g., 4 in → 6 out)
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Deep relaxation</li>
                <li>Reduces heart rate</li>
                <li>Helps with insomnia</li>
              </ul>
            </div>
            <div className={styles.useBox}>
              <div className={styles.useTitle}>Use:</div>
              Evening practice & pre-meditation calming.
            </div>
          </div>
        </section>

        {/* CLEANSING & ENERGIZING */}
        <section className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            2. Cleansing & Energizing Techniques {' '}
            <span className={styles.levelBadge + ' ' + styles.intermediate}>Intermediate</span>
          </h2>
          <p className={styles.text}>
            These activate prāṇa, improve circulation, and energize the system.
          </p>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>2.1 Kapalabhati — Skull-Shining Breath</h3>
            <div className={styles.techniquePattern}>
              Pattern: Active exhale (quick, sharp) + Passive inhale
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Clears sinuses</li>
                <li>Stimulates digestion</li>
                <li>Activates solar plexus (Manipura chakra)</li>
                <li>Increases alertness</li>
              </ul>
            </div>
            <div className={styles.cautionBox}>
              <div className={styles.cautionTitle}>Caution:</div>
              Avoid in hypertension, pregnancy, hernia.
            </div>
          </div>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>2.2 Bhastrika — Bellows Breath</h3>
            <div className={styles.techniquePattern}>
              Pattern: Forceful inhale + forceful exhale with equal intensity
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Strong energy booster</li>
                <li>Improves lung power</li>
                <li>Warms the body</li>
              </ul>
            </div>
            <div className={styles.cautionBox}>
              <div className={styles.cautionTitle}>Caution:</div>
              Not for anxiety-sensitive individuals or cardiac conditions.
            </div>
          </div>
        </section>

        {/* COOLING TECHNIQUES */}
        <section className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>3. Cooling Techniques (Therapeutic Use)</h2>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>3.1 Sheetali — Cooling Tongue Breath</h3>
            <div className={styles.techniquePattern}>
              Pattern: Roll tongue → inhale through the tube → exhale through nose
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Reduces heat</li>
                <li>Helps anger, acidity, hot climates</li>
              </ul>
            </div>
          </div>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>3.2 Sheetkari — Hissing Breath</h3>
            <div className={styles.techniquePattern}>
              Pattern: Teeth slightly open → inhale through teeth → exhale through nose
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Similar cooling effect</li>
                <li>Useful when tongue cannot be rolled</li>
              </ul>
            </div>
          </div>

          <div className={styles.techniqueBox}>
            <h3 className={styles.techniqueTitle}>3.3 Chandra Bhedana — Left Nostril Breathing</h3>
            <div className={styles.techniquePattern}>
              Pattern: Inhale left → exhale right
            </div>
            <div className={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul className={styles.list}>
                <li>Calms, cools, lowers heart rate</li>
                <li>Good for anxiety and insomnia</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.references}>
          <h3 className={styles.outcomeTitle}>References & Suggested Reading</h3>
          <ul className={styles.referencesList}>
            <li>Iyengar, B. K. S. (2005). Light on Yoga.</li>
            <li>Brown, R. P., & Gerbarg, P. L. (2005). Sudarshan Kriya Yoga.</li>
            <li>Articles from Journal of Alternative and Complementary Medicine.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </main>
  );
}
