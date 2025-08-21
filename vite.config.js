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
  base: '/introduce_yourself/', // ĐỔI THÀNH TÊN REPO CỦA BẠN
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
})