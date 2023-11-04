import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Trainual-Game-Front',
  server: {
    open: '/Trainual-Game-Front',
    port: 3000,
  },
});
