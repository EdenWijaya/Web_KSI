import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react-swc"; // Import plugin React SWC

export default defineConfig({
  plugins: [
    react(), // Tambahkan plugin React SWC
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/*", // Path ke file aset
          dest: "assets", // Folder tujuan di dalam build
        },
      ],
    }),
  ],
  build: {
    outDir: "dist", // Folder output build
    assetsDir: "assets", // Folder untuk file aset
  },
});
