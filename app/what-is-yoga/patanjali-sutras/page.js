import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './patanjali-sutras.module.css';

export const metadata = {
    title: "Patanjali Yoga Sutras | Nirog Yoga",
    description: "One-page summary of Patanjali's Yoga Sutras - the foundational text of yoga philosophy and practice.",
};

export default function PatanjaliSutras() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Patanjali Yoga Sutras</h1>
                    <p className={styles.subtitle}>
                        📘 ONE-PAGE SUMMARY
                    </p>
                    <p className={styles.description}>
                        Patanjali explains how the mind works and how to reach freedom through disciplined practice. This ancient text (circa 400 CE) remains the most authoritative source on yoga philosophy and psychology.
                    </p>
                </header>

                <div style={{ textAlign: 'center', margin: '3rem 0', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)' }}>
                    <svg width="1200" height="780" viewBox="0 0 1200 780" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>
                                {`.title { font: bold 30px sans-serif; fill: #222; }
                                .subtitle { font: 18px sans-serif; fill: #555; }
                                .section-title { font: bold 22px sans-serif; fill: #333; }
                                .text { font: 16px sans-serif; fill: #333; }
                                .small { font: 14px sans-serif; fill: #555; }
                                .box { fill: #f5f5f5; stroke: #ccc; stroke-width: 1.2; rx: 10; }
                                .guna-box { fill: #fafafa; stroke: #ccc; stroke-width: 1.2; rx: 10; }
                                .sushumna { stroke: #444; stroke-width: 4; }
                                .chakra { stroke: #222; stroke-width: 1.4; }
                                .ida { stroke: #3b82f6; stroke-width: 2.2; fill: none; }
                                .pingala { stroke: #f97316; stroke-width: 2.2; fill: none; }`}
                            </style>
                        </defs>

                        {/* Main Title */}
                        <text x="380" y="40" className="title">Yoga Map</text>
                        <text x="300" y="70" className="subtitle">
                            Koshas • Gunas • Nadis • Chakras • Eight Limbs of Yoga
                        </text>

                        {/* LEFT: KOSHAS */}
                        <text x="80" y="110" className="section-title">Five Koshas</text>

                        {/* Kosha boxes (top to bottom, subtle to gross reversed or vice versa) */}
                        <rect x="60" y="140" width="260" height="70" className="box" />
                        <text x="80" y="175" className="text">Anandamaya</text>
                        <text x="80" y="198" className="small">Bliss sheath</text>

                        <rect x="60" y="220" width="260" height="70" className="box" />
                        <text x="80" y="255" className="text">Vijnanamaya</text>
                        <text x="80" y="278" className="small">Wisdom / intellect sheath</text>

                        <rect x="60" y="300" width="260" height="70" className="box" />
                        <text x="80" y="335" className="text">Manomaya</text>
                        <text x="80" y="358" className="small">Mind / emotion sheath</text>

                        <rect x="60" y="380" width="260" height="70" className="box" />
                        <text x="80" y="415" className="text">Pranamaya</text>
                        <text x="80" y="438" className="small">Energy / prana sheath</text>

                        <rect x="60" y="460" width="260" height="70" className="box" />
                        <text x="80" y="495" className="text">Annamaya</text>
                        <text x="80" y="518" className="small">Physical / food sheath</text>

                        {/* CENTER: NADIS + CHAKRAS */}
                        <text x="520" y="110" className="section-title">Chakras & Nadis</text>

                        {/* Sushumna */}
                        <line x1="600" y1="140" x2="600" y2="620" className="sushumna" />
                        <text x="610" y="380" className="small">Sushumna</text>

                        {/* Ida (left spiral) */}
                        <path d="M550 150 C510 210, 510 280, 550 340
                               C590 400, 590 470, 550 530
                               C510 590, 510 640, 550 670" className="ida" />
                        <text x="500" y="330" className="small">Ida</text>

                        {/* Pingala (right spiral) */}
                        <path d="M650 150 C690 210, 690 280, 650 340
                               C610 400, 610 470, 650 530
                               C690 590, 690 640, 650 670" className="pingala" />
                        <text x="655" y="330" className="small">Pingala</text>

                        {/* Chakras on Sushumna */}
                        {/* Sahasrara */}
                        <circle cx="600" cy="160" r="18" className="chakra" fill="#a078d6" />
                        <text x="625" y="166" className="small">Sahasrara</text>

                        {/* Ajna */}
                        <circle cx="600" cy="220" r="16" className="chakra" fill="#6c5ce7" />
                        <text x="625" y="226" className="small">Ajna</text>

                        {/* Vishuddha */}
                        <circle cx="600" cy="280" r="16" className="chakra" fill="#0984e3" />
                        <text x="625" y="286" className="small">Vishuddha</text>

                        {/* Anahata */}
                        <circle cx="600" cy="340" r="16" className="chakra" fill="#00b894" />
                        <text x="625" y="346" className="small">Anahata</text>

                        {/* Manipura */}
                        <circle cx="600" cy="400" r="16" className="chakra" fill="#fdcb6e" />
                        <text x="625" y="406" className="small">Manipura</text>

                        {/* Svadhisthana */}
                        <circle cx="600" cy="460" r="16" className="chakra" fill="#e17055" />
                        <text x="625" y="466" className="small">Svadhisthana</text>

                        {/* Muladhara */}
                        <circle cx="600" cy="520" r="16" className="chakra" fill="#d63031" />
                        <text x="625" y="526" className="small">Muladhara</text>

                        {/* RIGHT: EIGHT LIMBS */}
                        <text x="880" y="110" className="section-title">Eight Limbs of Yoga</text>

                        <rect x="840" y="140" width="300" height="60" className="box" />
                        <text x="855" y="170" className="text">1. Yama</text>
                        <text x="855" y="192" className="small">Ethical restraints</text>

                        <rect x="840" y="210" width="300" height="60" className="box" />
                        <text x="855" y="240" className="text">2. Niyama</text>
                        <text x="855" y="262" className="small">Inner discipline</text>

                        <rect x="840" y="280" width="300" height="60" className="box" />
                        <text x="855" y="310" className="text">3. Asana</text>
                        <text x="855" y="332" className="small">Stable posture</text>

                        <rect x="840" y="350" width="300" height="60" className="box" />
                        <text x="855" y="380" className="text">4. Pranayama</text>
                        <text x="855" y="402" className="small">Regulated breath</text>

                        <rect x="840" y="420" width="300" height="60" className="box" />
                        <text x="855" y="450" className="text">5. Pratyahara</text>
                        <text x="855" y="472" className="small">Withdrawal of senses</text>

                        <rect x="840" y="490" width="300" height="60" className="box" />
                        <text x="855" y="520" className="text">6. Dharana</text>
                        <text x="855" y="542" className="small">Concentration</text>

                        <rect x="840" y="560" width="300" height="60" className="box" />
                        <text x="855" y="590" className="text">7. Dhyana</text>
                        <text x="855" y="612" className="small">Meditation</text>

                        <rect x="840" y="630" width="300" height="60" className="box" />
                        <text x="855" y="660" className="text">8. Samadhi</text>
                        <text x="855" y="682" className="small">Absorption / unity</text>

                        {/* BOTTOM: GUNAS */}
                        <text x="510" y="660" className="section-title">Three Gunas</text>

                        <rect x="380" y="690" width="140" height="70" className="guna-box" />
                        <text x="395" y="720" className="text">Tamas</text>
                        <text x="395" y="742" className="small">Inertia, dullness</text>

                        <rect x="530" y="690" width="140" height="70" className="guna-box" />
                        <text x="545" y="720" className="text">Rajas</text>
                        <text x="545" y="742" className="small">Activity, restlessness</text>

                        <rect x="680" y="690" width="140" height="70" className="guna-box" />
                        <text x="695" y="720" className="text">Sattva</text>
                        <text x="695" y="742" className="small">Clarity, harmony</text>
                    </svg>
                </div>

                <div className={styles.sutraCard}>
                    <h3 className={styles.cardTitle}>The Essence of Patanjali Yoga Sutras</h3>
                    <p className={styles.cardIntro}>Patanjali explains how the mind works and how to reach freedom through disciplined practice.</p>

                    <div className={styles.sutraSection}>
                        <h4>1. Definition of Yoga</h4>
                        <blockquote className={styles.sanskrit}>
                            <strong>Yogaḥ citta-vṛtti-nirodhaḥ</strong><br />
                            <em>Yoga = Stilling the fluctuations of the mind.</em>
                        </blockquote>
                        <p className={styles.explanation}>Yoga is not about physical postures or breathing techniques primarily — it's about controlling the restless mind.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>2. The Problem</h4>
                        <p>Mind is scattered by five types of mental fluctuations:</p>
                        <ul className={styles.problemList}>
                            <li><strong>Restlessness</strong> (uddharika) - inability to stay focused</li>
                            <li><strong>Doubts</strong> (vicikitsa) - uncertainty and confusion</li>
                            <li><strong>Laziness</strong> (styana) - mental and physical inertia</li>
                            <li><strong>Craving</strong> (raga) - attachment to pleasure</li>
                            <li><strong>Fear</strong> (dvesha) - aversion to pain</li>
                            <li><strong>Wrong perception</strong> (viparyaya) - misunderstanding reality</li>
                        </ul>
                        <p className={styles.note}>These create suffering (duhkha) and prevent us from seeing things as they really are.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3. The Eight Limbs (Ashtanga Yoga)</h4>
                        <p>Patanjali's complete system for achieving yoga:</p>
                        <ol className={styles.limbsList}>
                            <li><strong>Yama</strong> – Ethics (non-violence, truth, non-stealing, moderation, non-greed)</li>
                            <li><strong>Niyama</strong> – Personal discipline (purity, contentment, austerity, self-study, surrender)</li>
                            <li><strong>Asana</strong> – Steady posture (comfortable seat for meditation)</li>
                            <li><strong>Pranayama</strong> – Regulating breath (control of life force)</li>
                            <li><strong>Pratyahara</strong> – Withdrawal from sense distractions</li>
                            <li><strong>Dharana</strong> – Concentration (one-pointed focus)</li>
                            <li><strong>Dhyana</strong> – Meditation flow (continuous awareness)</li>
                            <li><strong>Samadhi</strong> – Oneness / absorption (union with the divine)</li>
                        </ol>

                        <div style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)' }}>
                            <svg width="800" height="1300" viewBox="0 0 800 1300" xmlns="http://www.w3.org/2000/svg">
                                <style>
                                    {`.bg { fill: #020617; }
                                    .title { font: bold 34px sans-serif; fill: #e5e7eb; }
                                    .subtitle { font: 18px sans-serif; fill: #9ca3af; }
                                    .card { fill: #020617; stroke: #1e293b; stroke-width: 1.4; rx: 18; }
                                    .badge { fill: #2563eb; }
                                    .badge-number { font: bold 18px sans-serif; fill: #e5e7eb; }
                                    .limb-title { font: bold 20px sans-serif; fill: #e5e7eb; }
                                    .limb-sub { font: 15px sans-serif; fill: #cbd5f5; }
                                    .footer { font: 16px sans-serif; fill: #9ca3af; }`}
                                </style>

                                {/* Background */}
                                <rect x="0" y="0" width="800" height="1300" className="bg" />

                                {/* Header */}
                                <text x="110" y="70" className="title">Patanjali's Eight Limbs of Yoga</text>
                                <text x="110" y="105" className="subtitle">
                                    From outer discipline to inner absorption — the complete path
                                </text>

                                {/* Row 1: Yama (left), Niyama (right) */}
                                {/* Yama */}
                                <rect x="40" y="150" width="340" height="170" className="card" />
                                <circle cx="70" cy="180" r="18" className="badge" />
                                <text x="64" y="186" className="badge-number">1</text>
                                <text x="105" y="187" className="limb-title">Yama</text>
                                <text x="105" y="213" className="limb-sub">Ethical restraints:</text>
                                <text x="105" y="235" className="limb-sub">• Ahimsa — Non-violence</text>
                                <text x="105" y="257" className="limb-sub">• Satya — Truthfulness</text>
                                <text x="105" y="279" className="limb-sub">• Asteya — Non-stealing</text>
                                <text x="105" y="301" className="limb-sub">• Brahmacharya — Moderation</text>
                                <text x="105" y="323" className="limb-sub">• Aparigraha — Non-greed</text>

                                {/* Niyama */}
                                <rect x="420" y="150" width="340" height="170" className="card" />
                                <circle cx="450" cy="180" r="18" className="badge" />
                                <text x="444" y="186" className="badge-number">2</text>
                                <text x="485" y="187" className="limb-title">Niyama</text>
                                <text x="485" y="213" className="limb-sub">Inner discipline:</text>
                                <text x="485" y="235" className="limb-sub">• Saucha — Purity</text>
                                <text x="485" y="257" className="limb-sub">• Santosha — Contentment</text>
                                <text x="485" y="279" className="limb-sub">• Tapas — Austerity</text>
                                <text x="485" y="301" className="limb-sub">• Svadhyaya — Self-study</text>
                                <text x="485" y="323" className="limb-sub">• Ishvara pranidhana — Surrender</text>

                                {/* Row 2: Asana (left), Pranayama (right) */}
                                {/* Asana */}
                                <rect x="40" y="350" width="340" height="150" className="card" />
                                <circle cx="70" cy="380" r="18" className="badge" />
                                <text x="64" y="386" className="badge-number">3</text>
                                <text x="105" y="387" className="limb-title">Asana</text>
                                <text x="105" y="413" className="limb-sub">Steady, comfortable posture;</text>
                                <text x="105" y="435" className="limb-sub">prepares body and nerves</text>
                                <text x="105" y="457" className="limb-sub">for long inner practice.</text>

                                {/* Pranayama */}
                                <rect x="420" y="350" width="340" height="150" className="card" />
                                <circle cx="450" cy="380" r="18" className="badge" />
                                <text x="444" y="386" className="badge-number">4</text>
                                <text x="485" y="387" className="limb-title">Pranayama</text>
                                <text x="485" y="413" className="limb-sub">Regulation of breath:</text>
                                <text x="485" y="435" className="limb-sub">length, depth, rhythm.</text>
                                <text x="485" y="457" className="limb-sub">Balances energy and calms</text>
                                <text x="485" y="479" className="limb-sub">the mind.</text>

                                {/* Row 3: Pratyahara (left), Dharana (right) */}
                                {/* Pratyahara */}
                                <rect x="40" y="530" width="340" height="150" className="card" />
                                <circle cx="70" cy="560" r="18" className="badge" />
                                <text x="64" y="566" className="badge-number">5</text>
                                <text x="105" y="567" className="limb-title">Pratyahara</text>
                                <text x="105" y="593" className="limb-sub">Withdrawal of the senses</text>
                                <text x="105" y="615" className="limb-sub">from outer distractions.</text>
                                <text x="105" y="637" className="limb-sub">Mind turns inward, preparing</text>
                                <text x="105" y="659" className="limb-sub">for deep focus.</text>

                                {/* Dharana */}
                                <rect x="420" y="530" width="340" height="150" className="card" />
                                <circle cx="450" cy="560" r="18" className="badge" />
                                <text x="444" y="566" className="badge-number">6</text>
                                <text x="485" y="567" className="limb-title">Dharana</text>
                                <text x="485" y="593" className="limb-sub">One-pointed concentration on</text>
                                <text x="485" y="615" className="limb-sub">breath, mantra, chakra, or</text>
                                <text x="485" y="637" className="limb-sub">inner image. Mind is held</text>
                                <text x="485" y="659" className="limb-sub">steadily in place.</text>

                                {/* Row 4: Dhyana (left), Samadhi (right) */}
                                {/* Dhyana */}
                                <rect x="40" y="710" width="340" height="150" className="card" />
                                <circle cx="70" cy="740" r="18" className="badge" />
                                <text x="64" y="746" className="badge-number">7</text>
                                <text x="105" y="747" className="limb-title">Dhyana</text>
                                <text x="105" y="773" className="limb-sub">Meditation: continuous,</text>
                                <text x="105" y="795" className="limb-sub">effortless flow of attention</text>
                                <text x="105" y="817" className="limb-sub">towards the chosen object.</text>
                                <text x="105" y="839" className="limb-sub">Less effort, more absorption.</text>

                                {/* Samadhi */}
                                <rect x="420" y="710" width="340" height="150" className="card" />
                                <circle cx="450" cy="740" r="18" className="badge" />
                                <text x="444" y="746" className="badge-number">8</text>
                                <text x="485" y="747" className="limb-title">Samadhi</text>
                                <text x="485" y="773" className="limb-sub">Deep absorption: meditator,</text>
                                <text x="485" y="795" className="limb-sub">process, and object merge.</text>
                                <text x="485" y="817" className="limb-sub">State of inner stillness,</text>
                                <text x="485" y="839" className="limb-sub">clarity, and unity.</text>

                                {/* Footer line */}
                                <text x="90" y="930" className="footer">
                                    Journey of Ashtanga Yoga: Ethics → Discipline → Body → Breath → Senses → Focus → Meditation → Absorption
                                </text>
                            </svg>
                        </div>

                        <p className={styles.note}>The first five limbs purify and prepare; the last three constitute actual meditation practice.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3.1 The Five Koshas (Layers of Being)</h4>
                        <p>The human being consists of five interconnected layers, from gross to subtle:</p>

                        <div style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)' }}>
                            <svg width="650" height="500" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <style>
                                        {`.title { font: bold 28px sans-serif; fill: #333; }
                                        .layer { font: 18px sans-serif; fill: #333; }
                                        .circle { fill-opacity: 0.17; stroke: #333; stroke-width: 1.4; }`}
                                    </style>
                                </defs>

                                <text x="200" y="40" className="title">The Five Koshas</text>

                                <circle cx="320" cy="260" r="180" className="circle" fill="#cce6ff" />
                                <text x="245" y="120" className="layer">1. Annamaya — Physical</text>

                                <circle cx="320" cy="260" r="140" className="circle" fill="#ffd9b3" />
                                <text x="250" y="175" className="layer">2. Pranamaya — Energy</text>

                                <circle cx="320" cy="260" r="100" className="circle" fill="#e6ccff" />
                                <text x="240" y="230" className="layer">3. Manomaya — Mind</text>

                                <circle cx="320" cy="260" r="60" className="circle" fill="#ccffcc" />
                                <text x="235" y="265" className="layer">4. Vijnanamaya — Intellect</text>

                                <circle cx="320" cy="260" r="30" className="circle" fill="#ffe6e6" />
                                <text x="270" y="310" className="layer">5. Anandamaya — Bliss</text>
                            </svg>
                        </div>

                        <p className={styles.explanation}>Yoga works through all five koshas, starting from the physical body and moving inward toward spiritual awakening.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3.2 The Nadi System (Subtle Energy Channels)</h4>
                        <p>The three main nadis (energy channels) that carry prana through the subtle body:</p>

                        <div style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)' }}>
                            <svg width="380" height="820" xmlns="http://www.w3.org/2000/svg">
                                <style>
                                    {`.title { font: bold 26px sans-serif; fill: #333; }
                                    .label { font: 16px sans-serif; fill: #333; }
                                    .sushumna { stroke: #555; stroke-width: 4; }`}
                                </style>

                                <text x="70" y="40" className="title">Chakras + Sushumna Nadi</text>

                                {/* Sushumna line */}
                                <line x1="190" y1="80" x2="190" y2="760" className="sushumna" />

                                {/* Chakras */}
                                <circle cx="190" cy="120" r="24" fill="#a078d6" />
                                <text x="105" y="160" className="label">Sahasrara</text>

                                <circle cx="190" cy="200" r="22" fill="#6c5ce7" />
                                <text x="135" y="235" className="label">Ajna</text>

                                <circle cx="190" cy="280" r="22" fill="#0984e3" />
                                <text x="125" y="315" className="label">Vishuddha</text>

                                <circle cx="190" cy="360" r="22" fill="#00b894" />
                                <text x="130" y="395" className="label">Anahata</text>

                                <circle cx="190" cy="440" r="22" fill="#fdcb6e" />
                                <text x="130" y="475" className="label">Manipura</text>

                                <circle cx="190" cy="520" r="22" fill="#e17055" />
                                <text x="130" y="555" className="label">Svadhisthana</text>

                                <circle cx="190" cy="600" r="22" fill="#d63031" />
                                <text x="135" y="635" className="label">Muladhara</text>
                            </svg>
                        </div>

                        <p className={styles.explanation}><strong>Sushumna</strong> (central channel) carries kundalini energy upward. <strong>Ida</strong> (left, lunar) governs cooling and receptive energies. <strong>Pingala</strong> (right, solar) governs heating and active energies. The chakras represent energy centers along the Sushumna.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>3.3 The Seven Chakras (Energy Centers)</h4>
                        <p>The seven main chakras are energy centers along the spine that correspond to different aspects of consciousness and physical function:</p>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', margin: '2rem 0' }}>
                            {/* Minimal 7-Chakra Diagram */}
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)', flex: '1', minWidth: '280px' }}>
                                <svg width="320" height="760" xmlns="http://www.w3.org/2000/svg">
                                    <style>
                                        {`.chakra { fill: #f2f2f2; stroke: #333; stroke-width: 1.4; }
                                        .label { font: 18px sans-serif; fill: #333; }
                                        .title { font: bold 26px sans-serif; fill: #333; }`}
                                    </style>

                                    <text x="60" y="40" className="title">7 Chakras</text>

                                    <circle cx="160" cy="120" r="22" className="chakra" />
                                    <text x="115" y="160" className="label">Sahasrara</text>

                                    <circle cx="160" cy="220" r="22" className="chakra" />
                                    <text x="120" y="260" className="label">Ajna</text>

                                    <circle cx="160" cy="320" r="22" className="chakra" />
                                    <text x="110" y="360" className="label">Vishuddha</text>

                                    <circle cx="160" cy="420" r="22" className="chakra" />
                                    <text x="115" y="460" className="label">Anahata</text>

                                    <circle cx="160" cy="520" r="22" className="chakra" />
                                    <text x="125" y="560" className="label">Manipura</text>

                                    <circle cx="160" cy="620" r="22" className="chakra" />
                                    <text x="135" y="660" className="label">Svadhisthana</text>

                                    <circle cx="160" cy="720" r="22" className="chakra" />
                                    <text x="145" y="760" className="label">Muladhara</text>
                                </svg>
                            </div>

                            {/* Colored Chakra Diagram */}
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)', flex: '1', minWidth: '280px' }}>
                                <svg width="340" height="780" xmlns="http://www.w3.org/2000/svg">
                                    <style>
                                        {`.label { font: 18px sans-serif; fill: #333; }
                                        .title { font: bold 26px sans-serif; fill: #333; }`}
                                    </style>

                                    <text x="70" y="40" className="title">Chakra System</text>

                                    <circle cx="170" cy="120" r="26" fill="#a078d6" />
                                    <text x="115" y="160" className="label">7. Sahasrara</text>

                                    <circle cx="170" cy="210" r="26" fill="#6c5ce7" />
                                    <text x="130" y="250" className="label">6. Ajna</text>

                                    <circle cx="170" cy="300" r="26" fill="#0984e3" />
                                    <text x="115" y="340" className="label">5. Vishuddha</text>

                                    <circle cx="170" cy="390" r="26" fill="#00b894" />
                                    <text x="125" y="430" className="label">4. Anahata</text>

                                    <circle cx="170" cy="480" r="26" fill="#fdcb6e" />
                                    <text x="125" y="520" className="label">3. Manipura</text>

                                    <circle cx="170" cy="570" r="26" fill="#e17055" />
                                    <text x="125" y="610" className="label">2. Svadhisthana</text>

                                    <circle cx="170" cy="660" r="26" fill="#d63031" />
                                    <text x="135" y="700" className="label">1. Muladhara</text>
                                </svg>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h5 style={{ marginBottom: '1rem', color: '#333' }}>Chakra Functions & Locations:</h5>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#a078d6' }}>7. Sahasrara (Crown)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Spiritual connection, consciousness, enlightenment</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#6c5ce7' }}>6. Ajna (Third Eye)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Intuition, wisdom, perception, imagination</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#0984e3' }}>5. Vishuddha (Throat)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Communication, self-expression, truth</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#00b894' }}>4. Anahata (Heart)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Love, compassion, relationships, healing</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#fdcb6e' }}>3. Manipura (Solar Plexus)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Personal power, confidence, digestion, metabolism</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#e17055' }}>2. Svadhisthana (Sacral)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Creativity, emotions, sexuality, pleasure</p>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-md)' }}>
                                    <h6 style={{ margin: '0 0 0.5rem 0', color: '#d63031' }}>1. Muladhara (Root)</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Grounding, stability, survival, security</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>7. How the Mind Transforms</h4>
                        <p>Through two essential practices:</p>
                        <ul className={styles.transformList}>
                            <li><strong>Abhyasa</strong> (practice) - consistent, dedicated effort</li>
                            <li><strong>Vairagya</strong> (detachment) - letting go of attachment to results</li>
                        </ul>
                        <p className={styles.explanation}>Both together purify consciousness and reveal our true nature. Practice without detachment leads to ego; detachment without practice leads to laziness.</p>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>8. Obstacles & Solutions</h4>
                        <div className={styles.obstaclesGrid}>
                            <div className={styles.obstacle}>
                                <h5>Obstacles:</h5>
                                <ul>
                                    <li>Disease (vyadhi)</li>
                                    <li>Doubt (vicikitsa)</li>
                                    <li>Procrastination (styana)</li>
                                    <li>Instability (auddhatya)</li>
                                </ul>
                            </div>
                            <div className={styles.solution}>
                                <h5>Solutions:</h5>
                                <ul>
                                    <li>Breath control (pranayama)</li>
                                    <li>Cultivate opposite thoughts</li>
                                    <li>Devotion (bhakti)</li>
                                    <li>Steady lifestyle (consistent practice)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sutraSection}>
                        <h4>9. Goal of Patanjali's Yoga</h4>
                        <p>The ultimate aim is liberation (kaivalya):</p>
                        <ul className={styles.goalList}>
                            <li><strong>Freedom from suffering</strong> - cessation of mental fluctuations</li>
                            <li><strong>Realization of true Self</strong> - seeing beyond ego and mind</li>
                            <li><strong>Stability and clarity</strong> - unwavering peace of mind</li>
                            <li><strong>Bliss and liberation</strong> - union with pure consciousness</li>
                        </ul>
                        <p className={styles.note}>This is not about supernatural powers or physical perfection — it's about fundamental freedom from mental suffering.</p>
                    </div>
                </div>

                <div className={styles.keyInsights}>
                    <h3 className={styles.insightsTitle}>🔑 Key Insights from Patanjali</h3>
                    <div className={styles.insightsGrid}>
                        <div className={styles.insight}>
                            <h4>Mind is the Problem & Solution</h4>
                            <p>Yoga begins and ends with understanding the mind. Physical practices are tools to prepare for mental purification.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>Practice + Detachment = Freedom</h4>
                            <p>Dedicated practice without attachment to results leads to genuine transformation.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>All Suffering is Optional</h4>
                            <p>Mental fluctuations create suffering. Controlling them brings peace that cannot be disturbed.</p>
                        </div>

                        <div className={styles.insight}>
                            <h4>Yoga is a Science</h4>
                            <p>Patanjali presents yoga as a systematic methodology, not mysticism or religion.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.resources}>
                    <h3 className={styles.resourcesTitle}>📚 Study Resources</h3>
                    <div className={styles.resourcesGrid}>
                        <div className={styles.resourceCard}>
                            <h4>Essential Yoga Books</h4>
                            <p>Complete guide to yoga texts including detailed Sutras commentaries.</p>
                            <Link href="/what-is-yoga/yoga-books" className={styles.resourceLink}>
                                Browse Books →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Learning Paths</h4>
                            <p>Structured reading roadmap from beginner to expert level.</p>
                            <Link href="/what-is-yoga/learning-paths" className={styles.resourceLink}>
                                View Paths →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Practice Curriculum</h4>
                            <p>8-week to 1-year structured practice plan.</p>
                            <Link href="/what-is-yoga/curriculum" className={styles.resourceLink}>
                                View Curriculum →
                            </Link>
                        </div>

                        <div className={styles.resourceCard}>
                            <h4>Saatvic Literature</h4>
                            <p>AI tools and curated spiritual texts for deeper study.</p>
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
                    <Link href="/what-is-yoga/yoga-books" className={styles.relatedLink}>
                        Browse Essential Books →
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
