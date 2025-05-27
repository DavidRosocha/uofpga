// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // IMPORTANT for Vercel
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'About.html',
        projects: 'projects.html',
        tutorials: 'tutorials.html',
        events: 'events.html'
      }
    }
  }
})
