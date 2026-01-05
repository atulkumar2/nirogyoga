import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./shirshashana.module.css";

export const metadata = {
  title: "Shirshashana (Headstand) | Nirog Yoga",
  description:
    "Master the King of Asanas: clear steps, benefits, contraindications, and variations for Shirshashana (Headstand).",
};

export default function Shirshashana() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Śīrṣāsana (Shirshashana)</h1>
          <p className={styles.subtitle}>
            Known as the "King of Asanas," the Headstand is a powerful inversion
            that revitalizes the entire body and mind.
          </p>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src="/shirshashana-pose.png" // Updated image path
            alt="Practitioner performing Shirshashana (Headstand) with perfect alignment"
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
              Śīrṣāsana (Headstand) is one of the most revered postures in Hatha
              Yoga. The name comes from the Sanskrit words <em>śīrṣa</em>{" "}
              meaning "head" and <em>āsana</em> meaning "posture". It requires
              balance, core strength, and focus. By reversing gravity's effect
              on the body, it increases blood flow to the brain, calms the
              nervous system, and improves focus.
            </p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <ul className={styles.gridList}>
              <li className={styles.gridItem}>
                <strong>Brain Health:</strong> Increases fresh blood flow to the
                brain cells, improving memory and focus.
              </li>
              <li className={styles.gridItem}>
                <strong>Endocrine System:</strong> Stimulates the pituitary and
                pineal glands, which regulate our health and vitality.
              </li>
              <li className={styles.gridItem}>
                <strong>Upper Body Strength:</strong> Strengthens the arms,
                shoulders, and core muscles.
              </li>
              <li className={styles.gridItem}>
                <strong>Digestive Health:</strong> Reverses the pull of gravity
                on digestive organs, helping to cleanse trapped gases and
                improve digestion.
              </li>
              <li className={styles.gridItem}>
                <strong>Mental Clarity:</strong> Relieves stress and mild
                depression; develops a sense of balance and poise.
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
              <p>Do not practice Shirshashana if you have:</p>
              <ul className={styles.listItem}>
                <li>High or low blood pressure</li>
                <li>Heart condition</li>
                <li>Neck injury or chronic neck pain</li>
                <li>Glaucoma or recent eye surgery</li>
                <li>Menstruation (traditionally avoided during heavy flow)</li>
                <li>
                  Pregnancy (unless practiced for a long time prior to
                  pregnancy)
                </li>
              </ul>
              <p>
                <strong>Note:</strong> Beginners should practice under the
                guidance of a qualified teacher or against a wall.
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
                Kneel on your mat. Interlock your fingers and place your
                forearms on the mat, with elbows shoulder-width apart. This
                forms a stable tripod base.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Place the Head</span>
                Place the crown of your head on the mat, nestled in your cupped
                hands. The back of the head should touch the palms. Ensure your
                neck is long and not compressed.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lift the Hips</span>
                Tuck your toes and lift your hips high, straightening your legs
                (like in Dolphin Pose). Walk your feet towards your head to
                stack your hips over your shoulders.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Lift the Legs</span>
                Engage your core. Lift one leg up, then the other, or lift both
                legs together with control if you are advanced. Keep your weight
                primarily on your forearms, not your head.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Find Alignment</span>
                Straighten your legs fully towards the ceiling. Activate your
                thighs and point your toes. Your body should form a straight
                line from ears to ankles. Breathe deeply and hold.
              </li>
              <li className={styles.stepItem}>
                <span className={styles.stepTitle}>Release</span>
                To come down, slowly lower your legs with control. Rest in{" "}
                <strong>Balasana (Child’s Pose)</strong> for a few moments to
                normalize blood pressure before sitting up.
              </li>
            </ol>
          </section>

          {/* External Resources */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>External Resources & Tutorials</h2>
            <p className={styles.description}>
              Deepen your understanding and practice safely with these curated external resources.
            </p>
            <ul className={styles.resourceList}>
              <li>
                <a href="https://www.youtube.com/watch?v=MwBpxrM2U_M" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Headstand for Beginners | Shirshasana | 6 steps to achieve Headstand</strong> - <em>Youtube, Hindi</em>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=NsstXSIZa4A" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Sirsasana with Wall Support</strong> - <em>Youtube, Mind Body Asset</em>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=EmbVXyvHXnQ" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🎥 <strong>Health Benefits of Shirshasana Yog</strong> - <em>Youtube, Swami Ramdev</em>
                </a>
              </li>
              <li>
                <a href="https://www.yogajournal.com/poses/types/inversions/supported-headstand/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  📄 <strong>Supported Headstand (Salamba Sirsasana)</strong> - <em>Yoga Journal</em>
                </a>
              </li>
            </ul>
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
