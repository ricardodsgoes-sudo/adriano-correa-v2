'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ConsorcioVsCredito from '@/components/ConsorcioVsCredito';
import Servicos from '@/components/Servicos';
import ComoFunciona from '@/components/ComoFunciona';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <ConsorcioVsCredito />
      <Servicos />
      <ComoFunciona />
      <CTA />
      <Footer />
    </main>
  );
}
