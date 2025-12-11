import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './saatvic-literature.module.css';

export const metadata = {
    title: "Saatvic Literature | Nirog Yoga",
    description: "Explore Sattvic literature, ancient texts, and spiritual writings for holistic well-being.",
};

export default function SaatvicLiterature() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Saatvic Literature</h1>
                    <p className={styles.subtitle}>
                        Discover ancient wisdom, spiritual texts, and literature that promotes purity, harmony, and inner peace.
                    </p>
                </header>

                <nav className={styles.toc}>
                    <h2 className={styles.tocTitle}>Table of Contents</h2>
                    <ul className={styles.tocList}>
                        <li><a href="#sattvic-resources" className={styles.tocLink}>Recommended Sattvic Resources</a></li>
                        <li><a href="#spiritual-texts" className={styles.tocLink}>Spiritual Texts & Scriptures</a></li>
                        <li><a href="#ai-tools" className={styles.tocLink}>AI Tools for Scripture Study</a></li>
                        <li><a href="#scripture-sources" className={styles.tocLink}>Curated Scripture Sources</a></li>
                        <li><a href="#reading-list" className={styles.tocLink}>Custom Reading List</a></li>
                        <li><a href="#upanishad-summaries" className={styles.tocLink}>Upanishad Summaries</a></li>
                    </ul>
                </nav>

                <section id="sattvic-resources" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Recommended Sattvic Resources</h2>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="https://www.vedhgpt.com/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>VedhGPT</span>
                                <span className={styles.linkDesc}>An AI-powered platform for exploring Vedic literature and spiritual knowledge.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.in/s?k=Sattvic+cooking" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Sattvic Cooking Books</span>
                                <span className={styles.linkDesc}>Books on pure, vegetarian cooking that nourishes body and mind.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.in/s?k=Vedic+literature" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Vedic Literature Collections</span>
                                <span className={styles.linkDesc}>Ancient texts including Vedas, Upanishads, and Puranas for spiritual study.</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.in/s?k=Bhagavad+Gita+commentary" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                <span className={styles.linkTitle}>Bhagavad Gita Commentaries</span>
                                <span className={styles.linkDesc}>Modern interpretations and commentaries on the sacred Bhagavad Gita.</span>
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="spiritual-texts" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Spiritual Texts & Scriptures</h2>
                    <div className={styles.grid}>
                        <a href="https://www.amazon.in/Yoga-Sutras-Patanjali-Swami-Satchidananda/dp/1938477073" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Patanjali Yoga Sutras</span>
                            <span className={styles.cardDesc}>The foundational text of Raja Yoga, outlining the eight limbs of yoga.</span>
                        </a>
                        <a href="https://www.amazon.in/Hatha-Yoga-Pradipika-Swami-Muktibodhananda/dp/8185787387" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Hatha Yoga Pradipika</span>
                            <span className={styles.cardDesc}>A classic 15th-century Sanskrit manual on Hatha Yoga.</span>
                        </a>
                        <a href="https://www.amazon.in/s?k=Upanishads+English" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>Upanishads</span>
                            <span className={styles.cardDesc}>Ancient philosophical texts exploring the nature of reality and consciousness.</span>
                        </a>
                        <a href="https://www.amazon.in/s?k=Vedas+English+translation" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <span className={styles.cardIcon}>📖</span>
                            <span className={styles.cardTitle}>The Vedas</span>
                            <span className={styles.cardDesc}>The oldest Hindu scriptures, containing hymns, rituals, and philosophical teachings.</span>
                        </a>
                    </div>
                </section>

                <section id="ai-tools" className={styles.section}>
                    <h2 className={styles.sectionTitle}>AI Tools for Scripture Study</h2>
                    <p className={styles.description}>
                        High-quality AI tools focused on Hindu scripture, Vedanta, Gita & Upanishadic wisdom — not astrology.
                    </p>

                    <div className={styles.aiTools}>
                        <div className={styles.aiTool}>
                            <h3 className={styles.aiToolTitle}>📚 GitaGPT — Bhagavad Gita AI Chatbot</h3>
                            <p className={styles.aiToolDesc}>
                                Interactive AI you can ask life/philosophy questions rooted in Bhagavad Gita teachings.
                            </p>
                            <div className={styles.links}>
                                <a href="https://bhagavadgita.io/gitagpt" target="_blank" rel="noopener noreferrer" className={styles.link}>bhagavadgita.io/gitagpt</a>
                                <a href="https://gitagpt.org" target="_blank" rel="noopener noreferrer" className={styles.link}>gitagpt.org</a>
                                <a href="https://www.gitagpt.in" target="_blank" rel="noopener noreferrer" className={styles.link}>gitagpt.in</a>
                            </div>
                            <p className={styles.note}>✅ Simple Q&A on dharma, purpose, action, self-knowledge.<br />⚠️ AI-based — verify with scripture for precision.</p>
                        </div>

                        <div className={styles.aiTool}>
                            <h3 className={styles.aiToolTitle}>📜 Sanatan GPT — Hindu Scriptures AI</h3>
                            <p className={styles.aiToolDesc}>
                                AI trained on Vedas, Upanishads, Bhagavad Gita, Mahabharata, Puranas & dharma texts for deeper textual insight.
                            </p>
                            <a href="https://www.yeschat.ai/gpts-9t55Qx3WYen-Hindu-Sanatan-GPT" target="_blank" rel="noopener noreferrer" className={styles.link}>yeschat.ai (Sanatan GPT)</a>
                            <p className={styles.note}>✅ Broader than just Gita—covers diverse texts and traditional material.<br />⚠️ Uses ChatGPT via an interface; quality depends on prompts.</p>
                        </div>

                        <div className={styles.aiTool}>
                            <h3 className={styles.aiToolTitle}>🕉️ Advaita Vedanta AI Chat (17k+ pages)</h3>
                            <p className={styles.aiToolDesc}>
                                A deeper, non-dual philosophical AI trained on core Vedanta teachings from Bhagavad Gita, Upanishads, Brahma­sutra explanations, Swami Dayananda & Paramarthananda commentaries.
                            </p>
                            <a href="https://www.yesvedanta.com/search/" target="_blank" rel="noopener noreferrer" className={styles.link}>yesvedanta.com/search</a>
                            <p className={styles.note}>✅ Best for philosophical rigour on Atman, Brahman, moksha, non-duality.<br />⚠️ Not a casual chatbot — may require careful prompting.</p>
                        </div>
                    </div>

                    <div className={styles.usageTips}>
                        <h3 className={styles.usageTitle}>🧠 How to use them effectively</h3>
                        <p><strong>Best prompts to ask:</strong></p>
                        <ul className={styles.promptList}>
                            <li>"What does the Katha Upanishad say about Self and Brahman?"</li>
                            <li>"Explain Atman-Brahman identity according to Vedanta."</li>
                            <li>"How does nirguna Brahman differ from saguna Brahman?"</li>
                            <li>"Teach me karma yoga from Bhagavad Gita chapters 2–3."</li>
                        </ul>
                        <p className={styles.note}>📌 For deeper study, always compare AI answers with original texts/credible commentaries.</p>
                    </div>
                </section>

                <section id="scripture-sources" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Curated Scripture Sources</h2>
                    <p className={styles.description}>
                        High-quality, reliable online sources for Upanishads, Vedas, Gita, and classical commentaries — the gold-standard references for serious Vedanta study.
                    </p>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Upanishads – High-Quality Translations & Originals</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Sacred Texts Archive – Complete Upanishads</h4>
                            <p className={styles.sourceDesc}>Best public repository for clean English translations.</p>
                            <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer" className={styles.link}>sacred-texts.com/hin</a>
                            <p className={styles.sourceList}>Includes: Isha, Katha, Kena, Prashna, Mundaka, Mandukya, Chandogya, Brihadaranyaka</p>
                            <p className={styles.note}>✅ Reliable scans, non-commercial. ⚠️ Classic (older) translations.</p>
                        </div>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Vedanta Spiritual Library (Arsha Vidya / Dayananda School)</h4>
                            <p className={styles.sourceDesc}>Most authentic Vedantic interpretations—clear, modern, faithful to tradition.</p>
                            <a href="https://www.yesvedanta.com/resources/" target="_blank" rel="noopener noreferrer" className={styles.link}>yesvedanta.com/resources</a>
                            <p className={styles.sourceList}>Includes detailed lectures and PDFs by Swami Dayananda Saraswati, Swami Paramarthananda, Swami Tattvavidananda</p>
                            <p className={styles.note}>✅ Highest-quality modern Vedanta.</p>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Vedas – Rig, Yajur, Sama, Atharva</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>GRETIL – Digital Library of Indology</h4>
                            <p className={styles.sourceDesc}>The most scholarly source for Sanskrit texts (used in academia).</p>
                            <a href="https://gretil.sub.uni-goettingen.de/" target="_blank" rel="noopener noreferrer" className={styles.link}>gretil.sub.uni-goettingen.de</a>
                            <p className={styles.sourceList}>Includes: Rigveda Saṁhitā, Yajurveda, Samaveda, Atharvaveda, Brāhmaṇas, Āraṇyakas, Śrauta texts</p>
                            <p className={styles.note}>✅ Pure Sanskrit with critical editions.</p>
                        </div>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Sacred Texts – Vedas (English)</h4>
                            <p className={styles.sourceDesc}>Good for English-only readers.</p>
                            <a href="https://www.sacred-texts.com/hin/veda/" target="_blank" rel="noopener noreferrer" className={styles.link}>sacred-texts.com/hin/veda</a>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Bhagavad Gita – Authentic Sources</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Bhagavad Gita, Swami Gambhirananda (Advaita Ashrama)</h4>
                            <p className={styles.sourceDesc}>Official Advaita Vedanta commentary.</p>
                            <a href="https://shop.advaitaashrama.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>shop.advaitaashrama.org</a>
                            <p className={styles.note}>For PDFs and ebooks.</p>
                        </div>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>BhagavadGita.io (Digital Sanskrit + Commentary)</h4>
                            <p className={styles.sourceDesc}>Clean interface, Sanskrit, transliteration & English.</p>
                            <a href="https://bhagavadgita.io/" target="_blank" rel="noopener noreferrer" className={styles.link}>bhagavadgita.io</a>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Core Vedanta Texts (Best Sources)</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Arsha Vidya PDFs – Dayananda Tradition</h4>
                            <a href="https://arshayoga.org/resource/" target="_blank" rel="noopener noreferrer" className={styles.link}>arshayoga.org/resource</a>
                            <p className={styles.sourceList}>Includes: Atma Bodha, Vivekachudamani, Tattvabodha, Panchadashi, Dakshinamurti Stotram</p>
                            <p className={styles.note}>✅ What serious students study first.</p>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Ramakrishna Mission (High-Quality Publications)</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Advaita Ashrama eLibrary</h4>
                            <a href="https://archive.advaitaashrama.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>archive.advaitaashrama.org</a>
                            <p className={styles.sourceList}>Includes: Complete Works of Swami Vivekananda, Gita, Upanishads, Brahma Sutras, numerous Vedanta commentaries</p>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Brahma Sutras – Authoritative Commentaries</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Swami Gambhirananda (Advaita Ashrama)</h4>
                            <a href="https://archive.org/details/BrahmaSutra-bhasya-Swami-Gambhirananda" target="_blank" rel="noopener noreferrer" className={styles.link}>archive.org</a>
                        </div>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Swami Sivananda (Divine Life Society)</h4>
                            <a href="https://www.dlshq.org/download/brahma-sutras/" target="_blank" rel="noopener noreferrer" className={styles.link}>dlshq.org/download/brahma-sutras</a>
                        </div>
                    </div>

                    <div className={styles.scriptureSection}>
                        <h3 className={styles.subTitle}>🔥 Free Libraries With Everything</h3>

                        <div className={styles.sourceItem}>
                            <h4 className={styles.sourceTitle}>Digital Library of India (DLI)</h4>
                            <p className={styles.sourceDesc}>Massive repository of Sanskrit and Indology books.</p>
                            <a href="https://archive.org/details/digitallibraryindia" target="_blank" rel="noopener noreferrer" className={styles.link}>archive.org/details/digitallibraryindia</a>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <h3 className={styles.summaryTitle}>⭐ Summary — Best Starting Points</h3>
                        <p>If you want the most authentic, high-quality material, these three are unbeatable:</p>
                        <ul className={styles.summaryList}>
                            <li><strong>For Upanishads & Vedanta:</strong> <a href="https://www.yesvedanta.com/resources/" target="_blank" rel="noopener noreferrer" className={styles.link}>yesvedanta.com/resources</a></li>
                            <li><strong>For Sanskrit originals:</strong> <a href="https://gretil.sub.uni-goettingen.de/" target="_blank" rel="noopener noreferrer" className={styles.link}>gretil.sub.uni-goettingen.de</a></li>
                            <li><strong>For English translations of all major Hindu texts:</strong> <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer" className={styles.link}>sacred-texts.com/hin</a></li>
                        </ul>
                    </div>
                </section>

                <section id="reading-list" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Custom Reading List</h2>
                    <p className={styles.description}>
                        A structured, no-nonsense reading path for Vedanta + Upanishads, exactly as taught in traditional gurukulas and serious Vedanta circles.
                    </p>

                    <div className={styles.readingPath}>
                        <h3 className={styles.pathTitle}>📘 A. CUSTOM READING LIST (Beginner → Advanced)</h3>
                        <p className={styles.pathDesc}>This is the proper progression used in Arsha Vidya, Advaita Ashrama, traditional gurukulas, and serious Vedanta circles.</p>

                        <div className={styles.level}>
                            <h4 className={styles.levelTitle}>🟢 Beginner Level — Foundations (Non-technical)</h4>
                            <p className={styles.levelDesc}>Goal: Build concepts of Self, mind, suffering, happiness, purpose.</p>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>1) Tattva Bodha — Adi Shankaracharya</h5>
                                <p className={styles.bookDesc}>The absolute best introduction to Atman, Panchakosha (5 sheaths), 3 shariras (gross, subtle, causal), Karma, Qualifications for Vedanta.</p>
                                <p className={styles.note}>Read first.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>2) Atma Bodha — Shankaracharya</h5>
                                <p className={styles.bookDesc}>Short text explaining nature of self (Atman), difference between self/non-self, how ignorance creates bondage.</p>
                                <p className={styles.note}>Clear, poetic, gentle.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>3) Bhagavad Gita — Chapters 2, 3, 4, 12</h5>
                                <p className={styles.bookDesc}>Core concepts: Karma Yoga, Jnana Yoga, Bhakti, Discipline of mind.</p>
                                <p className={styles.note}>Use Gambhirananda or Paramarthananda commentary.</p>
                            </div>
                        </div>

                        <div className={styles.level}>
                            <h4 className={styles.levelTitle}>🟡 Intermediate Level — Deepening the Mind</h4>
                            <p className={styles.levelDesc}>Goal: Understand subtle reasoning, non-dual logic, inner transformation.</p>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>4) Vivekachudamani — Shankaracharya (selected verses)</h5>
                                <p className={styles.bookDesc}>A step-by-step manual for discrimination (viveka), detachment (vairagya), guru-disciple relationship, real nature of Brahman.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>5) Upanishad Set 1 — Short & Powerful</h5>
                                <p className={styles.bookDesc}>Start with these four: Isha, Kena, Katha, Mundaka Upanishads.</p>
                                <p className={styles.note}>These build the philosophical backbone.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>6) Mandukya Upanishad + Gaudapada Karika (start small)</h5>
                                <p className={styles.bookDesc}>Covers AUM as entire universe, 4 states of consciousness, pure non-duality (Ajativada).</p>
                                <p className={styles.note}>Most explosive text in Vedanta. Skip Karika if too intense.</p>
                            </div>
                        </div>

                        <div className={styles.level}>
                            <h4 className={styles.levelTitle}>🔵 Advanced Level — Full Vedantic Vision</h4>
                            <p className={styles.levelDesc}>Goal: Understand non-duality fully, remove remaining doubts, see unity.</p>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>7) Chandogya Upanishad</h5>
                                <p className={styles.bookDesc}>Focus on Tat Tvam Asi (You are That), nature of Brahman, meditation practices.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>8) Brihadaranyaka Upanishad</h5>
                                <p className={styles.bookDesc}>Contains Neti-Neti, Maitreyi dialogue, creation theories, immortality through knowledge.</p>
                                <p className={styles.note}>The biggest, most philosophical Upanishad. Final level.</p>
                            </div>

                            <div className={styles.book}>
                                <h5 className={styles.bookTitle}>9) Brahma Sutras</h5>
                                <p className={styles.bookDesc}>Only when you have strong grounding. Use Swami Gambhirananda or Swami Sivananda.</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="upanishad-summaries" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Summaries of Major Upanishads</h2>
                    <p className={styles.description}>
                        Clear. Crisp. No fluff. Summaries of all major Upanishads for quick reference and study.
                    </p>

                    <div className={styles.upanishadSummaries}>
                        <h3 className={styles.summariesTitle}>🧘‍♂️ MAJOR UPANISHAD SUMMARIES</h3>
                        <p className={styles.summariesDesc}>Comprehensive overviews of the principal Upanishads.</p>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>1. Isha Upanishad — 18 mantras</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Action + renunciation; seeing God in everything.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Universe is pervaded by the divine, enjoy through detachment, true knowledge removes fear, self is beyond birth and death.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>2. Kena Upanishad — 4 chapters</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> "By whom is the mind directed?"</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Sense organs don't function independently, consciousness is the source of all knowing, Brahman is subtle, story of Uma teaching gods about humility.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>3. Katha Upanishad — 2 chapters, 6 vallis</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Dialogue between boy Nachiketa & Yama (death).</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Path of śreyas (good) vs preyas (pleasant), nature of Atman, chariot metaphor, real immortality is knowledge of Self.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>4. Mundaka Upanishad — 3 mundakas</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Higher vs lower knowledge.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Lower: rituals, worldly learning. Higher: knowledge of Brahman. Metaphors: two birds on a tree, spider creating the web. Renunciation & meditation lead to liberation.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>5. Mandukya Upanishad — 12 mantras</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Consciousness & AUM.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> 4 states: Waking, Dream, Deep Sleep, Turiya. Turiya = pure awareness. AUM maps to all states. Gaudapada's non-duality foundation.</p>
                            <p className={styles.note}>This is the most radical Upanishad.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>6. Prashna Upanishad — 6 questions</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Students question Sage Pippalada.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Origin of life, nature of Prana, functions of mind, what is OM?, who attains Brahman?</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>7. Taittiriya Upanishad</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Layers of the human being.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> 5 koshas (physical → bliss), source of fearlessness, Brahman is bliss, ethics and conduct.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>8. Aitareya Upanishad</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Consciousness creates the world.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Atman as creator, birth of human body, "Consciousness is Brahman" (Prajnanam Brahma).</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>9. Chandogya Upanishad — 8 chapters</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Meditations + "Tat Tvam Asi".</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Universe as manifestation of being, salt in water metaphor, Uddalaka teaches Svetaketu, Brahman pervades everything.</p>
                        </div>

                        <div className={styles.upanishad}>
                            <h4 className={styles.upanishadTitle}>10. Brihadaranyaka Upanishad — 6 chapters</h4>
                            <p className={styles.upanishadTheme}><strong>Theme:</strong> Most philosophical; identity of Self.</p>
                            <p className={styles.upanishadKey}><strong>Key ideas:</strong> Neti Neti ("Not this, not this"), Maitreyi dialogue, creation theories, immortality through knowledge.</p>
                            <p className={styles.note}>This is the doctoral level of Vedanta.</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
