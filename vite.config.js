import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trainual-game-front',
  server: {
    open: '/trainual-game-front',
    port: 3000,
  },
});
