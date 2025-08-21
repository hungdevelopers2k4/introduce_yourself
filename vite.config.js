import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5173,
    allowedHosts: [
      '.ngrok-free.app',
    ],
    open: true,
  },
  preview: {
    host: true
  },
  base: '/introduce_yourself/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})