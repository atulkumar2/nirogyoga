import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { kitchenItems } from "./menuData";
import styles from "./parvati-kitchen.module.css";

export const metadata = {
  title: "Parvati's Kitchen | Nirog Yoga",
  description:
    "Explore Parvati's Kitchen menu of homemade multigrain cakes, cookies, cupcakes, ice cream, almond butter, tiramisu, and fresh cream cheese buns.",
};

const formatServing = (serving) => serving.replace(/^for\s+/i, "").replace(/^per\s+/i, "");

const categoryIcon = {
  Cakes: "C",
  "Cookies & Bakes": "B",
  "Desserts & Spreads": "D",
};

const sectionOrder = ["Cakes", "Cookies & Bakes", "Desserts & Spreads"];

const menuSections = sectionOrder
  .map((category) => ({
    title: category,
    icon: categoryIcon[category] || "M",
    wide: category === "Cakes",
    items: kitchenItems
      .filter((item) => item.category === category)
      .map((item) => ({
        name: item.name,
        quantity: formatServing(item.serving),
        price: item.price,
        slug: item.slug,
      })),
  }))
  .filter((section) => section.items.length > 0);

const kitchenPhoneLabel = "+91 81236 90515";
const kitchenPhone = "918123690515";

export default function ParvatisKitchenPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <article className={styles.flyer} aria-labelledby="kitchen-title">
        <span className={`${styles.corner} ${styles.cornerTopLeft}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerTopRight}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBottomLeft}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBottomRight}`} aria-hidden="true" />

        <header className={styles.header}>
          <div className={styles.diamonds} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h1 id="kitchen-title" className={styles.title}>
            PARVATI&apos;S KITCHEN
          </h1>
          <p className={styles.tagline}>
            Pure Homemade <span>|</span> Freshly Prepared <span>|</span> Pure Vegetarian
          </p>
          <div className={styles.rule} />
        </header>

        <div className={styles.divider} aria-hidden="true">
          <span />
        </div>

        <section className={styles.menuGrid} aria-label="Menu">
          {menuSections.map((section) => (
            <div
              className={`${styles.menuBox} ${section.wide ? styles.menuBoxWide : ""}`}
              key={section.title}
            >
              <h2 className={styles.menuBoxTitle}>
                <span className={styles.sectionIcon} aria-hidden="true">
                  {section.icon}
                </span>
                {section.title}
              </h2>
              <div className={styles.rows}>
                {section.items.map((item) => (
                  <Link
                    className={styles.menuRow}
                    href={`/parvati-kitchen/${item.slug}`}
                    key={item.name}
                  >
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemMeta}>
                      <em>{item.quantity}</em>
                      <strong>{item.price}</strong>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <p className={styles.delivery}>*Delivery charges extra depending on location</p>

        <section className={styles.products} aria-labelledby="products-heading">
          <h2 id="products-heading" className={styles.stripHeading}>
            <span aria-hidden="true">+</span> Our Products <span aria-hidden="true">+</span>
          </h2>
          <div className={styles.productGrid}>
            {kitchenItems.map((product) => (
              <Link
                className={styles.product}
                href={`/parvati-kitchen/${product.slug}`}
                key={product.slug}
              >
                <div className={styles.productImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="76px"
                    className={styles.productImage}
                  />
                </div>
                <span className={styles.productCaption}>
                  <strong>{product.name}</strong>
                  <span>{product.price} / {formatServing(product.serving)}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.orderBox} aria-labelledby="order-heading">
          <h2 id="order-heading" className={styles.menuBoxTitle}>
            <span className={styles.sectionIcon} aria-hidden="true">
              O
            </span>
            How To Order
          </h2>
          <div className={styles.orderGrid}>
            <div className={styles.orderColumn}>
              <span className={styles.orderIcon} aria-hidden="true">
                chat
              </span>
              <h3>WhatsApp Us</h3>
              <a href={`https://wa.me/${kitchenPhone}`}>Chat on WhatsApp</a>
              <p>{kitchenPhoneLabel}</p>
            </div>
            <div className={styles.orderColumn}>
              <span className={styles.orderIcon} aria-hidden="true">
                call
              </span>
              <h3>Call Us</h3>
              <a href={`tel:+${kitchenPhone}`}>{kitchenPhoneLabel}</a>
            </div>
            <div className={styles.orderColumn}>
              <span className={styles.orderIcon} aria-hidden="true">
                time
              </span>
              <h3>Lead Time</h3>
              <p>Made fresh on order</p>
              <p>24-48 hrs notice for bulk orders</p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <h2>PARVATI KATYAYAN - HOME FOOD</h2>
          <address>Near Gopinath Villa, Falnir Road, Mangaluru, Karnataka 575001</address>
          <div className={styles.footerLinks}>
            <a href={`tel:+${kitchenPhone}`}>Call</a>
            <a href={`https://wa.me/${kitchenPhone}`}>WhatsApp</a>
            <a href="/">Website</a>
            <a href="https://maps.app.goo.gl/xA936JLUspwp3K6x8">Maps</a>
          </div>
          <p>Made with love, served with tradition</p>
          <p>Pure vegetarian homemade kitchen</p>
        </footer>
        </article>
      </main>
    </>
  );
}
