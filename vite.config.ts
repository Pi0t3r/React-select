import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  server: {
    https: {
      key: './cert.key',
      cert: './cert.crt',
    },
  },
  plugins: [react()],
});
