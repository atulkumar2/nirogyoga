import Image from "next/image";
import Link from "next/link";
import styles from "./sci-refs.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Scientific references about yoga | Nirog Yoga",
  description: "Scientific references on yoga, meditation, and telomere health, including studies on stress reduction, telomerase activity, and healthy aging.",
};

export default function ScientificReferences() {
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Scientific references about yoga</h1>
          <p className={styles.subtitle}>
            Exploring the connection between cellular aging, telomerase activity, and yoga practices.
          </p>
        </header>

        <section className={styles.section}>
          <p className={styles.introText}>
            Yoga and meditation, particularly practices like Sudarshan Kriya Yoga (SKY), heartfulness meditation, mindfulness, have been shown in studies to potentially slow down cellular aging by increasing telomerase activity and preserving or lengthening telomeres. These practices reduce chronic stress, cortisol levels, and inflammation, which are known to accelerate telomere shortening. Studies have demonstrated that consistent, long-term meditation practice is linked to longer telomeres, with some research indicating a 12-week intervention can show improvements in telomere length.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/knowledge-base/yoga-telomere-health.jpg"
              alt="Yoga & Meditation and Telomere Health infograph showing telomerase activity and reduced stress"
              className={styles.heroImage}
              width={1024}
              height={683}
            />
            <div className={styles.imageCaption}>
              Illustration of Yoga & Meditation extending Telomere length and cellular longevity.
            </div>
          </div>
        </section>

        <section>
          <div className={styles.keyFindingsGrid}>
            <div className={styles.findingCard}>
              <h3 className={styles.findingTitle}>
                <span className={styles.findingIcon}>🧬</span> Mechanism
              </h3>
              <p className={styles.findingText}>
                Yoga and meditation significantly increase telomerase activity, an essential enzyme responsible for maintaining and repairing telomere length. By protecting chromosomal ends, this activity fundamentally slows down the process of cellular senescence and aging.
              </p>
            </div>

            <div className={styles.findingCard}>
              <h3 className={styles.findingTitle}>
                <span className={styles.findingIcon}>🛡️</span> Impact of Stress
              </h3>
              <p className={styles.findingText}>
                Chronic psychological stress, inflammation, and oxidative damage are primary drivers of accelerated telomere shortening. Mindfulness practices physically mitigate these factors by lowering cortisol levels and improving neuroendocrine and emotional regulation.
              </p>
            </div>

            <div className={styles.findingCard}>
              <h3 className={styles.findingTitle}>
                <span className={styles.findingIcon}>⏳</span> Longevity Markers
              </h3>
              <p className={styles.findingText}>
                Clinical trials consistently show that long-term practitioners of yoga or meditation possess longer telomeres and demonstrate higher telomerase activity compared to control groups, marking these practices as tangible pathways to cellular longevity.
              </p>
            </div>

            <div className={styles.findingCard}>
              <h3 className={styles.findingTitle}>
                <span className={styles.findingIcon}>🧘</span> Specific Practices
              </h3>
              <p className={styles.findingText}>
                Targeted disciplines like Sudarshan Kriya Yoga (SKY), <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10278541/" target="_blank" rel="noopener noreferrer">Heartfulness meditation</a>, and Mindfulness-Based Stress Reduction (MBSR) have all independently shown positive, measurable effects on telomere health and overall resilience.
              </p>
            </div>

            <div className={styles.findingCard}>
              <h3 className={styles.findingTitle}>
                <span className={styles.findingIcon}>🔬</span> Findings in Studies
              </h3>
              <p className={styles.findingText}>
                While a 12-week yoga-based lifestyle intervention (YBLI) has shown significant initial improvements in telomere length, researchers emphasize the necessity of consistent, long-term practice and mindful integration to maintain these lasting protective effects.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.noteBox}>
          <p className={styles.noteText}>
            <strong>Note:</strong> While some studies show promising results, others indicate that while yoga may not always cause significant lengthening, it can act as a protective measure against the shortening of telomeres. Further research is needed to determine the most effective types and durations of practice.
          </p>
        </div>

        <section className={styles.referencesSection}>
          <h2 className={styles.referencesTitle}>References</h2>
          <ol className={styles.referenceList}>
            <li className={styles.referenceItem}>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11676400/" target="_blank" rel="noopener noreferrer">Yoga and Telomeres: A Path to Cellular Longevity?</a>
              <div className={styles.referenceSummary}>Evidence suggests that meditation may affect telomere dynamics by reducing stress and inflammation and improving emotional regulation.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10612486/" target="_blank" rel="noopener noreferrer">A Narrative Review of Telomere Length Modulation Through Diverse Yoga and Meditation Styles</a>
              <div className={styles.referenceSummary}>Mindfulness practices have demonstrated the potential to positively impact various aspects of human health associated with telomere length (TL).</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://www.cureus.com/articles/321459-yoga-and-telomeres-a-path-to-cellular-longevity.pdf" target="_blank" rel="noopener noreferrer">Yoga and Telomeres: A Path to Cellular Longevity</a>
              <div className={styles.referenceSummary}>Explores how yoga practices protect chromosomal ends by reducing oxidative damage and stress levels.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10380951/" target="_blank" rel="noopener noreferrer">Mindfulness and Telomere Maintenance (PMC)</a>
              <div className={styles.referenceSummary}>Open-access evidence on how mindfulness practices relate to telomere maintenance and stress biology.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://pubmed.ncbi.nlm.nih.gov/39735156/" target="_blank" rel="noopener noreferrer">PubMed: Yoga Practice and Telomere Length</a>
              <div className={styles.referenceSummary}>Clinical research indicating improvements in cellular biomarkers with consistent meditation routines.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1222863/full" target="_blank" rel="noopener noreferrer">Frontiers in Psychology: Yoga-Based Interventions</a>
              <div className={styles.referenceSummary}>Review of various mind-body therapies and their positive correlation with cellular longevity and healthspan.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://alternative-therapies.com/pdfarticles/11190.pdf" target="_blank" rel="noopener noreferrer">Alternative Therapies: Meditation and Aging</a>
              <div className={styles.referenceSummary}>Assessing the mechanism behind stress reduction techniques in mitigating telomere attrition over time.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://www.msjonline.org/index.php/ijrms/article/download/13949/8956/65035" target="_blank" rel="noopener noreferrer">International Journal of Research in Medical Sciences</a>
              <div className={styles.referenceSummary}>Outlines specific yoga protocols that demonstrate measurable preservation of telomere length in adults.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://journals.lww.com/ijoy/fulltext/2018/11030/implication_of_asana,_pranayama_and_meditation_on.3.aspx" target="_blank" rel="noopener noreferrer">Implication of Asana, Pranayama and Meditation on Telomeres</a>
              <div className={styles.referenceSummary}>Investigates how combining physical postures with breathwork leads to improved cellular aging markers.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10380951/" target="_blank" rel="noopener noreferrer">PMC: Mindfulness and Telomere Maintenance</a>
              <div className={styles.referenceSummary}>Analyzes the dose-response relationship between regular mindfulness-based stress reduction and cellular health.</div>
            </li>
            <li className={styles.referenceItem}>
              <a href="https://www.cureus.com/articles/321459-yoga-and-telomeres-a-path-to-cellular-longevity" target="_blank" rel="noopener noreferrer">Yoga and Telomeres (Cureus article)</a>
              <div className={styles.referenceSummary}>Discusses the potential of yoga as a therapeutic strategy to improve longevity and prevent age-related diseases.</div>
            </li>
          </ol>
        </section>

        <div className={styles.navigation}>
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge base
          </Link>
          <Link href="/knowledge-base/patanjali-sutras" className={styles.relatedLink}>
            Next: Patanjali Yoga Sutras →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
