import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' membuat aset relatif — aman untuk GitHub Pages (project page)
// maupun custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
