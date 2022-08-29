import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    eslintPlugin()
  ]
})
