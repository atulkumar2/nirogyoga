import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './introduction.module.css';

export const metadata = {
  title: "Introduction to Yoga | Nirog Yoga",
  description: "A scholarly perspective on Yoga as an ancient science, its historical foundations, and modern relevance.",
};

export default function IntroductionToYoga() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Introduction to Yoga</h1>
          <p className={styles.subtitle}>A Scholarly Perspective on an Ancient Science</p>
        </header>

        <section className={styles.section}>
          <p className={styles.text}>
            Yoga is one of India’s most significant contributions to global knowledge traditions. Rooted in ancient philosophical systems, yoga represents a disciplined approach to harmonizing the body, mind, breath, and consciousness. Far beyond physical exercise, it is a psycho-physiological, ethical, and spiritual science designed to promote holistic well-being.
          </p>
          <p className={styles.text}>
            The term <em>Yoga</em>, derived from the Sanskrit root <em>yuj</em> (to unite), encapsulates the integration of human faculties — physical, mental, emotional, and spiritual. This unified state enables clarity of thought, emotional balance, and purposeful living.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Historical Foundations</h2>
          <p className={styles.text}>
            Yoga’s origins trace to early Vedic literature and evolve comprehensively in classical texts, including:
          </p>
          <ul className={styles.list}>
            <li><strong>Patanjali’s <em>Yoga Sutra</em></strong> (circa 400 CE) — presents the eightfold path (<em>Ashtanga Yoga</em>) as the systematic framework for mental discipline and self-realization.</li>
            <li><strong>Hatha Yoga Pradipika</strong> (15th century CE) — outlines physical purification techniques such as asana, pranayama, mudras, and bandhas.</li>
            <li><strong>Upanishads and Bhagavad Gita</strong> — discuss various yoga paths such as Karma Yoga, Bhakti Yoga, and Jnana Yoga.</li>
          </ul>
          <p className={styles.text}>
            These texts establish yoga as both a philosophical system and a practical discipline.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Scientific and Contemporary Relevance</h2>
          <p className={styles.text}>
            Modern scientific research has validated many of yoga’s traditional claims, positioning it as an evidence-based health intervention. Studies from leading institutions such as <strong>Harvard Medical School</strong>, <strong>AIIMS</strong>, and <strong>National Institutes of Health (NIH)</strong> show significant benefits in:
          </p>
          <ul className={styles.list}>
            <li><strong>Stress and anxiety reduction</strong> (Harvard Health Publishing, 2021)</li>
            <li><strong>Regulation of blood pressure and heart rate variability</strong> (NIH – NCCIH, 2022)</li>
            <li><strong>Enhanced flexibility, posture, and musculoskeletal function</strong> (Journal of Bodywork & Movement Therapies, 2019)</li>
            <li><strong>Improved metabolic parameters in diabetes management</strong> (Indian Journal of Endocrinology, 2017)</li>
            <li><strong>Improved sleep patterns and emotional stability</strong> (Sleep Science, 2020)</li>
          </ul>
          <p className={styles.text}>
            These findings confirm yoga’s effectiveness for modern lifestyle disorders.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Multi-Dimensional Structure of Yoga</h2>
          <p className={styles.text}>
            Traditionally, yoga addresses human development through several interconnected dimensions:
          </p>

          <div className={styles.dimensionCard}>
            <h3 className={styles.dimensionTitle}>1. Physical Dimension (Asana)</h3>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Develops strength, mobility, neuromuscular coordination, and spinal health.
            </p>
          </div>

          <div className={styles.dimensionCard}>
            <h3 className={styles.dimensionTitle}>2. Physiological Dimension (Pranayama)</h3>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Regulates breath, balances the autonomic nervous system, and enhances vitality.
            </p>
          </div>

          <div className={styles.dimensionCard}>
            <h3 className={styles.dimensionTitle}>3. Mental Dimension (Pratyahara, Dharana, Dhyana)</h3>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Builds attention, cognitive clarity, and emotional resilience through subtle mental practices.
            </p>
          </div>

          <div className={styles.dimensionCard}>
            <h3 className={styles.dimensionTitle}>4. Ethical–Behavioral Dimension (Yama & Niyama)</h3>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Cultivates discipline, self-regulation, empathy, and responsible living.
            </p>
          </div>

          <div className={styles.dimensionCard}>
            <h3 className={styles.dimensionTitle}>5. Spiritual Dimension (Samadhi)</h3>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Encourages expanded awareness and inner transformation.
            </p>
          </div>

          <p className={styles.text}>
            This integrated approach distinguishes yoga from other health systems.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Yoga in Higher Education</h2>
          <p className={styles.text}>
            As the global demand for trained yoga professionals grows, universities have begun adopting structured yoga programs supported by:
          </p>
          <ul className={styles.list}>
            <li><strong>UGC/NCTE guidelines for yoga education in India</strong></li>
            <li><strong>WHO recommendations on traditional and complementary medicine</strong></li>
            <li><strong>AYUSH research frameworks for integrative health</strong></li>
          </ul>
          <p className={styles.text}>
            Nirog Yoga University aligns with these standards, presenting yoga through a curriculum that blends classical knowledge with modern pedagogical and scientific methods.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Purpose of Teaching Yoga at Nirog Yoga University</h2>
          <p className={styles.text}>
            Our academic approach ensures that students develop:
          </p>
          <ul className={styles.list}>
            <li>Conceptual clarity rooted in classical texts</li>
            <li>Practical competence in asana, pranayama, kriyas, and meditation</li>
            <li>Understanding of yoga therapy, anatomy, and physiology</li>
            <li>Research literacy for evidence-based practice</li>
            <li>Professional skills to teach and guide diverse populations</li>
          </ul>
          <p className={styles.text}>
            The aim is to cultivate practitioners and instructors who are not only skilled but also grounded in authentic yogic knowledge.
          </p>
        </section>

        <section className={`${styles.section} ${styles.references}`}>
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.5rem' }}>References</h2>
          <ol className={styles.orderedList}>
            <li>Patanjali. <em>Yoga Sutras of Patanjali</em>. (Various translations published by Penguin, Motilal Banarsidass).</li>
            <li>Svatmarama. <em>Hatha Yoga Pradipika</em>. Kaivalyadhama Publications.</li>
            <li>Feuerstein, G. <em>The Yoga Tradition: Its History, Literature, Philosophy and Practice</em>.</li>
            <li>Harvard Health Publishing. “Yoga for anxiety and stress.” 2021.</li>
            <li>National Institutes of Health (NCCIH). “Yoga: What You Need To Know.” 2022.</li>
            <li>Indian Journal of Endocrinology and Metabolism. “Effectiveness of Yoga in Type 2 Diabetes.” 2017.</li>
            <li>Journal of Bodywork and Movement Therapies. “Effects of Yoga on flexibility and joint mobility.” 2019.</li>
            <li>WHO Global Report on Traditional and Complementary Medicine. 2019.</li>
            <li>Ministry of AYUSH (Govt. of India). “Yoga Education and Research Guidelines.”</li>
          </ol>
        </section>

        <div className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Why Yoga?</h4>
              <p>Understand why Yoga is a foundation for holistic human development.</p>
              <Link href="/knowledge-base/why-yoga" className={styles.resourceLink}>
                Read Overview →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Historical References</h4>
              <p>Key texts and eras that shaped Yoga as a knowledge system.</p>
              <Link href="/knowledge-base/historical-references" className={styles.resourceLink}>
                Explore Timeline →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Pranayama</h4>
              <p>Breath regulation foundations, science, and major categories.</p>
              <Link href="/knowledge-base/pranayama" className={styles.resourceLink}>
                Study Pranayama →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/historical-references" className={styles.relatedLink}>
            Next: Historical References →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
