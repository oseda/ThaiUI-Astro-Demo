import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  image: {
    service: passthroughImageService(),
  },
});
