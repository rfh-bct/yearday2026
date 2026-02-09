import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages if the site is at https://<user>.github.io/<repo>/
  // Use '/' if you use a custom domain or GitHub user site (e.g. username.github.io).
  base: '/unlock-app/',

})
