import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  build :{
    outDir:'./dist',
    },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server:{
    open:'/',
    proxy:{
      '/vans': 'http://localhost:3000',
      '/host': 'http://localhost:3000',
      '/login': 'http://localhost:3000'
    }
  }
})
