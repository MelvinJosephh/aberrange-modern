/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Keeps dark mode toggle via class
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',  // $breakpoint-xs
      sm: '768px',  // $breakpoint-sm
      md: '1024px', // $breakpoint-md
      lg: '1280px', // $breakpoint-lg
      xl: '1440px', // $breakpoint-xl
    },
    extend: {
      // Border Radius
      borderRadius: {
        lg: 'var(--radius)',         // Custom CSS variable
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'custom-sm': '4px',          // $border-radius-sm
        'custom-md': '8px',          // $border-radius-md
        'custom-lg': '12px',         // $border-radius-lg
      },
      // Colors (aligned with your SCSS)
      colors: {
        primary: '#6A0DAD',          // $primary-color (corrected from your SCSS)
        'primary-light': '#7A1EBF',  // $primary-color-light (approx +10%)
        'primary-dark': '#5A0C9B',   // $primary-color-dark (approx -10%)
        secondary: '#F5F5F5',        // $secondary-color (corrected from your SCSS)
        'secondary-dark': '#D4D4D4', // $secondary-color-dark (approx -10%)
        neutral: '#333333',          // $neutral-color
        'neutral-light': '#4D4D4D',  // $neutral-color-light (already matches)
        'text-primary': '#333333',   // $text-primary
        'text-secondary': '#4D4D4D', // $text-secondary (mapped to neutral-light)
        'text-light': '#D4D4D4',     // $text-light (mapped to secondary-dark)
      },
      // Font Families
      fontFamily: {
        primary: ['posterama', 'sans-serif'], // $font-primary
        secondary: ['posterama', 'sans-serif'],     // $font-secondary
      },
      // Font Sizes
      fontSize: {
        base: '16px',    // $font-size-base
        small: '14px',   // $font-size-small
        medium: '18px',  // $font-size-medium
        large: '22px',   // $font-size-large
        xlarge: '40px',  // $font-size-xlarge
        xxlarge: '48px', // $font-size-xxlarge
      },
      // Font Weights
      fontWeight: {
        light: 300,    // $font-weight-light
        regular: 400,  // $font-weight-regular
        medium: 500,   // $font-weight-medium
        bold: 700,     // $font-weight-bold
      },
      // Line Heights
      lineHeight: {
        base: 1.5,    // $line-height-base
        tight: 1.25,  // $line-height-tight
        loose: 1.75,  // $line-height-loose
      },
      // Spacing
      spacing: {
        xxs: '0.25rem', // 4px, $spacing-xxs
        xs: '0.5rem',   // 8px, $spacing-xs
        sm: '0.75rem',  // 12px, $spacing-sm
        md: '1rem',     // 16px, $spacing-md
        lg: '1.5rem',   // 24px, $spacing-lg
        xl: '2rem',     // 32px, $spacing-xl
        xxl: '3rem',    // 48px, $spacing-xxl
      },
      // Shadows
      boxShadow: {
        sm: '0 1px 2px rgba(51, 51, 51, 0.1)',   // $shadow-sm
        md: '0 4px 6px rgba(51, 51, 51, 0.1)',   // $shadow-md
        lg: '0 10px 15px rgba(51, 51, 51, 0.1)', // $shadow-lg
      },
      // Transitions
      transitionDuration: {
        fast: '200ms',    // $transition-duration-fast
        medium: '300ms',  // $transition-duration-medium
        slow: '500ms',    // $transition-duration-slow
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')], // Keep your animation plugin
};