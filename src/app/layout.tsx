import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Adriano Correa - Consultoria de Consórcios',
  description: 'Consultoria especializada em consórcios. Entenda as diferenças entre consórcio e crédito tradicional. Facilitação de crédito para carro, casa e outras compras.',
  keywords: 'consórcio, crédito, carro, casa, consultoria, Curitiba, São Paulo',
  openGraph: {
    title: 'Adriano Correa - Consultoria de Consórcios',
    description: 'Consultoria especializada em consórcios. Entenda as diferenças entre consórcio e crédito.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
