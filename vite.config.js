import reactPlugin, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
    },
  },
})
