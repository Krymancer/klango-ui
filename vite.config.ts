/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupVitests.ts',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    deps: {
      inline: [/solid-js/,/solid-testing-library/,],
      
    },
    // threads: false,
    // isolate: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
