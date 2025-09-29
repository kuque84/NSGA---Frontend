import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    host: true,
    allowedHosts: ["nsga.ipem168.local"],
    mimeTypes: {
      js: "application/javascript",
    },
  },
});
