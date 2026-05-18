export default function Servicos() {
  const servicos = [
    {
      icon: '🚗',
      title: 'Consórcio de Carro',
      description: 'Carro novo ou usado com mensalidades low-cost e sem juros altos. Você controla o tempo.'
    },
    {
      icon: '🏠',
      title: 'Consórcio de Casa',
      description: 'Imóvel com crédito acessível. Condições que fazem sentido pro seu bolso e planejamento.'
    },
    {
      icon: '💳',
      title: 'Crédito Facilitado',
      description: 'Não quer consórcio? Ajudo você a encontrar as melhores taxas de crédito no mercado.'
    },
    {
      icon: '📊',
      title: 'Análise de Perfil',
      description: 'Entendo sua situação financeira e recomendo a opção que faz mais sentido pra você.'
    },
    {
      icon: '✅',
      title: 'Consultoria Completa',
      description: 'Do primeiro contato até a liberação do crédito. Você não fica sozinho nesse processo.'
    },
    {
      icon: '🎯',
      title: 'Follow-up e Suporte',
      description: 'Continuamos conectados. Dúvidas, ajustes, novos planos — sempre disponível.'
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-display-md font-bold mb-4">
            O que eu faço
          </h2>
          <p className="text-lg text-gray-700">
            Consultoria direto ao ponto. Seu crédito, seu jeito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-sm hover:border-brand-red hover:shadow-md transition-all duration-200"
            >
              <div className="text-4xl mb-4">{servico.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2">
                {servico.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {servico.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
