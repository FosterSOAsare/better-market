/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			backgroundImage: {
				background: "url('/images/background.png')",
				logo: "url('/images/logo.png')",
			},
			fontFamily: {
				poppins: ["Poppins, sans-serif"],
			},
		},
	},
	plugins: [],
};
