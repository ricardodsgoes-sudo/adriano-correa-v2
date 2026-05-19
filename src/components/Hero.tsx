'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import PlanoDeConquista from './PlanoDeConquista';

const WHATSAPP_NUMBER = '554197354371';

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

const HEADER_H = 96;

const line1 = ['Consórcio', 'não', 'é', 'apenas', 'sorteio.'];
const line2 = ['É', 'uma', 'opção', 'inteligente', 'de', 'crédito.'];

const cards = [
  { Icon: HomeIcon,     label: 'Quero um imóvel',           desc: 'Casa, apartamento, terreno ou investimento.', goal: 'Imóvel' },
  { Icon: CarIcon,      label: 'Quero um veículo',          desc: 'Carro, moto ou troca planejada.',             goal: 'Veículo' },
  { Icon: BarChartIcon, label: 'Quero crédito estratégico', desc: 'Capital, serviço, reforma ou patrimônio.',    goal: 'Crédito' },
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

  const [diagOpen, setDiagOpen] = useState(false);
  const [diagGoal, setDiagGoal] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const openDiagnostico = (goal: string | null = null) => {
    setDiagGoal(goal);
    setSelectedGoal(goal);
    setDiagOpen(true);
  };

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
          src="/imagem-hero-nova.webp"
          alt="Homem olhando para imóvel e carro"
          fill
          className="object-cover"
          style={{ objectPosition: 'right center' }}
          priority
        />
      </div>

      <div
        className="max-w-[1280px] mx-auto flex flex-col lg:flex-row relative z-10"
        style={{ minHeight: `clamp(680px, calc(100dvh - ${HEADER_H}px), 768px)` }}
      >

        {/* ── LEFT CONTENT ── */}
        <div className="relative z-10 flex flex-col lg:justify-center px-7 md:px-10 lg:pl-12 lg:pr-8 pt-9 pb-14 lg:py-10 lg:w-[57%]">

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
            className="font-display font-bold mb-5"
            style={{ lineHeight: 1.08 }}
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
                  style={{ fontSize: 'clamp(2.5rem, 3.7vw, 3.5rem)' }}
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
                  style={{ fontSize: 'clamp(2.5rem, 3.7vw, 3.5rem)' }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.12rem] sm:text-[1.18rem] text-gray-600 leading-relaxed mb-7"
            style={{ maxWidth: 520 }}
          >
            Descubra qual caminho faz mais sentido para conquistar imóvel,
            veículo ou crédito com planejamento e orientação especializada
            Ademicon.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3.5 mb-7"
          >
            <motion.button
              onClick={() => openDiagnostico(null)}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2 px-9 py-4 bg-brand-red text-white font-semibold text-[1.05rem] rounded-lg shadow-[0_12px_28px_-8px_rgba(255,0,0,0.5)] transition-[background-color,box-shadow] duration-200 hover:bg-red-700 hover:shadow-[0_18px_38px_-8px_rgba(255,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            >
              Fazer diagnóstico gratuito
              <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </motion.button>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20Adriano.%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20qual%20op%C3%A7%C3%A3o%20de%20cons%C3%B3rcio%20faz%20mais%20sentido%20para%20o%20meu%20objetivo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-9 py-4 border-2 border-brand-red text-brand-red font-semibold text-[1.05rem] rounded-lg transition-[background-color,color,box-shadow] duration-200 hover:bg-brand-red hover:text-white hover:shadow-[0_14px_30px_-10px_rgba(255,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            >
              Falar com Adriano
            </motion.a>
          </motion.div>

          {/* ── Módulo Plano de Conquista ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/70 bg-white/55 backdrop-blur-xl p-4 sm:p-5 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.04]"
          >
            {/* Cabeçalho do módulo */}
            <div className="flex items-start gap-3 mb-4 px-1">
              <span className="shrink-0 inline-flex w-11 h-11 items-center justify-center rounded-xl bg-brand-red text-white shadow-[0_8px_18px_-6px_rgba(255,0,0,0.6)]">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </span>
              <div>
                <h2 className="font-display font-bold text-[1.22rem] sm:text-[1.32rem] text-black leading-tight">
                  Plano de Conquista
                </h2>
                <p className="text-[0.92rem] text-gray-600 leading-snug mt-0.5">
                  Escolha seu objetivo e receba uma análise personalizada em 30
                  segundos.
                </p>
              </div>
            </div>

            {/* Cards de escolha */}
            <div className="flex flex-col sm:flex-row gap-3">
              {cards.map(({ Icon, label, desc, goal }, i) => {
                const selected = selectedGoal === goal;
                return (
                  <motion.button
                    key={label}
                    type="button"
                    onClick={() => openDiagnostico(goal)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 1.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={reduced ? {} : { y: -5 }}
                    whileTap={reduced ? {} : { scale: 0.98 }}
                    className={`group relative cursor-pointer flex-1 min-w-[150px] text-left rounded-xl border bg-white p-4 transition-[border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                      selected
                        ? 'border-brand-red shadow-[0_16px_38px_-14px_rgba(255,0,0,0.45)]'
                        : 'border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)] hover:border-brand-red hover:shadow-[0_18px_40px_-14px_rgba(255,0,0,0.42)]'
                    }`}
                  >
                    {/* Marca de selecionado */}
                    <span
                      className={`absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center transition-opacity duration-200 ${
                        selected ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.6} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>

                    <span
                      className={`inline-flex w-[52px] h-[52px] mb-3 items-center justify-center rounded-xl transition-colors duration-200 [&_svg]:w-7 [&_svg]:h-7 ${
                        selected
                          ? 'bg-brand-red text-white'
                          : 'bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white'
                      }`}
                    >
                      <Icon />
                    </span>
                    <h3
                      className={`font-display font-bold text-[1.05rem] mb-1 transition-colors ${
                        selected ? 'text-brand-red' : 'text-black group-hover:text-brand-red'
                      }`}
                    >
                      {label}
                    </h3>
                    <p className="text-[0.86rem] text-gray-500 leading-relaxed">{desc}</p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>

      <PlanoDeConquista
        open={diagOpen}
        onClose={() => setDiagOpen(false)}
        initialGoal={diagGoal}
      />

    </section>
  );
}
