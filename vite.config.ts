import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        manifest: {
          icons: [
            {
              src: "public/app-icon/apple-touch-icon-57x57.png",
              type: "image/png",
              sizes: "57x57",
            },
            {
              src: "public/app-icon/apple-touch-icon-60x60.png",
              type: "image/png",
              sizes: "60x60",
            },
            {
              src: "public/app-icon/apple-touch-icon-72x72.png",
              type: "image/png",
              sizes: "72x72",
            },
            {
              src: "public/app-icon/apple-touch-icon-76x76.png",
              type: "image/png",
              sizes: "76x76",
            },
            {
              src: "public/app-icon/apple-touch-icon-114x114.png",
              type: "image/png",
              sizes: "114x114",
            },
            {
              src: "public/app-icon/apple-touch-icon-120x120.png",
              type: "image/png",
              sizes: "120x120",
            },
            {
              src: "public/app-icon/apple-touch-icon-144x144.png",
              type: "image/png",
              sizes: "144x144",
            },
            {
              src: "public/app-icon/apple-touch-icon-152x152.png",
              type: "image/png",
              sizes: "152x152",
            },
          ],
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
        },
      },
    },
  },
});
