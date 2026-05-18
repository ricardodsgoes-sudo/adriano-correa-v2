'use client';

import { useState, useEffect } from 'react';

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
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="font-display font-bold text-lg hidden sm:inline">
            Adriano <span className="text-brand-red">Ademicon</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('consorcio')}
            className="text-sm font-medium hover:text-brand-red transition-colors"
          >
            Sobre consórcio
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-sm font-medium hover:text-brand-red transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="text-sm font-medium hover:text-brand-red transition-colors"
          >
            Como funciona
          </button>
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-6 h-6 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('consorcio')}
              className="text-sm font-medium text-left hover:text-brand-red transition-colors"
            >
              Sobre consórcio
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-left hover:text-brand-red transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-sm font-medium text-left hover:text-brand-red transition-colors"
            >
              Como funciona
            </button>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center"
            >
              Contato via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
