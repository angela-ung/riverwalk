import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'ukg-light-teal': '#30CEBB',
				'ukg-dark-teal': "#005151",
				'ukg-gray': "#53565A",
				'ukg-yellow': "ffc600",
				'ukg-light-gray': "#F5F5F5",
				'ukg-green': "786d4b",
				'ukg-pink': "#C724B1",
				'ukg-purple': "#59178A"
			},
		},
	},
	plugins: [],
} satisfies Config