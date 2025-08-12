import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FUTURE_FS_01/', // 👈 important for GitHub Pages
  plugins: [react()],
})
