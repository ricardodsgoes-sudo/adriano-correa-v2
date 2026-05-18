'use client';

import { motion, useReducedMotion } from 'framer-motion';

const svg = (size = 24) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

const UsersIcon = () => (
  <svg {...svg(26)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BankIcon = () => (
  <svg {...svg(26)}>
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...svg(24)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const consorcio = [
  'Você faz parte de um grupo de pessoas',
  'Cada um paga mensalidades para o fundo comum',
  'Dinheiro liberado por sorteio ou lance',
  'Juros baixos ou taxa zero',
  'Possibilidade de antecipar o crédito',
  'Administradora responsável pelo grupo',
];

const credito = [
  'Você pega emprestado direto do banco',
  'Você paga juros + parcelas fixas',
  'Aprovação rápida, mas com juros pesados',
  'Você pode pagar de 2% a 6% ao mês',
  'Você assume a dívida sozinho',
  'Banco é o credor e o cobrador',
];

export default function ConsorcioVsCredito() {
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
    visible: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.05 } },
  };

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.07 } },
  };

  const makeItem = (dir: number) => ({
    hidden: { opacity: 0, x: reduced ? 0 : dir * 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  });
  const itemLeft = makeItem(-1);
  const itemRight = makeItem(1);

  return (
    <section id="consorcio-credito" className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1140px] mx-auto">

        {/* ── Cabeçalho ── */}
        <motion.div
          className="text-center max-w-[640px] mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-red" />
            <span className="text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
              Consórcio x Crédito Tradicional
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-black mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', lineHeight: 1.15 }}
          >
            Entenda as diferenças e faça a{' '}
            <span className="text-brand-red">escolha inteligente.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[0.97rem] text-gray-600 leading-relaxed"
          >
            Consórcio é planejamento. Crédito é dívida. Veja por que cada vez
            mais pessoas escolhem o caminho inteligente.
          </motion.p>
        </motion.div>

        {/* ── Cards comparativos ── */}
        <motion.div
          className="relative grid md:grid-cols-2 gap-6 lg:gap-8 mt-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Badge VS — círculo branco, borda e texto vermelhos com glow.
              Div externa = posicionamento (CSS puro); span interna = animação
              (framer controla transform sem brigar com o translate de centragem). */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.span
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-brand-red text-brand-red flex items-center justify-center font-display font-extrabold text-lg md:text-xl ring-[6px] ring-white shadow-[0_0_28px_rgba(255,0,0,0.28)]"
              initial={{ opacity: 0, scale: reduced ? 1 : 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
            >
              VS
            </motion.span>
          </div>

          {/* Card Consórcio */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl bg-white border border-brand-red/25 shadow-[0_18px_50px_-22px_rgba(255,0,0,0.35)] p-7 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-[#ff3b3b] to-[#d40000] text-white flex items-center justify-center shadow-lg shadow-brand-red/25">
                <UsersIcon />
              </span>
              <div>
                <h3 className="font-display font-bold text-[1.15rem] text-brand-red leading-tight">
                  Consórcio
                </h3>
                <p className="text-[0.8rem] text-gray-500 leading-snug mt-0.5">
                  Construção inteligente de patrimônio
                </p>
              </div>
            </div>

            <motion.ul variants={listStagger} className="flex flex-col gap-3.5">
              {consorcio.map((item) => (
                <motion.li key={item} variants={itemLeft} className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-brand-red text-white flex items-center justify-center shadow-sm shadow-brand-red/30">
                    <CheckIcon />
                  </span>
                  <span className="text-[0.9rem] text-gray-700 leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Card Crédito tradicional */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl bg-[#FAFAFA] border border-gray-200 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.4)] p-7 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-[#6b7280] to-[#374151] text-white flex items-center justify-center shadow-lg shadow-gray-500/25">
                <BankIcon />
              </span>
              <div>
                <h3 className="font-display font-bold text-[1.15rem] text-gray-800 leading-tight">
                  Crédito tradicional
                </h3>
                <p className="text-[0.8rem] text-gray-500 leading-snug mt-0.5">
                  Dívida imediata a juros altos
                </p>
              </div>
            </div>

            <motion.ul variants={listStagger} className="flex flex-col gap-3.5">
              {credito.map((item) => (
                <motion.li key={item} variants={itemRight} className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-gray-600 text-white flex items-center justify-center">
                    <XIcon />
                  </span>
                  <span className="text-[0.9rem] text-gray-600 leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* ── Barra Mito ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-8 rounded-2xl bg-[#FBFBFB] border border-gray-200 p-6 md:p-7 flex items-start gap-4"
        >
          <span className="w-12 h-12 shrink-0 rounded-full bg-white border border-gray-200 text-brand-red flex items-center justify-center shadow-sm">
            <ShieldIcon />
          </span>
          <div>
            <p className="font-display font-bold text-[0.95rem] text-black leading-snug">
              <span className="text-brand-red">Mito:</span> “Consórcio é sorteio e é arriscado.”
            </p>
            <p className="text-[0.85rem] text-gray-600 leading-relaxed mt-1.5">
              Consórcio é seguro, regulado pelo Banco Central. Você pode comprar
              sem sorteio via lances — oferecendo uma taxa maior para antecipar
              seu crédito. Sem risco, só opções.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
