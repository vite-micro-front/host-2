import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        board: {
          type: "module",
          name: "board",
          entry: "http://localhost:5001/remoteEntry.js",
        },
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          requiredVersion: "18.2.0",
          singleton: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "18.2.0",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "7.0.1",
        },
      },
    }),
  ],
});
