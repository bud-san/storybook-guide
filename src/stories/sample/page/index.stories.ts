import { expect, userEvent, within } from '@storybook/test';

import { Page } from './';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i }); // 「Log in」ボタン を取得。
    await expect(loginButton).toBeInTheDocument(); // ボタンが表示されているかチェック。
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument(); // 「Log in」ボタンが消えたかチェック。

    const logoutButton = canvas.getByRole('button', { name: /Log out/i }); // 「Log out」ボタンが表示されているかチェック。
    await expect(logoutButton).toBeInTheDocument();
  },
};
