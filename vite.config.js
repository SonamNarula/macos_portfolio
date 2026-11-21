
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '#components': resolve(root, 'components'),
      '#constants': resolve(root, 'constants'),
      '#store': resolve(root, 'store'),
      '#hoc': resolve(root, 'hoc'),
      '#windows': resolve(root, 'windows'),
    },
  },
})
