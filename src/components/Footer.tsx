'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const WHATSAPP = 'https://wa.me/554197354371?text=Ol%C3%A1%2C%20Adriano.%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20qual%20op%C3%A7%C3%A3o%20de%20cons%C3%B3rcio%20faz%20mais%20sentido%20para%20o%20meu%20objetivo.';
const INSTAGRAM = 'https://www.instagram.com/adriano_ademicon/';
const EMAIL = 'investcon.credito.sul@gmail.com';

/* ── Ícones outline (Lucide) ── */
type IconProps = { size?: number };
const base = (size = 22) => ({
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

const TargetIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BriefcaseIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
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

const ChatIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M16 12h.01" />
  </svg>
);

const MailIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppGlyph = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const LandmarkIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const UsersIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CoinIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const CalendarIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const TrophyIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const LockIcon = ({ size }: IconProps) => (
  <svg {...base(size)}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* ── Dados ── */
const navegacao = [
  { Icon: UsersIcon,     label: 'Sobre o Consultor',   id: 'consorcio' },
  { Icon: ChartIcon,     label: 'Consórcio x Crédito',  id: 'consorcio-credito' },
  { Icon: BriefcaseIcon, label: 'Serviços',             id: 'o-que-faco' },
  { Icon: ChatIcon,      label: 'Contato',              id: 'contato' },
];

const confianca = [
  {
    Icon: LandmarkIcon,
    title: 'Processo regulado',
    desc: 'Consórcio com administradora fiscalizada e autorizada pelo Banco Central do Brasil.',
  },
  {
    Icon: UsersIcon,
    title: 'Apoio em todas as etapas',
    desc: 'Do planejamento à contemplação, você tem suporte consultivo em cada passo.',
  },
];

const beneficios = [
  { Icon: ShieldIcon,   label: 'Sem juros' },
  { Icon: CoinIcon,     label: 'Sem entrada' },
  { Icon: CalendarIcon, label: 'Parcelas que cabem no seu planejamento' },
  { Icon: TargetIcon,   label: 'Liberdade para escolher o melhor momento' },
  { Icon: TrophyIcon,   label: 'Inteligência para conquistar mais' },
];

export default function Footer() {
  const reduced = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0c] text-white">
      {/* brilho decorativo no canto */}
      <span
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-red/20 blur-[120px] pointer-events-none"
      />


      <div className="relative max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">

        {/* ── 4 colunas ── */}
        <motion.div
          className="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_1.1fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Coluna 1 — marca */}
          <motion.div variants={fadeUp}>
            <div className="mb-5">
              <Image
                src="/logo02.png"
                alt="Adriano Correa — Consultor Ademicon"
                height={44}
                width={180}
                className="object-contain"
              />
            </div>

            <p className="text-[0.88rem] text-gray-400 leading-relaxed max-w-[300px] text-pretty">
              Consultoria de consórcios para quem quer conquistar carro, imóvel
              ou serviços com planejamento, clareza e atendimento direto.
            </p>

            <span className="block h-[3px] w-9 rounded-full bg-brand-red mt-5 mb-5" />

            <div className="flex items-start gap-2.5 mb-6">
              <span className="text-brand-red shrink-0 mt-0.5">
                <ShieldIcon size={20} />
              </span>
              <p className="text-[0.82rem] text-gray-300 leading-snug">
                Atendimento consultivo,
                <br />
                sem compromisso e sem pressão.
              </p>
            </div>

            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-red text-white font-semibold text-sm px-5 py-3 transition-[box-shadow] duration-200 hover:shadow-[0_14px_30px_-8px_rgba(255,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c]"
              whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduced ? {} : { y: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            >
              <WhatsAppGlyph size={18} />
              Conversar no WhatsApp
              <ArrowIcon />
            </motion.a>
          </motion.div>

          {/* Coluna 2 — navegação */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-brand-red">
                <TargetIcon size={20} />
              </span>
              <h3 className="font-display font-bold text-[0.82rem] tracking-[0.14em] uppercase">
                Navegação
              </h3>
            </div>
            <ul>
              {navegacao.map(({ Icon, label, id }, i) => (
                <li key={label} className={i > 0 ? 'border-t border-white/[0.07]' : ''}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="group flex items-center gap-3 w-full py-3 text-left min-h-[44px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  >
                    <span className="text-brand-red shrink-0">
                      <Icon size={20} />
                    </span>
                    <span className="text-[0.86rem] text-gray-300 transition-colors duration-200 group-hover:text-white">
                      {label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3 — atendimento */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-brand-red">
                <ChatIcon size={20} />
              </span>
              <h3 className="font-display font-bold text-[0.82rem] tracking-[0.14em] uppercase">
                Atendimento
              </h3>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                { Icon: WhatsAppGlyph, title: 'WhatsApp', sub: 'Fale direto com o Adriano', href: WHATSAPP, ext: true },
                { Icon: MailIcon, title: 'Email', sub: EMAIL, href: `mailto:${EMAIL}`, ext: false },
                { Icon: InstagramIcon, title: 'Instagram', sub: '@adriano.ademicon', href: INSTAGRAM, ext: true },
              ].map(({ Icon, title, sub, href, ext }) => (
                <li key={title}>
                  <a
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.06] text-white flex items-center justify-center transition-colors duration-200 group-hover:bg-brand-red">
                      <Icon size={19} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[0.88rem] font-semibold text-white">
                        {title}
                      </span>
                      <span className="block text-[0.78rem] text-gray-400 transition-colors duration-200 group-hover:text-gray-300">
                        {sub}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

          </motion.div>

          {/* Coluna 4 — confiança */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-brand-red">
                <ShieldIcon size={20} />
              </span>
              <h3 className="font-display font-bold text-[0.82rem] tracking-[0.14em] uppercase">
                Confiança e segurança
              </h3>
            </div>

            <ul className="flex flex-col gap-5">
              {confianca.map(({ Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.06] text-white flex items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-[0.88rem] font-semibold text-white leading-snug">
                      {title}
                    </p>
                    <p className="text-[0.78rem] text-gray-400 leading-relaxed mt-1 text-pretty">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Faixa de benefícios ── */}
        <motion.div
          className="mt-14 pt-9 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {beneficios.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-3 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-brand-red shrink-0">
                <Icon size={24} />
              </span>
              <p className="text-[0.8rem] text-gray-300 leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="relative border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-5 flex flex-col items-center gap-2 text-center">
          <p className="text-[0.72rem] text-gray-500 leading-relaxed">
            Este site apresenta o atendimento consultivo de Adriano Correa e não substitui os canais oficiais da Ademicon.
          </p>
          <p className="flex items-center gap-2 text-[0.78rem] text-gray-400">
            <LockIcon size={15} />
            © {year} Adriano Correa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
