import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://garmash.org',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
