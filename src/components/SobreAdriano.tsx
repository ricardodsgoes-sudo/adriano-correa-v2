'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const featureSvg = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const ChatIcon = () => (
  <svg {...featureSvg}>
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </svg>
);

const TargetIcon = () => (
  <svg {...featureSvg}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EyeIcon = () => (
  <svg {...featureSvg}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HeadsetIcon = () => (
  <svg {...featureSvg}>
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

const features = [
  {
    Icon: ChatIcon,
    title: 'Atendimento direto',
    desc: 'Você fala com o Adriano.',
  },
  {
    Icon: TargetIcon,
    title: 'Estratégia personalizada',
    desc: 'Plano pensado para seu objetivo.',
  },
  {
    Icon: EyeIcon,
    title: 'Clareza na decisão',
    desc: 'Prazos, parcelas e lances bem explicados.',
  },
  {
    Icon: HeadsetIcon,
    title: 'Suporte até o fim',
    desc: 'Acompanhamento durante o processo.',
  },
];

const WHATSAPP = 'https://wa.me/554197354371';

export default function SobreAdriano() {
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: 0.05 } },
  };

  return (
    <section id="consorcio" className="bg-[#FBFBFB] py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── LEFT: conteúdo ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-red" />
            <span className="text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
              Sobre o Consultor
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-black mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', lineHeight: 1.15 }}
          >
            Você não precisa escolher um consórcio{' '}
            <span className="text-brand-red">sozinho.</span>
          </motion.h2>

          {/* Parágrafos */}
          <motion.p
            variants={fadeUp}
            className="text-[0.97rem] text-gray-600 leading-relaxed mb-4 max-w-[460px]"
          >
            O Adriano atua com consultoria em consórcios Ademicon, ajudando
            você a entender as opções, comparar possibilidades e escolher o
            plano mais adequado para seu objetivo.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[0.97rem] text-gray-600 leading-relaxed mb-8 max-w-[460px]"
          >
            Sem empurrar carta.<br />
            Sem pressão.<br />
            Com clareza para decidir.
          </motion.p>

          {/* Features 2x2 */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 gap-x-6 gap-y-7 mb-9"
          >
            {features.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col">
                <span className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center mb-3">
                  <Icon />
                </span>
                <h3 className="font-display font-bold text-[0.95rem] text-black mb-1">
                  {title}
                </h3>
                <p className="text-[0.82rem] text-gray-500 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-semibold text-center transition-[background-color,box-shadow] duration-200 hover:shadow-[0_14px_30px_-8px_rgba(255,0,0,0.55)]"
              whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            >
              Falar com o Adriano no WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: foto ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: reduced ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/adriano-v2.png"
              alt="Adriano, consultor de consórcios Ademicon"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>

          {/* Badge flutuante */}
          <motion.div
            className="absolute -bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-[320px]
                       bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-11 h-11 shrink-0 rounded-full bg-brand-red text-white flex items-center justify-center">
              <HeadsetIcon />
            </span>
            <div>
              <p className="font-display font-bold text-[0.9rem] text-black leading-tight">
                Consultor de Consórcios Ademicon
              </p>
              <p className="text-[0.78rem] text-gray-500 leading-snug mt-0.5">
                Experiência, estratégia e compromisso com o seu objetivo.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
