'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PorQueAdriano from '@/components/PorQueAdriano';
import TrustBar from '@/components/TrustBar';
import SobreAdriano from '@/components/SobreAdriano';
import ConsorcioVsCredito from '@/components/ConsorcioVsCredito';
import OQueEuFaco from '@/components/OQueEuFaco';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <PorQueAdriano />
      <TrustBar />
      <SobreAdriano />
      <ConsorcioVsCredito />
      <OQueEuFaco />
      <CTA />
      <Footer />
    </main>
  );
}
