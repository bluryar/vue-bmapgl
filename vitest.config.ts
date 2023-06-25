import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      AutoImport({
        imports: ['vitest'],
        eslintrc: {
          enabled: !!1,
          filepath: './auto-eslintrc.json',
        },
        dts: true, // generate TypeScript declaration
      }),
    ],
    test: {
      globals: !!1,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: [resolve(__dirname, '.test/setup.ts')],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      deps: {
        inline: ['msw'],
      },
    },
  }),
);
