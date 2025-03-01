/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      screens: {
        xs: "480px",  
        sm: "768px",  
        md: "1024px", 
        lg: "1280px", 
        xl: "1440px", 
      },
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
        colors: {
          primary: '#F5F5F5',
          'primary-dark': '#4D0A7A',
          secondary:  '#6A0DAD',
          'secondary-dark': '#E0E0E0',
          neutral: '#333333',
          'neutral-light': '#4D4D4D',
        },
    	}
    },
  
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
  };
  