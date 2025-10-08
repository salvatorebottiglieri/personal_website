import type { Config } from 'tailwindcss';

const config: Config = {
  // CRUCIALE: Imposta Tailwind per usare la classe 'dark'
  darkMode: 'class', 
  
  // CRUCIALE: Scansione dei percorsi dove si usano le classi Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Assicurati che questa riga ci sia
  ],
  theme: {
    extend: {
      // Definizione dei colori personalizzati
      colors: {
        primary: '#0D1A26',    // Sfondo Dark Navy/Black
        secondary: '#1A2937',  // Sfondo per card e container (Dark Slate)
        accent: '#06B6D4',     // Colore di risalto (Cyan/Turquoise)
        gradientStart: '#06B6D4',
        gradientEnd: '#60A5FA',
      },
    },
  },
  plugins: [],
};

export default config;