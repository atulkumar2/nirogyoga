import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './yoga-terms.module.css';

export const metadata = {
    title: 'Yoga: Basic Terms & Meanings | Knowledge base',
    description: 'Short explanations of essential Yoga terminology used in classical texts and modern practice.',
};

export default function YogaTermsPage() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Yoga: Basic Terms & Meanings</h1>
                    <p className={styles.lead}>
                        This page explains the <strong>core terminology of Yoga</strong> as used in classical Indian texts and modern practice.
                    </p>
                </header>

                <article className={styles.article}>
                    <p className={styles.intro}>
                        Understanding these terms helps practitioners go beyond physical exercise and approach Yoga as a <strong>complete system for health, discipline, and self-realization</strong>.
                    </p>

                    <nav className={styles.toc} aria-label="Table of contents">
                        <h3 className={styles.tocTitle}>Table of contents</h3>
                        <ul className={styles.tocList}>
                            <li><a className={styles.tocLink} href="#yoga">1. Yoga</a></li>
                            <li><a className={styles.tocLink} href="#asana">2. Asana</a></li>
                            <li><a className={styles.tocLink} href="#pranayama">3. Pranayama</a></li>
                            <li><a className={styles.tocLink} href="#prana">4. Prana</a></li>
                            <li><a className={styles.tocLink} href="#nadis">5. Nadis</a></li>
                            <li><a className={styles.tocLink} href="#chakras">6. Chakras</a></li>
                            <li><a className={styles.tocLink} href="#dhyana">7. Dhyana</a></li>
                            <li><a className={styles.tocLink} href="#dharana">8. Dharana</a></li>
                            <li><a className={styles.tocLink} href="#samadhi">9. Samadhi</a></li>
                            <li><a className={styles.tocLink} href="#mantra">10. Mantra</a></li>
                            <li><a className={styles.tocLink} href="#mudra">11. Mudra</a></li>
                            <li><a className={styles.tocLink} href="#bandha">12. Bandha</a></li>
                            <li><a className={styles.tocLink} href="#ashtanga">13. Ashtanga Yoga</a></li>
                            <li><a className={styles.tocLink} href="#yama-niyama">14. Yama &amp; Niyama</a></li>
                        </ul>
                    </nav>

                    <hr />

                    <section>
                        <h2 id="yoga" className={styles.sectionTitle}>1. Yoga (योग)</h2>
                        <p><strong>Meaning:</strong> Union, integration, or discipline<br /><strong>Root:</strong> Sanskrit root <em>Yuj</em> – to yoke, join, or unite</p>
                        <p>Yoga refers to the union of <strong>body, breath, mind, and awareness</strong>. In classical texts, Yoga is a disciplined method to still mental fluctuations and realize one’s true nature.</p>
                        <p><strong>Reference:</strong><br />- Patanjali Yoga Sutra 1.2 – <em>“Yogaḥ citta-vṛtti-nirodhaḥ”</em><br />- <a href="https://www.yogasutra.org" target="_blank" rel="noopener noreferrer">yogasutra.org</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="asana" className={styles.sectionTitle}>2. Asana (आसन)</h2>
                        <p><strong>Meaning:</strong> Posture or seat</p>
                        <p>Asana refers to physical postures designed to create <strong>stability, flexibility, strength, and comfort</strong> in the body. In classical Yoga, asanas prepare the body for meditation rather than being an end in themselves.</p>
                        <p><strong>Classical definition:</strong><br />- <em>“Sthira sukham āsanam”</em></p>
                        <p><strong>Reference:</strong><br />- Yoga Sutra 2.46<br />- <a href="https://www.sivanandaonline.org" target="_blank" rel="noopener noreferrer">sivanandaonline.org</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="pranayama" className={styles.sectionTitle}>3. Pranayama (प्राणायाम)</h2>
                        <p><strong>Meaning:</strong> Regulation or expansion of life force<br /><strong>Components:</strong> <em>Prana</em> (life energy) + <em>Ayama</em> (control or expansion)</p>
                        <p>Pranayama consists of <strong>breathing techniques</strong> that influence the nervous system, metabolism, and mental state. Proper practice enhances vitality and inner balance.</p>
                        <p><strong>Common techniques:</strong><br />- Anulom Vilom<br />- Kapalabhati<br />- Bhramari<br />- Nadi Shodhana</p>
                        <p><strong>Reference:</strong><br />- Hatha Yoga Pradipika, Chapter 2<br />- <a href="https://www.satyamyogaprasad.net" target="_blank" rel="noopener noreferrer">biharyoga.net</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="prana" className={styles.sectionTitle}>4. Prana (प्राण)</h2>
                        <p><strong>Meaning:</strong> Vital life energy</p>
                        <p>Prana is the subtle energy that animates all living beings. In the human system, prana flows through <strong>nadis</strong> and is regulated through breath, food, thought, and awareness.</p>
                        <p><strong>Related concept:</strong><br />- Five Pranas: Prana, Apana, Samana, Udana, Vyana</p>
                        <p><strong>Reference:</strong><br />- Upanishads<br />- <a href="https://www.swamij.com/prana.htm" target="_blank" rel="noopener noreferrer">swamij.com/prana.htm</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="nadis" className={styles.sectionTitle}>5. Nadis (नाड़ी)</h2>
                        <p><strong>Meaning:</strong> Energy channels</p>
                        <p>Nadis are subtle pathways through which prana flows. Though not physical nerves, they influence physiological and psychological functions.</p>
                        <p><strong>Major Nadis:</strong><br />- Ida (left, cooling, lunar)<br />- Pingala (right, heating, solar)<br />- Sushumna (central, spiritual ascent)</p>
                        <p><strong>Reference:</strong><br />- Hatha Yoga Pradipika<br />- <a href="https://www.yogapedia.com" target="_blank" rel="noopener noreferrer">yogapedia.com</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="chakras" className={styles.sectionTitle}>6. Chakras (चक्र)</h2>
                        <p><strong>Meaning:</strong> Wheels or energy centers</p>
                        <p>Chakras are psycho-energetic centers aligned along the spine. They govern physical organs, emotions, and states of consciousness.</p>
                        <p><strong>Seven primary chakras:</strong><br />1. Muladhara – Root<br />2. Svadhisthana – Sacral<br />3. Manipura – Solar Plexus<br />4. Anahata – Heart<br />5. Vishuddha – Throat<br />6. Ajna – Brow<br />7. Sahasrara – Crown</p>
                        <p><strong>Reference:</strong><br />- Sat-Chakra-Nirupana<br />- <a href="https://www.swamij.com/chakras.htm" target="_blank" rel="noopener noreferrer">swamij.com/chakras.htm</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="dhyana" className={styles.sectionTitle}>7. Dhyana (ध्यान)</h2>
                        <p><strong>Meaning:</strong> Meditation</p>
                        <p>Dhyana is sustained, effortless awareness without distraction. It is not concentration but a <strong>continuous flow of attention</strong> toward the object of meditation.</p>
                        <p><strong>Place in Yoga:</strong><br />- 7th limb of Ashtanga Yoga</p>
                        <p><strong>Reference:</strong><br />- Yoga Sutra 3.2<br />- <a href="https://www.himalayaninstitute.org" target="_blank" rel="noopener noreferrer">himalayaninstitute.org</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="dharana" className={styles.sectionTitle}>8. Dharana (धारणा)</h2>
                        <p><strong>Meaning:</strong> Concentration</p>
                        <p>Dharana is the practice of fixing attention on a single point, such as breath, mantra, or symbol. It precedes meditation.</p>
                        <p><strong>Reference:</strong><br />- Yoga Sutra 3.1</p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="samadhi" className={styles.sectionTitle}>9. Samadhi (समाधि)</h2>
                        <p><strong>Meaning:</strong> Complete absorption</p>
                        <p>Samadhi is the culmination of Yoga, where the meditator, the act of meditation, and the object merge into one state of awareness.</p>
                        <p><strong>Types:</strong><br />- Savikalpa Samadhi<br />- Nirvikalpa Samadhi</p>
                        <p><strong>Reference:</strong><br />- Yoga Sutra, Chapter 4<br />- <a href="https://www.yogapedia.com" target="_blank" rel="noopener noreferrer">yogapedia.com</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="mantra" className={styles.sectionTitle}>10. Mantra (मन्त्र)</h2>
                        <p><strong>Meaning:</strong> Sacred sound or formula</p>
                        <p>Mantras are vibrational tools used to focus the mind and influence consciousness. They may be chanted aloud or mentally.</p>
                        <p><strong>Examples:</strong><br />- Om (ॐ)<br />- Gayatri Mantra</p>
                        <p><strong>Reference:</strong><br />- Vedic literature<br />- <a href="https://vedabase.io" target="_blank" rel="noopener noreferrer">vedabase.io</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="mudra" className={styles.sectionTitle}>11. Mudra (मुद्रा)</h2>
                        <p><strong>Meaning:</strong> Seal or gesture</p>
                        <p>Mudras are symbolic hand or body gestures that redirect energy flow and deepen inner awareness.</p>
                        <p><strong>Examples:</strong><br />- Gyan Mudra<br />- Chin Mudra<br />- Khechari Mudra</p>
                        <p><strong>Reference:</strong><br />- Hatha Yoga Pradipika<br />- <a href="https://www.yogapedia.com" target="_blank" rel="noopener noreferrer">yogapedia.com</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="bandha" className={styles.sectionTitle}>12. Bandha (बन्ध)</h2>
                        <p><strong>Meaning:</strong> Energy lock</p>
                        <p>Bandhas are internal muscular locks used during pranayama and meditation to control the movement of prana.</p>
                        <p><strong>Major Bandhas:</strong><br />- Mula Bandha<br />- Uddiyana Bandha<br />- Jalandhara Bandha</p>
                        <p><strong>Reference:</strong><br />- Hatha Yoga Pradipika<br />- <a href="https://www.satyamyogaprasad.net" target="_blank" rel="noopener noreferrer">biharyoga.net</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="ashtanga" className={styles.sectionTitle}>13. Ashtanga Yoga (अष्टाङ्ग योग)</h2>
                        <p><strong>Meaning:</strong> Eight-limbed path of Yoga</p>
                        <p>Outlined by Patanjali, Ashtanga Yoga provides a complete framework for ethical living, discipline, and realization.</p>
                        <p><strong>Eight limbs:</strong><br />1. Yama<br />2. Niyama<br />3. Asana<br />4. Pranayama<br />5. Pratyahara<br />6. Dharana<br />7. Dhyana<br />8. Samadhi</p>
                        <p><strong>Reference:</strong><br />- Yoga Sutras of Patanjali<br />- <a href="https://www.yogasutra.org" target="_blank" rel="noopener noreferrer">yogasutra.org</a></p>
                    </section>

                    <hr />

                    <section>
                        <h2 id="yama-niyama" className={styles.sectionTitle}>14. Yama &amp; Niyama (यम, नियम)</h2>
                        <p><strong>Meaning:</strong> Ethical restraints and observances</p>
                        <p>These form the moral foundation of Yoga.</p>
                        <p><strong>Yamas:</strong><br />- Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha</p>
                        <p><strong>Niyamas:</strong><br />- Saucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana</p>
                        <p><strong>Reference:</strong><br />- Yoga Sutra 2.29–2.45</p>
                    </section>

                    <hr />

                    <div className={styles.resources}>
                        <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
                        <div className={styles.resourcesGrid}>
                            <div className={styles.resourceCard}>
                                <h4>Introduction to Yoga</h4>
                                <p>A scholarly overview of Yoga as a complete science of well-being.</p>
                                <Link href="/knowledge-base/introduction" className={styles.resourceLink}>Read Introduction →</Link>
                            </div>

                            <div className={styles.resourceCard}>
                                <h4>Patanjali Yoga Sutras</h4>
                                <p>One-page summary of the foundational yoga philosophy and method.</p>
                                <Link href="/knowledge-base/patanjali-sutras" className={styles.resourceLink}>Read Summary →</Link>
                            </div>

                            <div className={styles.resourceCard}>
                                <h4>Yoga Books</h4>
                                <p>Essential books and references about practice and philosophy.</p>
                                <Link href="/knowledge-base/yoga-books" className={styles.resourceLink}>View Books →</Link>
                            </div>
                        </div>

                        <div className={styles.references}>
                            <h3 className={styles.referencesTitle}>References & Further Reading</h3>
                            <ul className={styles.referencesList}>
                                <li><a href="https://www.yogasutra.org" target="_blank" rel="noopener noreferrer">Patanjali Yoga Sutras — translation &amp; commentary</a></li>
                                <li><a href="https://www.sivananda.org/what-is-hatha-yoga/" target="_blank" rel="noopener noreferrer">Hatha Yoga Pradipika — selected translations</a></li>
                                <li><a href="https://www.vedabase.io/en/library/bg/" target="_blank" rel="noopener noreferrer">Bhagavad Gita — translations</a></li>
                                <li><a href="https://www.vedabase.io/en/library/" target="_blank" rel="noopener noreferrer">Principal Upanishads — selected translations</a></li>
                            </ul>
                        </div>

                    </div>

                </article>

                <div className={styles.navigation}>
                    <Link href="/knowledge-base" className={styles.backLink}>← Knowledge Base</Link>
                    <Link href="/knowledge-base/yoga-books" className={styles.relatedLink}>Related: Yoga Books →</Link>
                </div>

            </div>

            <Footer />
        </main>
    );
}
