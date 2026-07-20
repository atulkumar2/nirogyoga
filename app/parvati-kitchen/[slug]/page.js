import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKitchenItem, kitchenItems } from "../menuData";
import styles from "./item.module.css";

export function generateStaticParams() {
  return kitchenItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getKitchenItem(slug);

  if (!item) {
    return {
      title: "Kitchen Item | Nirog Yoga",
    };
  }

  return {
    title: `${item.name} | Parvati's Kitchen`,
    description: item.summary,
    openGraph: {
      title: `${item.name} | Parvati's Kitchen`,
      description: item.summary,
      images: item.image ? [item.image] : ["/nirog-yoga-symbol.png"],
    },
  };
}

export default async function KitchenItemPage({ params }) {
  const { slug } = await params;
  const item = getKitchenItem(slug);

  if (!item) {
    notFound();
  }

  const message = encodeURIComponent(`Hello Parvati Katyayan, I am interested in ordering ${item.name}.`);
  const kitchenContacts = [
    { label: "+91 81236 90515", whatsapp: "918123690515" },
    { label: "+91 80738 83815", whatsapp: "918073883815" },
  ];

  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <Link href="/parvati-kitchen" className={styles.backLink}>Back to Parvati&apos;s Kitchen</Link>

        <article className={styles.detail}>
          <div className={styles.imageWrap}>
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 840px) 100vw, 520px"
                className={styles.image}
                priority
              />
            ) : (
              <div className={styles.placeholder}>{item.name}</div>
            )}
          </div>

          <div>
            <p className={styles.eyebrow}>Parvati&apos;s Kitchen</p>
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.summary}>{item.summary}</p>

            <div className={styles.meta}>
              <span className={styles.price}>{item.price}</span>
              <span className={styles.serving}>{item.serving}</span>
            </div>

            <h2 className={styles.sectionTitle}>About this item</h2>
            <p className={styles.description}>{item.description}</p>

            <h2 className={styles.sectionTitle}>Highlights</h2>
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight} className={styles.highlight}>{highlight}</li>
              ))}
            </ul>

            <div className={styles.orderBox}>
              <p className={styles.orderText}>
                For availability and ordering from Parvati&apos;s Kitchen, message Parvati Katyayan on WhatsApp.
              </p>
              <div className={styles.orderLinks}>
                {kitchenContacts.map((contact) => (
                  <a
                    key={contact.whatsapp}
                    href={`https://wa.me/${contact.whatsapp}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orderLink}
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
              <div className={styles.locationBox}>
                <strong>Pickup location:</strong>{" "}
                <a
                  href="https://maps.app.goo.gl/xA936JLUspwp3K6x8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.locationLink}
                >
                  Parvathi&apos;s Kitchen and Yoga Therapy Centre
                </a>
                <span className={styles.locationAddress}>
                  Gopinath Villa Coelho Lane, Falnir Rd, Mangaluru, Karnataka 575001
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
