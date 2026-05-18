'use client';

import { motion, useReducedMotion } from 'framer-motion';

const WHATSAPP = 'https://wa.me/554197354371';

/* ── Ícones outline premium (Lucide) ── */
type IconProps = { size?: number };
const base = (size = 24) => ({
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

const ShieldIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HeadsetIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

const TargetIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const UserIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

const FileChartIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M8 18v-2" />
    <path d="M12 18v-4" />
    <path d="M16 18v-6" />
  </svg>
);

const CircleCheckIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ChatIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M16 12h.01" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckMini = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
);

/* ── Dados ── */
const garantias = [
  {
    Icon: ShieldIcon,
    title: 'Processo regulado',
    desc: 'Consórcio com administradoras fiscalizadas e autorizadas pelo Banco Central.',
  },
  {
    Icon: HeadsetIcon,
    title: 'Apoio consultivo',
    desc: 'Do planejamento à contemplação, com orientação em cada etapa.',
  },
  {
    Icon: TargetIcon,
    title: 'Sem juros e sem entrada',
    desc: 'Uma forma planejada de conquistar bens e serviços com mais estratégia.',
  },
];

const diferenciais = [
  { Icon: UserIcon,        label: 'Atendimento consultivo' },
  { Icon: FileChartIcon,   label: 'Análise personalizada' },
  { Icon: ShieldIcon,      label: 'Suporte até a contemplação' },
  { Icon: CircleCheckIcon, label: 'Decisão com clareza' },
];

export default function CTA() {
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: 0.05 } },
  };

  return (
    <section id="contato" className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Topo: heading + 3 garantias ── */}
        <motion.div
          className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Esquerda */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
                Confiança para decidir
              </span>
              <span className="h-px w-10 bg-brand-red" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-black mb-5 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.65rem)', lineHeight: 1.14 }}
            >
              Planeje sua conquista com{' '}
              <span className="text-brand-red">segurança.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[0.97rem] text-gray-600 leading-relaxed text-pretty"
            >
              Você não precisa decidir no escuro. Com atendimento consultivo, o
              Adriano ajuda você a entender as opções de consórcio, comparar
              possibilidades e escolher o caminho mais inteligente para seu
              carro, imóvel ou projeto.
            </motion.p>
          </div>

          {/* Direita: 3 cards de garantia */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
            {garantias.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={reduced ? {} : { y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-2xl bg-white border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] transition-shadow duration-200 hover:shadow-[0_22px_44px_-24px_rgba(0,0,0,0.5)] p-6"
              >
                <span className="w-11 h-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <Icon size={22} />
                </span>
                <h3 className="font-display font-bold text-[0.95rem] text-black leading-snug text-balance">
                  {title}
                </h3>
                <span className="block h-[3px] w-7 rounded-full bg-brand-red mt-2 mb-3" />
                <p className="text-[0.82rem] text-gray-500 leading-relaxed text-pretty">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Banner WhatsApp ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden mt-12 rounded-3xl bg-gradient-to-br from-[#ff2424] to-[#cc0000] text-white p-8 md:p-10"
        >
          {/* brilho decorativo */}
          <span
            aria-hidden="true"
            className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-7">
            <div className="flex items-start sm:items-center gap-4">
              <span className="w-14 h-14 shrink-0 rounded-full bg-white text-brand-red flex items-center justify-center shadow-md">
                <ChatIcon size={26} />
              </span>
              <div>
                <h3 className="font-display font-bold text-[1.3rem] md:text-[1.5rem] leading-tight text-balance">
                  Pronto para planejar sua conquista?
                </h3>
                <p className="text-[0.9rem] text-white/85 leading-relaxed mt-1.5 max-w-[440px]">
                  Fale com o Adriano e descubra qual opção faz mais sentido para
                  o seu objetivo.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white text-brand-red font-semibold text-sm px-6 py-3.5 shadow-lg shadow-black/15 transition-shadow duration-200 hover:shadow-[0_16px_34px_-10px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#cc0000]"
                whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
                whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 16 }}
              >
                <WhatsAppIcon />
                Conversar no WhatsApp
                <ArrowIcon />
              </motion.a>
              <span className="flex items-center gap-1.5 text-[0.8rem] text-white/85">
                <CheckMini />
                Atendimento consultivo, sem compromisso e sem pressão.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Faixa de diferenciais ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-6 mt-10 md:divide-x md:divide-gray-200"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {diferenciais.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-3 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="shrink-0 text-brand-red">
                <Icon size={26} />
              </span>
              <p className="font-display font-bold text-[0.86rem] text-black leading-snug">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
