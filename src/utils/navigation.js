import { scroller, animateScroll as scroll } from 'react-scroll'

export const header_height = 90

export const calculateOffset = () => {
  if (typeof window === 'undefined') {
    global.window = {
      innerWidth: 1600
    }
  }
  return window.innerWidth > 1210 ? -header_height : 0
}

export const scrollTo = element => () => {
  scroller.scrollTo(element, {
    duration: 500,
    smooth: true,
    offset: calculateOffset()
  })
}

export const scrollToTop = () => {
  scroll.scrollToTop()
}
