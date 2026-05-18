'use client';

import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '+500',    label: 'Clientes atendidos', desc: 'Pessoas orientadas na escolha do consórcio certo.' },
  { value: '10 anos', label: 'De experiência',     desc: 'Mercado de crédito e consórcio acompanhado de perto.' },
  { value: '100%',    label: 'Dedicação',          desc: 'Atendimento direto, sem call center e sem intermediários.' },
];

export default function PorQueAdriano() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16 pt-10 pb-14 lg:pt-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 text-center"
        >
          <h2 className="font-display font-bold text-[1.5rem] sm:text-[1.8rem] text-black leading-tight">
            Por que falar com o Adriano?
          </h2>
          <p className="text-[0.92rem] text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
            Uma consultoria que combina experiência de mercado e atendimento
            próximo para te orientar com clareza.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
          }}
        >
          {stats.map(({ value, label, desc }) => (
            <motion.div
              key={label}
              variants={{
                hidden:  { opacity: 0, y: reduced ? 0 : 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className="rounded-xl border border-gray-200/80 bg-[#FAFAFA] px-5 py-6 text-center"
            >
              <div className="text-[1.75rem] font-display font-bold text-brand-red leading-none mb-1.5">
                {value}
              </div>
              <div className="font-display font-bold text-[0.92rem] text-black mb-1">
                {label}
              </div>
              <p className="text-[0.8rem] text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
