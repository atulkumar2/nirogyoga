import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://nirogyoga.in'),
  title: "Nirog Yoga | Healing, Yoga, Sadhana",
  description: "Holistic healing and yoga retreats in Mangalore by Prof. (Dr.) Kunal Katyayan and Parvathi Katyayan. Restore calmness, focus, and health.",
  openGraph: {
    title: "Nirog Yoga | Healing, Yoga, Sadhana",
    description: "Holistic healing and yoga retreats in Mangalore by Prof. (Dr.) Kunal Katyayan and Parvathi Katyayan. Restore calmness, focus, and health.",
    url: 'https://nirogyoga.in',
    siteName: 'Nirog Yoga',
    images: [
      {
        url: '/NirogYogaPreview.png',
        width: 1200,
        height: 630,
        alt: 'Nirog Yoga',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <AnnouncementBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

