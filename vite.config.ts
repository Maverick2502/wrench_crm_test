import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [
    react(),
    svgrPlugin(),
    VitePluginFonts({
      // Custom fonts
      custom: {
        families: [
          {
            name: "Montserrat",
            src: "./src/assets/fonts/*.woff2",
          },
        ],
        display: "swap",
        preload: true,
        prefetch: false,
        injectTo: "head-prepend",
      },
    }),
  ],
});
