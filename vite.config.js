import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'BBM vs Dilawan',
        short_name: 'Conn4',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})