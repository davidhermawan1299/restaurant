/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js}', './assets/**/*.{js}'],
	theme: {
		extend: {
			screens: {
				'sm-380': '380px',
				'sm-414': '414px',
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				'md-938': '938px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }
			},
			colors: {
				astral: '#3B677F',
				'astral-100': '#3b677f',
				outerSpace: ' rgb(38, 60, 73)'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				comorant: ['Cormorant Garamond', 'serif'],
				'notto-serif': ['Noto Serif', 'serif'],
			},
			backgroundImage: {
				'background-login':
					"url('https://images.squarespace-cdn.com/content/v1/62263fbc76242e02ac3caf10/03cf7ab4-86c9-4dd8-9fa3-5f4ebaa12481/Rosewater-Front.jpg')",
				'background-sigup':
					"url('https://images.squarespace-cdn.com/content/v1/62263fbc76242e02ac3caf10/f8917fbe-5679-44c8-b4fb-56a2d49f810e/Elle-Max-9930.jpg')",
			},
		},
	},
	plugins: [],
};
