export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-display font-bold">
                Adriano <span className="text-brand-red">Ademicon</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Consultoria de consórcios. Educação, facilitação e suporte direto.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('consorcio');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Sobre consórcio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicos');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('como-funciona');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Como funciona
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@adrianoademicon.com"
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/adrianoademicon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Atendo</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🏙️ Curitiba</li>
              <li>🏙️ São Paulo</li>
              <li>🌐 Online Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {currentYear} Adriano Ademicon. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-red transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
