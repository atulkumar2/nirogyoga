import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './yoga-books.module.css';

export const metadata = {
    title: "Essential Yoga Books | Nirog Yoga",
    description: "Comprehensive guide to the most important yoga books - from classical texts to modern authoritative works.",
};

export default function YogaBooks() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Essential Yoga Books</h1>
                    <p className={styles.subtitle}>
                        A sharp, essential, no-nonsense list of the most important books from the Yoga perspective.
                    </p>
                    <p className={styles.description}>
                        Not astrology, not pop-spirituality — hardcore classical + authoritative modern works that form the foundation of authentic yoga knowledge.
                    </p>
                </header>

                <div className={styles.booksGrid}>
                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Yoga Sutras of Patanjali</h3>
                        <p className={styles.bookWhy}><strong>Why essential:</strong> This IS yoga. Everything else is commentary.</p>
                        <p className={styles.bookBest}><strong>Best translations:</strong></p>
                        <ul className={styles.bookList}>
                            <li>Swami Vivekananda – Raja Yoga (Simple, powerful, unmatched)</li>
                            <li>Edwin Bryant – The Yoga Sūtras of Patañjali (Most scholarly modern commentary)</li>
                            <li>Swami Satchidananda – Yoga Sutras (Clear for practice-oriented readers)</li>
                        </ul>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Bhagavad Gita</h3>
                        <p className={styles.bookWhy}><strong>Teaches:</strong> Karma Yoga, Bhakti Yoga, Jnana Yoga, Dhyana Yoga</p>
                        <p className={styles.bookBest}><strong>Best editions:</strong></p>
                        <ul className={styles.bookList}>
                            <li>Swami Chinmayananda</li>
                            <li>Swami Gambhirananda</li>
                            <li>Eknath Easwaran (easier for beginners)</li>
                        </ul>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Hatha Yoga Pradipika</h3>
                        <p className={styles.bookWhy}><strong>Core teachings:</strong> Asana, Pranayama, Bandhas, Mudras, Shatkarmas</p>
                        <p className={styles.bookBest}><strong>Best editions:</strong></p>
                        <ul className={styles.bookList}>
                            <li>Swami Muktibodhananda (Bihar School of Yoga)</li>
                            <li>Pancham Sinh (older, classical)</li>
                        </ul>
                        <p className={styles.bookNote}>If you want to understand modern yoga's roots — read this.</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Gheranda Samhita</h3>
                        <p className={styles.bookWhy}><strong>Covers:</strong> 7 limbs of Gheranda Yoga, Mudras, cleansing, meditation, asanas</p>
                        <p className={styles.bookBest}><strong>Best edition:</strong> Bihar School of Yoga Commentary</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Shiva Samhita</h3>
                        <p className={styles.bookWhy}><strong>Explains:</strong> Kundalini, Nadis, Pranayama, Meditation techniques, Subtle body mechanics</p>
                        <p className={styles.bookBest}><strong>Good translation:</strong> James Mallinson</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Upanishads</h3>
                        <p className={styles.bookWhy}><strong>Especially:</strong> Katha (chariot model), Mandukya (consciousness), Taittiriya (five koshas), Mundaka (two kinds of knowledge)</p>
                        <p className={styles.bookBest}><strong>Best editions:</strong></p>
                        <ul className={styles.bookList}>
                            <li>Swami Gambhirananda</li>
                            <li>Eknath Easwaran (simplified)</li>
                        </ul>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Light on Yoga — B.K.S. Iyengar</h3>
                        <p className={styles.bookWhy}><strong>Explains:</strong> Detailed posture alignment, Step-by-step instructions, Therapeutic benefits</p>
                        <p className={styles.bookNote}>Still the most referenced book in yoga teacher training.</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ The Heart of Yoga — T.K.V. Desikachar</h3>
                        <p className={styles.bookWhy}><strong>Teaches:</strong> Breath-centered yoga, Personal practice design, Therapeutic application</p>
                        <p className={styles.bookNote}>Great bridge between traditional and modern yoga.</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Yoga Mala — K. Pattabhi Jois</h3>
                        <p className={styles.bookWhy}><strong>For the Ashtanga system:</strong> Disciplined, structured, rooted in vinyasa flow.</p>
                    </div>

                    <div className={styles.bookCard}>
                        <h3 className={styles.bookTitle}>⭐ Bihar School of Yoga Series</h3>
                        <p className={styles.bookWhy}><strong>Key books:</strong></p>
                        <ul className={styles.bookList}>
                            <li>Asana Pranayama Mudra Bandha (APMB)</li>
                            <li>Prana & Pranayama</li>
                            <li>Meditations from the Tantras</li>
                        </ul>
                        <p className={styles.bookNote}>Extremely respected, traditional yet practical. Used worldwide for yoga teacher training.</p>
                    </div>
                </div>

                <div className={styles.coreBooks}>
                    <h3 className={styles.coreTitle}>📚 Core 6-Book Pack (Minimum Essential Reading)</h3>
                    <p className={styles.coreDesc}>This set will give anyone a complete yoga foundation — physical, breath, mind, philosophy, and lifestyle:</p>
                    <ol className={styles.coreList}>
                        <li><strong>Yoga Sutras – Bryant</strong> (philosophy + practice)</li>
                        <li><strong>Hatha Yoga Pradipika – Muktibodhananda</strong></li>
                        <li><strong>Light on Yoga – Iyengar</strong></li>
                        <li><strong>Prana & Pranayama – Bihar Yoga</strong></li>
                        <li><strong>The Heart of Yoga – Desikachar</strong></li>
                        <li><strong>Bhagavad Gita – Chinmayananda</strong></li>
                    </ol>
                </div>

                <div className={styles.resources}>
                    <h3 className={styles.resourcesTitle}>📖 Additional Resources</h3>
                    <div className={styles.resourcesGrid}>
                        <div className={styles.resourceCard}>
                            <h4>Reading Roadmap</h4>
                            <p>Structured progression from beginner to expert level books.</p>
                            <Link href="/what-is-yoga/learning-paths" className={styles.resourceLink}>
                                View Reading Roadmap →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Patanjali Yoga Sutras</h4>
                            <p>One-page summary of the foundational yoga text.</p>
                            <Link href="/what-is-yoga/patanjali-sutras" className={styles.resourceLink}>
                                Read Summary →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Saatvic Literature</h4>
                            <p>Curated spiritual texts and AI tools for deeper study.</p>
                            <Link href="/saatvic-literature" className={styles.resourceLink}>
                                Explore Literature →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link href="/what-is-yoga" className={styles.backLink}>
                        ← Back to What is Yoga
                    </Link>
                    <Link href="/what-is-yoga/learning-paths" className={styles.relatedLink}>
                        View Learning Paths →
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
