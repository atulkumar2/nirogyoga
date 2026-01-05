import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from './major-asanas.module.css';

export const metadata = {
  title: "Major Āsanas (Yoga Postures) | Nirog Yoga",
  description: "A comprehensive, categorized list of major yoga asanas for students and practitioners.",
};

const asanaCategories = [
  {
    id: "standing-asanas",
    title: "1. Standing Asanas",
    desc: "These build strength, balance, and stability.",
    asanas: [
      { sanskrit: "Tāḍāsana", sanskritScript: "ताडासन", english: "Mountain Pose" },
      { sanskrit: "Vīrabhadrāsana I", sanskritScript: "वीरभद्रासन I", english: "Warrior I" },
      { sanskrit: "Vīrabhadrāsana II", sanskritScript: "वीरभद्रासन II", english: "Warrior II" },
      { sanskrit: "Vīrabhadrāsana III", sanskritScript: "वीरभद्रासन III", english: "Warrior III" },
      { sanskrit: "Utthita Trikoṇāsana", sanskritScript: "उत्थित त्रिकोणासन", english: "Extended Triangle" },
      { sanskrit: "Utthita Pārśvakonāsana", sanskritScript: "उत्थित पार्श्वकोणासन", english: "Extended Side Angle" },
      { sanskrit: "Ardha Chandrāsana", sanskritScript: "अर्ध चंद्रासन", english: "Half Moon Pose" },
      { sanskrit: "Parsvottanāsana", sanskritScript: "पार्श्वोत्तानासन", english: "Pyramid Pose" },
      { sanskrit: "Vrikshāsana", sanskritScript: "वृक्षासन", english: "Tree Pose" },
    ]
  },
  {
    id: "forward-bends",
    title: "2. Forward Bends",
    desc: "Promote relaxation, lengthen hamstrings, calm the mind.",
    asanas: [
      { sanskrit: "Paścimottānāsana", sanskritScript: "पश्चिमोत्तानासन", english: "Seated Forward Bend" },
      { sanskrit: "Uttānāsana", sanskritScript: "उत्तानासन", english: "Standing Forward Fold" },
      { sanskrit: "Prasarita Pādottānāsana", sanskritScript: "प्रसारित पादोत्तानासन", english: "Wide-Legged Forward Bend" },
      { sanskrit: "Jānu Śīrṣāsana", sanskritScript: "जानु शीर्षासन", english: "Head-to-Knee Pose" },
      { sanskrit: "Balāsana", sanskritScript: "बालासन", english: "Child’s Pose" },
    ]
  },
  {
    id: "backbends",
    title: "3. Backbends",
    desc: "Open the chest, stimulate energy, strengthen spine.",
    asanas: [
      { sanskrit: "Bhujangāsana", sanskritScript: "भुजंगासन", english: "Cobra Pose" },
      { sanskrit: "Urdhva Mukha Śvanāsana", sanskritScript: "ऊर्ध्व मुख श्वानासन", english: "Upward-Facing Dog" },
      { sanskrit: "Dhanurāsana", sanskritScript: "धनुरासन", english: "Bow Pose" },
      { sanskrit: "Uṣṭrāsana", sanskritScript: "उष्ट्रासन", english: "Camel Pose" },
      { sanskrit: "Śalabhāsana", sanskritScript: "शलभासन", english: "Locust Pose" },
      { sanskrit: "Setu Bandha Sarvāṅgāsana", sanskritScript: "सेतु बंध सर्वांगासन", english: "Bridge Pose" },
    ]
  },
  {
    id: "twisting-asanas",
    title: "4. Twisting Asanas",
    desc: "Improve digestion, detoxification, and spinal mobility.",
    asanas: [
      { sanskrit: "Ardha Matsyendrāsana", sanskritScript: "अर्ध मत्स्येन्द्रासन", english: "Half Lord of the Fishes" },
      { sanskrit: "Bharadvājāsana", sanskritScript: "भरद्वाजासन", english: "Bharadvāja’s Twist" },
      { sanskrit: "Marīchyāsana", sanskritScript: "मरीच्यासन", english: "Sage Marichi Pose" },
    ]
  },
  {
    id: "balancing-asanas",
    title: "5. Balancing Asanas",
    desc: "Develop focus, neuromuscular coordination, and stability.",
    asanas: [
      { sanskrit: "Vrikshāsana", sanskritScript: "वृक्षासन", english: "Tree Pose" },
      { sanskrit: "Garudāsana", sanskritScript: "गरुडासन", english: "Eagle Pose" },
      { sanskrit: "Natarājāsana", sanskritScript: "नटराजासन", english: "Dancer Pose" },
      { sanskrit: "Bakasana", sanskritScript: "बकासन", english: "Crow Pose" },
      { sanskrit: "Kakasana", sanskritScript: "काकासन", english: "Crane Pose" },
    ]
  },
  {
    id: "inversions",
    title: "6. Inversions",
    desc: "Reverse circulation, improve lymphatic flow, increase mental clarity.",
    asanas: [
      { 
        sanskrit: "Śīrṣāsana", 
        sanskritScript: "शीर्षासन",
        english: "Headstand", 
        link: "/knowledge-base/shirshashana",
        image: "/shirshashana.svg"
      },
      { 
        sanskrit: "Sarvāṅgāsana", 
        sanskritScript: "सर्वांगासन",
        english: "Shoulderstand",
        image: "/sarvangasana.svg" 
      },
      { 
        sanskrit: "Halasana", 
        sanskritScript: "हलासन",
        english: "Plough Pose",
        image: "/halasana.svg"
      },
      { 
        sanskrit: "Viparita Karani", 
        sanskritScript: "विपरीत करणी",
        english: "Legs Up the Wall",
        image: "/viparita-karani.svg"
      },
      { 
        sanskrit: "Pincha Mayurāsana", 
        sanskritScript: "पिञ्च मयूरासन",
        english: "Forearm Stand",
        image: "/pincha-mayurasana.svg"
      },
    ]
  },
  {
    id: "hip-opening",
    title: "7. Hip-Opening Asanas",
    desc: "Increase pelvic mobility and relieve lower back tension.",
    asanas: [
      { sanskrit: "Baddha Koṇāsana", sanskritScript: "बद्ध कोणासन", english: "Bound Angle Pose" },
      { sanskrit: "Upaviṣṭa Koṇāsana", sanskritScript: "उपविष्ट कोणासन", english: "Seated Wide Angle" },
      { sanskrit: "Eka Pada Rāja Kapotāsana", sanskritScript: "एक पाद राज कपोतासन", english: "Pigeon Pose" },
      { sanskrit: "Mandukāsana", sanskritScript: "मण्डुकासन", english: "Frog Pose" },
    ]
  },
  {
    id: "core-strength",
    title: "8. Core-Strengthening Asanas",
    desc: "Support posture, balance, and spinal health.",
    asanas: [
      { sanskrit: "Nāvāsana", sanskritScript: "नावासन", english: "Boat Pose" },
      { sanskrit: "Phalakasana", sanskritScript: "फलकासन", english: "Plank" },
      { sanskrit: "Chaturanga Daṇḍāsana", sanskritScript: "चतुरंगा दंडासन", english: "Four-Limbed Staff Pose" },
    ]
  },
  {
    id: "restorative",
    title: "9. Restorative Or Meditative",
    desc: "Used at the end of sessions for relaxation.",
    asanas: [
      { sanskrit: "Śavāsana", sanskritScript: "शवासन", english: "Corpse Pose" },
      { sanskrit: "Sukhāsana", sanskritScript: "सुखासन", english: "Easy Sitting Pose" },
      { sanskrit: "Vajrāsana", sanskritScript: "वज्रासन", english: "Thunderbolt Pose" },
      { sanskrit: "Padmāsana", sanskritScript: "पद्मासन", english: "Lotus Pose" },
    ]
  },
  {
    id: "surya-namaskara",
    title: "10. Surya Namaskara Asanas",
    desc: "Core 12-step sequence elements.",
    asanas: [
      { sanskrit: "Pranamasana", sanskritScript: "प्रणामासन", english: "Prayer Pose", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Hasta Uttanasana", sanskritScript: "हस्त उत्तानासन", english: "Raised Arms Pose", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Uttanasana", sanskritScript: "उत्तानासन", english: "Standing Forward Bend", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Ashwa Sanchalanasana", sanskritScript: "अश्व संचालनासन", english: "Equestrian Pose", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Dandasana", sanskritScript: "दंडासन", english: "Stick Pose", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Ashtanga Namaskara", sanskritScript: "अष्टांग नमस्कार", english: "Salute with Eight Parts", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Bhujangasana", sanskritScript: "भुजंगासन", english: "Cobra Pose", link: "/knowledge-base/surya-namaskara" },
      { sanskrit: "Adho Mukha Svanasana", sanskritScript: "अधो मुख श्वानासन", english: "Downward-Facing Dog", link: "/knowledge-base/surya-namaskara" },
    ]
  }
];

export default function MajorAsanas() {
  return (
    <main>
      <Navbar />

      <div className={styles.container} id="top">
        <header className={styles.header}>
          <h1 className={styles.title}>Major Āsanas (Yoga Postures)</h1>
          <p className={styles.subtitle}>
            Categorized for clarity and professional use
          </p>
        </header>

        {/* Table of Contents */}
        <section className={styles.tocSection}>
          <h2 className={styles.tocTitle}>Table of Contents</h2>
          <div className={styles.tocGrid}>
            {asanaCategories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className={styles.tocLink}>
                {cat.title}
              </a>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image
            src="/major-asanas-landscape.png"
            alt="Major Yoga Asanas Guide"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
            width={900}
            height={500}
          />
        </div>

        {asanaCategories.map((category, index) => (
          <section key={index} id={category.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <a href="#top" className={styles.scrollTop} title="Go to Top">↑ Top</a>
            </div>
            <p className={styles.categoryDesc}>{category.desc}</p>
            <div className={styles.asanaGrid}>
              {category.asanas.map((asana, aIndex) => (
                asana.link ? (
                  <Link key={aIndex} href={asana.link} className={styles.asanaCardLink}>
                    <div className={styles.asanaCard}>
                      <div className={styles.cardImageContainer}>
                        <Image 
                          src={asana.image || "/lotus-placeholder.svg"} 
                          alt={asana.sanskrit}
                          width={150}
                          height={150}
                          className={styles.cardImage}
                        />
                      </div>
                      <span className={styles.sanskritName}>{asana.sanskrit}</span>
                      <span className={styles.sanskritScript}>{asana.sanskritScript}</span>
                      <span className={styles.englishName}>{asana.english}</span>
                    </div>
                  </Link>
                ) : (
                  <div key={aIndex} className={styles.asanaCard}>
                    <div className={styles.cardImageContainer}>
                        <Image 
                          src={asana.image || "/lotus-placeholder.svg"} 
                          alt={asana.sanskrit}
                          width={150}
                          height={150}
                          className={styles.cardImage}
                        />
                      </div>
                    <span className={styles.sanskritName}>{asana.sanskrit}</span>
                    <span className={styles.sanskritScript}>{asana.sanskritScript}</span>
                    <span className={styles.englishName}>{asana.english}</span>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}

        <section className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Standing Asanas</h4>
              <p>Detailed guide to standing poses with alignment and modifications.</p>
              <Link href="/knowledge-base/standing-asanas" className={styles.resourceLink}>
                Learn Standing Poses →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Surya Namaskara</h4>
              <p>Complete Sun Salutation sequence with 12-step classical practice.</p>
              <Link href="/knowledge-base/surya-namaskara" className={styles.resourceLink}>
                Practice Sequence →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Safety Guidelines</h4>
              <p>Essential safety rules and precautions for all asana practice.</p>
              <Link href="/knowledge-base/safety-guidelines" className={styles.resourceLink}>
                View Guidelines →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Practice Curriculum</h4>
              <p>Structured 8-week to 1-year learning path for asana practice.</p>
              <Link href="/knowledge-base/curriculum" className={styles.resourceLink}>
                View Curriculum →
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/standing-asanas" className={styles.relatedLink}>
            Next: Standing Asanas →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
