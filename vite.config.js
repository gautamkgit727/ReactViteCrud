import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ReactViteCrud/',
  plugins: [react()],
  build: {
    // Disable CSS minification to avoid lightningcss choking on template's vendor CSS
    cssMinify: false,
  },
  css: {
    // Skip processing public folder CSS entirely
    postcss: {},
  },
})