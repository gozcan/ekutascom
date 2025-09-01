/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Gövde (body)
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Başlıklar için yardımcı sınıf
        heading: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Var olan 'blue' paletinin yalnız 600/700 tonlarını override ediyoruz.
      // Böylece Header gibi "bg-blue-600" kullanan yerler anında daha koyu 'navy' görünür.
      colors: {
        blue: {
          600: "#0f172a", // navy benzeri (slate-900 tonunda koyu mavi)
          700: "#0B1324",
        },
        // Vurgu için sıcak amber tonu: ileride buton/rozetlerde kullanırız
        amber: {
          500: "#F59E0B",
          600: "#D97706",
        },
      },
      // İsteğe bağlı: container varsayılanları (geniş içerik nefes alsın)
      container: {
        center: true,
        padding: "1rem",
        screens: { lg: "1120px", xl: "1200px", "2xl": "1320px" },
      },
    },
  },
  plugins: [],
}
