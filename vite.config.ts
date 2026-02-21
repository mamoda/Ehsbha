import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",   // 👈 أضف هذا السطر
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});