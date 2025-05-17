/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#f5f3ff',
  				'100': '#ede9fe',
  				'200': '#ddd6fe',
  				'300': '#c4b5fd',
  				'400': '#a78bfa',
  				'500': '#8b5cf6',
  				'600': '#7c3aed',
  				'700': '#6d28d9',
  				'800': '#5b21b6',
  				'900': '#4c1d95',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#e0fafa',
  				'100': '#b3f2f2',
  				'200': '#80e8e8',
  				'300': '#4ddede',
  				'400': '#26d7d7',
  				'500': '#00d0d0',
  				'600': '#00baba',
  				'700': '#009e9e',
  				'800': '#007f7f',
  				'900': '#005f5f',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			neutral: {
  				'50': '#fafafa',
  				'100': '#f4f4f4',
  				'200': '#e1e1e1',
  				'300': '#d0d0d0',
  				'400': '#a8a8a8',
  				'500': '#888888',
  				'600': '#707070',
  				'700': '#585858',
  				'800': '#404040',
  				'900': '#282828'
  			},
  			stone: {
  				'50': '#f7f7f7',
  				'100': '#eaeaea',
  				'200': '#d4d4d4',
  				'300': '#b0b0b0',
  				'400': '#8c8c8c',
  				'500': '#707070',
  				'600': '#595959',
  				'700': '#434343',
  				'800': '#2d2d2d',
  				'900': '#171717'
  			},
  			slate: {
  				'50': '#f0f4f8',
  				'100': '#e1e8f0',
  				'200': '#c1cbd6',
  				'300': '#a0a9c1',
  				'400': '#7881a6',
  				'500': '#55607c',
  				'600': '#404c5c',
  				'700': '#2c3741',
  				'800': '#1a252b',
  				'900': '#10181c'
  			},
			blue: {
  '50':  '#f0f7ff',
  '100': '#d0e8ff',
  '200': '#a8d4ff',
  '300': '#7bbfff',
  '400': '#4daaff',
  '500': '#1e96ff',
  '600': '#007be0',
  '700': '#0062b3',
  '800': '#004985',
  '900': '#003157'
},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			display: [
  				'Poppins',
  				'Playfair Display',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}