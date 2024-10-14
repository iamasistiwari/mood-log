/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			love: '#dbd0d9',
			fun: '#f5b0e9',
			happiness: '#eb79d8',
			confidence: '#cc0ea1',
			optimistic: '#6d1f8d',
			strong: '#3c228c',
			hope: '#4637d8',
			motivated: '#add9f7',
			ok: '#65b8ef',
			calm: '#0196ff',
			relaxed: '#a0f773',
			relived: '#00c802',
			impatient: '#119b50',
			frustrated: '#fbf92b',
			overwhelmed: '#e5e606',
			doubt: '#feb200',
			worry: '#ff7e00',
			difficult: '#d84a0a',
			anger: '#f33b3b',
			hate: '#ea0b0e',
			depressed: '#474141'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
