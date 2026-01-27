import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./body-control.module.css";

export const metadata = {
  title: "Ancient Ways to Control the Body | Nirog Yoga",
  description:
    "Discover ancient techniques to calm the mind and control the body through simple signals and actions.",
};

export default function BodyControlMethods() {
  const englishTips = [
    {
      id: 1,
      question: "Not able to fall asleep?",
      action: "Blink your eyes continuously for 60 seconds.",
      explanation:
        "The brain reads this as a 'sleep signal' and brings the body into a relaxed state, helping you drift off naturally.",
    },
    {
      id: 2,
      question: "Feeling very lazy in the morning?",
      action: "Do reverse humming (humming inward).",
      explanation:
        "This unusual vibration slightly confuses the brain, causing it to instantly shift the body into Active Mode.",
    },
    {
      id: 3,
      question: "Feeling low on energy?",
      action: "Splash cold water on your face.",
      explanation:
        "The cold shock activates the nervous system, leading to an immediate increase in alertness and energy levels.",
    },
    {
      id: 4,
      question: "Anxiety or fear lingering?",
      action: "Focus on your heartbeat and slowly take deep breaths.",
      explanation:
        "By consciously slowing your breath while acknowledging your heart, you signal to the brain that everything is safe.",
    },
    {
      id: 5,
      question: "Trouble waking up in the morning?",
      action: "Take a deep breath and hold it for 15 seconds.",
      explanation:
        "A mild oxygen shock signals the brain's alertness centers to wake up and start the day.",
    },
    {
      id: 6,
      question: "Unable to focus?",
      action: "Focus on your breathing for 10 seconds.",
      explanation:
        "This brief mindfulness break shifts the mind into Present Mode, clearing away distractions.",
    },
  ];

  const hindiTips = [
    {
      id: 1,
      question: "नींद नहीं आ रही?",
      action: "लगातार 60 सेकंड तक पलकों को झपकाइए।",
      explanation:
        "दिमाग इसे 'नींद का संकेत' मानता है और शरीर को आराम की स्थिति में ले आता है।",
    },
    {
      id: 2,
      question: "सुबह बहुत आलस्य लग रहा है?",
      action: "उलटे हाथ से ब्रश करें।",
      explanation:
        "यह आपके दिमाग को थोड़ा कन्फ्यूज करता है और शरीर तुरंत Active Mode में आ जाता है।",
    },
    {
      id: 3,
      question: "एनर्जी खत्म लग रही है?",
      action: "चेहरे पर ठंडा पानी छिड़किए।",
      explanation:
        "नर्व सिस्टम एक्टिव होता है और मूड व एनर्जी दोनों बढ़ती हैं।",
    },
    {
      id: 4,
      question: "चिंता या डर लग रहा है?",
      action: "ध्यान दिल की धड़कन पर रखें और धीरे-धीरे गहरी सांस लें।",
      explanation: "दिमाग को संकेत मिलता है कि सब सुरक्षित है।",
    },
    {
      id: 5,
      question: "सुबह नींद खुलने में मुश्किल?",
      action: "गहरी सांस लें और 15 सेकंड तक सांस रुकें।",
      explanation: "ऑक्सीजन का हल्का झटका दिमाग को 'जगा' देता है।",
    },
    {
      id: 6,
      question: "फोकस नहीं बन पा रहा?",
      action: "10 सेकंड तक गहरी सांस पर ध्यान दें।",
      explanation: "माइंड तुरंत Present Mode में आ जाता है।",
    },
  ];

  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Ancient Ways to Control the Body</h1>
          <p className={styles.subtitle}>
            Mastering the mind-body connection through simple, powerful signals.
          </p>
        </header>

        {/* English Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Mind-Body Techniques (English)
          </h2>
          <div className={styles.introBox}>
            <p className={styles.introText}>
              <strong>Remember This:</strong> Your body is not your enemy. It
              only waits for instructions from the <strong>mind</strong>. When
              the mind becomes calm, the body automatically comes under control.
            </p>
          </div>

          <div className={styles.grid}>
            {englishTips.map((tip) => (
              <div key={tip.id} className={styles.tipCard}>
                <div className={styles.tipHeader}>
                  <span className={styles.tipNumber}>{tip.id}</span>
                  <h3 className={tip.question}>{tip.question}</h3>
                </div>
                <span className={styles.tipAction}>{tip.action}</span>
                <p className={styles.tipExplanation}>{tip.explanation}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/knowledge-base/body-control-en.jpg"
              alt="Ancient Ways to Control the Body Infographic English"
              width={800}
              height={1200}
              className={styles.image}
            />
          </div>
        </section>

        {/* Hindi Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            शरीर को कंट्रोल करने के प्राचीन तरीके (Hindi)
          </h2>
          <div className={styles.introBox}>
            <p className={styles.introText}>
              <strong>याद रखिए:</strong> शरीर आपका दुश्मन नहीं है। वो सिर्फ
              दिमाग के आदेश का इंतज़ार करता है। जब दिमाग शांत होता है, तो शरीर
              अपने आप कंट्रोल में आ जाता है।
            </p>
          </div>

          <div className={styles.grid}>
            {hindiTips.map((tip) => (
              <div key={tip.id} className={styles.tipCard}>
                <div className={styles.tipHeader}>
                  <span className={styles.tipNumber}>{tip.id}</span>
                  <h3 className={tip.question}>{tip.question}</h3>
                </div>
                <span className={styles.tipAction}>{tip.action}</span>
                <p className={styles.tipExplanation}>{tip.explanation}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/knowledge-base/body-control-hi.jpg"
              alt="शरीर को कंट्रोल करने के प्राचीन तरीके Infographic Hindi"
              width={800}
              height={1200}
              className={styles.image}
            />
          </div>
        </section>

        <div className={styles.conclusion}>
          <p className={styles.conclusionText}>
            "Small signals create a big difference between the mind and the
            body."
          </p>
        </div>

        <section className={styles.references}>
          <h3 className={styles.outcomeTitle}>References & Suggested Reading</h3>
          <ul className={styles.referencesList}>
            <li>Iyengar, B. K. S. (2005). Light on Yoga.</li>
            <li>Saraswati, S. S. (1996). Asana Pranayama Mudra Bandha.</li>
            <li>The Hatha Yoga Pradipika.</li>
            <li>Journal of Bodywork and Movement Therapies.</li>
          </ul>
        </section>

        <section className={styles.resources}>
          <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h4>Breathing Techniques</h4>
              <p>Detailed guide to various yogic breathing patterns and their effects.</p>
              <Link href="/knowledge-base/breathing-techniques" className={styles.resourceLink}>
                Learn Techniques →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Pranayama</h4>
              <p>Deep dive into the science of breath regulation and vital energy.</p>
              <Link href="/knowledge-base/pranayama" className={styles.resourceLink}>
                Explore Pranayama →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Meditation (Dhyāna)</h4>
              <p>Practice methods to calm the mind and achieve inner stillness.</p>
              <Link href="/knowledge-base/meditation" className={styles.resourceLink}>
                Start Meditation →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <h4>Safety Guidelines</h4>
              <p>Important safety information for all levels of yoga practice.</p>
              <Link href="/knowledge-base/safety-guidelines" className={styles.resourceLink}>
                View Guidelines →
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge Base
          </Link>
          <Link href="/knowledge-base/breathing-techniques" className={styles.relatedLink}>
            Next: Breathing Techniques →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
