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
		themes: [
			{
				soft: {
					primary: '#5E81AC',
					'primary-focus': '#81A1C1',
					'primary-content': '#ffffff',

					secondary: '#81A1C1',
					'secondary-focus': '#8FBCBB',
					'secondary-content': '#ffffff',

					accent: '#2ba69a',
					'accent-focus': '#37cdbe',
					'accent-content': '#ffffff',

					neutral: '#3B4252',
					'neutral-focus': '#4C566A',
					'neutral-content': '#ffffff',

					'base-100': '#fff',
					'base-200': '#ECEFF4',
					'base-300': '#E5E9F0',
					'base-content': '#2E3440',

					info: '#B6DCFB',
					success: '#B0C79C',
					warning: '#EFD5A1',
					error: '#E2B8BC',

					'--rounded-box': '1rem',
					'--rounded-btn': '0.5rem',
					'--rounded-badge': '1.9rem',

					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '0.5rem',
					'--border-btn': '1px'
				}
			}
		]
	}
};
