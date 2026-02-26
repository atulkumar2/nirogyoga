import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./twisting-detail.module.css";

const TWISTING_ASANAS = [
  {
    slug: "ardha-matsyendrasana",
    sanskrit: "Ardha Matsyendrasana",
    english: "Half Lord of the Fishes",
    devanagari: "अर्ध मत्स्येन्द्रासन",
    image: "/twisting-asanas/ardha-matsyendrasana.svg",
    intro:
      "Ardha Matsyendrasana is a seated spinal twist that improves rotational mobility and digestive activation.",
    focus: [
      "Lengthen spine before initiating twist.",
      "Rotate from lower abdomen upward through chest.",
      "Keep both sit-bones grounded as much as possible.",
      "Use inhale for lift and exhale for gentle rotation.",
    ],
    benefits: [
      "Improves spinal mobility and posture.",
      "Supports digestive fire through abdominal compression.",
      "Enhances breath awareness and concentration.",
    ],
    precautions: [
      "Avoid deep twisting with acute disc or spinal injury.",
      "Keep twist mild during pregnancy.",
    ],
    modifications: [
      "Keep bottom leg extended if hip or knee is tight.",
      "Hug bent knee instead of binding elbow outside thigh.",
    ],
    commonMistakes: [
      "Rounding lower back before twisting.",
      "Forcing neck to turn beyond thoracic rotation.",
    ],
    hold: "4 to 8 breaths each side",
    breath: "Inhale length, exhale rotate progressively.",
    counterPose: "Return to neutral seated spine and switch sides.",
    steps: [
      "Sit with one leg bent across the opposite thigh.",
      "Lengthen spine on inhale and place opposite arm to support twist.",
      "Exhale and rotate torso toward bent-knee side.",
      "Hold with steady breathing, then unwind slowly.",
    ],
  },
  {
    slug: "bharadvajasana",
    sanskrit: "Bharadvajasana",
    english: "Bharadvaja's Twist",
    devanagari: "भरद्वाजासन",
    image: "/twisting-asanas/bharadvajasana.svg",
    intro:
      "Bharadvajasana is a gentle seated twist ideal for mobility, breath coordination, and calming the nervous system.",
    focus: [
      "Sit upright with pelvis balanced.",
      "Initiate twist from navel, then ribs, then shoulders.",
      "Keep shoulders soft and chest open.",
      "Maintain ease in jaw and neck while turning gaze softly.",
    ],
    benefits: [
      "Gentle spinal detoxifying movement.",
      "Relieves mild back stiffness from sitting.",
      "Improves awareness of segmented spinal rotation.",
    ],
    precautions: [
      "Use props under hips if knees are uncomfortable.",
      "Do not force end-range twist in lower back pain.",
    ],
    modifications: [
      "Sit on folded blanket or cushion.",
      "Keep both legs in a simpler crossed-leg seat if needed.",
    ],
    commonMistakes: [
      "Collapsing chest while trying to twist deeper.",
      "Pulling aggressively with arms.",
    ],
    hold: "4 to 8 breaths each side",
    breath: "Smooth and relaxed breath, longer exhalation.",
    counterPose: "Return to center and take one neutral breath before side change.",
    steps: [
      "Sit with legs folded to one side in a comfortable seat.",
      "Place one hand behind and opposite hand on outer thigh.",
      "Inhale to lift spine, exhale to rotate gently.",
      "Hold comfortably and repeat on the second side.",
    ],
  },
  {
    slug: "marichyasana",
    sanskrit: "Marichyasana",
    english: "Sage Marichi Pose",
    devanagari: "मरीच्यासन",
    image: "/twisting-asanas/marichyasana.svg",
    intro:
      "Marichyasana is an asymmetrical seated twist that combines hamstring work, hip mobility, and focused spinal rotation.",
    focus: [
      "Keep extended leg active with toes up.",
      "Bend one knee and ground foot near pelvis.",
      "Lengthen through spine before twisting toward bent knee.",
      "Use wrap/bind only if spine remains long.",
    ],
    benefits: [
      "Builds unilateral core control and spinal rotation.",
      "Improves digestion and abdominal awareness.",
      "Enhances hip and hamstring mobility asymmetrically.",
    ],
    precautions: [
      "Avoid deep binds for shoulder or rotator cuff issues.",
      "Keep twist moderate for lumbar sensitivity.",
    ],
    modifications: [
      "Use strap for bind variation instead of forcing clasp.",
      "Keep support hand behind body for upright posture.",
    ],
    commonMistakes: [
      "Collapsing torso onto bent thigh before rotating.",
      "Forcing bind and losing spinal alignment.",
    ],
    hold: "4 to 8 breaths each side",
    breath: "Inhale create space, exhale rotate from core.",
    counterPose: "Release bind, extend both legs, and reset in staff pose.",
    steps: [
      "Sit with one leg extended and opposite knee bent, foot grounded.",
      "Lengthen spine and draw bent knee toward torso.",
      "Exhale and twist toward bent-knee side, using arm leverage mindfully.",
      "Hold with breath control, then release and switch sides.",
    ],
  },
];

const twistMap = Object.fromEntries(TWISTING_ASANAS.map((asana) => [asana.slug, asana]));

export function generateStaticParams() {
  return TWISTING_ASANAS.map((asana) => ({ slug: asana.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const asana = twistMap[slug];
  if (!asana) return { title: "Twisting Asana | Nirog Yoga" };
  return {
    title: `${asana.sanskrit} (${asana.english}) | Nirog Yoga`,
    description: `${asana.sanskrit} (${asana.english}) guide with alignment cues, benefits, precautions, and step-by-step practice.`,
  };
}

export default async function TwistingDetailPage({ params }) {
  const { slug } = await params;
  const asana = twistMap[slug];
  if (!asana) notFound();

  const currentIndex = TWISTING_ASANAS.findIndex((item) => item.slug === asana.slug);
  const previousAsana =
    currentIndex > 0 ? TWISTING_ASANAS[currentIndex - 1] : null;
  const nextAsana =
    currentIndex < TWISTING_ASANAS.length - 1
      ? TWISTING_ASANAS[currentIndex + 1]
      : null;

  const visualSteps = [
    {
      title: "Step 1: Setup",
      cue: "Establish upright spine and stable base before rotating.",
      image: "/restorative/sukhasana.svg",
    },
    {
      title: "Step 2: Enter and Hold",
      cue: "Rotate from core upward, not from shoulders alone.",
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
            {asana.devanagari} | Twisting Asana practice details from Nirog Yoga
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
          <Link href="/knowledge-base/major-asanas#twisting-asanas" className={styles.navLink}>
            ← Back to Major Asanas
          </Link>

          {previousAsana ? (
            <Link href={`/knowledge-base/twisting-asanas/${previousAsana.slug}`} className={styles.navLink}>
              ← {previousAsana.english}
            </Link>
          ) : (
            <Link href="/knowledge-base/backbends/bhujangasana" className={styles.navLink}>
              ← Backbends
            </Link>
          )}

          {nextAsana ? (
            <Link href={`/knowledge-base/twisting-asanas/${nextAsana.slug}`} className={styles.navLink}>
              {nextAsana.english} →
            </Link>
          ) : (
            <Link href="/knowledge-base/major-asanas#balancing-asanas" className={styles.navLink}>
              Balancing Asanas →
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
