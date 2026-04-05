import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep Vite plugins minimal; PostCSS handles Tailwind and Autoprefixer
export default defineConfig({
  plugins: [react()],
});
