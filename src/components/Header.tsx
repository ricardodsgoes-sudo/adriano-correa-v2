'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SECTIONS = [
  { id: 'consorcio', label: 'Sobre o Consultor' },
  { id: 'consorcio-credito', label: 'Consórcio x Crédito' },
  { id: 'o-que-faco', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-7 md:px-10 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo01.png"
            alt="Adriano Correa — Consultor Ademicon"
            height={56}
            width={230}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-[1rem] font-medium rounded-sm px-1 py-1 hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {label}
            </button>
          ))}
          <a
            href="https://wa.me/554197354371"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 bg-brand-red text-white font-semibold text-[1rem] rounded-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgba(255,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden -mr-2 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className={`w-6 h-0.5 bg-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-3 flex flex-col">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-left min-h-[44px] flex items-center rounded-sm px-1 hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                {label}
              </button>
            ))}
            <a
              href="https://wa.me/554197354371"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center mt-3 mb-1 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgba(255,0,0,0.6)]"
            >
              Contato via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
