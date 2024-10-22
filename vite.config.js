import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pi-dogs-web/', // Cambia por el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
