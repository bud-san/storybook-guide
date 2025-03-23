import path from 'path'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
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
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    `}
  `,

  "viteFinal": async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@stories': path.resolve(__dirname, '../stories'),
    }
    return config
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;