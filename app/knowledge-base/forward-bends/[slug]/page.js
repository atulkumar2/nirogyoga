import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./forward-bend-detail.module.css";

const FORWARD_BENDS = [
  {
    slug: "pascimottanasana",
    sanskrit: "Pascimottanasana",
    english: "Seated Forward Bend",
    devanagari: "पश्चिमोत्तानासन",
    image: "/forward-bends/pascimottanasana.svg",
    intro:
      "Pascimottanasana is a classic seated forward fold that stretches the posterior chain and quiets the nervous system.",
    focus: [
      "Sit on sit-bones with legs active and toes pointing up.",
      "Lengthen spine on inhale before folding from hips.",
      "Keep chest broad and avoid collapsing shoulders.",
      "Prioritize spinal length over reaching feet.",
    ],
    benefits: [
      "Lengthens hamstrings and spinal fascia.",
      "Calms mind and supports stress reduction.",
      "Massages abdominal region with gentle compression.",
    ],
    precautions: [
      "Bend knees slightly if lower back rounds excessively.",
      "Avoid forcing depth with neck or shoulder tension.",
    ],
    modifications: [
      "Sit on folded blanket to tilt pelvis forward.",
      "Use a strap around feet to keep arms relaxed.",
    ],
    commonMistakes: [
      "Pulling hard with hands and rounding upper back.",
      "Locking knees and straining behind the legs.",
    ],
    hold: "5 to 10 breaths",
    breath: "Inhale length, exhale soften and fold gradually.",
    counterPose: "Lift torso and take a gentle seated back extension.",
    steps: [
      "Sit with both legs extended and spine upright.",
      "Inhale, raise arms, and lengthen torso upward.",
      "Exhale, hinge from hips and reach toward feet or strap.",
      "Hold with steady breath, then come up slowly.",
    ],
  },
  {
    slug: "uttanasana",
    sanskrit: "Uttanasana",
    english: "Standing Forward Fold",
    devanagari: "उत्तानासन",
    image: "/forward-bends/uttanasana.svg",
    intro:
      "Uttanasana is a standing forward fold that decompresses the spine, lengthens hamstrings, and settles mental agitation.",
    focus: [
      "Root feet evenly through heels and forefoot.",
      "Fold from hip creases while keeping neck relaxed.",
      "Keep weight slightly forward to avoid heel collapse.",
      "Engage quadriceps gently to support hamstrings.",
    ],
    benefits: [
      "Relieves tension in back body and neck.",
      "Improves posterior-chain flexibility.",
      "Can reduce fatigue when practiced with calm breath.",
    ],
    precautions: [
      "Keep knees bent for tight hamstrings or back sensitivity.",
      "Rise slowly to avoid dizziness.",
    ],
    modifications: [
      "Hands on blocks to maintain spinal length.",
      "Generous knee bend with abdomen resting on thighs.",
    ],
    commonMistakes: [
      "Forcing legs straight and rounding lower back.",
      "Holding breath while trying to deepen fold.",
    ],
    hold: "5 to 8 breaths",
    breath: "Smooth nasal breathing, longer exhalation helps release.",
    counterPose: "Slow roll up or half-lift before returning to stand.",
    steps: [
      "Start in Tadasana with feet hip-width apart.",
      "Exhale and fold from hips, letting head and arms relax.",
      "Place hands on floor, shins, or blocks as needed.",
      "Maintain soft knees if required, then rise with control.",
    ],
  },
  {
    slug: "prasarita-padottanasana",
    sanskrit: "Prasarita Padottanasana",
    english: "Wide-Legged Forward Bend",
    devanagari: "प्रसारित पादोत्तानासन",
    image: "/forward-bends/prasarita-padottanasana.svg",
    intro:
      "Prasarita Padottanasana creates spacious hamstring and inner-thigh opening with a broad, stable base.",
    focus: [
      "Keep feet parallel and grounded through all corners.",
      "Lengthen spine before descending deeper.",
      "Distribute weight evenly between both legs.",
      "Maintain active quadriceps to protect knees.",
    ],
    benefits: [
      "Stretches adductors, hamstrings, and calves.",
      "Improves blood flow to head with mild inversion effect.",
      "Builds hip stability and postural control.",
    ],
    precautions: [
      "Use head support if blood pressure is unstable.",
      "Avoid overstretching inner knees.",
    ],
    modifications: [
      "Hands on blocks under shoulders for support.",
      "Keep torso parallel to floor in half-forward fold.",
    ],
    commonMistakes: [
      "Shifting too much weight into heels only.",
      "Rounding spine before hip hinge is complete.",
    ],
    hold: "4 to 8 breaths",
    breath: "Inhale to extend spine, exhale to soften downward.",
    counterPose: "Half-lift, hands to hips, rise on inhale.",
    steps: [
      "Step feet wide and place hands on hips.",
      "Inhale tall spine, exhale hinge forward from pelvis.",
      "Place hands on floor or blocks below shoulders.",
      "Hold with even grounding, then rise slowly.",
    ],
  },
  {
    slug: "janu-sirsasana",
    sanskrit: "Janu Sirsasana",
    english: "Head-to-Knee Pose",
    devanagari: "जानु शीर्षासन",
    image: "/forward-bends/janu-sirsasana.svg",
    intro:
      "Janu Sirsasana is an asymmetrical seated fold that opens one hamstring at a time while soothing the mind.",
    focus: [
      "Extend one leg actively and fold over that leg.",
      "Keep bent-knee thigh relaxed and externally rotated.",
      "Square torso gently toward extended leg.",
      "Lead with chest before lowering head.",
    ],
    benefits: [
      "Improves unilateral hamstring mobility.",
      "Supports digestive calm and introspective focus.",
      "Balances asymmetry between left and right sides.",
    ],
    precautions: [
      "Support bent knee if hip discomfort appears.",
      "Avoid pulling aggressively on foot.",
    ],
    modifications: [
      "Place folded blanket under hips for easier hinge.",
      "Use strap around extended foot and keep elbows soft.",
    ],
    commonMistakes: [
      "Twisting torso away from extended leg.",
      "Collapsing chest and rounding entire back.",
    ],
    hold: "5 to 8 breaths each side",
    breath: "Inhale length, exhale fold with softness.",
    counterPose: "Return upright and switch sides after a neutral breath.",
    steps: [
      "Sit with one leg extended and opposite sole to inner thigh.",
      "Inhale and raise arms to lengthen torso.",
      "Exhale and hinge over extended leg with long spine.",
      "Hold, breathe, then rise and repeat other side.",
    ],
  },
  {
    slug: "balasana",
    sanskrit: "Balasana",
    english: "Child's Pose",
    devanagari: "बालासन",
    image: "/forward-bends/balasana.svg",
    intro:
      "Balasana is a restorative forward fold that relieves spinal tension and helps regulate breath and nervous system.",
    focus: [
      "Hips move toward heels with forehead supported.",
      "Allow back body to broaden with each inhale.",
      "Soften jaw, shoulders, and abdomen.",
      "Keep breath quiet and continuous.",
    ],
    benefits: [
      "Relaxes lower back and hips.",
      "Reduces mental overstimulation.",
      "Works as an effective reset between stronger poses.",
    ],
    precautions: [
      "Widen knees if there is abdominal compression.",
      "Use support under forehead for neck comfort.",
    ],
    modifications: [
      "Place bolster between thighs and chest for restorative hold.",
      "Keep arms by sides for shoulder sensitivity.",
    ],
    commonMistakes: [
      "Forcing hips to heels despite knee pain.",
      "Holding breath in the folded position.",
    ],
    hold: "6 to 12 breaths",
    breath: "Slow diaphragmatic breathing with long exhalation.",
    counterPose: "Rise to tabletop and gently mobilize spine.",
    steps: [
      "From kneeling, bring big toes together and knees as comfortable.",
      "Fold torso forward, resting forehead on mat or support.",
      "Extend arms forward or place alongside body.",
      "Breathe calmly, then return to kneeling slowly.",
    ],
  },
];

const bendMap = Object.fromEntries(FORWARD_BENDS.map((asana) => [asana.slug, asana]));

export function generateStaticParams() {
  return FORWARD_BENDS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = bendMap[slug];
  if (!asana) return { title: "Forward Bend | Nirog Yoga" };

  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function ForwardBendDetailPage({ params }) {
  const { slug } = await params;
  const asana = bendMap[slug];
  if (!asana) notFound();

  const currentIndex = FORWARD_BENDS.findIndex((item) => item.slug === asana.slug);
  const previousAsana = currentIndex > 0 ? FORWARD_BENDS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < FORWARD_BENDS.length - 1 ? FORWARD_BENDS[currentIndex + 1] : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create a stable base and prepare spinal length before folding.",
      image: "/forward-bends/uttanasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Move progressively into shape while maintaining smooth breath.",
      image: asana.image,
    },
    {
      title: "Step 3: Exit and Reset",
      cue: asana.counterPose,
      image: "/forward-bends/balasana.svg",
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
            {asana.devanagari} | Forward Bend practice details from Nirog Yoga
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
          <Link href="/knowledge-base/major-asanas#forward-bends" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/forward-bends/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/standing-asanas" className={styles.navLink}>
              ← Standing Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/forward-bends/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas#backbends" className={styles.navLink}>
              Backbends →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
