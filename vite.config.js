import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    server: {
		host: '127.0.0.1', // Ensure it binds to the correct host
        port: 5173,        // Use the default Vite port
        strictPort: true,  // Fail if the port is already in use
		cors: {
			origin: '*', // Allow all origins
			methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Define allowed methods
			allowedHeaders: ['Content-Type', 'Authorization'], // Define allowed headers
		},
        proxy: {
            '/api': 'http://localhost:8000/api',
        },
    },
});
