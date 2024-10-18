import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-repo/",  // Correct base path for GitHub Pages
});
