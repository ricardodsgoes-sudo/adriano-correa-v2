export default function ConsorcioVsCredito() {
  const features = [
    {
      title: 'Consórcio',
      items: [
        'Você faz parte de um grupo de pessoas',
        'Cada um paga mensalidades para um fundo comum',
        'O dinheiro é liberado por sorteio ou lance',
        'Juros baixos ou zero',
        'Possibilidade de antecipar o crédito',
        'Administradora responsável pelo grupo'
      ],
      highlight: true
    },
    {
      title: 'Crédito tradicional',
      items: [
        'Você pega emprestado direto do banco',
        'Você paga juros + parcelas fixas',
        'Aprovação rápida, mas com custo mais alto',
        'Juros podem ser de 2% a 6% ao mês',
        'Você começa a pagar juros no dia 1',
        'Banco é credenciador e cobrador'
      ],
      highlight: false
    }
  ];

  return (
    <section id="consorcio" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-display-md font-bold mb-4">
            Consórcio x Crédito tradicional
          </h2>
          <p className="text-lg text-gray-700">
            Entenda as diferenças e por que consórcio é uma opção inteligente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-sm transition-all ${
                feature.highlight
                  ? 'bg-white border-2 border-brand-red shadow-md'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                {feature.title}
              </h3>

              <ul className="space-y-4">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3">
                    <span className={`inline-block w-2 h-2 mt-2 flex-shrink-0 rounded-full ${
                      feature.highlight ? 'bg-brand-red' : 'bg-gray-300'
                    }`} />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-red-50 rounded-sm border border-brand-red">
          <p className="text-center text-gray-900 font-semibold">
            ⚠️ <span className="text-brand-red">Mito:</span> &ldquo;Consórcio é sorteio e é arriscado.&rdquo;
          </p>
          <p className="text-center text-gray-700 mt-3">
            Consórcio é seguro, regulado pelo Banco Central. Você pode comprar sem sorteio via lances — oferecendo uma taxa maior para antecipar seu crédito. Sem risco, só opções.
          </p>
        </div>
      </div>
    </section>
  );
}
