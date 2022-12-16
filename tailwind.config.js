/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				White: '#FFFFFF',
				Semiblack: '#070724',
				DarkGray: '#38384F',
				LightGray: '#838391',
				Aqua: '#419EBB',
				YellowLike: '#EDA249',
				Purplish: '#6F2ED6',
				DarkOrange: '#D14C32',
				MidOrange: '#D83A34',
				LightOrange: '#CD5120',
				VeryLightGreen: '#1EC2A4',
				SkyBlue: '#2D68F0',
			},
			fontFamily: {
				Antonio: ['Antonio', 'sans-serif'],
				Spartan: ['League Spartan', 'sans-serif'],
			},
			backgroundImage: {
				stars: "url('assets/background-stars.svg')",
			},
		},
	},
	plugins: [],
};
