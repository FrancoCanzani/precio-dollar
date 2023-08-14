import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dollar-50': '#effef6',
      'dollar-100': '#d9ffeb',
      'dollar-200': '#b5fdd7',
      'dollar-300': '#7cf9b8',
      'dollar-400': '#53ee9e',
      'dollar-500': '#13d471',
      'dollar-600': '#09b05b',
      'dollar-700': '#0b8a49',
      'dollar-800': '#0f6c3d',
      'dollar-900': '#0e5935',
      'dollar-950': '#01321b',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
