import './globals.css'; // Importa il CSS globale (che include Tailwind)
import { Inter } from 'next/font/google';
import React from 'react';

// Configura il font Inter per l'ottima leggibilità
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Dinamico ML Engineer - [Il Tuo Nome]',
  description: 'Portfolio professionale e dinamico di un Machine Learning Engineer con focus su MLOps e sistemi scalabili.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // CRUCIALE: L'aggiunta di className="dark" forza l'uso dei colori scuri del tema
    <html lang="it" className="dark"> 
      {/* bg-primary: Sfondo principale. text-white: Testo principale chiaro. */}
      <body className={`${inter.className} bg-primary text-white min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}