import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['REAme.md'],
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  server: {
    mimeTypes: {
      'text/jsx': 'text/javascript',
    },
  },
});
