import { fn } from '@storybook/test'
import { Button, argOptions } from '.'

/**
 * シンプルな角丸ボタン。
 *
 * - アイコン2タイプ対応
 * - buttonタグ（上）とaタグ（下）に対応
 * - 改行対応
 */

export default {
  title: 'Component/Button/Rounded',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      options: argOptions.label,
      control: {type: 'inline-radio'}
    },
    style: {
      options: argOptions.style,
      control: {type: 'inline-radio'}
    },
    status: {
      options: argOptions.status,
      control: {type: 'inline-radio'}
    },
    size: {
      options: argOptions.size,
      control: {type: 'inline-radio'}
    },
    color: {
      options: argOptions.color,
      control: {type: 'select'}
    },
    icon: {
      options: argOptions.icon,
      control: {type: 'select'}
    },
    file: {
      options: argOptions.file,
      control: {type: 'select'}
    }
  },
  args: { onClick: fn() },
}

export const Fill = {
  args: {
    label: 'short',
    style: 'fill',
    status: '-',
    size: 'md',
    color: 'black',
    icon: '-',
    file: '-',
  },
}

export const Outline = {
  args: {
    label: 'short',
    style: 'outline',
    status: '-',
    size: 'md',
    color: 'black',
    icon: '-',
    file: '-',
  },
}
