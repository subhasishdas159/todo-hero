import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@comp': path.resolve('./src/comp'),
					'@ui': path.resolve('./src/ui'),
					'@config': path.resolve('./src/config'),
					'@functions': path.resolve('./src/functions'),
				}
			}
		}
	}
};

export default config;
