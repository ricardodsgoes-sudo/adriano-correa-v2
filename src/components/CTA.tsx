export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-brand-red text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-display-md font-bold mb-6">
          Saia do estigma. Conheça de verdade.
        </h2>

        <p className="text-lg md:text-body-lg mb-8 leading-relaxed opacity-90">
          Consórcio não é sorteio. É uma opção inteligente de crédito que você controla. Sem juros altos, sem pressão. Só informação clara e opções reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-brand-red font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-200 text-center"
          >
            Falar comigo agora
          </a>
          <a
            href="mailto:contato@adrianoademicon.com"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-red-700 transition-colors duration-200 text-center"
          >
            Enviar email
          </a>
        </div>

        <p className="text-sm opacity-75 mt-8">
          Atendo Curitiba, São Paulo e região. Consultoria 100% online também!
        </p>
      </div>
    </section>
  );
}
