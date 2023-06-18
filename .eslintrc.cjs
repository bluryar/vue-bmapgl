/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@bluryar/vue', 'plugin:storybook/recommended', 'plugin:mdx/recommended'],
  globals: {
    VITE_BMAP_AK: true,
    BMapGL: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // optional, if you want to lint code blocks at the same time
  settings: {
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {},
  },
};
