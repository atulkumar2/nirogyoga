import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./halasana.module.css";

export const metadata = {
  title: "Halasana (Plow Pose) | Nirog Yoga",
  description:
    "Learn Halasana (Plow Pose): a powerful inversion for spinal flexibility, thyroid health, and calming the mind. Step-by-step guide and benefits.",
};

export default function Halasana() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Halāsana (Plow Pose)</h1>
          <p className={styles.subtitle}>
            Rejuvenate your spine and calm your mind with this powerful inversion that resembles a plow.
          </p>
        </header>

        <div className={styles.imageContainer}>
          {/* Using a placeholder SVG or generic image if specific photo is unavailable, for now reusing one or keeping section clean if no asset. 
              Ideally we would have a 'halasana.svg' but for now we might not have it. 
              I'll check if I created 'halasana.svg'? No I didn't. 
              I'll use a placeholder from the public folder or just text/structure.
              Actually, the user asked for SVGs earlier for Major Asanas. 
              I will assume I should use a placeholder or the same style. 
              Let's use a generic Yoga placeholder or comment out image to avoid 404 if file missing.
              Wait, I can use '/lotus-placeholder.svg' which I know exists from reading page.js earlier. */}
          <Image
            src="/lotus-placeholder.svg"
            alt="Practitioner performing Halasana (Plow Pose)"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "var(--radius-lg)",
              
            }}
            priority
          />
        </div>

        <div className={styles.mainContent}>
          {/* Introduction */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.description}>
              Halāsana (Plow Pose) is an intermediate yoga posture that usually follows Sarvangasana (Shoulder stand). 
              The name comes from the Sanskrit word <em>hala</em>, meaning "plow", as the body's shape resembles the traditional Indian farming tool.
              It is excellent for spinal flexibility and stimulating the abdominal organs.
            </p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <ul className={styles.gridList}>
              <li className={styles.gridItem}>
                <strong>Spinal Health:</strong> Nourishes the thoracic and lumbar regions of the spine, increasing flexibility and releasing tension.
              </li>
              <li className={styles.gridItem}>
                <strong>Thyroid & Parathyroid:</strong> The compression in the neck region massages and stimulates the thyroid gland, aiding metabolism.
              </li>
              <li className={styles.gridItem}>
                <strong>Digestion:</strong> The pressure on the abdomen massages the internal organs, alleviating constipation and indigestion.
              </li>
              <li className={styles.gridItem}>
                <strong>Stress Relief:</strong> Calms the brain and nervous system, helping to reduce stress, fatigue, and insomnia.
              </li>
              <li className={styles.gridItem}>
                <strong>Waist Flexibility:</strong> Stretches the shoulders and hips, helping to trim the waistline.
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
              <p>Avoid Halasana if you have:</p>
              <ul className={styles.listItem}>
                <li>Cervical spondylitis or neck injury</li>
                <li>Diarrhea</li>
                <li>Menstruation (avoid inversion)</li>
                <li>High blood pressure (practice with caution)</li>
                <li>Pregnancy (practiced only by experienced yogis with support)</li>
              </ul>
              <p>
                <strong>Note:</strong> Beginners should support their back with their hands or use props (like a chair) under the feet if they cannot reach the floor.
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
                <span className={styles.stepTitle}>Start in Shoulder stand</span>
                Ideally, begin from <strong>Sarvangasana (Shoulder stand)</strong>. Your body is already inverted and supported.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lower the Legs</span>
                Exhale and slowly lower your legs over your head. Keep your legs straight and feet together.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Touch the Floor</span>
                Gently touch your toes to the floor behind your head. If your toes do not reach comfortably, keep your hands on your back for support or use a chair/block for your feet.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Arm Position</span>
                Once toes are fast on the floor, you can release your hands from your back and interlock fingers on the mat, stretching arms away from the shoulders.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Hold</span>
                Keep the chin locked (Jalandhara Bandha). Breathe normally. Hold for 1-5 minutes depending on comfort.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Release</span>
                To come out, support your back again with your hands. Inhale and lift legs back up to Sarvangasana, then slowly roll down vertebra by vertebra.
              </li>
            </ol>
          </section>

          {/* External Resources */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>External Resources & Tutorials</h2>
            <p className={styles.description}>
              Learn the correct alignment with these Indian expert video guides.
            </p>
            <ul className={styles.resourceList}>
               <li>
                <a href="https://www.youtube.com/watch?v=zOZumZ_lD1c" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Halasana | Plow Yoga Pose | Steps | Benefits</strong> - <em>Youtube, The Art of Living</em>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=4G72lVLwnvY" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Halasana l Method l Benefits l Timing l हलासन कब और कितनी देर करें l Plough Pose</strong> - <em>Youtube, Hindi</em>
                </a>
              </li>
            </ul>
             <div style={{ marginTop: '2rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.4rem' }}>Related Inversions</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                     <Link href="/knowledge-base/sarvangasana" className={styles.backLink}>
                        Sarvangasana (Shoulder stand)
                    </Link>
                    <Link href="/knowledge-base/shirshashana" className={styles.backLink}>
                        Shirshashana (Head stand)
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
