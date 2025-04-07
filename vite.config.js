import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    // ↓ 開発サーバーでhistoryモード対応させる設定
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})