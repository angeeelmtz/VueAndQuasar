import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    vueDevTools(),
    quasar({
      sassVariables: resolve(__dirname, 'src/quasar-variables.scss')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
