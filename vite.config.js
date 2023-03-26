import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(() => ({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    esbuild: {
        loader: "jsx",
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
                ".ts": "tsx",
            },
        },
    },
}));

  // please refer: https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite
  // please refer: https://stackoverflow.com/questions/74620427/how-to-configure-vite-to-allow-jsx-syntax-in-js-files
