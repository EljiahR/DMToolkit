import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin()
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__tests__/setup.ts'
  }
} as UserConfig)
