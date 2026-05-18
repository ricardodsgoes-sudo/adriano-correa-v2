'use client';

import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 40,
  height: 40,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const HomeIcon = () => (
  <svg {...svgProps}>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const CarIcon = () => (
  <svg {...svgProps}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const BarChartIcon = () => (
  <svg {...svgProps}>
    <path d="M5 21v-6" />
    <path d="M12 21V3" />
    <path d="M19 21V9" />
  </svg>
);

const HEADER_H = 72;

const line1 = ['Consórcio', 'não', 'é', 'apenas', 'sorteio.'];
const line2 = ['É', 'uma', 'opção', 'inteligente', 'de', 'crédito.'];

const cards = [
  { Icon: HomeIcon,     label: 'Imóveis',    desc: 'Casa própria sem juros — planejamento que cabe no bolso.' },
  { Icon: CarIcon,      label: 'Automóveis', desc: 'Troca de carro com disciplina, sem comprometer renda.' },
  { Icon: BarChartIcon, label: 'Crédito',    desc: 'Capital inteligente pra quem quer crescer com estratégia.' },
];

const stats = [
  { value: '+500',    label: 'Clientes atendidos' },
  { value: '10 anos', label: 'De experiência' },
  { value: '100%',    label: 'Dedicação' },
];

const wordVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 230, damping: 22 } as const,
  },
};

export default function Hero() {
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX  = useTransform(mouseX, [0, 1], [-28, 28]);
  const glowY  = useTransform(mouseY, [0, 1], [-18, 18]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: HEADER_H }}
      onMouseMove={onMouseMove}
    >
      {/*
        Imagem full-bleed: ocupa todo o hero — do topo (atrás da navbar
        transparente) até a borda direita da tela. A máscara em degradê
        dissolve a borda esquerda no branco — sem corte visível.
      */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          left: '34%',
          WebkitMaskImage:
            'linear-gradient(105deg, transparent 0%, transparent 20%, rgba(0,0,0,0.5) 27%, black 36%)',
          maskImage:
            'linear-gradient(105deg, transparent 0%, transparent 20%, rgba(0,0,0,0.5) 27%, black 36%)',
        }}
      >
        <Image
          src="/imagem-hero-teste.png"
          alt="Homem olhando para imóvel e carro"
          fill
          className="object-cover"
          style={{ objectPosition: 'right center' }}
          priority
        />
      </div>

      <div
        className="max-w-[1400px] mx-auto flex flex-col lg:flex-row relative z-10"
        style={{ minHeight: `calc(100vh - ${HEADER_H}px)` }}
      >

        {/* ── LEFT CONTENT ── */}
        <div className="relative z-10 flex flex-col px-8 md:px-12 lg:pl-12 lg:pr-8 pt-10 pb-12 lg:pt-14 lg:pb-14 lg:w-[54%]">

          {/* Ambient glow */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 560, height: 560,
              top: -120, left: -120,
              background: 'radial-gradient(circle, rgba(255,0,0,0.05) 0%, transparent 68%)',
              x: reduced ? 0 : glowX,
              y: reduced ? 0 : glowY,
            }}
            animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Title */}
          <motion.h1
            className="font-display font-bold mb-4"
            style={{ lineHeight: 1.1 }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduced ? 0 : 0.062, delayChildren: 0.1 } },
            }}
          >
            <span className="block">
              {line1.map((w, i) => (
                <motion.span
                  key={`a${i}`}
                  variants={reduced ? {} : wordVariants}
                  className="inline-block mr-[0.27em]"
                  style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)' }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block" style={{ marginTop: '0.1em' }}>
              {line2.map((w, i) => (
                <motion.span
                  key={`b${i}`}
                  variants={reduced ? {} : wordVariants}
                  className="inline-block mr-[0.27em] text-brand-red"
                  style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)' }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.93rem] text-gray-600 leading-relaxed mb-7"
            style={{ maxWidth: 400 }}
          >
            Você tem várias maneiras de liberar crédito na Ademicon. Saiba quais
            são os tipos de consórcio. Saia do estigma e descubra como funciona
            de verdade.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <motion.a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-semibold text-center"
              whileHover={reduced ? {} : { scale: 1.04 }}
              whileTap={reduced ? {} : { scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            >
              Quero conhecer as opções
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('consorcio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-sm font-semibold"
              whileHover={reduced ? {} : { scale: 1.04 }}
              whileTap={reduced ? {} : { scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            >
              Entender melhor
            </motion.button>
          </motion.div>

          {/* Feature cards — glass */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {cards.map(({ Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-2xl p-4 border border-gray-200/70 bg-white/60 backdrop-blur-md shadow-sm"
              >
                <span className="text-brand-red mb-3 block"><Icon /></span>
                <h3 className="font-display font-bold text-[0.95rem] text-black mb-1.5">{label}</h3>
                <p className="text-[0.82rem] text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats pill — inside left column, same as template */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex divide-x divide-gray-300 rounded-xl overflow-hidden bg-[#F3F3F3]"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.55 + i * 0.1 }}
                className="flex-1 text-center py-4 px-3"
              >
                <div className="text-[1.85rem] font-display font-bold text-brand-red leading-none mb-0.5">
                  {value}
                </div>
                <div className="text-xs text-gray-500">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
