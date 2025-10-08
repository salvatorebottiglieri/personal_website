/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    // La configurazione standard per Next.js e Tailwind
    // Si noti che usiamo solo 'tailwindcss' (il pacchetto base)
    tailwindcss: {},
    autoprefixer: {},
  },
};
