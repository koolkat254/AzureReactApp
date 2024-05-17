import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envify from 'process-envify';

// https://vitejs.dev/config/
export default defineConfig({
    define: envify({
    ownerName: process.env.ownerName,
  }),
  plugins: [react()],
})
