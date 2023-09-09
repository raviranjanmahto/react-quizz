import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/questions": {
        target: "http://localhost:7003",
        changeOrigin: true,
      },
    },
  },
});
