import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { fileURLToPath, URL } from "url";

export default mergeConfig(viteConfig, defineConfig({
    test: {
        deps: {
            inline: [
                "@ionic/core"
            ]
        },
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
      alias: {
        '@ionic/vue/css': fileURLToPath(new URL('./node_modules/@ionic/vue/css', import.meta.url)),
        '@ionic/vue': fileURLToPath(new URL('./node_modules/@ionic/vue/dist/index.esm.js', import.meta.url))
      },
    },
  },
));
