import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sekolahapi': {
        target: 'https://api-sekolah-indonesia.vercel.app/sekolah/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rajaongkir/, ''),
      },
      '/v1': {
        target: 'http://203.194.112.121:9569/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    },
  },
})
