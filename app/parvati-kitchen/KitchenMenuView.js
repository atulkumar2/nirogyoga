"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./parvati-kitchen.module.css";

const groupItemsByCategory = (items) =>
  items.reduce((groups, item) => {
    const category = item.category || "Menu";
    const existingGroup = groups.find((group) => group.category === category);

    if (existingGroup) {
      existingGroup.items.push(item);
      return groups;
    }

    return [...groups, { category, items: [item] }];
  }, []);

export default function KitchenMenuView({ items }) {
  const [showExpandedMenu, setShowExpandedMenu] = useState(false);
  const groupedItems = groupItemsByCategory(items);

  return (
    <section aria-labelledby="menu-heading">
      <div className={styles.menuHeader}>
        <h2 id="menu-heading" className={styles.sectionHeading}>Menu</h2>
        <button
          type="button"
          className={styles.viewToggle}
          onClick={() => setShowExpandedMenu(!showExpandedMenu)}
          aria-pressed={showExpandedMenu}
        >
          {showExpandedMenu ? "Show concise menu" : "Show expanded menu"}
        </button>
      </div>

      {showExpandedMenu ? (
        <div className={styles.menuGrid}>
          {items.map((item) => (
            <Link key={item.slug} href={`/parvati-kitchen/${item.slug}`} className={styles.card}>
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
      ) : (
        <div className={styles.conciseMenu}>
          {groupedItems.map((group) => (
            <div key={group.category} className={styles.menuCategory}>
              <h3 className={styles.menuCategoryTitle}>{group.category}</h3>
              <div className={styles.menuCategoryItems}>
                {group.items.map((item) => (
                  <Link key={item.slug} href={`/parvati-kitchen/${item.slug}`} className={styles.menuRow}>
                    <span className={styles.menuThumbWrap}>
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="56px"
                          className={styles.menuThumb}
                        />
                      ) : (
                        <span className={styles.menuThumbPlaceholder}></span>
                      )}
                    </span>
                    <span className={styles.menuItemName}>{item.name}</span>
                    <span className={styles.menuItemSummary}>{item.summary}</span>
                    <span className={styles.menuItemPrice}>{item.price}</span>
                    <span className={styles.menuItemServing}>{item.serving}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
