import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js', // For ES format
          assetFileNames: 'index[extname]',
        },
        {
          format: 'umd',
          name: "index",
          entryFileNames: 'index.cjs', // For UMD format
          assetFileNames: 'index[extname]',
        }
      ],
    },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
    },
  },
});
