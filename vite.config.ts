import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    define: {
        'process.env': {},
    },
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, './src')
        },
    },
	plugins: [ 
		vue(),
		VitePWA({ registerType: 'autoUpdate' }),
	],
	server: {
		port: 8100,
        open: true,
	},
});
