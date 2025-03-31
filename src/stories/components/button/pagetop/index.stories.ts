import { expect, fn, userEvent, within } from '@storybook/test'
import { Button } from '.'

/**
 * ページトップに戻るボタン。動作確認用。
 */

export default {
  title: 'Component/Button/Pagetop',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: { handleClick: fn() },
}

export const Default = {
  // play: async ({ args }) => {
  //   // const canvas = within(canvasElement)
  //   // await userEvent.click(canvas.getByRole('button'))
  //   await expect(args.handleClick).toHaveBeenCalled()
  // },
}
