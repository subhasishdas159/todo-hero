module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				mobileOnly: { max: '639px' }
			},
			fontFamily: {
				montserrat: ['montserrat']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['pastel']
	}
};
