import {defineConfig} from 'vitest/config'
import viteConfig from './vite.config.ts'

export default defineConfig({
  ...viteConfig,
  test: {
    coverage: {
      reporter: ['text', 'json', 'lcov'],
      all: true,
    },
  },
})
