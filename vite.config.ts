import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 1111,
    allowedHosts: ['mxl.kr']
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      router: {
        routesDirectory: 'route'
      }
    }),
    nitro({
      preset: 'bun',
      compressPublicAssets: {
        gzip: true,
        zstd: true,
        brotli: true
      }
    }),
    viteReact()
  ],
  resolve: {
    tsconfigPaths: true
  },
  optimizeDeps: {
    exclude: ['bun']
  }
})
