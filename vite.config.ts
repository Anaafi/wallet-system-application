import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
      include: './src/assets/icons/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5200,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    // testMatch: './src/**/__tests__/*.{test,spec}.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
    coverage: {
      reporter: ['html', 'clover', 'json', 'lcov'],
      exclude: ['**/src/config/**'],
      provider: 'v8',
    },
  },
});
