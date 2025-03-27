import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/Event_Management", // Use your GitHub repository name
  plugins: [react()],
});
