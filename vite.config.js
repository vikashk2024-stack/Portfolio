import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically copy user uploaded photos to public directory when Vite runs
const photo1 = 'C:\\Users\\vikas\\.gemini\\antigravity-ide\\brain\\3a23e4bf-3e41-4518-ba6d-04788eca58c7\\.user_uploaded\\media_1787996121165.jpg';
const photo2 = 'C:\\Users\\vikas\\.gemini\\antigravity-ide\\brain\\3a23e4bf-3e41-4518-ba6d-04788eca58c7\\.user_uploaded\\media_1787996121190.jpg';

try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (fs.existsSync(photo1)) {
    fs.copyFileSync(photo1, path.join(publicDir, 'profile.jpg'));
  }
  if (fs.existsSync(photo2)) {
    fs.copyFileSync(photo2, path.join(publicDir, 'about_photo.jpg'));
  }
} catch (e) {
  console.warn('Photo copy warning:', e.message);
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    sourcemap: false,
  },
});
