'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/554197354371?text=Ol%C3%A1%2C%20Adriano.%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20qual%20op%C3%A7%C3%A3o%20de%20cons%C3%B3rcio%20faz%20mais%20sentido%20para%20o%20meu%20objetivo.';

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

const GemIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);

const HomeIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const CarIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const PlaneIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const ChartIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 16v5" />
    <path d="M16 14v7" />
    <path d="M20 10v11" />
    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
    <path d="M4 18v3" />
    <path d="M8 14v7" />
  </svg>
);

const FileCheckIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m3 15 2 2 4-4" />
  </svg>
);

const HeadsetIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

const UserIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

const TargetIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ShieldIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const StarIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.39 21.99a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.153 10.776a.53.53 0 0 1 .294-.904l5.165-.756a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* ── Dados ── */
const featuredList = [
  'Análise do seu objetivo e perfil financeiro',
  'Escolha do grupo e administradora ideais',
  'Estratégia de lance personalizada',
  'Acompanhamento até e após a contemplação',
];

const imageCards = [
  {
    Icon: HomeIcon,
    src: '/card-imoveis.png',
    title: 'Consórcio de Imóveis Ademicon',
    desc: 'Conquiste o imóvel ideal para morar ou investir com planejamento e segurança.',
  },
  {
    Icon: CarIcon,
    src: '/card-veiculos.png',
    title: 'Consórcio de Veículos Ademicon',
    desc: 'Seu próximo carro com parcelas planejadas e condições que fazem sentido para você.',
  },
  {
    Icon: PlaneIcon,
    src: '/card-servicos.png',
    title: 'Consórcio de Serviços Ademicon',
    desc: 'Realize planos, viagens, festas e projetos com crédito inteligente e sem juros.',
  },
];

const iconCards = [
  {
    Icon: ChartIcon,
    title: 'Estratégia de Lance',
    desc: 'Montamos a melhor estratégia para aumentar suas chances de contemplação.',
  },
  {
    Icon: FileCheckIcon,
    title: 'Documentação e uso do crédito',
    desc: 'Orientação completa sobre documentos e o uso seguro do seu crédito.',
  },
  {
    Icon: HeadsetIcon,
    title: 'Acompanhamento direto',
    desc: 'Estou com você em cada etapa, do início ao pós-contemplação, com atendimento humanizado.',
  },
];

const diferenciais = [
  { Icon: UserIcon,   title: 'Atendimento consultivo',    desc: 'Focado em entender você.' },
  { Icon: TargetIcon, title: 'Estratégia personalizada',  desc: 'Soluções sob medida para seu objetivo.' },
  { Icon: ShieldIcon, title: 'Suporte até a contemplação', desc: 'Presença ativa em cada etapa.' },
  { Icon: StarIcon,   title: 'Foco no seu objetivo',      desc: 'O que importa é a sua conquista.' },
];

export default function OQueEuFaco() {
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
    <section id="o-que-faco" className="bg-[#FBFBFB] py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

          {/* ── COLUNA ESQUERDA: cabeçalho + card destaque ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
                O que eu faço
              </span>
              <span className="h-px w-12 bg-brand-red" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-black mb-5 text-balance"
              style={{ fontSize: 'clamp(1.9rem, 3.1vw, 2.85rem)', lineHeight: 1.12 }}
            >
              Consultoria pensada para o{' '}
              <span className="text-brand-red">seu objetivo.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[0.97rem] text-gray-600 leading-relaxed mb-8 max-w-[440px]"
            >
              Soluções Ademicon com orientação direta do Adriano, do
              planejamento à contemplação.
            </motion.p>

            {/* Card destaque */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col flex-1 rounded-3xl border border-brand-red/15 bg-gradient-to-b from-[#FFF5F5] to-[#FFE9E9] shadow-[0_22px_55px_-28px_rgba(255,0,0,0.45)] p-6 md:p-7"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <span className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <GemIcon size={22} />
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display font-bold text-black text-[1.18rem] leading-tight">
                    Consultoria Completa
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-red text-white text-[0.62rem] font-bold uppercase tracking-[0.07em]">
                    Mais procurado
                  </span>
                </div>
              </div>

              <p className="text-[0.88rem] text-gray-600 leading-relaxed mb-5 text-pretty">
                Uma consultoria 360° para você conquistar sua contemplação e
                utilizar seu crédito com o máximo de vantagem.
              </p>

              <ul className="flex flex-col gap-3 mb-7">
                {featuredList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-[18px] h-[18px] mt-0.5 shrink-0 rounded-full bg-brand-red text-white flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    <span className="text-[0.86rem] text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red text-white font-semibold text-sm px-5 py-3.5 shadow-lg shadow-brand-red/25 transition-[box-shadow] duration-200 hover:shadow-[0_14px_30px_-8px_rgba(255,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
                whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 16 }}
              >
                Quero minha consultoria <ArrowIcon />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── COLUNA DIREITA: grade de 6 cards ── */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* 3 cards com imagem */}
            {imageCards.map(({ Icon, src, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={reduced ? {} : { y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col rounded-2xl bg-white border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] transition-shadow duration-200 hover:shadow-[0_22px_44px_-24px_rgba(0,0,0,0.5)]"
              >
                <div className="relative h-40 md:h-44">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover rounded-t-2xl ring-1 ring-inset ring-black/10"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                  <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white text-brand-red flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                    <Icon size={22} />
                  </span>
                </div>
                <div className="pt-9 px-5 pb-6 text-center">
                  <h3 className="font-display font-bold text-[0.98rem] text-black leading-snug text-balance">
                    {title}
                  </h3>
                  <p className="text-[0.82rem] text-gray-500 leading-relaxed mt-2 text-pretty">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* 3 cards com ícone */}
            {iconCards.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={reduced ? {} : { y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="hidden sm:flex flex-col items-center text-center rounded-2xl bg-white border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] transition-shadow duration-200 hover:shadow-[0_22px_44px_-24px_rgba(0,0,0,0.5)] px-5 py-7"
              >
                <span className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <Icon size={22} />
                </span>
                <h3 className="font-display font-bold text-[0.98rem] text-black leading-snug text-balance">
                  {title}
                </h3>
                <p className="text-[0.82rem] text-gray-500 leading-relaxed mt-2 text-pretty">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Faixa de diferenciais ── */}
        <motion.div
          className="mt-6 rounded-2xl bg-white border border-gray-200/80 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.4)] p-6 md:p-7
                     hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {diferenciais.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex items-center gap-3.5 lg:px-7 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display font-bold text-[0.88rem] text-black leading-tight">
                  {title}
                </p>
                <p className="text-[0.78rem] text-gray-500 leading-snug mt-0.5">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
