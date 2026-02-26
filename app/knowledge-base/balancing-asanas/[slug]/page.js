import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./balancing-detail.module.css";

const BALANCING_ASANAS = [
  {
    slug: "vrikshasana",
    sanskrit: "Vrikshasana",
    english: "Tree Pose",
    devanagari: "वृक्षासन",
    image: "/balancing-asanas/vrikshasana.svg",
    intro:
      "Vrikshasana develops one-legged balance, postural lift, and single-pointed concentration.",
    focus: [
      "Root standing foot evenly through all corners.",
      "Press lifted foot into inner leg without touching knee joint.",
      "Lengthen through spine and keep shoulders soft.",
      "Fix gaze at one steady point (drishti).",
    ],
    benefits: [
      "Strengthens ankles, hips, and postural muscles.",
      "Improves concentration and emotional steadiness.",
      "Builds left-right neuromuscular balance.",
    ],
    precautions: [
      "Use wall support when balance is unstable.",
      "Keep lifted foot lower if hip mobility is limited.",
    ],
    modifications: [
      "Use toes of lifted foot on floor as kickstand.",
      "Hands at heart center instead of overhead.",
    ],
    commonMistakes: [
      "Pressing foot directly into standing knee.",
      "Collapsing standing hip and leaning sideways.",
    ],
    hold: "3 to 8 breaths each side",
    breath: "Calm, even nasal breathing.",
    counterPose: "Step down and shake out both legs before switching sides.",
    steps: [
      "Stand tall and shift weight into one foot.",
      "Place opposite foot on ankle, calf, or inner thigh.",
      "Bring hands to prayer or overhead as steady.",
      "Hold with soft gaze, then switch sides.",
    ],
  },
  {
    slug: "garudasana",
    sanskrit: "Garudasana",
    english: "Eagle Pose",
    devanagari: "गरुडासन",
    image: "/balancing-asanas/garudasana.svg",
    intro:
      "Garudasana integrates single-leg balance with shoulder and upper-back opening through a wrapped posture.",
    focus: [
      "Bend standing leg and keep pelvis centered.",
      "Wrap top leg and toes if possible without strain.",
      "Wrap arms at shoulder level and lift elbows slightly.",
      "Keep spine vertical and core engaged.",
    ],
    benefits: [
      "Improves ankle, knee, and hip stability.",
      "Stretches upper back and shoulders.",
      "Trains deep concentration and coordination.",
    ],
    precautions: [
      "Avoid deep knee bend with active knee pain.",
      "Skip full arm wrap for shoulder impingement.",
    ],
    modifications: [
      "Keep toes of wrapped leg on floor for support.",
      "Use simple forearm crossing instead of full bind.",
    ],
    commonMistakes: [
      "Leaning torso forward excessively.",
      "Holding breath during wrap and balance effort.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Slow breathing with broad upper back.",
    counterPose: "Unwrap gradually and return to neutral standing.",
    steps: [
      "From standing, bend knees slightly.",
      "Cross one thigh over the other and balance.",
      "Wrap arms at shoulder height and lift elbows.",
      "Hold and unwind slowly before changing sides.",
    ],
  },
  {
    slug: "natarajasana",
    sanskrit: "Natarajasana",
    english: "Dancer Pose",
    devanagari: "नटराजासन",
    image: "/balancing-asanas/natarajasana.svg",
    intro:
      "Natarajasana combines standing balance with back extension and hip opening for graceful strength.",
    focus: [
      "Ground through standing leg while lifting chest.",
      "Kick lifted foot into hand to open front body.",
      "Keep pelvis mostly square forward.",
      "Reach free arm forward for counterbalance.",
    ],
    benefits: [
      "Improves balance and posterior-chain strength.",
      "Opens hip flexors, chest, and shoulders.",
      "Builds confidence and dynamic coordination.",
    ],
    precautions: [
      "Use support for ankle instability.",
      "Keep depth moderate for lumbar sensitivity.",
    ],
    modifications: [
      "Use strap around back foot instead of direct hand grip.",
      "Keep torso more upright in beginner variation.",
    ],
    commonMistakes: [
      "Twisting pelvis open too much.",
      "Collapsing lower back without core support.",
    ],
    hold: "2 to 5 breaths each side",
    breath: "Steady inhale-exhale while maintaining lift.",
    counterPose: "Release foot gently and return to Tadasana.",
    steps: [
      "Stand on one leg and bend opposite knee.",
      "Hold lifted foot or strap with same-side hand.",
      "Kick foot back while chest lifts and free arm reaches forward.",
      "Hold briefly and release with control.",
    ],
  },
  {
    slug: "bakasana",
    sanskrit: "Bakasana",
    english: "Crow Pose",
    devanagari: "बकासन",
    image: "/balancing-asanas/bakasana.svg",
    intro:
      "Bakasana is an arm balance that strengthens wrists, core, and mental focus through controlled weight transfer.",
    focus: [
      "Hands shoulder-width with fingers spread wide.",
      "Knees place high on upper arms.",
      "Lean forward gradually to shift center of gravity.",
      "Draw heels toward seat and engage abdomen strongly.",
    ],
    benefits: [
      "Builds arm, wrist, and core strength.",
      "Improves confidence in arm balancing.",
      "Enhances focus and body control.",
    ],
    precautions: [
      "Avoid with acute wrist pain or carpal tunnel flare.",
      "Use padding in front to reduce fear of falling.",
    ],
    modifications: [
      "Start with one foot lifting at a time.",
      "Practice with block under feet for easier lift-off.",
    ],
    commonMistakes: [
      "Looking down and rounding excessively through neck.",
      "Trying to jump up without controlled lean.",
    ],
    hold: "2 to 5 breaths",
    breath: "Short, smooth breaths while maintaining core engagement.",
    counterPose: "Step down and rest wrists in tabletop stretch.",
    steps: [
      "Begin in squat and place palms firmly on mat.",
      "Bend elbows slightly and place knees near triceps.",
      "Lean forward and lift one foot, then both feet.",
      "Hold and exit softly back to squat.",
    ],
  },
  {
    slug: "kakasana",
    sanskrit: "Kakasana",
    english: "Crane Pose",
    devanagari: "काकासन",
    image: "/balancing-asanas/kakasana.svg",
    intro:
      "Kakasana is a foundational arm-balance variation emphasizing bent elbows and compact core activation.",
    focus: [
      "Keep elbows bent and stacked over wrists.",
      "Place knees near outer upper arms.",
      "Gaze slightly forward to stabilize body line.",
      "Maintain active core and pelvic lift.",
    ],
    benefits: [
      "Develops shoulder and wrist stability.",
      "Improves arm-balance mechanics for beginners.",
      "Builds coordination and concentration.",
    ],
    precautions: [
      "Protect wrists with warm-up and gradual loading.",
      "Avoid if recovering from shoulder injury.",
    ],
    modifications: [
      "Keep one toe grounded while learning balance point.",
      "Use cushion in front and practice near wall.",
    ],
    commonMistakes: [
      "Collapsing elbows outward without control.",
      "Holding breath due to fear response.",
    ],
    hold: "2 to 5 breaths",
    breath: "Steady breath with relaxed jaw and neck.",
    counterPose: "Release feet down and stretch wrists.",
    steps: [
      "Come into low squat with hands planted shoulder-width.",
      "Bend elbows and place knees on upper arms.",
      "Shift weight forward until feet feel light, then lift.",
      "Hold briefly and return to squat slowly.",
    ],
  },
];

const balancingMap = Object.fromEntries(
  BALANCING_ASANAS.map((asana) => [asana.slug, asana])
);

export function generateStaticParams() {
  return BALANCING_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = balancingMap[slug];
  if (!asana) return { title: "Balancing Asana | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function BalancingDetailPage({ params }) {
  const { slug } = await params;
  const asana = balancingMap[slug];
  if (!asana) notFound();

  const currentIndex = BALANCING_ASANAS.findIndex(
    (item) => item.slug === asana.slug
  );
  const previousAsana =
    currentIndex > 0 ? BALANCING_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < BALANCING_ASANAS.length - 1
      ? BALANCING_ASANAS[currentIndex + 1]
      : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Create stable base and choose a fixed drishti point.",
      image: "/standing-asanas/tadasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Transfer weight progressively and maintain calm breathing.",
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
            {asana.devanagari} | Balancing Asana practice details from Nirog Yoga
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
          <Link href="/knowledge-base/major-asanas#balancing-asanas" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/balancing-asanas/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/twisting-asanas/ardha-matsyendrasana" className={styles.navLink}>
              ← Twisting Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/balancing-asanas/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas#inversions" className={styles.navLink}>
              Inversions →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
