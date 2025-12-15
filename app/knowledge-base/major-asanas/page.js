import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './major-asanas.module.css';

export const metadata = {
  title: "Major Āsanas (Yoga Postures) | Nirog Yoga",
  description: "A comprehensive, categorized list of major yoga asanas for students and practitioners.",
};

export default function MajorAsanas() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Major Āsanas (Yoga Postures)</h1>
          <p className={styles.subtitle}>
            Categorized for clarity and professional use
          </p>
        </header>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image
            src="/major-asanas-landscape.png"
            alt="Major Yoga Asanas Guide"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
            width={900}
            height={500}
          />
        </div>

        {/* 1. Standing Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>1. Standing Asanas</h2>
          <p className={styles.categoryDesc}>These build strength, balance, and stability.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Tāḍāsana</span>
              <span className={styles.englishName}>Mountain Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vīrabhadrāsana I</span>
              <span className={styles.englishName}>Warrior I</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vīrabhadrāsana II</span>
              <span className={styles.englishName}>Warrior II</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vīrabhadrāsana III</span>
              <span className={styles.englishName}>Warrior III</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Utthita Trikoṇāsana</span>
              <span className={styles.englishName}>Extended Triangle</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Utthita Pārśvakonāsana</span>
              <span className={styles.englishName}>Extended Side Angle</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Ardha Chandrāsana</span>
              <span className={styles.englishName}>Half Moon Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Parsvottanāsana</span>
              <span className={styles.englishName}>Pyramid Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vrikshāsana</span>
              <span className={styles.englishName}>Tree Pose</span>
            </div>
          </div>
        </section>

        {/* 2. Forward Bends */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>2. Forward Bends</h2>
          <p className={styles.categoryDesc}>Promote relaxation, lengthen hamstrings, calm the mind.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Paścimottānāsana</span>
              <span className={styles.englishName}>Seated Forward Bend</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Uttānāsana</span>
              <span className={styles.englishName}>Standing Forward Fold</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Prasarita Pādottānāsana</span>
              <span className={styles.englishName}>Wide-Legged Forward Bend</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Jānu Śīrṣāsana</span>
              <span className={styles.englishName}>Head-to-Knee Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Balāsana</span>
              <span className={styles.englishName}>Child’s Pose</span>
            </div>
          </div>
        </section>

        {/* 3. Backbends */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>3. Backbends</h2>
          <p className={styles.categoryDesc}>Open the chest, stimulate energy, strengthen spine.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Bhujangāsana</span>
              <span className={styles.englishName}>Cobra Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Urdhva Mukha Śvanāsana</span>
              <span className={styles.englishName}>Upward-Facing Dog</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Dhanurāsana</span>
              <span className={styles.englishName}>Bow Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Uṣṭrāsana</span>
              <span className={styles.englishName}>Camel Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Śalabhāsana</span>
              <span className={styles.englishName}>Locust Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Setu Bandha Sarvāṅgāsana</span>
              <span className={styles.englishName}>Bridge Pose</span>
            </div>
          </div>
        </section>

        {/* 4. Twisting Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>4. Twisting Asanas</h2>
          <p className={styles.categoryDesc}>Improve digestion, detoxification, and spinal mobility.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Ardha Matsyendrāsana</span>
              <span className={styles.englishName}>Half Lord of the Fishes</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Bharadvājāsana</span>
              <span className={styles.englishName}>Bharadvāja’s Twist</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Marīchyāsana</span>
              <span className={styles.englishName}>Sage Marichi Pose</span>
            </div>
          </div>
        </section>

        {/* 5. Balancing Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>5. Balancing Asanas</h2>
          <p className={styles.categoryDesc}>Develop focus, neuromuscular coordination, and stability.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vrikshāsana</span>
              <span className={styles.englishName}>Tree Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Garudāsana</span>
              <span className={styles.englishName}>Eagle Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Natarājāsana</span>
              <span className={styles.englishName}>Dancer Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Bakasana</span>
              <span className={styles.englishName}>Crow Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Kakasana</span>
              <span className={styles.englishName}>Crane Pose</span>
            </div>
          </div>
        </section>

        {/* 6. Inversions */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>6. Inversions</h2>
          <p className={styles.categoryDesc}>Reverse circulation, improve lymphatic flow, increase mental clarity.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Śīrṣāsana</span>
              <span className={styles.englishName}>Headstand</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Sarvāṅgāsana</span>
              <span className={styles.englishName}>Shoulderstand</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Halasana</span>
              <span className={styles.englishName}>Plough Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Viparita Karani</span>
              <span className={styles.englishName}>Legs Up the Wall</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Pincha Mayurāsana</span>
              <span className={styles.englishName}>Forearm Stand</span>
            </div>
          </div>
        </section>

        {/* 7. Hip-Opening Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>7. Hip-Opening Asanas</h2>
          <p className={styles.categoryDesc}>Increase pelvic mobility and relieve lower back tension.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Baddha Koṇāsana</span>
              <span className={styles.englishName}>Bound Angle Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Upaviṣṭa Koṇāsana</span>
              <span className={styles.englishName}>Seated Wide Angle</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Eka Pada Rāja Kapotāsana</span>
              <span className={styles.englishName}>Pigeon Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Mandukāsana</span>
              <span className={styles.englishName}>Frog Pose</span>
            </div>
          </div>
        </section>

        {/* 8. Core-Strengthening Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>8. Core-Strengthening Asanas</h2>
          <p className={styles.categoryDesc}>Support posture, balance, and spinal health.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Nāvāsana</span>
              <span className={styles.englishName}>Boat Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Phalakasana</span>
              <span className={styles.englishName}>Plank</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Chaturanga Daṇḍāsana</span>
              <span className={styles.englishName}>Four-Limbed Staff Pose</span>
            </div>
          </div>
        </section>

        {/* 9. Restorative & Meditative Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>9. Restorative & Meditative Asanas</h2>
          <p className={styles.categoryDesc}>Used at the end of sessions for relaxation.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Śavāsana</span>
              <span className={styles.englishName}>Corpse Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Sukhāsana</span>
              <span className={styles.englishName}>Easy Sitting Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Vajrāsana</span>
              <span className={styles.englishName}>Thunderbolt Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Padmāsana</span>
              <span className={styles.englishName}>Lotus Pose</span>
            </div>
          </div>
        </section>

        {/* 10. Surya Namaskara Asanas */}
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>10. Surya Namaskara Asanas</h2>
          <p className={styles.categoryDesc}>Core 12-step sequence elements.</p>
          <div className={styles.asanaGrid}>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Pranamasana</span>
              <span className={styles.englishName}>Prayer Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Hasta Uttanasana</span>
              <span className={styles.englishName}>Raised Arms Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Uttanasana</span>
              <span className={styles.englishName}>Standing Forward Bend</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Ashwa Sanchalanasana</span>
              <span className={styles.englishName}>Equestrian Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Dandasana</span>
              <span className={styles.englishName}>Stick Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Ashtanga Namaskara</span>
              <span className={styles.englishName}>Salute with Eight Parts</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Bhujangasana</span>
              <span className={styles.englishName}>Cobra Pose</span>
            </div>
            <div className={styles.asanaCard}>
              <span className={styles.sanskritName}>Adho Mukha Svanasana</span>
              <span className={styles.englishName}>Downward-Facing Dog</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
