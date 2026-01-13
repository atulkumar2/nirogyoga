import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./pincha-mayurasana.module.css";

export const metadata = {
  title: "Pincha Mayurasana (Feathered Peacock Pose) | Nirog Yoga",
  description:
    "Master Pincha Mayurasana: an advanced forearm balance that builds incredible strength, focus, and balance. Step-by-step guide and benefits.",
};

export default function PinchaMayurasana() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Piñcha Mayurāsana (Feathered Peacock)</h1>
          <p className={styles.subtitle}>
            A majestic and powerful forearm balance that represents the beauty and poise of a peacock's tail.
          </p>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src="/pincha-mayurasana-pose.png"
            alt="Practitioner performing Pincha Mayurasana (Feathered Peacock Pose) with perfect alignment"
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
              Piñcha Mayurāsana (Feathered Peacock Pose) is an advanced inversion and arm balance. 
              The name comes from the Sanskrit words <em>piñcha</em> meaning "feather", <em>mayura</em> meaning "peacock", and <em>āsana</em> meaning "posture". 
              It requires significant shoulder stability, core strength, and mental focus. Unlike Head stand, the weight is entirely supported by the forearms, protecting the neck but increasing the challenge for the upper body.
            </p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <ul className={styles.gridList}>
              <li className={styles.gridItem}>
                <strong>Upper Body Strength:</strong> Builds immense strength in the shoulders, arms, and upper back.
              </li>
              <li className={styles.gridItem}>
                <strong>Core Stability:</strong> Deeply engages the abdominal muscles to maintain vertical alignment and balance.
              </li>
              <li className={styles.gridItem}>
                <strong>Mental Focus:</strong> Improves concentration and balance, fostering a sense of poise and grace under pressure.
              </li>
              <li className={styles.gridItem}>
                <strong>Circulation:</strong> As an inversion, it improves blood flow to the brain and revitalizes the internal organs.
              </li>
              <li className={styles.gridItem}>
                <strong>Stress Relief:</strong> Calms the mind and helps alleviate minor stress and anxiety through focused effort.
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
              <p>Piñcha Mayurāsana is an advanced pose. Avoid it if you have:</p>
              <ul className={styles.listItem}>
                <li>High blood pressure</li>
                <li>Heart conditions</li>
                <li>Shoulder, neck, or back injuries</li>
                <li>Headaches or migraines</li>
                <li>Ear or eye infections (due to increased pressure)</li>
                <li>Menstruation (traditionally avoided for deep inversions)</li>
              </ul>
              <p>
                <strong>Note:</strong> Beginners should practice against a wall or under the supervision of an experienced teacher.
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
                <span className={styles.stepTitle}>Prepare the Base</span>
                Start on your hands and knees. Place your forearms on the mat, parallel to each other, shoulder-width apart. Spread your fingers wide and press your palms firmly down.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Dolphin Pose</span>
                Tuck your toes and lift your hips high, coming into a Dolphin Pose. Walk your feet toward your elbows as far as comfortable, keeping your spine long.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lift One Leg</span>
                Inhale and lift one leg high toward the ceiling. Keep your gaze between your forearms, slightly ahead of your wrists.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Kick Up</span>
                Exhale, bend the knee of the bottom leg, and gently hop up. Use your core to lift both legs vertically. Imagine your body forming a straight line from elbows to toes.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Balance and Breathe</span>
                Engage your thighs and point your toes. Push actively through your forearms to stay light in the shoulders. Hold for 30–60 seconds while breathing steadily.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Release</span>
                To come down, lower one leg at a time with control. Rest in <strong>Balasana (Child’s Pose)</strong> for a few moments to normalize your blood flow.
              </li>
            </ol>
          </section>

          {/* External Resources */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>External Resources & Tutorials</h2>
            <ul className={styles.resourceList}>
               <li>
                <a href="https://www.yogajournal.com/poses/feathered-peacock-pose/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  📄 <strong>Feathered Peacock Pose (Pincha Mayurasana) Guide</strong> - <em>Yoga Journal</em>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=NnO-Uq6m5nU" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Pincha Mayurasana | Forearm Stand Tutorial</strong> - <em>Youtube, Yoga with Adriene</em>
                </a>
              </li>
            </ul>
             <div style={{ marginTop: '2rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.4rem' }}>Related Inversions</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                     <Link href="/knowledge-base/shirshashana" className={styles.backLink}>
                        Shirshashana (Head stand)
                    </Link>
                    <Link href="/knowledge-base/sarvangasana" className={styles.backLink}>
                        Sarvangasana (Shoulder stand)
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
