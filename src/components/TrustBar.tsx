'use client';

import { motion, useReducedMotion } from 'framer-motion';

const svg = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const ShieldIcon = () => (
  <svg {...svg}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const MapPinIcon = () => (
  <svg {...svg}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg {...svg}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MessageIcon = () => (
  <svg {...svg}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const items = [
  { Icon: ShieldIcon, label: 'Representante Oficial', sub: 'Grupo Ademicon' },
  { Icon: MapPinIcon, label: 'Curitiba e São Paulo', sub: 'Atendimento presencial e remoto' },
  { Icon: UsersIcon,  label: '+500 clientes',        sub: 'Atendidos com sucesso' },
  { Icon: MessageIcon,label: 'Atendimento direto',   sub: 'Sem call center, fala com o Adriano' },
];

export default function TrustBar() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#F7F7F8] border-y border-gray-200/70">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
          }}
        >
          {items.map(({ Icon, label, sub }, i) => (
            <motion.div
              key={label}
              variants={{
                hidden:   { opacity: 0, y: reduced ? 0 : 12 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className={`${i === 1 || i === 3 ? 'hidden sm:flex' : 'flex'} items-center gap-3 lg:px-8 lg:first:pl-0 lg:last:pr-0`}
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                <Icon />
              </span>
              <div>
                <p className="font-display font-bold text-[0.88rem] text-black leading-tight">{label}</p>
                <p className="text-[0.75rem] text-gray-500 leading-snug mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
