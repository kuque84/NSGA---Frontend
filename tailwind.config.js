/** @type {import('tailwindcss').Config} */

import { info } from 'autoprefixer';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06B6D4',
        secondary: '#1e40af',
        danger: '#dc2626',
        info: '#2563eb',
        success: '#059669',
        warning: '#d97706',
        },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

