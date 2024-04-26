import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path'

const ROOTPATH = path.join(process.cwd());
const APP_PATH = path.join(ROOTPATH, "/src");

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [
    basicSsl(), // 启用https需要证书
    react(),
  ],
  // css: {
  //   modules: {
  //     generateScopedName: '[path][name]__[local]--[hash:base64:5]'
  //   },
  //   preprocessorOptions: {
  //     less: {
  //       // 支持内联 JavaScript
  //       javascriptEnabled: true,
  //       additionalData: `@import "${path.resolve(
  //         __dirname,
  //         "src/styles/theme.less"
  //       )}";`,
  //     }
  //   }
  // },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"], //表示在import 文件时文件后缀名可以不写
    alias: {
      "@": `${APP_PATH}/`,
    },
  },

  server: {
    host: "doba-srm.vemic.com",
    proxy: {
      "/api/v1": {
        target: "http://10.110.2.254"
      },
    },
  },
})
