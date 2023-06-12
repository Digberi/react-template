import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],

  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@providers', replacement: path.resolve(__dirname, 'src/providers') },
    ]
  }

})
