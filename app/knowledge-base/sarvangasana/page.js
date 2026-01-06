import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./sarvangasana.module.css";

export const metadata = {
  title: "Sarvangasana (Shoulder stand) | Nirog Yoga",
  description:
    "Master the Queen of Asanas: clear steps, benefits, contraindications, and variations for Sarvangasana (Shoulder stand).",
};

export default function Sarvangasana() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Sarvāṅgāsana (Shoulder stand)</h1>
          <p className={styles.subtitle}>
            Known as the "Queen of Asanas," the Shoulder stand promotes harmony and happiness in the human system.
          </p>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src="/sarvangasana.svg"
            alt="Practitioner performing Sarvangasana (Shoulder stand)"
            width={800}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-xl)",
            }}
            priority
          />
        </div>

        <div className={styles.mainContent}>
          {/* Introduction */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.description}>
              Sarvāṅgāsana (Shoulder stand) is a fundamental inversion in Hatha Yoga. 
              The name is derived from Sanskrit: <em>sarva</em> means "all", <em>aṅga</em> means "part" or "limb", and <em>āsana</em> means "posture". 
              As the name suggests, it benefits all parts of the body. It is often referred to as the "Queen of Asanas" (with Sirsasana being the King).
            </p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <ul className={styles.gridList}>
              <li className={styles.gridItem}>
                <strong>Thyroid Health:</strong> The chin lock stimulates the thyroid and parathyroid glands, helping to regulate metabolism.
              </li>
              <li className={styles.gridItem}>
                <strong>Circulation:</strong> Improves blood flow to the brain and heart without strain, helping to relieve stress and fatigue.
              </li>
              <li className={styles.gridItem}>
                <strong>Digestive System:</strong> Relieves constipation and improves digestion by reversing gravity's pull on the abdominal organs.
              </li>
              <li className={styles.gridItem}>
                <strong>Nervous System:</strong> Calms the nerves and can help alleviate mild depression and anxiety.
              </li>
              <li className={styles.gridItem}>
                <strong>Strength & Flexibility:</strong> Strengthens the shoulders and neck while improving flexibility in the spine.
              </li>
            </ul>
          </section>

          {/* Contraindications */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Contraindications & Precautions
            </h2>
            <div className={styles.warningBox}>
              <span className={styles.warningTitle}>
                ⚠️ Important Safety Notes
              </span>
              <p>Do not practice Sarvangasana if you have:</p>
              <ul className={styles.listItem}>
                <li>High blood pressure</li>
                <li>Heart condition</li>
                <li>Neck injury (e.g., slipped disc, spondylitis)</li>
                <li>Glaucoma or detached retina</li>
                <li>Menstruation (avoid during heavy flow)</li>
                <li>Pregnancy (unless practiced consistently prior to pregnancy)</li>
              </ul>
              <p>
                <strong>Note:</strong> Use a folded blanket under the shoulders to protect the neck. Beginners should practice under guidance.
              </p>
            </div>
          </section>

          {/* Steps */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              How to Perform (Step-by-Step)
            </h2>
            <ol className={styles.stepsList}>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Start Position</span>
                Lie on your back with arms alongside your body, palms facing down. Keep legs together.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lift Legs</span>
                Inhale and lift both legs to a 90-degree angle.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lift Hips</span>
                Exhale, press palms into the floor, and lift your hips and lower back off the floor, bringing your legs over your head.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Support Back</span>
                Bend your elbows and place your hands on your lower back for support. Walk your hands up towards your shoulder blades to lift the torso higher.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Straighten Up</span>
                Straighten your legs vertically, aligning feet, hips, and shoulders. Keep your neck relaxed and gaze at your toes. Breathe deeply.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Release</span>
                To come down, lower your legs over your head slightly, release your hands to the floor, and slowly unroll your spine vertebra by vertebra. Lower legs slowly.
              </li>
            </ol>
          </section>

          {/* External Resources */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>External Resources & Tutorials</h2>
            <p className={styles.description}>
              Deepen your understanding with these curated video tutorials from Indian experts.
            </p>
            <ul className={styles.resourceList}>
              <li>
                <a href="https://www.artofliving.org/in-en/yoga/yoga-poses/shoulder-stand-sarvangasana" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  📄 <strong>Sarvangasana (Shoulder Stand) Guide</strong> - <em>Art of Living</em>
                </a>
              </li>
            </ul>
             <div style={{ marginTop: '2rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.4rem' }}>Related Inversions</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                     <Link href="/knowledge-base/shirshashana" className={styles.backLink}>
                        Shirshashana (Head stand)
                    </Link>
                    <Link href="/knowledge-base/halasana" className={styles.backLink}>
                        Halasana (Plow Pose)
                    </Link>
                </div>
            </div>
          </section>
        </div>

        <div className={styles.navigation}>
          <Link href="/knowledge-base/major-asanas" className={styles.backLink}>
            ← Back to Major Asanas
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
