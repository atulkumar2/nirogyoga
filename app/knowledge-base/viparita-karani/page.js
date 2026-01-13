import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./viparita-karani.module.css";

export const metadata = {
  title: "Viparita Karani (Legs-Up-the-Wall Pose) | Nirog Yoga",
  description:
    "Learn Viparita Karani (Legs-Up-the-Wall): a deeply restorative inversion for stress relief, improved circulation, and relaxation. Step-by-step guide and benefits.",
};

export default function ViparitaKarani() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Viparīta Karani (Legs-Up-the-Wall)</h1>
          <p className={styles.subtitle}>
            A deeply restorative and calming posture that reverses the effects of gravity on the body.
          </p>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src="/viparita-karani-pose.png"
            alt="Practitioner performing Viparita Karani (Legs-Up-the-Wall Pose) with perfect alignment"
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
              Viparīta Karaṇī (Legs-Up-the-Wall Pose) is a restorative yoga posture that allows the body and mind to relax deeply. 
              The name comes from the Sanskrit words <em>viparīta</em> meaning "inverted" or "reversed", and <em>karaṇī</em> meaning "doing" or "action". 
              Unlike active inversions, this pose is accessible to almost everyone and is often used at the end of a practice to calm the nervous system.
            </p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <ul className={styles.gridList}>
              <li className={styles.gridItem}>
                <strong>Improved Circulation:</strong> Reverses blood flow from the legs back to the heart, reducing swelling and fatigue in the lower limbs.
              </li>
              <li className={styles.gridItem}>
                <strong>Nervous System:</strong> Activates the parasympathetic nervous system (rest and digest), helping to lower stress and anxiety.
              </li>
              <li className={styles.gridItem}>
                <strong>Sleep Quality:</strong> Practicing this before bed can help alleviate insomnia and promote deeper, more restful sleep.
              </li>
              <li className={styles.gridItem}>
                <strong>Lower Back Relief:</strong> Gently stretches the hamstrings and relieves pressure on the lower back and sacrum.
              </li>
              <li className={styles.gridItem}>
                <strong>Mental Clarity:</strong> Calms the mind and helps reduce mild headaches or mental fatigue.
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
              <p>Practice with caution or avoid if you have:</p>
              <ul className={styles.listItem}>
                <li>Glaucoma or serious eye conditions (due to increased ocular pressure)</li>
                <li>Menstruation (traditionally avoided, though gentle practice is personal choice)</li>
                <li>Congestive heart failure</li>
                <li>Severe neck or back injuries (practice with extra support)</li>
              </ul>
              <p>
                <strong>Note:</strong> If your feet feel tingly, bend your knees and touch your feet together, bringing your heels toward your pelvis.
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
                <span className={styles.stepTitle}>Position the Support</span>
                Place a bolster or folded blanket about 5-6 inches away from the wall. Sit sideways on the edge of the support.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Roll onto the Back</span>
                Exhale and gently swing your legs up onto the wall as you roll your shoulders and head down onto the floor.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Adjust the Hips</span>
                Your sit bones don't need to touch the wall, but they should be close. The support should be under your lower back/sacrum.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Arms and Chest</span>
                Open your arms out to the sides, palms facing up. Keep your neck relaxed and long. Soften your gaze or close your eyes.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Relax and Breathe</span>
                Hold the pose for 5-15 minutes. Focus on deep, slow breaths into the abdomen.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Release</span>
                To come out, bend your knees and push your feet against the wall to lift your hips. Slide off the support, roll to one side, and stay for a few breaths before sitting up.
              </li>
            </ol>
          </section>

          {/* External Resources */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>External Resources & Tutorials</h2>
            <ul className={styles.resourceList}>
               <li>
                <a href="https://www.yogajournal.com/poses/types/restorative/legs-up-the-wall-pose/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  📄 <strong>Legs-Up-the-Wall Pose (Viparita Karani) Guide</strong> - <em>Yoga Journal</em>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=5MymC_nWaTU" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Viparita Karani | Steps and Benefits</strong> - <em>Youtube, The Art of Living</em>
                </a>
              </li>
            </ul>
             <div style={{ marginTop: '2rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.4rem' }}>Related Inversions</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
