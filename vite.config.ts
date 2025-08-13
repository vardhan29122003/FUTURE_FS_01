<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FUTURE_FS_01/', // 👈 important for GitHub Pages
  plugins: [react()],
})
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
>>>>>>> bb5c19c (Initial commit: React portfolio with VS Code setup)
