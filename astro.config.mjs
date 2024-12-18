// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://chao-website.github.io',
    /* todo if necessary:   site: 'https://chaovietnam.de' 'https://chao-website.github.io' 'http://' */
	integrations: [sitemap()]
});
