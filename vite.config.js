import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'Connect 4 Game',
      short_name: 'Conn4',
      description: 'BBM vs Dilawan || Player vs Playe',
      theme_color: '#ffffff',
      icons: [
        {
          src: './src/assets/images/logo.svg',
          sizes: '192x192',
          type: 'image/svg'
        },
        {
          src: './src/assets/images/logo.svg',
          sizes: '512x512',
          type: 'image/svg'
        }
      ]
    }
  })],
})
