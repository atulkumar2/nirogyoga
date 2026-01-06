import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Pincha Mayurasana (Feathered Peacock) | Nirog Yoga",
  description: "Pincha Mayurasana (Feathered Peacock Pose) - An advanced inversion.",
};

export default function PinchaMayurasana() {
  return (
    <main>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Pincha Mayurasana (Feathered Peacock)</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          This advanced inversion page is coming soon.
        </p>
         <Link href="/knowledge-base/major-asanas" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
            ← Back to Major Asanas
          </Link>
      </div>
      <Footer />
    </main>
  );
}
