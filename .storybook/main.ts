import path from 'path'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  "previewHead": (head) => `
    ${head}
    ${`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
      <link href="css/normalize.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    `}
  `,

  "viteFinal": async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@stories': path.resolve(__dirname, '../src/stories'),
      '@utility': path.resolve(__dirname, '../src/utility'),
    }
    return config
  },
  staticDirs: ['../src/assets'],

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;