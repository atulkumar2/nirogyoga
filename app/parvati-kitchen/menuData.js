export const kitchenItems = [
  {
    slug: "multigrain-choco-chip-cookies",
    category: "Cookies & Bakes",
    name: "Multigrain Choco Chip Cookies",
    price: "Rs. 75",
    serving: "per piece",
    image: "/cooking/Multigrain cookies.jpeg",
    summary: "Butter-rich multigrain cookies with chocolate chips.",
    description:
      "A crisp, homestyle cookie made with multigrain flour, pure butter, and chocolate chips. A comforting option for tea time, gifting, or a small sweet treat.",
    highlights: ["Multigrain base", "Made with pure butter", "Chocolate chip finish"],
  },
  {
    slug: "multigrain-cupcakes",
    category: "Cookies & Bakes",
    name: "Multigrain Cupcakes",
    price: "Rs. 85",
    serving: "for 1 piece",
    image: "/cooking/Multigrain Cupcakes.jpeg",
    summary: "Jaggery-sweetened cupcakes finished with pure butter cream frosting.",
    description:
      "Soft multigrain cupcakes sweetened with jaggery and topped with pure butter cream frosting. They are baked for a richer, homemade flavour without feeling overly heavy.",
    highlights: ["Sweetened with jaggery", "Pure butter cream frosting", "Individual portions"],
  },
  {
    slug: "dates-cake-multigrain",
    category: "Cakes",
    name: "Dates Cake Multigrain",
    price: "Rs. 1300",
    serving: "for 600 gm",
    image: "/cooking/Dates cake multi grain - no sugar.jpeg",
    summary: "A multigrain dates puree cake with no sugar and no jaggery.",
    description:
      "This dense, naturally sweet cake uses dates puree with a multigrain base. It is made without sugar or jaggery, keeping the sweetness rooted in fruit.",
    highlights: ["No sugar", "No jaggery", "Made with dates puree"],
  },
  {
    slug: "cashew-caramel-icecream",
    category: "Desserts & Spreads",
    name: "Cashew Caramel Ice Cream",
    price: "Rs. 400-450",
    serving: "for 500 gm",
    image: "/cooking/Cashew caramel icecream.jpeg",
    summary: "Creamy cashew caramel ice cream without preservatives or setting agents.",
    description:
      "A smooth cashew caramel ice cream prepared without preservatives or setting agents. It is made in small batches for a fresh, indulgent dessert experience.",
    highlights: ["No preservatives", "No setting agents", "Small-batch dessert"],
  },
  {
    slug: "almond-butter",
    category: "Desserts & Spreads",
    name: "Almond Butter",
    price: "Rs. 500",
    serving: "for 250 gm",
    image: "/cooking/Almond butter.jpeg",
    summary: "Homemade almond butter for spreads, smoothies, and everyday use.",
    description:
      "A simple, nourishing almond butter made for everyday use. Spread it on toast, pair it with fruit, or add it to smoothies and breakfast bowls.",
    highlights: ["Homemade spread", "250 gm jar", "Useful for breakfast and snacks"],
  },
  {
    slug: "tiramisu",
    category: "Desserts & Spreads",
    name: "Tiramisu",
    price: "Rs. 1250",
    serving: "for 500 gm",
    image: "/cooking/Tiramisu 1250 for 500gm ( with fresh home made mascopone cheese).jpeg",
    summary: "Classic tiramisu made with fresh homemade mascarpone cheese.",
    description:
      "A layered tiramisu made with fresh homemade mascarpone cheese. It is rich, soft, and suited for celebrations or a chilled family dessert.",
    highlights: ["Fresh homemade mascarpone", "500 gm portion", "Celebration-friendly"],
  },
  {
    slug: "multigrain-jaggery-chocolate-cake",
    category: "Cakes",
    name: "Multigrain Jaggery Chocolate Cake",
    price: "Rs. 1300",
    serving: "for 600 gm",
    image: "/cooking/Multigrain jaggery chocolate cake 600gms 1300₹.jpeg",
    summary: "A chocolate cake made with multigrain flour and jaggery.",
    description:
      "A deep chocolate cake with a multigrain base and jaggery sweetness. It is designed as a wholesome alternative for chocolate cake cravings.",
    highlights: ["Multigrain flour", "Sweetened with jaggery", "600 gm cake"],
  },
  {
    slug: "mango-multigrain-jaggery-cake",
    category: "Cakes",
    name: "Mango Multigrain Jaggery Cake",
    price: "Rs. 1300",
    serving: "for 600 gm",
    image: "/cooking/Mango cake multigrain with jaggery 1300₹ 600gm.jpeg",
    summary: "A mango cake with multigrain flour and jaggery.",
    description:
      "A fruit-forward mango cake made with multigrain flour and jaggery. It brings a bright seasonal note to Parvati's Kitchen cake menu.",
    highlights: ["Mango flavour", "Multigrain base", "Sweetened with jaggery"],
  },
  {
    slug: "korean-cream-cheese-buns",
    category: "Cookies & Bakes",
    name: "Korean Cream Cheese Buns",
    price: "Rs. 150",
    serving: "for 1 piece",
    image: "/cooking/Korean cream cheese buns.png",
    summary: "Korean buns with homemade fresh cream cheese.",
    description:
      "Soft Korean-style buns filled with homemade fresh cream cheese. They are prepared as individual pieces for a savoury-sweet bakery treat.",
    highlights: ["Homemade fresh cream cheese", "Individual buns", "Bakery-style snack"],
  },
];

export function getKitchenItem(slug) {
  return kitchenItems.find((item) => item.slug === slug);
}
