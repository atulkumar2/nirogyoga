import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./condition-detail.module.css";

const CONDITIONS = [
  {
    slug: "migraine-chronic-headaches",
    title: "Migraine & Chronic Headaches",
    wiki: "https://en.wikipedia.org/wiki/Migraine",
    summary:
      "A research-oriented overview of how yoga may help reduce headache frequency, pain intensity, and stress-triggered episodes.",
    factors: [
      "Autonomic imbalance and stress reactivity",
      "Sleep disturbance and anxiety sensitivity",
      "Neck-shoulder tension and breathing pattern dysfunction",
    ],
    yogaSupport: [
      "Breath regulation to reduce sympathetic overdrive",
      "Gentle relaxation protocols to improve pain coping",
      "Lifestyle rhythm and recovery-focused routine",
    ],
    protocol: {
      title: "Migraine-Support Protocol (25-35 min)",
      practices: [
        "Centering (2 min): quiet seated breathing with eyes closed",
        "Neck and shoulder release (5 min): gentle range-of-motion movements",
        "Supported forward folds (6 min): low-intensity calming postures",
        "Nadi Shodhana Pranayama (6 min): slow alternate-nostril breathing",
        "Bhramari + guided relaxation (8-12 min): low-light restorative finish",
      ],
      frequency: "4-6 days/week; keep intensity low during active headache days.",
    },
    resources: [
      { label: "Wikipedia: Migraine", url: "https://en.wikipedia.org/wiki/Migraine" },
      { label: "MedlinePlus: Migraine", url: "https://www.medlineplus.gov/migraine.html" },
      { label: "Mayo Clinic: Migraine", url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" },
    ],
  },
  {
    slug: "cerebral-cortex-thickening",
    title: "Thickening of Cerebral Cortex",
    wiki: "https://en.wikipedia.org/wiki/Cerebral_cortex",
    summary:
      "An educational page on cortical plasticity and how long-term contemplative practices are being studied in relation to brain structure and function.",
    factors: [
      "Neuroplastic adaptation to repeated cognitive training",
      "Attention and emotional regulation practice load",
      "Sleep and stress physiology",
    ],
    yogaSupport: [
      "Meditation-linked attention training",
      "Breath-led downregulation for improved neural recovery",
      "Consistency and long-term adherence",
    ],
    protocol: {
      title: "Neuroplasticity-Oriented Protocol (30-40 min)",
      practices: [
        "Grounding mobility (6 min): joint rotations and mindful warm-up",
        "Steady standing balance (10 min): Tree, Warrior variations, breath-led holds",
        "Focused pranayama (8 min): equal-ratio breathing",
        "Meditative attention practice (10-15 min): breath-focus or mantra-based sitting",
      ],
      frequency: "5 days/week with gradual progression and consistent timing.",
    },
    resources: [
      { label: "Wikipedia: Cerebral Cortex", url: "https://en.wikipedia.org/wiki/Cerebral_cortex" },
      { label: "NIA: Cognitive Health and Older Adults", url: "https://www.nia.nih.gov/health/brain-health/cognitive-health-and-older-adults" },
    ],
  },
  {
    slug: "acid-peptic-diseases",
    title: "Acid-Peptic Diseases",
    wiki: "https://en.wikipedia.org/wiki/Peptic_ulcer_disease",
    summary:
      "A practical overview of gastrointestinal stress interplay and how yoga can be used as a supportive non-pharmacological strategy.",
    factors: [
      "Stress-related gastric hyperacidity",
      "Meal timing, sleep timing, and autonomic tone",
      "Coexisting anxiety and inflammatory burden",
    ],
    yogaSupport: [
      "Post-meal calming practices and breathing",
      "Stress reduction and sleep regularization",
      "Gentle movement to support digestion",
    ],
    protocol: {
      title: "Acid-Peptic Support Protocol (20-30 min)",
      practices: [
        "Post-meal Vajrasana (5-8 min): upright, relaxed breathing",
        "Gentle spinal mobility (6 min): cat-cow and mild seated twists",
        "Abdominally soft pranayama (6 min): slow diaphragmatic breathing",
        "Restorative finish (6-10 min): supported relaxation",
      ],
      frequency: "Daily; avoid strong inversions or intense core work after meals.",
    },
    resources: [
      { label: "Wikipedia: Peptic Ulcer Disease", url: "https://en.wikipedia.org/wiki/Peptic_ulcer_disease" },
      { label: "MedlinePlus: Peptic Ulcer", url: "https://medlineplus.gov/pepticulcer.html" },
      { label: "Mayo Clinic: Peptic Ulcer", url: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/dxc-20231407" },
    ],
  },
  {
    slug: "lipid-liver-disorders",
    title: "Lipid & Liver Disorders",
    wiki: "https://en.wikipedia.org/wiki/Dyslipidemia",
    summary:
      "A lifestyle-first research insight page discussing metabolic risk, lipid profile modulation, and yoga-based adjunctive care.",
    factors: [
      "Sedentary behavior and metabolic dysfunction",
      "Poor sleep and elevated stress hormones",
      "Dietary overload and low physical recovery",
    ],
    yogaSupport: [
      "Regular moderate asana-pranayama schedule",
      "Improved metabolic resilience via routine adherence",
      "Stress and sleep optimization as cardiometabolic support",
    ],
    protocol: {
      title: "Metabolic-Lipid Support Protocol (35-45 min)",
      practices: [
        "Dynamic warm-up (8 min): brisk but controlled standing flow",
        "Strength-endurance sequence (15 min): Warrior/Plank/Bridge variations",
        "Breath regulation (8 min): paced exhale-focused breathing",
        "Cool-down and relaxation (8-12 min): restorative postures",
      ],
      frequency: "5-6 days/week plus walking and nutrition guidance.",
    },
    resources: [
      { label: "Wikipedia: Dyslipidemia", url: "https://en.wikipedia.org/wiki/Dyslipidemia" },
      { label: "MedlinePlus: Cholesterol", url: "https://medlineplus.gov/cholesterol.html" },
    ],
  },
  {
    slug: "ibs",
    title: "Irritable Bowel Syndrome (IBS)",
    wiki: "https://en.wikipedia.org/wiki/Irritable_bowel_syndrome",
    summary:
      "An evidence-informed gut-brain perspective highlighting how yoga may help symptom burden through stress and autonomic regulation.",
    factors: [
      "Gut-brain axis dysregulation",
      "Visceral hypersensitivity and anxiety",
      "Irregular lifestyle rhythms",
    ],
    yogaSupport: [
      "Breath and relaxation for vagal support",
      "Mindful movement with low abdominal strain",
      "Improved stress handling and symptom tracking",
    ],
    protocol: {
      title: "IBS-Calming Protocol (25-35 min)",
      practices: [
        "Nervous-system settling (4 min): quiet breath observation",
        "Gentle abdominal mobility (8 min): soft twists and low-intensity folds",
        "Pranayama (8 min): lengthened exhalation, no forceful breath holds",
        "Guided relaxation (8-12 min): body scan in supported pose",
      ],
      frequency: "Most days; prioritize consistency over intensity.",
    },
    resources: [
      { label: "Wikipedia: IBS", url: "https://en.wikipedia.org/wiki/Irritable_bowel_syndrome" },
      { label: "MedlinePlus: IBS", url: "https://medlineplus.gov/irritablebowelsyndrome.html" },
      { label: "Mayo Clinic: IBS", url: "https://www.mayoclinic.org/health/irritable-bowel-syndrome/DS00106" },
    ],
  },
  {
    slug: "coronary-artery-disease",
    title: "Coronary Artery Disease",
    wiki: "https://en.wikipedia.org/wiki/Coronary_artery_disease",
    summary:
      "A supportive-care perspective on cardiovascular rehabilitation principles where yoga can assist risk-factor modification and recovery.",
    factors: [
      "Atherosclerotic burden and vascular inflammation",
      "Stress, hypertension, and poor sleep",
      "Low activity tolerance and deconditioning",
    ],
    yogaSupport: [
      "Cardiac-safe breathing and gradual movement",
      "Stress and blood-pressure supportive practices",
      "Lifestyle adherence and recovery pacing",
    ],
    protocol: {
      title: "Cardiac-Safe Support Protocol (20-35 min)",
      practices: [
        "Gentle mobility (6 min): low-load joint and spine movements",
        "Submaximal standing practice (10-15 min): controlled pace, no strain",
        "Pranayama (6-8 min): slow coherent breathing",
        "Relaxation (6-10 min): restorative posture and calm recovery",
      ],
      frequency: "4-6 days/week with medical clearance and BP monitoring.",
    },
    resources: [
      { label: "Wikipedia: Coronary Artery Disease", url: "https://en.wikipedia.org/wiki/Coronary_artery_disease" },
      { label: "MedlinePlus: Coronary Artery Disease", url: "https://medlineplus.gov/coronaryarterydisease.html" },
      { label: "Mayo Clinic: Coronary Artery Disease", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613" },
    ],
  },
  {
    slug: "obesity-metabolic-syndrome",
    title: "Obesity & Metabolic Syndrome",
    wiki: "https://en.wikipedia.org/wiki/Metabolic_syndrome",
    summary:
      "A metabolic health page discussing behavior change, insulin resistance, and how yoga supports long-term adherence and stress control.",
    factors: [
      "Insulin resistance and central adiposity",
      "Sleep debt and chronically elevated stress",
      "Low movement and inconsistent routines",
    ],
    yogaSupport: [
      "Progressive movement with breath control",
      "Mindful eating support through self-regulation",
      "Habit consistency and improved recovery quality",
    ],
    protocol: {
      title: "Obesity-Metabolic Protocol (35-50 min)",
      practices: [
        "Activation block (8 min): dynamic mobility and marching patterns",
        "Asana circuit (18-25 min): alternating strength and mobility sets",
        "Breath reset (6 min): controlled nasal breathing",
        "Recovery (6-10 min): cooldown stretch and guided rest",
      ],
      frequency: "5-6 days/week with progressive load and tracking.",
    },
    resources: [
      { label: "Wikipedia: Metabolic Syndrome", url: "https://en.wikipedia.org/wiki/Metabolic_syndrome" },
      { label: "MedlinePlus: Metabolic Syndrome", url: "https://medlineplus.gov/metabolicsyndrome.html" },
      { label: "NHLBI: Metabolic Syndrome", url: "https://www.nhlbi.nih.gov/health/metabolic-syndrome" },
    ],
  },
  {
    slug: "endocrine-dysregulation",
    title: "Endocrine Dysregulation",
    wiki: "https://en.wikipedia.org/wiki/Endocrine_disease",
    summary:
      "A systems-level overview on hormone balance, circadian behavior, and how yoga may aid stress-linked endocrine stability.",
    factors: [
      "Hypothalamic-pituitary-adrenal axis strain",
      "Circadian disruption and poor sleep",
      "Chronic stress with low recovery quality",
    ],
    yogaSupport: [
      "Daily rhythm support with scheduled practice",
      "Breathing and relaxation for stress modulation",
      "Body awareness and sustainable lifestyle compliance",
    ],
    protocol: {
      title: "Endocrine-Regulation Support Protocol (25-40 min)",
      practices: [
        "Circadian priming (5 min): morning light + gentle breath-led movement",
        "Moderate asana practice (12-18 min): standing + seated balance",
        "Pranayama (8 min): alternate nostril or coherent breathing",
        "Evening unwind (6-10 min): restorative decompression",
      ],
      frequency: "Daily, ideally fixed morning/evening windows.",
    },
    resources: [
      { label: "Wikipedia: Endocrine Disease", url: "https://en.wikipedia.org/wiki/Endocrine_disease" },
      { label: "MedlinePlus: Endocrine Diseases", url: "https://medlineplus.gov/endocrinediseases.html" },
    ],
  },
  {
    slug: "menstrual-menopausal-symptoms",
    title: "Menstrual & Menopausal Symptoms",
    wiki: "https://en.wikipedia.org/wiki/Menopause",
    summary:
      "A symptom-management page focused on sleep, mood, vasomotor discomfort, and yoga as supportive integrative care.",
    factors: [
      "Hormonal transition and autonomic fluctuations",
      "Sleep disruption and stress sensitivity",
      "Pain, stiffness, and mood variability",
    ],
    yogaSupport: [
      "Restorative sequences and breath regulation",
      "Pelvic and spinal mobility support",
      "Stress resilience and sleep quality improvement",
    ],
    protocol: {
      title: "Women's Hormonal Comfort Protocol (25-35 min)",
      practices: [
        "Pelvic release warm-up (6 min): gentle hip and low-back mobility",
        "Supportive asanas (10-14 min): restorative forward folds and bridges",
        "Cooling pranayama (6-8 min): slow calming breath",
        "Relaxation (6-10 min): guided rest with body scan",
      ],
      frequency: "4-6 days/week; reduce intensity on high-symptom days.",
    },
    resources: [
      { label: "Wikipedia: Menopause", url: "https://en.wikipedia.org/wiki/Menopause" },
      { label: "MedlinePlus: Menopause", url: "https://medlineplus.gov/menopause.html" },
      { label: "Mayo Clinic: Menopause", url: "https://www.mayoclinic.org/diseases-conditions/menopause/symptoms-causes/syc-20353397" },
    ],
  },
  {
    slug: "age-related-changes",
    title: "Reversal of Age-Related Changes",
    wiki: "https://en.wikipedia.org/wiki/Ageing",
    summary:
      "A longevity-oriented page on functional ageing, mobility preservation, and cognitive-emotional health through consistent yogic routines.",
    factors: [
      "Progressive sarcopenia and mobility decline",
      "Reduced balance confidence and endurance",
      "Cognitive load, stress, and sleep quality",
    ],
    yogaSupport: [
      "Strength-balance-mobility integration",
      "Breath-led nervous system regulation",
      "Sustained routine for healthy ageing trajectories",
    ],
    protocol: {
      title: "Healthy Ageing Protocol (30-45 min)",
      practices: [
        "Mobility and joint prep (8 min): controlled full-body warm-up",
        "Balance-strength block (12-18 min): standing and chair-supported work",
        "Breath and posture reset (8 min): paced breathing + alignment",
        "Recovery (8-12 min): restorative poses and relaxation",
      ],
      frequency: "5 days/week with individualized progression and safety.",
    },
    resources: [
      { label: "Wikipedia: Ageing", url: "https://en.wikipedia.org/wiki/Ageing" },
      { label: "MedlinePlus: Healthy Aging", url: "https://medlineplus.gov/healthyaging.html" },
      { label: "NIA: Cognitive Health and Older Adults", url: "https://www.nia.nih.gov/health/brain-health/cognitive-health-and-older-adults" },
    ],
  },
];

const conditionMap = Object.fromEntries(
  CONDITIONS.map((condition) => [condition.slug, condition])
);

export function generateStaticParams() {
  return CONDITIONS.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const condition = conditionMap[slug];
  if (!condition) return { title: "Yoga Healing Insight | Nirog Yoga" };
  return {
    title: `${condition.title} | Nirog Yoga`,
    description: `${condition.title}: research insight overview and reference links.`,
  };
}

export default async function YogaHealingConditionPage({ params }) {
  const { slug } = await params;
  const condition = conditionMap[slug];
  if (!condition) notFound();

  const currentIndex = CONDITIONS.findIndex((item) => item.slug === slug);
  const previousCondition = currentIndex > 0 ? CONDITIONS[currentIndex - 1] : null;
  const nextCondition =
    currentIndex < CONDITIONS.length - 1 ? CONDITIONS[currentIndex + 1] : null;
  const protocolVariants = {
    beginner: {
      title: "Beginner Protocol (15-20 min)",
      practices: condition.protocol.practices.slice(0, 3),
      frequency: "Start 3-4 days/week with low intensity and strict comfort limits.",
    },
    intermediate: {
      title: "Intermediate Protocol",
      practices: condition.protocol.practices,
      frequency: condition.protocol.frequency,
    },
    flareDay: {
      title: "Flare-day / Low-Energy Protocol (10-15 min)",
      practices: [
        "2-3 minutes of quiet breath awareness in a supported posture",
        "5-7 minutes of the gentlest mobility from your usual sequence",
        "3-5 minutes of guided relaxation or body scan",
      ],
      frequency:
        "Use on symptomatic days; resume full routine once symptoms settle.",
    },
  };

  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{condition.title}</h1>
          <p className={styles.subtitle}>{condition.summary}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Context</h2>
          <p className={styles.text}>
            This page provides a structured orientation for learners and participants.
            It is not a diagnosis page and should be read alongside clinical advice.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Common Clinical Factors</h2>
          <ul className={styles.list}>
            {condition.factors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Yoga May Support</h2>
          <ul className={styles.list}>
            {condition.yogaSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Suggested Yoga Protocol</h2>
          <div className={styles.protocolGrid}>
            {Object.values(protocolVariants).map((variant) => (
              <article key={variant.title} className={styles.protocolCard}>
                <h3 className={styles.protocolTitle}>{variant.title}</h3>
                <ul className={styles.list}>
                  {variant.practices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles.text}>
                  <strong>Frequency:</strong> {variant.frequency}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reference Links</h2>
          <div className={styles.resourceGrid}>
            {condition.resources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
              >
                <h3 className={styles.resourceTitle}>{resource.label}</h3>
                <p className={styles.resourceText}>{resource.url}</p>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick Navigation</h2>
          <div className={styles.quickLinks}>
            <Link href="/yoga-healing" className={styles.navLink}>
              Yoga Healing Home
            </Link>
            <Link href="/knowledge-base" className={styles.navLink}>
              Knowledge Base
            </Link>
            <Link href="/knowledge-base/breathing-techniques" className={styles.navLink}>
              Breathing Techniques
            </Link>
            <Link href="/knowledge-base/meditation" className={styles.navLink}>
              Meditation
            </Link>
            <Link href="/resources" className={styles.navLink}>
              Resources
            </Link>
          </div>
        </section>

        <div className={styles.navigation}>
          <Link href="/yoga-healing" className={styles.navLink}>
            ← Back to Yoga Healing
          </Link>
          {previousCondition ? (
            <Link
              href={`/yoga-healing/${previousCondition.slug}`}
              className={styles.navLink}
            >
              ← Previous
            </Link>
          ) : null}
          {nextCondition ? (
            <Link
              href={`/yoga-healing/${nextCondition.slug}`}
              className={styles.navLink}
            >
              Next →
            </Link>
          ) : null}
        </div>
      </div>

      <Footer />
    </main>
  );
}
