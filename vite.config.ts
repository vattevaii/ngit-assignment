import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib")
    return {
      plugins: [react()],
      build: {
        outDir: "dist-lib",
        emptyOutDir: true,
        rollupOptions: {
          external: ["react", "react-dom", "react/jsx-runtime"],
          output: {
            assetFileNames: "index[extname]",
            globals: {
              react: "react",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "react/jsx-runtime",
            },
          },
        },
        // rollupOptions: {
        //   output: [
        //     {
        //       format: "es",
        //       entryFileNames: "index.js", // For ES format
        //       assetFileNames: "index[extname]",
        //     },
        //     {
        //       format: "umd",
        //       name: "index",
        //       entryFileNames: "index.cjs", // For UMD format
        //       assetFileNames: "index[extname]",
        //     },
        //   ],
        // },
        lib: {
          entry: resolve(__dirname, "lib/main.ts"),
          name: "better-than-swiper",
          fileName: (format) => {
            switch (format) {
              case "es":
                return `index.js`;
              case "esm":
                return `index.js`;
              case "cjs":
                return "index.cjs";
              case "umd":
                return "index.cjs";
            }
            return `index.${format}`;
          },
        },
      },
    };

  return {
    plugins: [react()],
    build: {
      emptyOutDir: true,
    },
  };
});
