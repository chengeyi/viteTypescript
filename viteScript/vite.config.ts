import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";//這個path用到了上面安裝的@types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  //進行配置別名
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  }
})
