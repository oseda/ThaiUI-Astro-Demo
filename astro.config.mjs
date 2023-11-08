import { defineConfig, passthroughImageService } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    prefetch({
      intentSelector: ["a[href^='/']"],
    }),
  ],
  output: 'server',
  adapter: vercel(),
});
