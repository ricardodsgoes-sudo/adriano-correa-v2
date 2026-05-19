import type { Metadata } from 'next';
import { Sora, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  preload: true,
});

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
    <html lang="pt-BR" className={`${sora.variable} ${hanken.variable}`}>
      <body className="bg-white text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
