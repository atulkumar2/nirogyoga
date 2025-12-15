import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from './safety-guidelines.module.css';

export const metadata = {
  title: "Safety Guidelines for Yoga & Upayoga | Nirog Yoga",
  description: "Essential safety guidelines, alignment principles, and precautions for practicing Yoga and Upayoga safely and effectively.",
};

export default function SafetyGuidelines() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Care to Be Taken When Practicing Yoga & Upayoga</h1>
          <p className={styles.subtitle}>
            Safety · Alignment · Awareness · Progression
          </p>
        </header>

        <section className={styles.section}>
          <p className={styles.introText}>
            Yoga and Upayoga offer enormous benefits, but both require mindful practice. Whether you're a beginner, intermediate practitioner, or instructor, the following guidelines ensure safety, effectiveness, and long-term progress.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/safety-guidelines.png"
              alt="Safety Guidelines Infographic"
              className={styles.heroImage}
              width={900}
              height={500}
            />
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>1</span> Listen to Your Body (Most Important Rule)
            </h2>
            <ul className={styles.list}>
              <li>Yoga should <strong>never cause sharp pain</strong>.</li>
              <li>Stop immediately if you feel dizziness, numbness, or strain.</li>
              <li>Discomfort is okay; <strong>pain is not</strong>.</li>
              <li>Never force your body into a posture because others can.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>2</span> Warm Up Before Deep Movements
            </h2>
            <ul className={styles.list}>
              <li>Always prepare the joints and spine before forward bends, backbends, inversions, or balances.</li>
              <li>Upayoga practices (simple joint rotations, spinal movements, breath awareness) are excellent warm-ups.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>3</span> Sync Breath With Movement
            </h2>
            <ul className={styles.list}>
              <li>Breath should remain <strong>smooth, silent, and natural</strong>.</li>
              <li>If breath becomes jerky or fast, you're pushing too much.</li>
              <li>Never hold breath unless explicitly instructed (and even then, do so gently).</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>4</span> Avoid Overstretching & Overflexing
            </h2>
            <ul className={styles.list}>
              <li>Do not push beyond <strong>70–80% of your range</strong>.</li>
              <li>Stretching must be gradual; "no pain, only awareness."</li>
              <li>Upayoga especially focuses on <strong>gentle mobility</strong>, not deep stretches.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>5</span> Protect Your Spine
            </h2>
            <ul className={styles.list}>
              <li>Keep the spine long; avoid collapsing in forward bends.</li>
              <li>For backbends, lift the chest before bending.</li>
              <li>Engage the core in all standing and balancing postures.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>6</span> Avoid Yoga After Meals
            </h2>
            <ul className={styles.list}>
              <li>Maintain at least <strong>2–3 hours gap</strong> after food.</li>
              <li>Upayoga can be done sooner than yoga but still avoid full stomach sessions.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>7</span> Contraindications for Certain Conditions
            </h2>
            <div className={styles.contraindicationsBox}>
              <h3 className={styles.contraindicationsTitle}>Avoid or modify yoga if you have:</h3>
              <ul className={styles.list} style={{ paddingLeft: '1.5rem' }}>
                <li>Uncontrolled blood pressure</li>
                <li>Acute back injuries or herniated discs</li>
                <li>Vertigo</li>
                <li>Pregnancy (for certain asanas)</li>
                <li>Severe knee injuries</li>
                <li>Cardiac issues</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                <strong>Upayoga</strong>, being gentler, is generally safer but still requires caution.
              </p>
            </div>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>8</span> Never Force Inversions or Backbends
            </h2>
            <ul className={styles.list}>
              <li>Headstand, shoulder stand, deep backbends need supervision.</li>
              <li>Avoid if you have neck issues, glaucoma, or high BP.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>9</span> Respect Individual Pace
            </h2>
            <ul className={styles.list}>
              <li>Progression is personal — no comparison.</li>
              <li>Beginners should focus on <strong>alignment and breathing</strong>, not achieving final pose shapes.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>10</span> Do Not Mix Multiple Methods Too Quickly
            </h2>
            <ul className={styles.list}>
              <li>Combining too many styles (e.g., Ashtanga + Power + Hatha + gym) can overstress the body.</li>
              <li>Ensure the instructor understands your background.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>11</span> End with Rest (Savasana or Upayoga Recovery)
            </h2>
            <ul className={styles.list}>
              <li>Helps integrate the practice.</li>
              <li>Prevents fatigue and overstimulation of the nervous system.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>12</span>{' '}
              Practice Under Guidance
            </h2>
            <ul className={styles.list}>
              <li>Yoga therapy, pranayama, bandhas, and mudras need trained instructors.</li>
              <li>Upayoga can be self-practiced, but initial correction is useful.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>13</span>{' '}
              Hydrate Before, Not During
            </h2>
            <ul className={styles.list}>
              <li>Sips are fine, but avoid drinking large quantities mid-session.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>14</span>{' '}
              Avoid Yoga During Illness or Fever
            </h2>
            <ul className={styles.list}>
              <li>Gentle Upayoga may be fine, but deep postures should wait.</li>
              <li>The body needs rest, not effort.</li>
            </ul>
          </div>

          <div className={styles.ruleBox}>
            <h2 className={styles.ruleTitle}>
              <span className={styles.ruleNumber}>15</span>{' '}
              Mental & Emotional Safety
            </h2>
            <ul className={styles.list}>
              <li>Some practices can surface emotions — this is normal.</li>
              <li>Stop if you feel overwhelmed; return when settled.</li>
              <li>Meditation, breathwork, or deep relaxation can be grounding.</li>
            </ul>
          </div>
        </section>

        <section className={styles.summarySection}>
          <h2 className={styles.summaryTitle}>Safety Summary</h2>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Start slowly, never force your body
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Keep breath steady and smooth
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Avoid practice after meals
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Protect knees, spine, and neck
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Modify postures if injured or pregnant
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              End with proper rest
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Seek guidance when attempting advanced postures
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.checkIcon}>✔</span>{' '}
              Upayoga is gentler, but awareness is still essential
            </div>
          </div>
        </section>

        <section className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Standing Asanas</h4>
              <p>Learn proper alignment for standing poses with safety in mind.</p>
              <Link href="/knowledge-base/standing-asanas" className={styles.resourceLink}>
                View Poses →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Major Asanas</h4>
              <p>Complete guide to yoga postures with variations and modifications.</p>
              <Link href="/knowledge-base/major-asanas" className={styles.resourceLink}>
                Explore Asanas →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Pranayama</h4>
              <p>Breathing techniques with safety guidelines for all levels.</p>
              <Link href="/knowledge-base/pranayama" className={styles.resourceLink}>
                Learn Pranayama →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Practice Curriculum</h4>
              <p>Structured progression with built-in safety at each level.</p>
              <Link href="/knowledge-base/curriculum" className={styles.resourceLink}>
                View Curriculum →
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/standing-asanas" className={styles.relatedLink}>
            Next: Standing Asanas →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
