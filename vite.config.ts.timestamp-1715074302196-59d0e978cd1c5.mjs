// vite.config.ts
import { defineConfig } from "file:///E:/Projects/NGIT/ngit-entry-task/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Projects/NGIT/ngit-entry-task/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///E:/Projects/NGIT/ngit-entry-task/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "E:\\Projects\\NGIT\\ngit-entry-task";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "lib")
    return {
      plugins: [react(), dts({ include: ["lib"] })],
      build: {
        outDir: "dist-lib",
        emptyOutDir: true,
        rollupOptions: {
          output: [
            {
              format: "es",
              entryFileNames: "index.js",
              // For ES format
              assetFileNames: "index[extname]"
            },
            {
              format: "umd",
              name: "index",
              entryFileNames: "index.cjs",
              // For UMD format
              assetFileNames: "index[extname]"
            }
          ]
        },
        lib: {
          entry: resolve(__vite_injected_original_dirname, "lib/main.ts")
        }
      }
    };
  return {
    plugins: [react()],
    build: {
      emptyOutDir: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0c1xcXFxOR0lUXFxcXG5naXQtZW50cnktdGFza1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdHNcXFxcTkdJVFxcXFxuZ2l0LWVudHJ5LXRhc2tcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2plY3RzL05HSVQvbmdpdC1lbnRyeS10YXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGlmIChtb2RlID09PSBcImxpYlwiKVxuICAgIHJldHVybiB7XG4gICAgICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKHsgaW5jbHVkZTogW1wibGliXCJdIH0pXSxcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogXCJkaXN0LWxpYlwiLFxuICAgICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgIG91dHB1dDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb3JtYXQ6IFwiZXNcIixcbiAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiaW5kZXguanNcIiwgLy8gRm9yIEVTIGZvcm1hdFxuICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJpbmRleFtleHRuYW1lXVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9ybWF0OiBcInVtZFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImluZGV4LmNqc1wiLCAvLyBGb3IgVU1EIGZvcm1hdFxuICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJpbmRleFtleHRuYW1lXVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliL21haW4udHNcIiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFIsU0FBUyxvQkFBb0I7QUFDdlQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFIeEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsTUFBSSxTQUFTO0FBQ1gsV0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBQSxNQUM1QyxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsVUFDYixRQUFRO0FBQUEsWUFDTjtBQUFBLGNBQ0UsUUFBUTtBQUFBLGNBQ1IsZ0JBQWdCO0FBQUE7QUFBQSxjQUNoQixnQkFBZ0I7QUFBQSxZQUNsQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLFFBQVE7QUFBQSxjQUNSLE1BQU07QUFBQSxjQUNOLGdCQUFnQjtBQUFBO0FBQUEsY0FDaEIsZ0JBQWdCO0FBQUEsWUFDbEI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFVBQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxRQUN6QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUYsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
