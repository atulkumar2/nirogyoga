import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./standing-asana-detail.module.css";

const STANDING_ASANAS = [
  {
    slug: "tadasana",
    sanskrit: "Tadasana",
    english: "Mountain Pose",
    devanagari: "ताडासन",
    image: "/standing-asanas/tadasana.svg",
    intro:
      "Tadasana is the foundational standing posture that teaches rooting through the feet and length through the spine.",
    focus: [
      "Stand with feet hip-width or together and spread the toes evenly.",
      "Lift kneecaps gently and engage thighs without gripping the glutes.",
      "Lengthen tailbone down and crown of the head up.",
      "Relax shoulders and keep breath smooth and natural.",
    ],
    benefits: [
      "Improves postural alignment and body awareness.",
      "Builds stable standing mechanics for all other poses.",
      "Creates calm, centered attention before practice.",
    ],
    precautions: [
      "Keep knees soft if there is hyperextension.",
      "Use a wall for support if balance is unstable.",
    ],
    modifications: [
      "Stand with feet hip-width apart instead of together for better stability.",
      "Practice with back against a wall to feel neutral alignment.",
    ],
    commonMistakes: [
      "Locking the knees and collapsing weight into heels.",
      "Lifting the chin and compressing the back of the neck.",
    ],
    hold: "5 to 10 breaths",
    breath: "Slow nasal breathing with equal inhalation and exhalation.",
    counterPose: "Relax arms and shoulders, then re-ground in neutral standing.",
    steps: [
      "Stand tall with neutral pelvis and even weight on both feet.",
      "Lift through the spine while keeping jaw and shoulders relaxed.",
      "Maintain steady breathing for 5 to 10 breaths.",
      "Release awareness slowly and continue to the next pose.",
    ],
  },
  {
    slug: "virabhadrasana-1",
    sanskrit: "Virabhadrasana I",
    english: "Warrior I",
    devanagari: "वीरभद्रासन I",
    image: "/standing-asanas/virabhadrasana-1.svg",
    intro:
      "Virabhadrasana I builds heat and determination while opening the hip flexors, chest, and shoulders.",
    focus: [
      "Front knee tracks over the ankle without collapsing inward.",
      "Back leg stays active with heel grounded where possible.",
      "Hips square forward gradually without strain.",
      "Ribs stay contained as arms reach up.",
    ],
    benefits: [
      "Strengthens legs and improves hip mobility.",
      "Builds stamina and focus.",
      "Encourages upright breathing capacity.",
    ],
    precautions: [
      "Shorten stance for knee, hip, or SI joint sensitivity.",
      "Keep hands on hips if shoulder elevation causes discomfort.",
    ],
    modifications: [
      "Shorten stance and keep back heel lifted if needed.",
      "Keep hands at prayer position instead of overhead arms.",
    ],
    commonMistakes: [
      "Front knee moving ahead of ankle without control.",
      "Overarching lower back while lifting arms up.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Inhale to lengthen spine, exhale to settle into stance.",
    counterPose: "Return to Tadasana and observe breath before changing sides.",
    steps: [
      "From standing, step one leg back into a long but stable stance.",
      "Bend front knee and turn pelvis gently forward.",
      "Raise arms overhead and lengthen through both sides of the waist.",
      "Hold with smooth breath, then switch sides.",
    ],
  },
  {
    slug: "virabhadrasana-2",
    sanskrit: "Virabhadrasana II",
    english: "Warrior II",
    devanagari: "वीरभद्रासन II",
    image: "/standing-asanas/virabhadrasana-2.svg",
    intro:
      "Virabhadrasana II develops grounded strength and directional focus through a broad lateral stance.",
    focus: [
      "Front knee remains aligned with second toe.",
      "Back leg stays straight and strong.",
      "Torso remains centered between both legs.",
      "Gaze settles over the front fingertips.",
    ],
    benefits: [
      "Strengthens thighs, hips, and shoulders.",
      "Improves endurance and concentration.",
      "Enhances lower-body stability.",
    ],
    precautions: [
      "Reduce stance width if knees or groin feel overloaded.",
      "Support front thigh with less depth if needed.",
    ],
    modifications: [
      "Keep front knee less bent when building endurance.",
      "Practice near a wall to refine arm and torso alignment.",
    ],
    commonMistakes: [
      "Front knee collapsing inward.",
      "Leaning torso toward front leg and losing center.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Steady inhale-exhale rhythm through the nose.",
    counterPose: "Straighten front leg, step feet together, and reset in Tadasana.",
    steps: [
      "Open feet wide and turn front foot outward.",
      "Bend front knee while extending arms in one long line.",
      "Keep chest broad and shoulders relaxed.",
      "Hold and breathe, then repeat on the second side.",
    ],
  },
  {
    slug: "virabhadrasana-3",
    sanskrit: "Virabhadrasana III",
    english: "Warrior III",
    devanagari: "वीरभद्रासन III",
    image: "/standing-asanas/virabhadrasana-3.svg",
    intro:
      "Virabhadrasana III is a balancing posture that integrates leg power, core control, and spinal length.",
    focus: [
      "Standing leg remains firm but not locked.",
      "Back leg extends strongly with active toes.",
      "Hips stay level instead of opening to the side.",
      "Spine stays long from crown to heel.",
    ],
    benefits: [
      "Builds balance, glute strength, and core stability.",
      "Improves neuromuscular coordination.",
      "Develops mental steadiness under effort.",
    ],
    precautions: [
      "Use wall or chair support while learning balance.",
      "Keep torso higher if hamstrings are tight.",
    ],
    modifications: [
      "Hands can stay on a chair seat or wall for support.",
      "Keep standing knee micro-bent during transitions.",
    ],
    commonMistakes: [
      "Opening hips and turning torso sideways too early.",
      "Dropping chest and collapsing lower back.",
    ],
    hold: "2 to 5 breaths each side",
    breath: "Slow breath with soft gaze to stabilize balance.",
    counterPose: "Step back to standing and release hips with gentle movement.",
    steps: [
      "Shift weight into one foot from standing or Warrior I setup.",
      "Hinge at hips and extend opposite leg straight back.",
      "Reach arms forward, out to sides, or keep hands at heart.",
      "Maintain even breath and return with control.",
    ],
  },
  {
    slug: "utthita-trikonasana",
    sanskrit: "Utthita Trikonasana",
    english: "Extended Triangle Pose",
    devanagari: "उत्थित त्रिकोणासन",
    image: "/standing-asanas/utthita-trikonasana.svg",
    intro:
      "Utthita Trikonasana lengthens both sides of the trunk and refines spinal alignment in a stable standing base.",
    focus: [
      "Keep both legs active and front knee straight but not rigid.",
      "Lead from the pelvis before placing the lower hand.",
      "Stack chest upward and broaden collarbones.",
      "Use a block to avoid collapsing the side body.",
    ],
    benefits: [
      "Stretches hamstrings, inner thighs, and lateral trunk.",
      "Improves postural awareness and balance.",
      "Supports healthy spinal mobility.",
    ],
    precautions: [
      "Use higher hand support for lower back discomfort.",
      "Look down or sideways if neck rotation is sensitive.",
    ],
    modifications: [
      "Use a block under the lower hand to maintain spinal length.",
      "Keep top hand on waist while refining torso rotation.",
    ],
    commonMistakes: [
      "Forcing lower hand to floor and collapsing side body.",
      "Locking front knee aggressively.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Inhale to expand chest, exhale to root both feet.",
    counterPose: "Rise up with a long spine and pause in wide stance.",
    steps: [
      "Take a wide stance with front foot outward and back foot slightly in.",
      "Extend arms wide and hinge over front leg.",
      "Place lower hand on shin, block, or floor and lift top arm.",
      "Keep both sides long and breathe steadily before switching sides.",
    ],
  },
  {
    slug: "utthita-parsvakonasana",
    sanskrit: "Utthita Parsvakonasana",
    english: "Extended Side Angle Pose",
    devanagari: "उत्थित पार्श्वकोणासन",
    image: "/standing-asanas/utthita-parsvakonasana.svg",
    intro:
      "Utthita Parsvakonasana combines leg strength with a deep side-body extension and chest expansion.",
    focus: [
      "Front knee stays bent and aligned over ankle.",
      "Back leg roots strongly through the outer edge of foot.",
      "Lengthen from back heel through top fingertips.",
      "Keep chest rotating open without collapsing forward.",
    ],
    benefits: [
      "Strengthens legs and core.",
      "Lengthens side waist, groins, and intercostal region.",
      "Improves stamina and breath awareness.",
    ],
    precautions: [
      "Use forearm-on-thigh variation when reaching floor is difficult.",
      "Shorten stance if hips or knees feel unstable.",
    ],
    modifications: [
      "Place forearm on front thigh for a supported variation.",
      "Use a block inside front foot for reduced strain.",
    ],
    commonMistakes: [
      "Front knee moving inward away from toes.",
      "Collapsing chest toward floor instead of rotating open.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Deep side-rib breathing while maintaining leg strength.",
    counterPose: "Come back to Warrior II and straighten both legs.",
    steps: [
      "From Warrior II, lower front forearm to thigh or hand to block/floor.",
      "Sweep top arm overhead to form one long diagonal line.",
      "Rotate chest open and maintain firm back leg action.",
      "Hold for several breaths and repeat on the other side.",
    ],
  },
  {
    slug: "ardha-chandrasana",
    sanskrit: "Ardha Chandrasana",
    english: "Half Moon Pose",
    devanagari: "अर्ध चंद्रासन",
    image: "/standing-asanas/ardha-chandrasana.svg",
    intro:
      "Ardha Chandrasana is a lateral balancing pose that demands steady gaze, core strength, and controlled breath.",
    focus: [
      "Ground through standing foot and engage lifted leg strongly.",
      "Keep pelvis broad with top hip stacked over bottom hip.",
      "Lengthen torso forward as chest rotates open.",
      "Use a block under lower hand to maintain space.",
    ],
    benefits: [
      "Improves balance and ankle stability.",
      "Strengthens glutes and core.",
      "Enhances confidence in one-leg standing transitions.",
    ],
    precautions: [
      "Practice with wall support when recovering from ankle instability.",
      "Keep gaze downward until balance improves.",
    ],
    modifications: [
      "Keep lower hand on a block and top hand on hip.",
      "Practice with back body near wall for stability.",
    ],
    commonMistakes: [
      "Locking standing knee and overloading the joint.",
      "Dropping lifted leg below hip height without control.",
    ],
    hold: "2 to 5 breaths each side",
    breath: "Smooth, controlled breathing without breath retention.",
    counterPose: "Return to Triangle or Tadasana and relax ankles.",
    steps: [
      "Enter from Triangle Pose with lower hand placed slightly ahead.",
      "Shift weight into front foot and lift back leg to hip height.",
      "Open chest and extend top arm upward if stable.",
      "Return slowly to standing and switch sides.",
    ],
  },
  {
    slug: "parsvottanasana",
    sanskrit: "Parsvottanasana",
    english: "Pyramid Pose",
    devanagari: "पार्श्वोत्तानासन",
    image: "/standing-asanas/parsvottanasana.svg",
    intro:
      "Parsvottanasana is an intense standing forward bend that combines hamstring lengthening with postural discipline.",
    focus: [
      "Feet are in a short, stable split stance.",
      "Hips orient forward as much as possible.",
      "Lengthen spine before deepening fold.",
      "Keep both legs active with even grounding.",
    ],
    benefits: [
      "Stretches calves and hamstrings deeply.",
      "Improves spinal extension in forward bends.",
      "Builds concentration and balance.",
    ],
    precautions: [
      "Bend front knee slightly if hamstrings feel strained.",
      "Use blocks under hands to avoid spinal rounding.",
    ],
    modifications: [
      "Use blocks at three heights to keep spine long.",
      "Keep hands on hips if shoulders are tight.",
    ],
    commonMistakes: [
      "Rounding spine while forcing forward fold depth.",
      "Twisting pelvis away from front-facing alignment.",
    ],
    hold: "3 to 6 breaths each side",
    breath: "Inhale to lengthen torso, exhale to fold from hips.",
    counterPose: "Rise slowly and take a gentle standing back extension.",
    steps: [
      "Step one leg back into a shorter standing split.",
      "Square hips forward and hinge from hips with a long spine.",
      "Place hands on blocks, floor, or keep palms in reverse prayer.",
      "Breathe steadily, then rise and repeat on the second side.",
    ],
  },
  {
    slug: "vrikshasana",
    sanskrit: "Vrikshasana",
    english: "Tree Pose",
    devanagari: "वृक्षासन",
    image: "/standing-asanas/vrikshasana.svg",
    intro:
      "Vrikshasana cultivates one-pointed focus, postural lift, and quiet mental steadiness.",
    focus: [
      "Press standing foot and lifted foot into each other.",
      "Avoid placing lifted foot directly on the knee joint.",
      "Lengthen through spine while softening shoulders and jaw.",
      "Maintain a fixed drishti point to stabilize balance.",
    ],
    benefits: [
      "Strengthens ankles, hips, and postural muscles.",
      "Trains concentration and emotional steadiness.",
      "Develops asymmetrical balance control.",
    ],
    precautions: [
      "Use wall support during early practice.",
      "Keep lifted foot lower if hip mobility is limited.",
    ],
    modifications: [
      "Keep toes of lifted foot on floor as kickstand support.",
      "Hands at heart center rather than overhead arms.",
    ],
    commonMistakes: [
      "Pressing lifted foot into the knee joint.",
      "Allowing standing hip to drop sideways.",
    ],
    hold: "3 to 8 breaths each side",
    breath: "Calm, even breathing with a steady visual focus point.",
    counterPose: "Release foot down and shake out both legs before other side.",
    steps: [
      "Stand tall in Tadasana and shift weight into one foot.",
      "Place opposite foot on ankle, calf, or inner thigh.",
      "Bring palms together at chest or raise arms overhead.",
      "Hold with soft, steady breath, then repeat on other side.",
    ],
  },
];

const asanaMap = Object.fromEntries(
  STANDING_ASANAS.map((asana) => [asana.slug, asana])
);

export function generateStaticParams() {
  return STANDING_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = asanaMap[slug];
  if (!asana) {
    return {
      title: "Standing Asana | Nirog Yoga",
    };
  }

  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with key alignment cues, benefits, precautions, and step-by-step practice instructions.`,
  };
}

export default async function StandingAsanaDetailPage({ params }) {
  const { slug } = await params;
  const asana = asanaMap[slug];

  if (!asana) {
    notFound();
  }

  const currentIndex = STANDING_ASANAS.findIndex((item) => item.slug === asana.slug);
  const previousAsana = currentIndex > 0 ? STANDING_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < STANDING_ASANAS.length - 1
      ? STANDING_ASANAS[currentIndex + 1]
      : null;
  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Start in a stable base and organize feet, pelvis, and spine.",
      image: "/standing-asanas/tadasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Move into full expression gradually with controlled breath.",
      image: asana.image,
    },
    {
      title: "Step 3: Exit and Reset",
      cue: asana.counterPose,
      image: "/standing-asanas/tadasana.svg",
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
            {asana.devanagari} | Standing Asana practice details from Nirog Yoga
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
          <Link href="/knowledge-base/standing-asanas" className={styles.navLink}>
            ← Back to Standing Asanas
          </Link>

          {previousAsana ? (
            <Link
              href={`/knowledge-base/standing-asanas/${previousAsana.slug}`}
              className={styles.navLink}
            >
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas" className={styles.navLink}>
              ← Major Asanas
            </Link>
          )}

          {nextAsana ? (
            <Link
              href={`/knowledge-base/standing-asanas/${nextAsana.slug}`}
              className={styles.navLink}
            >
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
