import { List, argOptions } from '.'

/**
 * シンプルなドットリスト
 *
 * - cssでつくったドットなのでcssの範囲であれば他の形に変形も可
 * - シンプルなolとの組み合わせも可
 */

export default {
  title: 'Component/List/Dot',
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

export const Dot = {
  args: {
    style: 'dot'
  },
}

export const Disc = {
  args: {
    style: 'disc',
  },
}
