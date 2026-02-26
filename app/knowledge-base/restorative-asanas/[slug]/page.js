import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./restorative-detail.module.css";

const RESTORATIVE_ASANAS = [
  {
    slug: "savasana",
    sanskrit: "Savasana",
    english: "Corpse Pose",
    devanagari: "शवासन",
    image: "/restorative/savasana.svg",
    intro:
      "Savasana is the principal integration posture that restores the nervous system and assimilates practice effects.",
    focus: [
      "Lie symmetrically with natural spinal curves.",
      "Allow feet and arms to relax outward.",
      "Soften facial muscles, jaw, and eyes.",
      "Let breath become effortless and quiet.",
    ],
    benefits: [
      "Deep relaxation and stress reduction.",
      "Supports recovery from physical exertion.",
      "Improves mind-body integration and awareness.",
    ],
    precautions: [
      "Use support under knees for low-back discomfort.",
      "Cover body if feeling cold to prevent tension.",
    ],
    modifications: [
      "Side-lying savasana for pregnancy or back discomfort.",
      "Bolster under knees and blanket under head.",
    ],
    commonMistakes: [
      "Maintaining subtle muscular tension in shoulders and jaw.",
      "Treating pose as nap instead of conscious relaxation.",
    ],
    hold: "3 to 10 minutes",
    breath: "Natural breathing with non-interference.",
    counterPose: "Roll to right side and return to seated posture slowly.",
    steps: [
      "Lie on back with legs comfortably apart.",
      "Place arms slightly away from torso, palms up.",
      "Close eyes and scan body for unnecessary tension.",
      "Remain still, then exit gradually.",
    ],
  },
  {
    slug: "sukhasana",
    sanskrit: "Sukhasana",
    english: "Easy Sitting Pose",
    devanagari: "सुखासन",
    image: "/restorative/sukhasana.svg",
    intro:
      "Sukhasana is a simple cross-legged seat used for breathwork, meditation, and grounding the mind.",
    focus: [
      "Sit on support so knees can descend comfortably.",
      "Keep spine tall with neutral pelvis.",
      "Relax shoulders and rest hands naturally.",
      "Maintain gentle chin tuck and soft gaze or closed eyes.",
    ],
    benefits: [
      "Encourages calm attention and breath awareness.",
      "Improves seated posture for meditation.",
      "Gently opens hips and ankles over time.",
    ],
    precautions: [
      "Avoid prolonged hold if knees are uncomfortable.",
      "Change leg crossing each round.",
    ],
    modifications: [
      "Sit on folded blanket or block.",
      "Support outer thighs with cushions.",
    ],
    commonMistakes: [
      "Rounding lower back while seated too low.",
      "Holding shoulders tense while breathing.",
    ],
    hold: "1 to 5 minutes",
    breath: "Slow, even breathing with elongated exhalation.",
    counterPose: "Extend legs forward and rotate ankles gently.",
    steps: [
      "Sit on support and cross shins comfortably.",
      "Place hands on knees and lengthen spine upward.",
      "Soften shoulders, jaw, and face.",
      "Hold with relaxed breath and switch cross of legs.",
    ],
  },
  {
    slug: "vajrasana",
    sanskrit: "Vajrasana",
    english: "Thunderbolt Pose",
    devanagari: "वज्रासन",
    image: "/restorative/vajrasana.svg",
    intro:
      "Vajrasana is a kneeling posture often used after meals and for pranayama due to its stable upright alignment.",
    focus: [
      "Sit on heels with knees comfortably together or slightly apart.",
      "Lengthen spine and stack head over pelvis.",
      "Rest hands on thighs with relaxed shoulders.",
      "Keep breath smooth and abdominally soft.",
    ],
    benefits: [
      "Supports digestion in post-meal practice.",
      "Provides stable base for breath and meditation.",
      "Builds ankle and knee tolerance gradually.",
    ],
    precautions: [
      "Use support if knees or ankles are sensitive.",
      "Avoid prolonged static hold during acute knee inflammation.",
    ],
    modifications: [
      "Place block or bolster between heels and hips.",
      "Use folded blanket under ankles.",
    ],
    commonMistakes: [
      "Collapsing chest and rounding upper back.",
      "Ignoring knee discomfort signals.",
    ],
    hold: "1 to 5 minutes",
    breath: "Smooth diaphragmatic breathing.",
    counterPose: "Rise slowly and stretch quadriceps or ankles.",
    steps: [
      "Kneel and bring tops of feet to the mat.",
      "Lower hips toward heels with optional support.",
      "Align torso upright and rest hands on thighs.",
      "Hold comfortably and exit gently.",
    ],
  },
  {
    slug: "padmasana",
    sanskrit: "Padmasana",
    english: "Lotus Pose",
    devanagari: "पद्मासन",
    image: "/restorative/padmasana.svg",
    intro:
      "Padmasana is a classical meditative seat requiring substantial hip external rotation and careful knee protection.",
    focus: [
      "Enter only with adequate hip mobility and warm-up.",
      "Place feet high on opposite thighs without knee force.",
      "Keep pelvis grounded and spine upright.",
      "Relax shoulders and maintain stable breath.",
    ],
    benefits: [
      "Stable meditation posture for advanced practitioners.",
      "Enhances stillness and energetic focus.",
      "Improves hip opening over sustained practice.",
    ],
    precautions: [
      "Avoid if there is knee pain or meniscus history.",
      "Do not force legs into full lotus.",
    ],
    modifications: [
      "Use Ardha Padmasana (half-lotus).",
      "Practice Sukhasana/Siddhasana as safer alternatives.",
    ],
    commonMistakes: [
      "Forcing foot placement from knee instead of hip.",
      "Slouching and compressing lower back.",
    ],
    hold: "1 to 10 minutes",
    breath: "Slow, even breathing suitable for meditation.",
    counterPose: "Uncross legs slowly and stretch knees and hips.",
    steps: [
      "Sit with legs extended and spine tall.",
      "Place one foot onto opposite thigh near hip crease.",
      "If comfortable, place second foot onto opposite thigh.",
      "Hold upright seat and release in reverse order.",
    ],
  },
];

const restorativeMap = Object.fromEntries(
  RESTORATIVE_ASANAS.map((asana) => [asana.slug, asana])
);

export function generateStaticParams() {
  return RESTORATIVE_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = restorativeMap[slug];
  if (!asana) return { title: "Restorative Asana | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function RestorativeDetailPage({ params }) {
  const { slug } = await params;
  const asana = restorativeMap[slug];
  if (!asana) notFound();

  const currentIndex = RESTORATIVE_ASANAS.findIndex(
    (item) => item.slug === asana.slug
  );
  const previousAsana =
    currentIndex > 0 ? RESTORATIVE_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < RESTORATIVE_ASANAS.length - 1
      ? RESTORATIVE_ASANAS[currentIndex + 1]
      : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create comfortable support and neutral posture.",
      image: "/restorative/sukhasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Settle gradually with smooth and effortless breath.",
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
            {asana.devanagari} | Restorative Asana practice details from Nirog Yoga
          </p>
        </header>

        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <Image
              src={asana.image}
              alt={`${asana.sanskrit} illustration`}
              width={240}
              height={240}
              priority
            />
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
          <Link href="/knowledge-base/major-asanas#restorative" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/restorative-asanas/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/core-strength-asanas/navasana" className={styles.navLink}>
              ← Core-Strength Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/restorative-asanas/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/surya-namaskara" className={styles.navLink}>
              Surya Namaskara →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
