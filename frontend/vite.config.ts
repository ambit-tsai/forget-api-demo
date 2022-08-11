import { defineConfig } from 'vite';
import { vitePluginForNest } from 'forget-api/nest/vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    plugins: [vitePluginForNest({ baseUrl: 'http://localhost:3000' })],
});
