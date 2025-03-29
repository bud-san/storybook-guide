import React from 'react'
import PropTypes from 'prop-types'
import './index.css';
import { getLabelTemplate } from '@utility/getLabelTemplate'
import { getValueClass } from '@utility/getValueClass'
import { clsx } from 'clsx'

export const argOptions = {
  label: ['short','long', 'multiline'],
  style: ['fill', 'outline'],
  status: ['-', 'disabled'],
  size: ['sm', 'md', 'lg'],
  color: ['black', 'white'],
  icon: ['-', 'book', 'doc', 'search'],
  file: ['-', 'zip', 'pdf', 'external']
}

export const Button = ({
  label = 'short',
  style = 'fill',
  status = '-',
  size = 'md',
  color = 'black',
  icon = '-',
  file = '-',
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        'button',
        getValueClass(style),
        getValueClass(size),
        getValueClass(color),
        {'-icon' : icon !== '-'}, getValueClass(icon),
        getValueClass(file)
      )}
      aria-disabled={status === 'disabled' ? true : false}
      {...props}
      dangerouslySetInnerHTML={{__html: getLabelTemplate(label)}}
    >
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.oneOf(argOptions.style),
  color: PropTypes.oneOf(argOptions.color),
  size: PropTypes.oneOf(argOptions.size),
  icon: PropTypes.oneOf(argOptions.icon),
  file: PropTypes.oneOf(argOptions.file),
  label: PropTypes.oneOf(argOptions.label).isRequired,
  onClick: PropTypes.func,
}
