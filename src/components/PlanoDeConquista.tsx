'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/* ───────────────────────────────────────────────
   Troque aqui pelo número correto do WhatsApp.
   Formato: 55 + DDD + número (somente dígitos).
─────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '554197354371';

type Step = {
  key: string;
  question: string;
  options: string[];
};

const STEPS: Step[] = [
  {
    key: 'objetivo',
    question: 'Qual é o seu objetivo?',
    options: ['Imóvel', 'Veículo', 'Serviço', 'Crédito', 'Investimento'],
  },
  {
    key: 'valor',
    question: 'Qual valor aproximado da carta de crédito?',
    options: [
      'Até R$ 100 mil',
      'De R$ 100 mil a R$ 300 mil',
      'De R$ 300 mil a R$ 700 mil',
      'Acima de R$ 700 mil',
      'Ainda não sei',
    ],
  },
  {
    key: 'prazo',
    question: 'Quando você pretende usar esse crédito?',
    options: ['Curto prazo', 'Médio prazo', 'Longo prazo', 'Ainda estou avaliando'],
  },
  {
    key: 'lance',
    question: 'Você já tem algum valor pensado para lance?',
    options: ['Sim', 'Não', 'Talvez', 'Quero entender melhor'],
  },
  {
    key: 'perfil',
    question: 'Qual seu perfil hoje?',
    options: [
      'Comprar para uso próprio',
      'Investir em patrimônio',
      'Trocar de bem',
      'Quitar financiamento',
      'Planejar uma compra futura',
    ],
  },
];

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
);

const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

type Props = {
  open: boolean;
  onClose: () => void;
  initialGoal?: string | null;
};

export default function PlanoDeConquista({ open, onClose, initialGoal }: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const reset = useCallback(() => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }, []);

  // Ao abrir, aplica objetivo pré-selecionado vindo dos cards da hero.
  useEffect(() => {
    if (!open) return;
    if (initialGoal) {
      setAnswers({ objetivo: initialGoal });
      setIndex(1);
      setFinished(false);
    } else {
      reset();
    }
  }, [open, initialGoal, reset]);

  // Trava o scroll do body e fecha com ESC.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const select = (value: string) => {
    const step = STEPS[index];
    setAnswers((prev) => ({ ...prev, [step.key]: value }));
    if (index < STEPS.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const goBack = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  const whatsappHref = () => {
    const msg =
      `Olá, Adriano. Fiz o Plano de Conquista no site e quero uma análise de consórcio.\n\n` +
      `Objetivo: ${answers.objetivo ?? '-'}\n` +
      `Carta aproximada: ${answers.valor ?? '-'}\n` +
      `Prazo desejado: ${answers.prazo ?? '-'}\n` +
      `Lance: ${answers.lance ?? '-'}\n` +
      `Perfil: ${answers.perfil ?? '-'}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const step = STEPS[index];
  const progress = finished ? 100 : (index / STEPS.length) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Plano de Conquista"
            className="relative w-full max-w-[520px] max-h-[90dvh] overflow-y-auto bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            {/* Barra de progresso */}
            <div className="h-1 w-full bg-gray-100 sticky top-0 z-10">
              <motion.div
                className="h-full bg-brand-red"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="p-6 sm:p-8">
              {/* Cabeçalho */}
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <span className="inline-block text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-brand-red mb-1">
                    Plano de Conquista
                  </span>
                  <p className="text-[0.82rem] text-gray-500 leading-snug">
                    Responda 5 perguntas rápidas e receba uma análise personalizada
                    para seu objetivo.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Fechar diagnóstico"
                  className="shrink-0 -mt-1 -mr-1 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {!finished ? (
                    <motion.div
                      key={`q-${index}`}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-[0.72rem] font-semibold text-gray-400 mb-2">
                        Pergunta {index + 1} de {STEPS.length}
                      </p>
                      <h3 className="font-display font-bold text-[1.18rem] text-black leading-snug mb-5">
                        {step.question}
                      </h3>

                      <div className="flex flex-col gap-2.5">
                        {step.options.map((opt) => {
                          const active = answers[step.key] === opt;
                          return (
                            <button
                              key={opt}
                              onClick={() => select(opt)}
                              className={`group flex items-center justify-between text-left w-full px-4 py-3.5 rounded-xl border text-[0.92rem] font-medium transition-all duration-150 ${
                                active
                                  ? 'border-brand-red bg-brand-red/5 text-black'
                                  : 'border-gray-200 text-gray-700 hover:border-brand-red hover:bg-brand-red/5'
                              }`}
                            >
                              <span>{opt}</span>
                              <span
                                className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                  active
                                    ? 'border-brand-red bg-brand-red text-white'
                                    : 'border-gray-300 text-transparent group-hover:border-brand-red'
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={11}
                                  height={11}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={3.5}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {index > 0 && (
                        <button
                          onClick={goBack}
                          className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-gray-500 hover:text-brand-red transition-colors"
                        >
                          <BackIcon />
                          Voltar
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="w-14 h-14 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                        <CheckIcon />
                      </div>
                      <h3 className="font-display font-bold text-[1.25rem] text-black leading-snug mb-3">
                        Seu plano precisa de uma análise personalizada.
                      </h3>
                      <p className="text-[0.92rem] text-gray-600 leading-relaxed mb-4">
                        Pelo seu perfil, o melhor próximo passo é falar com o
                        Adriano. Ele pode avaliar seu objetivo, o valor da carta, o
                        momento ideal e uma possível estratégia de lance com base
                        nas condições atualizadas da Ademicon.
                      </p>

                      {/* Resumo das respostas */}
                      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 mb-4">
                        {[
                          ['Objetivo', answers.objetivo],
                          ['Carta aproximada', answers.valor],
                          ['Prazo desejado', answers.prazo],
                          ['Lance', answers.lance],
                          ['Perfil', answers.perfil],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex justify-between gap-4 py-1 text-[0.82rem]"
                          >
                            <span className="text-gray-500">{label}</span>
                            <span className="font-medium text-black text-right">
                              {value || '-'}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[0.74rem] text-gray-400 leading-relaxed mb-5">
                        A simulação final depende das condições comerciais vigentes
                        e da análise individual do seu perfil. Este diagnóstico não
                        representa promessa de contemplação ou aprovação.
                      </p>

                      <a
                        href={whatsappHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-brand-red text-white font-semibold rounded-xl transition-all duration-200 hover:bg-red-700 hover:shadow-[0_14px_30px_-8px_rgba(255,0,0,0.55)] active:scale-[0.98]"
                      >
                        <WhatsAppIcon />
                        Receber análise no WhatsApp
                      </a>

                      <button
                        onClick={reset}
                        className="mt-3 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-gray-500 hover:text-brand-red transition-colors"
                      >
                        <BackIcon />
                        Refazer diagnóstico
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
