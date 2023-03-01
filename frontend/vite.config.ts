import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    optimizeDeps: {
      include: ['sweetalert2', 'axios'],
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      port: 3000,
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    server: {
      cors: false,
      port: 5173,
      strictPort: true,
      hmr: {
        clientPort: 5173,
      },
    },
  };
});
