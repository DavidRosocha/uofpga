import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'About.html'),
        projects: resolve(__dirname, 'projects.html'),
        tutorials: resolve(__dirname, 'tutorials.html'),
        events: resolve(__dirname, 'events.html'),
      }
    }
  }
})
