import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./backbend-detail.module.css";

const BACKBENDS = [
  {
    slug: "bhujangasana",
    sanskrit: "Bhujangasana",
    english: "Cobra Pose",
    devanagari: "भुजंगासन",
    image: "/backbends/bhujangasana.svg",
    intro:
      "Bhujangasana is a foundational prone backbend that strengthens spinal extensors and opens the front body.",
    focus: [
      "Press tops of feet and pubic bone lightly into the mat.",
      "Lift chest with back strength before using arms fully.",
      "Keep shoulders broad and away from ears.",
      "Lengthen through crown without compressing lower back.",
    ],
    benefits: [
      "Improves spinal extension and posture.",
      "Opens chest and supports breathing mechanics.",
      "Builds back-body awareness for deeper backbends.",
    ],
    precautions: [
      "Keep a lower lift if lumbar sensitivity is present.",
      "Avoid locking elbows and collapsing shoulders.",
    ],
    modifications: [
      "Practice baby cobra with elbows bent and low chest lift.",
      "Place folded blanket under pelvis for comfort.",
    ],
    commonMistakes: [
      "Pushing too high with arms and jamming lower back.",
      "Shrugging shoulders toward ears.",
    ],
    hold: "3 to 6 breaths",
    breath: "Inhale to lift and broaden chest, exhale to soften jaw and neck.",
    counterPose: "Release down and rest in Balasana.",
    steps: [
      "Lie prone with palms beside lower ribs and elbows close in.",
      "Inhale and lift chest using back muscles, then light arm support.",
      "Keep pelvis grounded and neck long.",
      "Exhale to lower with control and rest.",
    ],
  },
  {
    slug: "urdhva-mukha-svanasana",
    sanskrit: "Urdhva Mukha Svanasana",
    english: "Upward-Facing Dog",
    devanagari: "ऊर्ध्व मुख श्वानासन",
    image: "/backbends/urdhva-mukha-svanasana.svg",
    intro:
      "Urdhva Mukha Svanasana is an active backbend that lifts thighs and chest while building arm and shoulder strength.",
    focus: [
      "Hands press firmly with wrists under shoulders.",
      "Thighs and knees lift away from floor.",
      "Chest broadens forward and up between upper arms.",
      "Legs stay active with tops of feet rooted.",
    ],
    benefits: [
      "Builds upper-body and spinal strength.",
      "Expands chest and front-line mobility.",
      "Energizes and counters rounded posture.",
    ],
    precautions: [
      "Skip full expression for wrist or shoulder pain.",
      "Maintain abdominal support to protect lumbar spine.",
    ],
    modifications: [
      "Use cobra variation with thighs down if needed.",
      "Practice shorter hold durations with clean alignment.",
    ],
    commonMistakes: [
      "Hanging into lower back with inactive legs.",
      "Collapsing shoulders and closing chest.",
    ],
    hold: "2 to 5 breaths",
    breath: "Steady inhale-exhale rhythm with chest expansion.",
    counterPose: "Transition to Adho Mukha Svanasana or Balasana.",
    steps: [
      "From prone setup, place palms under shoulders.",
      "Press through hands and feet to lift chest and thighs.",
      "Straighten arms as available while keeping chest open.",
      "Hold briefly and transition out with control.",
    ],
  },
  {
    slug: "dhanurasana",
    sanskrit: "Dhanurasana",
    english: "Bow Pose",
    devanagari: "धनुरासन",
    image: "/backbends/dhanurasana.svg",
    intro:
      "Dhanurasana creates a full anterior-chain opening by combining spinal extension with shoulder and hip flexor stretch.",
    focus: [
      "Kick shins back to lift chest instead of pulling with hands.",
      "Keep knees hip-width to protect lower back.",
      "Lengthen tailbone toward knees.",
      "Broaden collarbones and soften jaw.",
    ],
    benefits: [
      "Strengthens posterior chain and glutes.",
      "Stretches chest, shoulders, and quadriceps.",
      "Stimulates abdominal region and improves vitality.",
    ],
    precautions: [
      "Avoid during acute lower back pain or abdominal surgery recovery.",
      "Use gentler prone backbends if knees are sensitive.",
    ],
    modifications: [
      "Practice one-leg bow pose alternately.",
      "Use strap loops around ankles if hands cannot reach feet.",
    ],
    commonMistakes: [
      "Flaring knees too wide while lifting.",
      "Overusing neck extension and clenching jaw.",
    ],
    hold: "2 to 5 breaths",
    breath: "Deep diaphragmatic breathing while chest stays expanded.",
    counterPose: "Release fully and rest in Makarasana or Balasana.",
    steps: [
      "Lie prone, bend knees, and hold ankles from outside.",
      "Inhale and kick feet back/up to lift chest and thighs.",
      "Keep knees aligned and chest broad.",
      "Exhale to release slowly and rest.",
    ],
  },
  {
    slug: "ustrasana",
    sanskrit: "Ustrasana",
    english: "Camel Pose",
    devanagari: "उष्ट्रासन",
    image: "/backbends/ustrasana.svg",
    intro:
      "Ustrasana is a kneeling backbend that opens chest and hip flexors while building spinal extension confidence.",
    focus: [
      "Thighs stay vertical over knees.",
      "Lift sternum upward before reaching for heels.",
      "Engage glutes lightly and support lower abdomen.",
      "Keep neck neutral unless extension is comfortable.",
    ],
    benefits: [
      "Strong chest and shoulder opener.",
      "Improves posture and spinal mobility.",
      "Counters prolonged sitting and rounded upper back.",
    ],
    precautions: [
      "Protect lumbar spine by lengthening upward first.",
      "Use blocks beside ankles if heels are out of reach.",
    ],
    modifications: [
      "Keep hands on sacrum for supported camel variation.",
      "Tuck toes to bring heels higher.",
    ],
    commonMistakes: [
      "Dropping back without lifting chest first.",
      "Squeezing lower back with no abdominal support.",
    ],
    hold: "3 to 6 breaths",
    breath: "Inhale through chest expansion, exhale to stabilize pelvis.",
    counterPose: "Sit back on heels and fold into Balasana.",
    steps: [
      "Kneel with knees hip-width and hands on sacrum.",
      "Inhale and lift chest up, then arc back gradually.",
      "Reach heels if stable while keeping thighs vertical.",
      "Return by leading chest upward and sit back to rest.",
    ],
  },
  {
    slug: "salabhasana",
    sanskrit: "Salabhasana",
    english: "Locust Pose",
    devanagari: "शलभासन",
    image: "/backbends/salabhasana.svg",
    intro:
      "Salabhasana is a strengthening prone backbend that develops posterior chain endurance and lumbar support.",
    focus: [
      "Lengthen legs back and lift from glutes and hamstrings.",
      "Lift chest with upper-back engagement.",
      "Keep neck neutral with gaze slightly forward/down.",
      "Reach fingertips back to broaden collarbones.",
    ],
    benefits: [
      "Strengthens lower back, glutes, and hamstrings.",
      "Improves postural endurance.",
      "Prepares body for deeper backbends safely.",
    ],
    precautions: [
      "Lower lift height if lumbar compression appears.",
      "Avoid breath holding while lifting.",
    ],
    modifications: [
      "Lift one leg at a time for unilateral variation.",
      "Keep hands on floor for support in early stages.",
    ],
    commonMistakes: [
      "Throwing head back and compressing neck.",
      "Using momentum instead of controlled lift.",
    ],
    hold: "3 to 6 breaths",
    breath: "Inhale for lift, steady breathing during hold.",
    counterPose: "Release to prone rest, then Balasana.",
    steps: [
      "Lie prone with arms by sides or extended back.",
      "Inhale and lift chest, arms, and legs as available.",
      "Keep legs active and chest broad.",
      "Exhale to lower slowly and rest.",
    ],
  },
  {
    slug: "setu-bandha-sarvangasana",
    sanskrit: "Setu Bandha Sarvangasana",
    english: "Bridge Pose",
    devanagari: "सेतु बंध सर्वांगासन",
    image: "/backbends/setu-bandha-sarvangasana.svg",
    intro:
      "Setu Bandha Sarvangasana is a supported backbend that opens chest and strengthens posterior chain with controlled pelvic lift.",
    focus: [
      "Feet parallel and knees tracking forward.",
      "Press through feet to lift pelvis evenly.",
      "Interlace fingers under back if shoulders allow.",
      "Keep throat soft and chin slightly tucked.",
    ],
    benefits: [
      "Strengthens glutes, hamstrings, and back.",
      "Opens chest and front hips.",
      "Can calm nervous system when practiced rhythmically.",
    ],
    precautions: [
      "Avoid turning head while in pose.",
      "Keep lift moderate for neck or back sensitivity.",
    ],
    modifications: [
      "Place yoga block under sacrum for supported bridge.",
      "Use strap around thighs to maintain leg alignment.",
    ],
    commonMistakes: [
      "Knees splaying outward.",
      "Overarching lower back without leg engagement.",
    ],
    hold: "4 to 8 breaths",
    breath: "Inhale to lift and widen chest, exhale to steady legs.",
    counterPose: "Lower spine gradually and hug knees into chest.",
    steps: [
      "Lie on back with knees bent and feet hip-width apart.",
      "Press feet down and lift pelvis up on inhale.",
      "Roll shoulders under and broaden chest if comfortable.",
      "Exhale and lower spine down one segment at a time.",
    ],
  },
];

const backbendMap = Object.fromEntries(BACKBENDS.map((asana) => [asana.slug, asana]));

export function generateStaticParams() {
  return BACKBENDS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = backbendMap[slug];
  if (!asana) return { title: "Backbend | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function BackbendDetailPage({ params }) {
  const { slug } = await params;
  const asana = backbendMap[slug];
  if (!asana) notFound();

  const currentIndex = BACKBENDS.findIndex((item) => item.slug === asana.slug);
  const previousAsana = currentIndex > 0 ? BACKBENDS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < BACKBENDS.length - 1 ? BACKBENDS[currentIndex + 1] : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create stable base and length before entering extension.",
      image: "/backbends/bhujangasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Lift from back-body support and keep breath smooth.",
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
            {asana.devanagari} | Backbend practice details from Nirog Yoga
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
          <Link href="/knowledge-base/major-asanas#backbends" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/backbends/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/forward-bends/pascimottanasana" className={styles.navLink}>
              ← Forward Bends
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/backbends/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas#twisting-asanas" className={styles.navLink}>
              Twisting Asanas →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
