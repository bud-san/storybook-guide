import { List, argOptions } from '.'

/**
 * リストスタイルがアイコンのリスト
 *
 * - テキストリンク向けのような特殊リスト
 */

export default {
  title: 'Component/List/Icon',
  component: List,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      options: argOptions.style,
      control: {type: 'inline-radio'}
    }
  },
  args: {},
}

export const Arrow = {
  args: {
    style: 'arrow'
  },
}

export const Check = {
  args: {
    style: 'check',
  },
}
