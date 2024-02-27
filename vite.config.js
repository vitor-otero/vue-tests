import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    plugins: [vue()],
    preview: {
        port: 8000,
        strictPort: true,
    },
    server: {
        port: 8000,
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:8000',
    },
});
