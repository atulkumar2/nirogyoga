import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./core-strength-detail.module.css";

const CORE_ASANAS = [
  {
    slug: "navasana",
    sanskrit: "Navasana",
    english: "Boat Pose",
    devanagari: "नावासन",
    image: "/core-strength/navasana.svg",
    intro:
      "Navasana builds integrated core strength and postural control through a stable seated balance.",
    focus: [
      "Lift chest and lengthen spine before lifting legs.",
      "Engage lower abdomen and keep shoulders relaxed.",
      "Keep shins parallel or extend legs as capacity allows.",
      "Balance on sit-bones without collapsing lower back.",
    ],
    benefits: [
      "Strengthens core and hip flexors.",
      "Improves postural endurance and balance.",
      "Builds concentration and breath control under effort.",
    ],
    precautions: [
      "Keep knees bent if lower back rounds.",
      "Avoid prolonged holds with acute lumbar pain.",
    ],
    modifications: [
      "Hold behind thighs for support.",
      "Keep toes lightly on floor between breaths.",
    ],
    commonMistakes: [
      "Rounding chest and collapsing lumbar region.",
      "Holding breath while maintaining pose.",
    ],
    hold: "3 to 8 breaths",
    breath: "Steady and controlled nasal breathing.",
    counterPose: "Release feet down and fold forward gently.",
    steps: [
      "Sit with knees bent and feet grounded.",
      "Lean back slightly and lift feet to shin-height.",
      "Extend arms forward or hold thighs.",
      "Optionally extend legs and hold with smooth breath.",
    ],
  },
  {
    slug: "phalakasana",
    sanskrit: "Phalakasana",
    english: "Plank",
    devanagari: "फलकासन",
    image: "/core-strength/phalakasana.svg",
    intro:
      "Phalakasana is a foundational strength posture training full-body integration with emphasis on core stability.",
    focus: [
      "Wrists under shoulders with active hand press.",
      "Head, spine, and heels in one long line.",
      "Draw navel gently toward spine.",
      "Press heels back and crown forward.",
    ],
    benefits: [
      "Strengthens core, shoulders, and legs.",
      "Improves scapular and trunk stability.",
      "Builds endurance for vinyasa transitions.",
    ],
    precautions: [
      "Lower knees for wrist or lower-back sensitivity.",
      "Avoid sagging hips to protect lumbar spine.",
    ],
    modifications: [
      "Knees-down plank variation.",
      "Hands elevated on stable support.",
    ],
    commonMistakes: [
      "Hips dropping below shoulder line.",
      "Shoulders collapsing into wrists.",
    ],
    hold: "4 to 10 breaths",
    breath: "Even rhythmic breathing with active core brace.",
    counterPose: "Lower knees and rest in Balasana.",
    steps: [
      "From tabletop, step legs back one at a time.",
      "Align shoulders over wrists and engage core.",
      "Maintain straight line from head to heels.",
      "Hold and exit slowly with control.",
    ],
  },
  {
    slug: "chaturanga-dandasana",
    sanskrit: "Chaturanga Dandasana",
    english: "Four-Limbed Staff Pose",
    devanagari: "चतुरंगा दंडासन",
    image: "/core-strength/chaturanga-dandasana.svg",
    intro:
      "Chaturanga Dandasana is a demanding strength posture requiring core integrity, shoulder stability, and precise alignment.",
    focus: [
      "From plank, shift slightly forward before lowering.",
      "Elbows hug ribs at about 90 degrees.",
      "Keep body in one straight line.",
      "Scapulae remain stable without shoulder collapse.",
    ],
    benefits: [
      "Builds upper-body and deep-core strength.",
      "Develops controlled transition mechanics.",
      "Improves shoulder and triceps endurance.",
    ],
    precautions: [
      "Use knees-down variation during strength development.",
      "Avoid if shoulder impingement is active.",
    ],
    modifications: [
      "Lower halfway with knees on floor.",
      "Practice eccentric lowering from plank in short sets.",
    ],
    commonMistakes: [
      "Dropping shoulders below elbows.",
      "Flaring elbows wide and straining wrists.",
    ],
    hold: "1 to 3 breaths",
    breath: "Inhale prepare, exhale lower with steady control.",
    counterPose: "Transition to Bhujangasana or Balasana.",
    steps: [
      "Start in strong plank alignment.",
      "Shift forward slightly to stack elbows over wrists.",
      "Lower halfway with elbows close to torso.",
      "Hold briefly and transition safely.",
    ],
  },
];

const coreMap = Object.fromEntries(CORE_ASANAS.map((asana) => [asana.slug, asana]));

export function generateStaticParams() {
  return CORE_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = coreMap[slug];
  if (!asana) return { title: "Core Strength Asana | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function CoreStrengthDetailPage({ params }) {
  const { slug } = await params;
  const asana = coreMap[slug];
  if (!asana) notFound();

  const currentIndex = CORE_ASANAS.findIndex((item) => item.slug === asana.slug);
  const previousAsana = currentIndex > 0 ? CORE_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < CORE_ASANAS.length - 1 ? CORE_ASANAS[currentIndex + 1] : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create stable base and activate deep core support.",
      image: "/core-strength/phalakasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Maintain structure while breathing steadily.",
      image: asana.image,
    },
    {
      title: "Step 3: Exit and Reset",
      cue: asana.counterPose,
      image: "/restorative/savasana.svg",
    },
  ];

  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {asana.sanskrit} ({asana.english})
          </h1>
          <p className={styles.subtitle}>
            {asana.devanagari} | Core-Strength Asana practice details from Nirog Yoga
          </p>
        </header>

        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <Image src={asana.image} alt={`${asana.sanskrit} illustration`} width={240} height={240} priority />
          </div>
        </div>

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.text}>{asana.intro}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Alignment Cues</h2>
            <ul className={styles.list}>
              {asana.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <ul className={styles.list}>
              {asana.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Precautions</h2>
            <ul className={styles.list}>
              {asana.precautions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Modifications</h2>
            <ul className={styles.list}>
              {asana.modifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Mistakes</h2>
            <ul className={styles.list}>
              {asana.commonMistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Practice Rhythm</h2>
            <p className={styles.text}>
              <strong>Recommended hold:</strong> {asana.hold}
            </p>
            <p className={styles.text}>
              <strong>Breath pattern:</strong> {asana.breath}
            </p>
          </section>
        </div>

        <section className={styles.stepsSection}>
          <h2 className={styles.sectionTitle}>How to Practice (Step-by-Step)</h2>
          <ol className={styles.steps}>
            {asana.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className={styles.visualSection}>
          <h2 className={styles.sectionTitle}>Step-by-Step Visual Guide</h2>
          <div className={styles.visualGrid}>
            {visualSteps.map((step) => (
              <article key={step.title} className={styles.visualCard}>
                <h3 className={styles.visualTitle}>{step.title}</h3>
                <div className={styles.visualImageWrap}>
                  <Image
                    src={step.image}
                    alt={`${asana.sanskrit} visual cue`}
                    width={180}
                    height={180}
                    className={styles.visualImage}
                  />
                </div>
                <p className={styles.visualCue}>{step.cue}</p>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.navigation}>
          <Link href="/knowledge-base/major-asanas#core-strength" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/core-strength-asanas/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/hip-opening-asanas/baddha-konasana" className={styles.navLink}>
              ← Hip-Opening Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/core-strength-asanas/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/restorative-asanas/savasana" className={styles.navLink}>
              Restorative Asanas →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
