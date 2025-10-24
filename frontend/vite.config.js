import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://NTA.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // your backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
