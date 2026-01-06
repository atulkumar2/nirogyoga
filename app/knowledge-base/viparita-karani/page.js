import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Viparita Karani (Legs-Up-the-Wall) | Nirog Yoga",
  description: "Viparita Karani (Legs-Up-the-Wall Pose) - A restorative inversion.",
};

export default function ViparitaKarani() {
  return (
    <main>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Viparita Karani (Legs-Up-the-Wall)</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          This restorative inversion page is coming soon.
        </p>
         <Link href="/knowledge-base/major-asanas" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
            ← Back to Major Asanas
          </Link>
      </div>
      <Footer />
    </main>
  );
}
