import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./hip-opening-detail.module.css";

const HIP_OPENING_ASANAS = [
  {
    slug: "baddha-konasana",
    sanskrit: "Baddha Konasana",
    english: "Bound Angle Pose",
    devanagari: "बद्ध कोणासन",
    image: "/hip-opening/baddha-konasana.svg",
    intro:
      "Baddha Konasana is a seated hip opener that gently mobilizes groins and inner thighs while calming the mind.",
    focus: [
      "Sit on sit-bones and lengthen spine upward.",
      "Bring soles together with knees opening naturally.",
      "Hold feet lightly and keep shoulders relaxed.",
      "Avoid forcing knees downward aggressively.",
    ],
    benefits: [
      "Improves adductor and groin flexibility.",
      "Supports pelvic mobility and circulation.",
      "Can reduce lower-body stiffness from prolonged sitting.",
    ],
    precautions: [
      "Support knees if inner-thigh strain appears.",
      "Sit on folded blanket if pelvis tucks backward.",
    ],
    modifications: [
      "Place blocks or cushions under knees.",
      "Sit against wall for upright spinal support.",
    ],
    commonMistakes: [
      "Rounding lower back while pulling feet too close.",
      "Forcing knees down with excessive pressure.",
    ],
    hold: "6 to 12 breaths",
    breath: "Inhale lengthen spine, exhale soften hips and groins.",
    counterPose: "Extend legs forward and shake knees gently.",
    steps: [
      "Sit with legs extended, then bend knees and join soles.",
      "Bring heels toward pelvis at a comfortable distance.",
      "Hold feet and sit tall with broad chest.",
      "Stay with relaxed breathing and release slowly.",
    ],
  },
  {
    slug: "upavista-konasana",
    sanskrit: "Upavista Konasana",
    english: "Seated Wide Angle",
    devanagari: "उपविष्ट कोणासन",
    image: "/hip-opening/upavista-konasana.svg",
    intro:
      "Upavista Konasana creates broad adductor and hamstring opening with an emphasis on pelvic grounding and spinal length.",
    focus: [
      "Extend legs wide with kneecaps facing upward.",
      "Root sit-bones and keep spine long.",
      "Hinge from hips before deepening fold.",
      "Keep feet active to protect knees.",
    ],
    benefits: [
      "Stretches inner thighs and hamstrings.",
      "Improves pelvic mobility and posture.",
      "Builds patience and mindful breathing in longer holds.",
    ],
    precautions: [
      "Avoid deep fold if hamstrings are acutely strained.",
      "Bend knees slightly for lower-back comfort.",
    ],
    modifications: [
      "Sit on blanket to tilt pelvis forward.",
      "Use hands on blocks in front for support.",
    ],
    commonMistakes: [
      "Collapsing chest while reaching forward.",
      "Letting knees roll inward without leg activation.",
    ],
    hold: "5 to 10 breaths",
    breath: "Steady nasal breathing with long exhalations.",
    counterPose: "Bring legs together and rest in gentle seated fold.",
    steps: [
      "Sit upright and spread legs into comfortable wide angle.",
      "Place hands beside hips and lengthen through crown.",
      "Optionally hinge forward from hips with long spine.",
      "Hold and return upright gradually.",
    ],
  },
  {
    slug: "eka-pada-raja-kapotasana",
    sanskrit: "Eka Pada Raja Kapotasana",
    english: "Pigeon Pose",
    devanagari: "एक पाद राज कपोतासन",
    image: "/hip-opening/eka-pada-raja-kapotasana.svg",
    intro:
      "Eka Pada Raja Kapotasana variations provide deep glute and hip-flexor opening with mindful alignment and support.",
    focus: [
      "Front shin angled comfortably; avoid forcing 90 degrees.",
      "Keep front hip and back hip as level as possible.",
      "Lengthen spine before folding forward.",
      "Use props under front hip if pelvis tilts.",
    ],
    benefits: [
      "Releases glutes, piriformis, and hip rotators.",
      "Opens back-leg hip flexors.",
      "Can relieve stiffness from long periods of sitting.",
    ],
    precautions: [
      "Avoid with acute knee pain on front leg.",
      "Keep pose moderate for SI-joint sensitivity.",
    ],
    modifications: [
      "Use bolster under front hip and torso.",
      "Practice reclined pigeon (Figure-4) as alternative.",
    ],
    commonMistakes: [
      "Dropping fully into one hip without support.",
      "Twisting torso and overloading front knee.",
    ],
    hold: "5 to 10 breaths each side",
    breath: "Slow exhalation-focused breathing for release.",
    counterPose: "Return to tabletop and move through gentle cat-cow.",
    steps: [
      "From tabletop, bring one knee behind same-side wrist.",
      "Extend opposite leg back and square pelvis.",
      "Stay upright or fold forward with props.",
      "Hold and switch sides mindfully.",
    ],
  },
  {
    slug: "mandukasana",
    sanskrit: "Mandukasana",
    english: "Frog Pose",
    devanagari: "मण्डुकासन",
    image: "/hip-opening/mandukasana.svg",
    intro:
      "Mandukasana variations emphasize hip and groin opening with controlled breath and gradual depth.",
    focus: [
      "Start from all-fours and widen knees gradually.",
      "Keep ankles in line with knees when possible.",
      "Support forearms or chest as needed.",
      "Maintain neutral spine and relaxed breath.",
    ],
    benefits: [
      "Deeply stretches adductors and groins.",
      "Improves pelvic mobility and hip awareness.",
      "Builds tolerance for sustained stretch safely.",
    ],
    precautions: [
      "Use cushioning under knees for comfort.",
      "Avoid if there is active groin strain.",
    ],
    modifications: [
      "Keep hips higher and avoid deep descent.",
      "Practice shorter holds with recovery between rounds.",
    ],
    commonMistakes: [
      "Forcing depth too quickly and guarding breath.",
      "Letting lower back overarch without core support.",
    ],
    hold: "4 to 8 breaths",
    breath: "Calm diaphragmatic breathing to release groins.",
    counterPose: "Bring knees together and rest in Balasana.",
    steps: [
      "Come to tabletop and widen knees comfortably.",
      "Move feet outward and align ankles with knees.",
      "Lower onto forearms while keeping breath smooth.",
      "Hold gently and come out slowly.",
    ],
  },
];

const hipMap = Object.fromEntries(HIP_OPENING_ASANAS.map((asana) => [asana.slug, asana]));

export function generateStaticParams() {
  return HIP_OPENING_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = hipMap[slug];
  if (!asana) return { title: "Hip-Opening Asana | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function HipOpeningDetailPage({ params }) {
  const { slug } = await params;
  const asana = hipMap[slug];
  if (!asana) notFound();

  const currentIndex = HIP_OPENING_ASANAS.findIndex((item) => item.slug === asana.slug);
  const previousAsana =
    currentIndex > 0 ? HIP_OPENING_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < HIP_OPENING_ASANAS.length - 1
      ? HIP_OPENING_ASANAS[currentIndex + 1]
      : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create pelvic support and neutral spine before depth.",
      image: "/restorative/sukhasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Move gradually into opening with consistent breath.",
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
            {asana.devanagari} | Hip-Opening Asana practice details from Nirog Yoga
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
          <Link href="/knowledge-base/major-asanas#hip-opening" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/hip-opening-asanas/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/balancing-asanas/vrikshasana" className={styles.navLink}>
              ← Balancing Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/hip-opening-asanas/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas#core-strength" className={styles.navLink}>
              Core Strength →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
