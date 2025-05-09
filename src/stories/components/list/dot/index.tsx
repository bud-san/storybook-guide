import React from 'react'
import PropTypes from 'prop-types'
import './index.css';
import { getValueClass } from '@utility/getValueClass'
import { clsx } from 'clsx'

export const argOptions = {
  style: ['dot', 'disc']
}

export const List = ({
  style = 'dot',
  ...props
}) => {
  return (
    <ul className={clsx(
      'list-dot',
      getValueClass(style),
      )}
    {...props}
    >
      <li className='item'>サンプルサンプルサンプル</li>
      <li className='item'>サンプルサンプル<br />サンプル</li>
      <li className='item'>サンプルサンプルサンプル
        <ul className={clsx(
          'list-dot',
          getValueClass(style),
          )}
        {...props}
        >
          <li className='item'>サンプルサンプルサンプル</li>
          <li className='item'>サンプルサンプルサンプル</li>
        </ul>
      </li>
      <li className='item'>サンプルサンプルサンプル</li>
      <li className='item'>サンプルサンプルサンプル</li>
    </ul>
  )
}

List.propTypes = {
  style: PropTypes.oneOf(argOptions.style),
}
