/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#0C0A3E",
        primary: "#7B1E7A",
        secondary: "#B33F62",
        alternate: "#F9564F",
        base: "#FDFBF1",
        tan: "#efebe6",
        "pastel-yellow" : "#f6fba3",
        lilac : "#fbc5ff",
        "ruby-red": "#df3424",
        "baby-blue": "#b5eefd", 
        "emerald-green": "#167d19",
        violet:"#a26cef", 
        tangerine: "#f28500",
        "decadent-blue" : "#2d41f6",
        "mustard-yellow" : "#ffca0c",
        "midnight-blue" : "#220a74",
        "cassis-pink" : "#f65b5b"
      },
      fontFamily: {
        glacialRegular: ['var(--font-glacialRegular)'],
        glacialItalic: ['var(--font-glacialItalic)'],
        glacialBold: ['var(--font-glacialBold)'],
      },
    },
  },
  safelist: [
    'bg-base',
    'bg-background',
    'bg-foreground',
    'bg-dark',
    'bg-primary',
    'bg-secondary',
    'bg-alternate',
    'bg-white',
    'bg-tan',
    "bg-pastel-yellow",
    "bg-lilac",
    "bg-ruby-red",
    "bg-baby-blue", 
    "bg-emerald-green",
    "bg-violet", 
    "bg-tangerine",
    "bg-decadent-blue",
    "bg-mustard-yellow",
    "bg-midnight-blue",
    "bg-cassis-pink",
    'border-base',
    'border-background',
    'border-foreground',
    'border-dark',
    'border-primary',
    'border-secondary',
    'border-alternate',
    'border-white',
    'border-tan',
    'mb-4', 
    'text-lg',
    'grid', 
    'grid-cols-2',
    'grid-rows-2',
    'grid-flow-col',
    'underline'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
