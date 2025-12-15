import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from './standing-asanas.module.css';

export const metadata = {
  title: "Standing Asanas | Nirog Yoga",
  description: "Explore the foundation of yoga practice with our guide to Standing Asanas. Learn about alignment, strength, and stability.",
};

export default function StandingAsanas() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Standing Asanas</h1>
          <p className={styles.subtitle}>Building Stability, Strength and Grounding</p>
        </header>

        <section className={styles.introSection}>
          <p className={styles.text}>
            Standing asanas are the foundation of physical yoga practice. They strengthen the legs and core, improve posture, and develop balance and focus. For beginners and advanced practitioners alike, these postures create a sense of grounding and inner stability that supports all other asanas.
          </p>
          <p className={styles.text}>Standing postures are especially important for:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Improving <strong>alignment of the spine, hips and knees</strong></li>
            <li className={styles.listItem}>Developing <strong>leg strength and joint stability</strong></li>
            <li className={styles.listItem}>Enhancing <strong>balance, coordination and concentration</strong></li>
            <li className={styles.listItem}>Preparing the body for <strong>more advanced asanas and pranayama</strong></li>
          </ul>
        </section>

        <div className={styles.sequenceSummary}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Total Time: ~9 minutes</h3>
          <p className={styles.text}>Perfect length for:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Beginners</li>
            <li className={styles.listItem}>Warm-up routine</li>
            <li className={styles.listItem}>Workplace / home short session</li>
            <li className={styles.listItem}>Pre-meditation grounding</li>
          </ul>
        </div>

        <section className={styles.safetySection}>
          <h2 className={styles.sectionTitle}>Safety & Modifications</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Those with knee or hip issues should <strong>shorten the stance</strong> and avoid deep bending.</li>
            <li className={styles.listItem}>Use a <strong>chair or wall</strong> for balance in Tree, Half Moon and similar poses.</li>
            <li className={styles.listItem}>In case of high blood pressure or cardiac conditions, avoid holding the arms overhead for long; take frequent breaks.</li>
            <li className={styles.listItem}>Always come out of each pose <strong>slowly and with control</strong>, returning to Tadasana to feel the effects.</li>
          </ul>
        </section>

        <section className={styles.guidelinesSection}>
          <h2 className={styles.sectionTitle}>General Guidelines for Standing Asanas</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Practice on a <strong>stable, non-slippery surface</strong>.</li>
            <li className={styles.listItem}>Keep the <strong>feet active and grounded</strong>, toes spread, weight evenly distributed.</li>
            <li className={styles.listItem}>Maintain a <strong>long, neutral spine</strong> – avoid collapsing in the lower back or rounding the shoulders.</li>
            <li className={styles.listItem}>Breathe <strong>smoothly and steadily</strong>; do not hold the breath.</li>
            <li className={styles.listItem}>If you feel sharp pain in knees, lower back or neck, <strong>come out of the pose slowly</strong> and modify.</li>
          </ul>
        </section>

        <h2 className={styles.sectionTitle}>Major Standing Asanas Taught at Nirog Yoga University</h2>

        <div className={styles.asanasGrid}>
          {/* 1. Tadasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>1. Tāḍāsana (Mountain Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Base pose for all standing asanas.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Feet hip-width or together, weight evenly on both feet</li>
              <li className={styles.listItem}>Thighs gently engaged, tailbone lengthening down</li>
              <li className={styles.listItem}>Chest open, shoulders relaxed, chin parallel to floor</li>
              <li className={styles.listItem}>Awareness of grounding through feet and length through spine</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Improves posture, body awareness and alignment.</p>
          </div>

          {/* 2. Virabhadrasana I */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>2. Vīrabhadrāsana I (Warrior I)</h3>
            <span className={styles.asanaPurpose}>Purpose: Strength, stamina and focus.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Front knee bent above ankle, back leg straight and strong</li>
              <li className={styles.listItem}>Hips turning towards the front as far as is comfortable</li>
              <li className={styles.listItem}>Arms lifted overhead, palms facing each other, shoulders relaxed</li>
              <li className={styles.listItem}>Gaze softly forward or slightly upward</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Strengthens legs, opens hips and chest, builds confidence.</p>
          </div>

          {/* 3. Virabhadrasana II */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>3. Vīrabhadrāsana II (Warrior II)</h3>
            <span className={styles.asanaPurpose}>Purpose: Stability and concentration.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Wide stance, front knee bent, back leg firm</li>
              <li className={styles.listItem}>Hips and chest open to the side</li>
              <li className={styles.listItem}>Arms extended in one line, shoulders relaxed</li>
              <li className={styles.listItem}>Gaze over front fingertips</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Strengthens thighs and shoulders, improves endurance and mental focus.</p>
          </div>

          {/* 4. Utthita Trikonasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>4. Utthita Trikoṇāsana (Extended Triangle Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Lateral stretch and spinal alignment.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Feet wide apart, front foot turned out, back foot slightly in</li>
              <li className={styles.listItem}>Front hand to shin/block, back arm reaching up</li>
              <li className={styles.listItem}>Both sides of waist long, chest rotating open</li>
              <li className={styles.listItem}>Gaze up, sideways or down according to neck comfort</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Stretches hamstrings and hips, opens chest, improves balance.</p>
          </div>

          {/* 5. Utthita Parsvakonasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>5. Utthita Pārśvakonāsana (Extended Side Angle Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Deep side stretch and strength.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>From Warrior II, front forearm to thigh or hand to block/floor</li>
              <li className={styles.listItem}>Top arm extended over ear, creating a long diagonal line</li>
              <li className={styles.listItem}>Front knee stays aligned over ankle</li>
              <li className={styles.listItem}>Chest rotating upward, breath deep into side ribs</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Strengthens legs and core, stretches side body and groin.</p>
          </div>

          {/* 6. Ardha Chandrasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>6. Ardha Chandrāsana (Half Moon Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Dynamic balance and core activation.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>From Triangle, front hand on floor/block slightly ahead of foot</li>
              <li className={styles.listItem}>Back leg lifted parallel to floor, foot active</li>
              <li className={styles.listItem}>Top arm reaching up, chest turning open</li>
              <li className={styles.listItem}>Gaze down (beginner), sideways or up (advanced)</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Improves balance, strengthens ankles, legs and core.</p>
          </div>

          {/* 7. Vrksasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>7. Vṛkṣāsana (Tree Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Balance and focus.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Stand tall in Tadasana</li>
              <li className={styles.listItem}>Place sole of one foot on opposite ankle, calf or inner thigh (avoid knee joint)</li>
              <li className={styles.listItem}>Hands in prayer at chest or raised overhead</li>
              <li className={styles.listItem}>Gaze at a still point in front (drishti)</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Strengthens ankles, knees and hips; trains concentration and steadiness.</p>
          </div>

          {/* 8. Parsvottanasana */}
          <div className={styles.asanaCard}>
            <h3 className={styles.asanaTitle}>8. Parśvottānāsana (Pyramid Pose)</h3>
            <span className={styles.asanaPurpose}>Purpose: Hamstring stretch and forward bend with stability.</span>
            <span className={styles.keyPointsTitle}>Key points:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>Feet in narrow standing stance, both legs straight</li>
              <li className={styles.listItem}>Hips squared to the front as far as possible</li>
              <li className={styles.listItem}>Spine long as you fold over the front leg</li>
              <li className={styles.listItem}>Hands on blocks, floor or in reverse prayer behind back</li>
            </ul>
            <span className={styles.benefitsTitle}>Benefits:</span>
            <p className={styles.benefits}>Stretches hamstrings and calves, improves balance and posture.</p>
          </div>

        </div>

        <section className={styles.curriculumSection}>
          <h2 className={styles.sectionTitle}>Standing Asanas in the Curriculum</h2>
          <p className={styles.text}>At Nirog Yoga University, standing asanas are:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Introduced early in <strong>foundation modules</strong></li>
            <li className={styles.listItem}>Used to teach <strong>alignment principles and safe load-bearing</strong></li>
            <li className={styles.listItem}>Integrated with <strong>breath awareness and gaze (drishti)</strong></li>
            <li className={styles.listItem}>Adapted with props (blocks, wall support, chair) for different body types and therapeutic needs</li>
          </ul>
          <p className={styles.text}>Students learn not only how to perform these asanas, but also:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Common <strong>alignment errors</strong> and how to correct them</li>
            <li className={styles.listItem}><strong>Modifications</strong> for knee, hip and back issues</li>
            <li className={styles.listItem}>Sequencing principles: how standing asanas prepare for forward bends, twists, and balances</li>
          </ul>
        </section>

        <section className={styles.sequenceSection}>
          <h2 className={styles.sectionTitle}>Beginner Standing-Asana Sequence (8–10 minutes)</h2>
          <p className={styles.text} style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
            A simple, safe, grounding routine. This sequence warms up the body, improves balance, and builds foundational strength. Each posture is held gently, without strain.
          </p>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Image
              src="/beginner-standing-sequence.png"
              alt="Beginner Standing Asana Sequence Infographic"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
              width={900}
              height={500}
            />
          </div>

          <div className={styles.sequenceSteps}>
            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>1. Tāḍāsana (Mountain Pose)</h3>
              <span className={styles.stepDuration}>Duration: 45 seconds</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Stand with feet hip-width apart</li>
                <li className={styles.listItem}>Ground evenly through both feet</li>
                <li className={styles.listItem}>Lift spine tall, relax shoulders</li>
                <li className={styles.listItem}>Breathe slow and deep</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Creates alignment and centers the mind.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>2. Vṛkṣāsana (Tree Pose)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Shift weight onto one leg</li>
                <li className={styles.listItem}>Place foot on opposite calf or inner thigh</li>
                <li className={styles.listItem}>Hands in prayer at chest</li>
                <li className={styles.listItem}>Soft gaze</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Improves balance and focus.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>3. Utkaṭāsana (Chair Pose)</h3>
              <span className={styles.stepDuration}>Duration: 45 seconds</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Bend knees as if sitting in a chair</li>
                <li className={styles.listItem}>Keep knees behind toes</li>
                <li className={styles.listItem}>Lift chest, arms up</li>
                <li className={styles.listItem}>Weight on heels</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Strengthens thighs, glutes, and core.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>4. Vīrabhadrāsana I (Warrior I)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Step one foot back</li>
                <li className={styles.listItem}>Front knee bent, back leg strong</li>
                <li className={styles.listItem}>Hips turn forward gently</li>
                <li className={styles.listItem}>Arms overhead</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Builds leg strength, opens chest.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>5. Vīrabhadrāsana II (Warrior II)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>From Warrior I, open hips and arms to the side</li>
                <li className={styles.listItem}>Gaze over front fingertips</li>
                <li className={styles.listItem}>Keep spine tall</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Improves stamina and hip stability.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>6. Utthita Trikoṇāsana (Triangle Pose)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Straighten front leg</li>
                <li className={styles.listItem}>Slide torso forward</li>
                <li className={styles.listItem}>Hand on shin/block</li>
                <li className={styles.listItem}>Top arm up</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Deep side stretch, improves mobility.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>7. Ardha Chandrāsana (Half Moon)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>From Triangle, bend front knee</li>
                <li className={styles.listItem}>Place hand on floor/block</li>
                <li className={styles.listItem}>Lift back leg</li>
                <li className={styles.listItem}>Rotate chest open</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Enhances balance and core activation.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>8. Parśvottānāsana (Pyramid Pose)</h3>
              <span className={styles.stepDuration}>Duration: 1 minute (30 sec each side)</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Step into short triangle stance</li>
                <li className={styles.listItem}>Fold forward over front leg</li>
                <li className={styles.listItem}>Keep both legs straight</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Stretches hamstrings/calves, calms mind.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>9. Cooling Down — Gentle Forward Fold</h3>
              <span className={styles.stepDuration}>Duration: 45 seconds</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Feet hip-width</li>
                <li className={styles.listItem}>Soften knees</li>
                <li className={styles.listItem}>Let head, neck, arms hang</li>
                <li className={styles.listItem}>Slow breaths</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Releases lower back and tension.</p>
            </div>

            <div className={styles.sequenceStep}>
              <h3 className={styles.stepNumber}>10. Return to Tāḍāsana (Mountain)</h3>
              <span className={styles.stepDuration}>Duration: 30 seconds</span>
              <p className={styles.stepHow}><strong>How:</strong></p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Stand tall</li>
                <li className={styles.listItem}>Hands at chest</li>
                <li className={styles.listItem}>Observe breath</li>
              </ul>
              <p className={styles.stepPurpose}><strong>Purpose:</strong> Integrates the entire sequence.</p>
            </div>

          </div>
        </section>

        <section className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Major Asanas</h4>
              <p>Comprehensive guide to 10 major categories of yoga postures.</p>
              <Link href="/knowledge-base/major-asanas" className={styles.resourceLink}>
                Explore Categories →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Surya Namaskara</h4>
              <p>Complete 12-step Sun Salutation sequence with breath coordination.</p>
              <Link href="/knowledge-base/surya-namaskara" className={styles.resourceLink}>
                Learn Sequence →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Safety Guidelines</h4>
              <p>15 essential safety rules and modifications for asana practice.</p>
              <Link href="/knowledge-base/safety-guidelines" className={styles.resourceLink}>
                View Guidelines →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Practice Curriculum</h4>
              <p>Structured 8-week to 1-year learning plan.</p>
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
          <Link href="/knowledge-base/surya-namaskara" className={styles.relatedLink}>
            Next: Surya Namaskara →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
