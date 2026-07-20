import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { kitchenItems } from "./menuData";
import styles from "./parvatis-kitchen.module.css";

export const metadata = {
  title: "Parvati's Kitchen Menu | Nirog Yoga",
  description:
    "Explore Parvati's Kitchen menu of homemade multigrain cakes, cookies, cupcakes, ice cream, almond butter, tiramisu, and fresh cream cheese buns.",
};

export default function ParvatisKitchenPage() {
  const featuredItem = kitchenItems.find((item) => item.slug === "mango-multigrain-jaggery-cake");

  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Homemade sweets and bakes</p>
            <h1 className={styles.title}>Parvati&apos;s Kitchen</h1>
            <p className={styles.subtitle}>
              A small-batch menu of multigrain cakes, jaggery-sweetened bakes,
              fresh desserts, and nourishing homemade spreads prepared with care.
            </p>
          </div>
          {featuredItem?.image && (
            <div className={styles.heroImageWrap}>
              <Image
                src={featuredItem.image}
                alt={featuredItem.name}
                fill
                sizes="(max-width: 820px) 100vw, 420px"
                className={styles.heroImage}
                priority
              />
            </div>
          )}
        </header>

        <section className={styles.makerSection} aria-labelledby="maker-heading">
          <div className={styles.makerImageWrap}>
            <Image
              src="/parvathi.jpg"
              alt="Parvathi Katyayan"
              fill
              sizes="(max-width: 760px) 180px, 220px"
              className={styles.makerImage}
            />
          </div>
          <div>
            <p className={styles.eyebrow}>Prepared by Parvathi Katyayan</p>
            <h2 id="maker-heading" className={styles.makerTitle}>Homemade with a sattvic touch</h2>
            <p className={styles.makerText}>
              Parvathi brings the same care from her yoga and holistic living practice into her kitchen:
              fresh batches, thoughtful ingredients, and sweets made for families who want warmth without
              unnecessary additives.
            </p>
          </div>
        </section>

        <section className={styles.locationSection} aria-labelledby="location-heading">
          <div>
            <p className={styles.eyebrow}>Kitchen location</p>
            <h2 id="location-heading" className={styles.locationTitle}>
              Parvathi&apos;s Kitchen and Yoga Therapy Centre
            </h2>
            <address className={styles.address}>
              Gopinath Villa Coelho Lane, Falnir Rd,<br />
              Mangaluru, Karnataka 575001
            </address>
          </div>
          <a
            href="https://maps.app.goo.gl/xA936JLUspwp3K6x8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Open in Google Maps
          </a>
        </section>

        <section aria-labelledby="menu-heading">
          <h2 id="menu-heading" className={styles.sectionHeading}>Menu</h2>
          <div className={styles.menuGrid}>
            {kitchenItems.map((item) => (
              <Link key={item.slug} href={`/parvatis-kitchen/${item.slug}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholder}>{item.name}</div>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.itemTitle}>{item.name}</h3>
                  <p className={styles.summary}>{item.summary}</p>
                  <div className={styles.meta}>
                    <span className={styles.price}>{item.price}</span>
                    <span className={styles.serving}>{item.serving}</span>
                  </div>
                  <span className={styles.link}>View item</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
