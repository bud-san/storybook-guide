import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css';

export const Button = ({ handleClick }) => {
  const windowRef = useRef<HTMLDivElement>(null)
  const pagetopRef = useRef<HTMLButtonElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollUp, setIsScrollUp] = useState(false)
  // const handleClick = () => {
  //   windowRef.current.scroll({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }
  const fadeToggle = (mode:string) => {
    const ms = 200
    const elm = pagetopRef.current
    if(elm) {
      elm.style.transition = 'opacity ' + ms + 'ms'
      if (mode === 'hide') {
        elm.setAttribute('aria-hidden', 'true')
        setTimeout(() => {elm.style.opacity = '0'}, 1)
        setTimeout(() => {elm.style.display = 'none'}, ms + 10)
      } else if(mode === 'visible') {
        elm.style.display = ''
        setTimeout(() => {
          elm.style.opacity = '1'
          elm.setAttribute('aria-hidden', 'false')
        }, ms)
      }
    }
  }
  // 上にスクロールしたらクラスを付与
  const setScrollUpClass = (scrollY: number, lastScrollY: number) => {
    // 下スクロール時
    if (scrollY > lastScrollY && scrollY !== 0) setIsScrollUp(false)
    // 上スクロール時または最上部の時（iphone対策用）
    else setIsScrollUp(true)
  }

  // ある程度下にスクロールしたらクラスを付与
  const setScrollTopClass = (scrollY: number) => {
    if (windowRef.current.clientHeight < scrollY) setIsScrolled(true)
    else setIsScrolled(false)
  }
  useEffect(() => {
    let lastScroll = 0
    windowRef.current.addEventListener('scroll', () => {
      const currentScroll = windowRef.current.scrollTop
      setScrollTopClass(currentScroll)
      setScrollUpClass(currentScroll, lastScroll)
      lastScroll = currentScroll
    })
  }, [windowRef])

  useEffect(() => {
    if(isScrolled && isScrollUp) fadeToggle('visible')
    else fadeToggle('hide')
  }, [isScrolled, isScrollUp])

  return (
    <div className='translate-x-0 translate-y-0'>
      <div ref={windowRef} className='relative overflow-y-auto h-80 w-full'>
        <div className='h-100 bg-gray-100 text-center'>ここが一番上</div>
        <div className='h-100 bg-gray-100 text-center'>縦長コンテンツ</div>
        <div className='h-100 bg-gray-100 text-center'>縦長コンテンツ</div>
        <div className='h-100 bg-gray-100 text-center'>縦長コンテンツ</div>
        <div className='h-100 bg-gray-100 text-center'>縦長コンテンツ</div>
        <div className='h-100 bg-gray-100 text-center'>縦長コンテンツ</div>
        <button
          type="button"
          className='button-pagetop'
          ref={pagetopRef}
          onClick={handleClick}
        >
          トップに戻る
        </button>
        </div>
    </div>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func,
}
