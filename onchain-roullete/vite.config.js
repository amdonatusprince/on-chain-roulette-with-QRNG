import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

import nodePolyfills from 'rollup-plugin-node-polyfills';
rollup({
  entry: 'main.jsx',
  plugins: [
    nodePolyfills()
  ]
})