import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //添加scss预处理，方便全局scss文件，统一使用相同的变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/sassConfig.scss";`
      },
    }
  }
})
