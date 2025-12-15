import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './historical-references.module.css';

export const metadata = {
    title: "Historical References of Yoga | Nirog Yoga",
    description: "A comprehensive overview of the major historical references of Yoga, from Pre-Classical texts to Modern Revival.",
};

export default function HistoricalReferences() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Major Historical References of Yoga</h1>
                    <p className={styles.subtitle}>
                        Primary Sources That Form the Foundation of Yogic Knowledge
                    </p>
                </header>

                <section className={styles.section}>
                    <p className={styles.text}>
                        Yoga is not a modern invention. It is a <em>5,000+ year-old knowledge system</em> documented in some of the most important texts of Indian civilization. Below are the key historical references, grouped by era and importance.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Pre-Classical / Early References (3000–500 BCE)</h2>

                    <h3 className={styles.subheading}>1.1 Indus–Saraswati Civilization (c. 3000–1500 BCE)</h3>
                    <ul className={styles.list}>
                        <li>Archaeological seals (Pashupati Seal) show figures in meditative, yogic postures.</li>
                        <li>Suggests proto-yogic spiritual practices existed long before formal documentation.</li>
                    </ul>

                    <h3 className={styles.subheading}>1.2 Vedas (c. 1500–1200 BCE)</h3>
                    <p className={styles.text}>Yoga appears in conceptual forms such as:</p>
                    <ul className={styles.list}>
                        <li><strong>Dhyāna (meditation)</strong></li>
                        <li><strong>Prāṇa (life-force)</strong></li>
                        <li><strong>Tapas (inner heat/discipline)</strong></li>
                        <li><strong>Mantra practices</strong></li>
                    </ul>
                    <div className={styles.highlightBox}>
                        <strong>Key Vedic references:</strong>
                        <ul className={styles.list} style={{ marginBottom: 0 }}>
                            <li><strong>Rig Veda</strong> — earliest hymns on discipline and meditation</li>
                            <li><strong>Yajur Veda</strong> — ritual breath control</li>
                            <li><strong>Atharva Veda</strong> — healing, pranic concepts</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Upanishadic Period (800–500 BCE)</h2>
                    <p className={styles.text}>
                        The Upanishads provide some of the <strong>clearest early teachings on Yoga</strong>:
                    </p>
                    <h3 className={styles.subheading}>Key Upanishads Relevant to Yoga</h3>
                    <ul className={styles.list}>
                        <li><strong>Katha Upanishad</strong> — metaphor of the body as a chariot; early ideas of pratyahara & meditation</li>
                        <li><strong>Shvetashvatara Upanishad</strong> — posture, breath, concentration</li>
                        <li><strong>Maitri Upanishad</strong> — sixfold yoga (asana, pranayama, pratyahara, dhyana, dharana, samadhi)</li>
                    </ul>
                    <p className={styles.text}>These texts refined yoga into a philosophical system.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Bhagavad Gītā (c. 500–200 BCE)</h2>
                    <p className={styles.text}>
                        One of the <strong>most important yoga texts in history</strong>. It defines three major paths:
                    </p>
                    <ul className={styles.list}>
                        <li><strong>Karma Yoga</strong> — discipline of action</li>
                        <li><strong>Bhakti Yoga</strong> — devotion</li>
                        <li><strong>Jñāna Yoga</strong> — knowledge</li>
                    </ul>
                    <p className={styles.text}>
                        Also speaks about meditation, steadiness of mind, and self-discipline. The Gita framed Yoga as a universal approach to living—not just postures.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Classical Yoga — Patañjali (c. 200 BCE–400 CE)</h2>
                    <h3 className={styles.subheading}>Yoga Sūtra of Patañjali</h3>
                    <p className={styles.text}>
                        The most influential text in yoga history. It systematized yoga into the <strong>8-limbed path (Aṣṭāṅga Yoga):</strong>
                    </p>
                    <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
                        <li>Yama</li>
                        <li>Niyama</li>
                        <li>Asana</li>
                        <li>Pranayama</li>
                        <li>Pratyahara</li>
                        <li>Dharana</li>
                        <li>Dhyana</li>
                        <li>Samadhi</li>
                    </ol>
                    <p className={styles.text}>This is the foundation of modern yoga psychology and meditation.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Post-Classical / Hatha Yoga Era (900–1500 CE)</h2>
                    <p className={styles.text}>Yoga became more physical and energy-based. Key texts:</p>

                    <h3 className={styles.subheading}>5.1 Hatha Yoga Pradipika (15th Century) — Swami Svatmarama</h3>
                    <ul className={styles.list}>
                        <li>Asana, pranayama, bandhas, mudras</li>
                        <li>Introduced the idea of Nadi purification</li>
                        <li>Core manual of traditional Hatha Yoga</li>
                    </ul>

                    <h3 className={styles.subheading}>5.2 Gheranda Samhita (17th Century)</h3>
                    <p className={styles.text}>Describes <strong>7-limb yoga system</strong> including:</p>
                    <ul className={styles.list}>
                        <li>Shatkarmas (cleansing)</li>
                        <li>Asana</li>
                        <li>Mudras</li>
                        <li>Pranayama</li>
                        <li>Meditation</li>
                    </ul>

                    <h3 className={styles.subheading}>5.3 Shiva Samhita (14th–17th Century)</h3>
                    <p className={styles.text}>Focuses on:</p>
                    <ul className={styles.list}>
                        <li>subtle body</li>
                        <li>nadis</li>
                        <li>chakras</li>
                        <li>meditation and mantras</li>
                    </ul>
                    <p className={styles.text}>This era shaped how physical yoga is practiced today.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. Modern Revival (1800s–Present)</h2>
                    <p className={styles.text}>The global spread of yoga began through these key figures and works:</p>

                    <h3 className={styles.subheading}>6.1 Swami Vivekananda (1893)</h3>
                    <ul className={styles.list}>
                        <li>Introduced Raja Yoga & philosophy to the West</li>
                        <li>Popularized meditation and Vedanta</li>
                    </ul>

                    <h3 className={styles.subheading}>6.2 T. Krishnamacharya (1888–1989)</h3>
                    <p className={styles.text}>The "Father of Modern Yoga". Students included:</p>
                    <ul className={styles.list}>
                        <li>B.K.S. Iyengar</li>
                        <li>Pattabhi Jois</li>
                        <li>Indra Devi</li>
                        <li>T.K.V. Desikachar</li>
                    </ul>
                    <p className={styles.text}>He shaped the modern practice of asana.</p>

                    <h3 className={styles.subheading}>6.3 Iyengar, Ashtanga, Integral Yoga Texts</h3>
                    <p className={styles.text}>Influential books include:</p>
                    <ul className={styles.list}>
                        <li><em>Light on Yoga</em> (B.K.S. Iyengar)</li>
                        <li><em>Yoga Mala</em> (Pattabhi Jois)</li>
                        <li><em>The Heart of Yoga</em> (T.K.V. Desikachar)</li>
                        <li><em>The Complete Illustrated Book of Yoga</em> (Indra Devi)</li>
                    </ul>
                    <p className={styles.text}>These made yoga accessible worldwide.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>7. Government & Research Documentation (Modern India)</h2>

                    <h3 className={styles.subheading}>Ministry of AYUSH</h3>
                    <ul className={styles.list}>
                        <li>Standardizes yoga education</li>
                        <li>Promotes scientific yoga research</li>
                    </ul>

                    <h3 className={styles.subheading}>Yoga Certification Board (YCB)</h3>
                    <ul className={styles.list}>
                        <li>Establishes levels of Yoga instructors and therapists</li>
                    </ul>

                    <h3 className={styles.subheading}>Kaivalyadhama, Bihar School of Yoga, S-VYASA</h3>
                    <p className={styles.text}>Institutions producing research, training, and global standards.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Summary Table</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Era</th>
                                    <th>Key Texts</th>
                                    <th>Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Indus–Vedic</td>
                                    <td>Rig Veda, Yajur Veda</td>
                                    <td>Early breath, meditation concepts</td>
                                </tr>
                                <tr>
                                    <td>Upanishadic</td>
                                    <td>Katha, Shvetashvatara</td>
                                    <td>Early philosophy of yoga, mind control</td>
                                </tr>
                                <tr>
                                    <td>Classical</td>
                                    <td>Patañjali's Yoga Sūtra</td>
                                    <td>8-limbed path, core yoga psychology</td>
                                </tr>
                                <tr>
                                    <td>Epic</td>
                                    <td>Bhagavad Gītā</td>
                                    <td>Karma, Bhakti, Jñāna Yoga</td>
                                </tr>
                                <tr>
                                    <td>Hatha Era</td>
                                    <td>Hatha Pradipika, Gheranda</td>
                                    <td>Physical practices, pranayama, mudras</td>
                                </tr>
                                <tr>
                                    <td>Modern Era</td>
                                    <td>Iyengar, Ashtanga texts</td>
                                    <td>Globalization of yoga</td>
                                </tr>
                                <tr>
                                    <td>Scientific Era</td>
                                    <td>AYUSH, S-VYASA</td>
                                    <td>Research & standardization</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
