import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function getPageFiles() {
    const pagesDir = path.resolve(__dirname, 'resources/js/pages');
    const files: string[] = [];

    function readDir(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            if (fs.statSync(fullPath).isDirectory()) {
                readDir(fullPath);
            } else if (item.endsWith('.tsx')) {
                files.push(fullPath.replace(__dirname + '/', ''));
            }
        });
    }

    readDir(pagesDir);
    return files;
}

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
                ...getPageFiles()
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
