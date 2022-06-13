import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const path = require('path')

export default defineConfig({
  // also change alias in tsconfig.json compilerOptions > path
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  plugins: [react()]
})
