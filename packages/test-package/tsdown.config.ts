import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    // platform: 'neutral',
    format: "esm",
    // splitting: false,
    dts: true,
    target: "es2021",
    unbundle: true,
  },
])
