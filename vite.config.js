import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv-safe";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config({
  allowEmptyValues: true,
});

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    port: 5173,
  },
});
