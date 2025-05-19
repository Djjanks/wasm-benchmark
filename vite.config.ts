import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';
import wasmPackWatcher from "vite-plugin-wasm-pack-watcher";

export default defineConfig({
  plugins: [
    wasmPack(['./libs/matrix-math-wasm']),
    wasmPackWatcher({buildCommand: 'wasm-pack build ./libs/matrix-math-wasm --target web'})
  ],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    exclude: ['matrix_math'],
  }
});