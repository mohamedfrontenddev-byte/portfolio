
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // السطر ده هو اللي هيخلي الصور والـ CSS يشتغلوا صح
})