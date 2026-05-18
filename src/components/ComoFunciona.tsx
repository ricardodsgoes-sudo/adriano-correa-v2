export default function ComoFunciona() {
  const steps = [
    {
      number: '1',
      title: 'Você me procura',
      description: 'Manda uma mensagem no WhatsApp ou clica no botão de contato. Sem compromisso, sem pressão.'
    },
    {
      number: '2',
      title: 'Conversamos sobre você',
      description: 'Entendo sua situação: quanto precisa, quando precisa, qual é seu perfil financeiro.'
    },
    {
      number: '3',
      title: 'Apresento as opções',
      description: 'Você vê todas as possibilidades: consórcio, crédito, prazos, valores. Tudo transparente.'
    },
    {
      number: '4',
      title: 'Você decide',
      description: 'Com informação em mão, você escolhe o que funciona pra você. Eu apoio em cada passo.'
    },
    {
      number: '5',
      title: 'Fazemos acontecer',
      description: 'Documentação, burocracia, ligações — eu cuido disso. Você só assina e recebe.'
    },
    {
      number: '6',
      title: 'Continuamos conectados',
      description: 'Dúvidas, ajustes, novos planos. Você tem meu contato e eu respondo.'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-display-md font-bold mb-4">
            Como funciona a consultoria
          </h2>
          <p className="text-lg text-gray-700">
            6 passos simples. Nada de surpresa, tudo claro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+12px)] w-12 h-0.5 bg-brand-red opacity-20" />
              )}

              <div className="bg-white p-6 rounded-sm border border-gray-200">
                <div className="w-12 h-12 bg-brand-red text-white rounded-sm flex items-center justify-center font-display font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Pronto para começar? Vamos conversar sem compromisso.
          </p>
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-block"
          >
            Enviar mensagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
