/// <reference types="vite/client" />
import type { Preview } from '@storybook/vue3';

import 'virtual:uno.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // loaders: [
  //   async () => {
  //     await import('@bluryar/composables').then(({ useBMapGLScript }) =>
  //       useBMapGLScript({ ak: import.meta.env.VITE_BMAP_AK, manual: !!1 }).setup(),
  //     );
  //     return {};
  //   },
  // ],
};

export default preview;
