/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				'primary': '#fc5546',
				'secondary': '#627792',
				'on-primary': '#f9e0df',
				'on-secondary': '#e7ebf0',
				'highlight': '#1a1a1a',
				'muted': '#777'
			  },
    	}
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
  };
  