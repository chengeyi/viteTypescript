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
  },
  devServer: { 
    /* 使用代理 */
    // proxy: {
    //     '/api': {
    //         target: 'http://192.168.1.106:8080',  // 目标代理服务器地址
    //         changeOrigin: true,                          // 允许跨域
    //         pathRewrite:{
    //           "^/api":''
    //         }
    //     },
    // },
    // proxy: 'https://7912-36-228-6-136.ngrok-free.app'
    // proxy: 'http://192.168.1.106:8080'

    proxy:{
      '/api':{
          target:"http://cf0b-180-176-154-149.ngrok-free.app", //跨域地址
          changeOrigin:true, //支持跨域
          rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
      }
   }
 },
})
