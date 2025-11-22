import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './dr-kunal.module.css';
import Image from 'next/image';

export const metadata = {
    title: "Dr. Kunal | Nirog Yoga",
    description: "Dr. Kunal, Professor of Medical Physiology and Yoga Therapy Expert.",
};

export default function DrKunal() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.profileHeader}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/dr-kunal.jpg"
                            alt="Dr. Kunal"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <div className={styles.headerContent}>
                        <h1 className={styles.name}>Prof. (Dr.) Kunal Katyayan</h1>
                        <h2 className={styles.title}>Professor of Medical Physiology & Yoga Therapy Expert</h2>
                        <p className={styles.intro}>
                            A distinguished academician, medical physiologist, researcher, and yoga expert whose career blends modern medical science with the profound wisdom of yogic traditions.
                        </p>
                    </div>
                </div>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>About Prof. (Dr.) Kunal Katyayan</h3>
                    <p className={styles.text}>
                        Dr. Kunal is a distinguished academician, medical physiologist, researcher, and yoga expert whose career blends modern medical science with the profound wisdom of yogic traditions. Born on 9 May 1981, he has steadily risen to prominence in the fields of Physiology and Yoga research through decades of committed practice, rigorous academic training, and impactful teaching. His journey—spanning over three decades of learning and practicing Yoga and more than fifteen years of teaching Physiology and Yoga—reflects a rare combination of scientific depth, pedagogical skill, and spiritual insight.
                    </p>
                    <p className={styles.text}>
                        His professional life stands as an inspiring example of how ancient practices like Yoga can be integrated with contemporary biomedical science to create meaningful transformations in health, learning, and wellness.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Academic & Professional Journey</h3>
                    <p className={styles.text}>
                        Currently serving as Professor and In-Charge of the Yoga Lab in the Department of Physiology at Srinivas Institute of Medical Sciences, Mangalore, Dr. Kunal assumed this role on 1 January 2025. His responsibilities are extensive, encompassing classroom teaching, hands-on practical demonstrations, research supervision, and administrative oversight.
                    </p>
                    <p className={styles.text}>
                        A hallmark of his career is the impressive blend of academic excellence and yogic discipline. Dr. Kunal completed his MBBS from Kasturba Medical College, Mangalore (2000–2006), followed by an MD in Physiology from Manipal Academy of Higher Education (2009–2012). His passion for Yoga led him to pursue a Post-Graduate Diploma in Yogic Sciences (PGDYS) from Mangalore University in 2018–2019, where he secured the second rank.
                    </p>
                    <p className={styles.text}>
                        Before joining Srinivas Institute of Medical Sciences, he served as a Professor of Physiology at MGM Medical College, Kishanganj, Bihar, and spent almost a decade at Kasturba Medical College, Mangalore, where he served as Associate Professor and In-Charge of the Yoga Lab.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Previous Experiences</h3>
                    <ul className={styles.list}>
                        <li><strong>Professor, Dept. of Physiology:</strong> MGM Medical College, MGU, Kishanganj, Bihar (April 29th 2024 to December 31st 2024)</li>
                        <li><strong>Associate Professor, Dept. of Physiology:</strong> KMC-Mangalore (July 1st 2016 to April 28th 2024)</li>
                        <li><strong>In-charge and Instructor at Yoga-lab:</strong> Dept. of Physiology, KMC-Mangalore (May 2016 to April 28th 2024)</li>
                        <li><strong>Assistant Professor, Dept. of Physiology:</strong> KMC-Mangalore (May 2016 to June 2016)</li>
                        <li><strong>In-charge and Instructor at Yoga-lab:</strong> Dept. of Physiology, SMIMS, Gangtok (2012 to 2016)</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Research Contributions</h3>
                    <p className={styles.text}>
                        Dr. Kunal’s research contributions form one of the strongest pillars of his professional identity. He has guided multiple research projects supported by the Indian Council of Medical Research (ICMR), particularly in the domain of Yoga physiology. His research focuses on understanding how practices like Om chanting, pranayama, meditation, asanas, and integrated yoga routines influence autonomic function, respiratory parameters, cardiovascular performance, cognition, psychological well-being, and metabolic health.
                    </p>
                    <p className={styles.text}>
                        He has authored and co-authored papers in journals such as Pharmacognosy Journal, Indian Journal of Clinical Anatomy and Physiology, and Indian Journal of Public Health Research & Development. His findings on Om chanting and pranayama training have received wide appreciation, evidenced by multiple Best Paper and Best Poster Awards.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Yoga Expertise & Philosophy</h3>
                    <p className={styles.text}>
                        An important dimension of Dr. Kunal’s background is his lifelong passion for Yoga. Having begun his Yoga journey in 1995, he has practiced the discipline for nearly 30 years. He became an amateur instructor in 2006 and a formally trained Yoga teacher in 2018.
                    </p>
                    <p className={styles.text}>
                        His expertise goes beyond physical postures to include pranayama, meditation, stress physiology, autonomic regulation, and mind-body medicine. His teaching style integrates the philosophical roots of Yoga with the neurophysiological and cardiopulmonary mechanisms that underpin its effects. He describes the “Mind-Body-Soul continuum” as his favorite area of intellectual exploration.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Educational Qualifications</h3>
                    <ul className={styles.list}>
                        <li><strong>MD (Physiology, 2009-12):</strong> Manipal Academy of Higher Education</li>
                        <li><strong>Post-Graduate Diploma in Yogic Sciences (2018-19):</strong> Mangalore University</li>
                        <li><strong>MBBS (2000-2006):</strong> KMC, Mangalore, Manipal Academy of Higher Education</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Trainings & Certifications</h3>
                    <ul className={styles.list}>
                        <li><strong>Post Graduate Diploma in Yogic Science (PGDYS):</strong> Mangalore University, Karnataka, India, 2018-19</li>
                        <li><strong>Basic Course in Biomedical Research (BCBR):</strong> NMC, New Delhi, India, 2020-21</li>
                        <li><strong>Pedagogic and Personal Effectiveness Workshop:</strong> MCPD, Manipal University, Karnataka, India, 2017</li>
                        <li><strong>Revised Basic Course Workshop in Medical Education Technologies:</strong> MCI Nodal Centre, Bangalore, Karnataka, India, 2017</li>
                        <li><strong>How to Conduct Autonomic Function Tests:</strong> NIMHANS, Bangalore, India, 2016</li>
                        <li><strong>Basic Course Workshop on Faculty Development:</strong> SMIMS, Gangtok, Sikkim, India, 2013</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Other Positions, Responsibilities & Interests</h3>
                    <ul className={styles.list}>
                        <li><strong>Yoga Practitioner & Instructor:</strong> Practicing ‘Yoga’ since 1995, Amateur Yoga Instructor since 2006, and Trained Yoga Teacher since 2018.</li>
                        <li><strong>Resource Faculty:</strong> Delivering Lectures and talks in various CMEs about topics related to Yoga, Physiology, Stress, and Health (e.g., “Physiological basis of Yoga”, “Applications of concepts of Physiology in daily life”).</li>
                        <li><strong>Interests:</strong> Studying and Researching Ancient Scriptures and modern medical science, especially the mystery called “Mind-Body-Soul”.</li>
                        <li><strong>Hobbies:</strong> Playing Football, Swimming, Camping, Trekking, Biking.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Key Achievements & Impact</h3>
                    <ul className={styles.list}>
                        <li><strong>Research Leadership:</strong> Guided at least eight ICMR-supported projects and numerous non-funded studies.</li>
                        <li><strong>Global Speaker:</strong> Invited as guest lecturer and keynote speaker in over 25 national and international events.</li>
                        <li><strong>Awards:</strong> Recipient of multiple Best Paper and Best Poster Awards at national and international conferences.</li>
                        <li><strong>Mentorship:</strong> Nurtured hundreds of undergraduate and postgraduate students, many of whom describe his mentorship as transformative.</li>
                        <li><strong>Community Service:</strong> Organized Yoga therapy camps on diabetes, backache, immunity enhancement, and women’s health.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Selected Research Papers & Presentations</h3>
                    <ol className={styles.publicationList}>
                        <li>Kunal, Sai K. Madhavaram. Impact of Om (AUM) Chanting on selected Cardiac and Pulmonary Parameters as compared to listening to music: A Case-Control Study - Poster Presentation at 7th ICONBAP, B J Medical College Ahmedabad, Gujarat, 2023.</li>
                        <li>Merin C., Kunal, Kishan K.; How The Integrated Yoga Practice Impacts The Visual Processing Of Specially Abled Children? Aripex - Indian Journal Of Research | Volume - 10 | Issue - 11 |November - 2021 | PRINT ISSN No. 2250 - 1991 | DOI : 10.36106/paripex <a href="https://www.worldwidejournals.com/paripex/recent_issues_pdf/2021/November/how-the-integrated-yoga-practice-impacts-the-visual-processing-of-specially-abled-children_November_2021_6171175637_6207530.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>[PDF]</a></li>
                        <li>Tuteja D, Kumar NA, Pai DS, Kunal K. Effect of mobile phone usage on cognitive functions, sleep pattern, visuospatial ability in Parkinson’s patients; a possible correlation with onset of the clinical symptoms. Journal of Basic and Clinical Physiology and Pharmacology. 2020 Nov 9;1.</li>
                        <li>Madhumitha Muruganandam RK, Kumar A, Kudpi RS, Kunal, Poojary D. A Qualitative Exploration of Perceived Causes and Solutions for Substance Abuse among Dental Students of Coastal Karnataka. Journal of International Dental & Medical Research. 2020 Jul 1;13(3).</li>
                        <li>Shetty S, Kunal, Rai S, Kini RD, Kumar NA, Sharma K. An Interprofessional Approach in Reducing the Stress Levels of First Year Medical Students. Indian Journal of Public Health Research & Development. 2019 Aug 1;10(8):760-3.</li>
                        <li>Kunal, Apurav, et al. Immediate Impact of Kapalabhati on Selected Neurocognitive and Psychological Parameters in Young Adults: A Case – Control Study - oral presentation in APPICON, Gauhati Medical College, Guwahati, Assam, 2019</li>
                        <li>Vinodini NA, Chatterjee PK, Suman VB, Kunal K, Rashmi KS, Nayanatara AK, Anupama N, Bhat RM. Effectiveness of Moringa oleifea Extract in Attenuating the Toxic Effect on Platelet Count: An Experiment on Cadmium Exposed Rats. Pharmacognosy Journal. 2019;11(4).</li>
                        <li>Kunal, Apurav, Pratik KC, Rashmi KS, Kishan K. Immediate Impact of Kapalabhati on Selected Memory Parameters in Young Adults: A Randomized Controlled Trial - Oral Presentation at ICONBAP, Haridwar, Uttarakhand, 2018.</li>
                        <li>Suman VB, Chattterjee PK, Vinodini NA, Kunal K, Gokul M, Bhat RM. Effect of variable diet and physical activity on bone mineral density in adults using peripheral-Dexa scan. Research Journal of Pharmacy and Technology. 2018;11(6):2404-7.</li>
                        <li>Kunal, et al; Impact of Regularly Supervised Training of Pranayama and Omkar Meditation on the Cardio- Respiratory Parameters and Short-Term Memory of Persons with Special Needs. Pharmacog J. 2018;10(2):202-6.</li>
                        <li>Chatterjee PK, Anantharaya VN, Shiva RK, Kunal K, Kumar NA, Shetty SB, Budihal SV, Bhat MR. Pre and Post-Treatment Effects: Estimation of Serum Testosterone and Lipid Peroxidation Levels on Moringa olifera Extract Induced Cadmium Exposed Rats. Pharmacognosy Journal. 2017;9(6).</li>
                        <li>Kunal, Impact of Regularly Supervised Training of Pranayama and Omkar Meditation on the Cardio-Respiratory Parameters and Short-Term Memory of Persons with Special Needs. Oral presentation at 23rd International conference on health care and life science research, Dubai, 2017</li>
                        <li>Kunal, Kumar S, N. K. Subbalakshmi, Pai S R, Impact of integrated yoga practice on the cognitive function of mentally challenged persons. Indian J Clin Anat Physiol 2016;3():300-304.</li>
                        <li>Kumar S, Kunal, Jha DK, Das S. Effect of stress during university examination on the differential leucocyte count (DLC), Heart Rate (HR), and Blood Pressure (BP). Indian Journal of Clinical Anatomy and Physiology. 2016 Apr;3(2):163-6.</li>
                        <li>Kunal, Subbalakshmi N. K., Pai Sheila R. Can the regularly supervised training of Pranayama and Omkar Meditation affect the Cardio-respiratory parameters and short-term memory of mentally challenged people - Poster Presentation at APPICON, AIIMS Jodhpur, Rajasthan, 2015.</li>
                        <li>Kunal, Subbalakshmi N. K., Pai Sheila R. The practice of Pranayama and Omkar Meditation by Mentally Challenged Young Adults Can Change Their Visual Processing - Oral Presentation at APPICON, SCB Medical College & Hospital, Cuttack, Odisha, 2014.</li>
                        <li>Kunal, Subbalakshmi N. K., Pai Sheila R. Impact of Pranayama and Omkar Meditation on Cardiorespiratory Profile of Mentally Challenged Young Adults" - Poster Presentation at ICONBAP, SMSMC Jaipur, Rajasthan, 2013.</li>
                        <li>Kunal, Subbalakshmi N. K., Pai Sheila R. Impact of Pranayama And Meditation on Cognitive And Cardio-Respiratory Functions in Mentally Challenged Children: Post–Graduate Thesis, completed on APRIL 2012</li>
                    </ol>
                </section>
            </div>

            <Footer />
        </main>
    );
}
