import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Set VITE_BASE_PATH when deploying under a repository subpath, for example:
// VITE_BASE_PATH=/chmarl-datav/ pnpm build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? "/",
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});
