/**
 * https://github.com/laineus/vue3-smooth-scroll
 */
import { NuxtApp } from 'nuxt/app';

// We use requestAnimationFrame to be called by the browser before every repaint
let requestAnimationFrame: ((callback: FrameRequestCallback) => number)

// ease-in-out function @see https://gist.github.com/gre/1650294
const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

// Get the top position of an element in the document
const getTop = (element: HTMLAnchorElement, start) => {
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  return element.nodeName === 'HTML' ? -start : element.getBoundingClientRect().top + start
}

type Config = {
  duration: number
  offset: number
  container: Window
  updateHistory: boolean
  easingFunction: null | (() => any)
}
const getDefaultConfig: () => Config = () => {
  return {
    duration: 500,
    offset: 0,
    container: window,
    updateHistory: true,
    easingFunction: null
  }
}

const smoothScrollCtx = Symbol('smoothScrollCtx')

const smoothScroll = ({ scrollTo, offset, duration, container, updateHistory, hash, easingFunction }) => {
  if (!requestAnimationFrame) {
    requestAnimationFrame = window.requestAnimationFrame || (fn => window.setTimeout(fn, 16))
  }

  // Using the history api to solve issue: back doesn't work
  // most browser don't update :target when the history api is used:
  // THIS IS A BUG FROM THE BROWSERS.
  if (updateHistory && window.history.pushState && location.hash !== hash) window.history.pushState('', '', hash)

  const isNumber = typeof scrollTo === 'number'
  const startPoint = container.scrollTop || window.pageYOffset
  const end = (isNumber ? scrollTo : getTop(scrollTo, startPoint)) + offset
  const easeFn = typeof easingFunction === 'function' ? easingFunction : easeInOutCubic

  const clock = Date.now()
  const step = () => {
    // The time elapsed from the beginning of the scroll
    const elapsed = Date.now() - clock
    // Calculate the scroll position we should be in
    const scrolling = elapsed < duration
    const position = scrolling ? startPoint + (end - startPoint) * easeFn(elapsed / duration) : end

    if (scrolling) {
      requestAnimationFrame(step)
    } else if (updateHistory && !isNumber) {
      location.replace('#' + scrollTo.id)
      // This will cause the :target to be activated.
    }

    container === window ? container.scrollTo(0, position) : (container.scrollTop = position)
  }
  step()
}

const VueSmoothScroll = {
  install (app, config: Config) {
    const getGlobalConfig = () => config ? Object.assign(getDefaultConfig(), config) : getDefaultConfig()
    app.directive('smooth-scroll', {
      ['mounted'] (el, binding, vnode ) {

        const locHash = location.hash

        const resolvedArgs = Object.assign(getGlobalConfig(), binding.value)
        if (typeof resolvedArgs.container === 'string') {
          resolvedArgs.container = document.querySelector(resolvedArgs.container)
        }

        if (locHash) {
          const scrollTo = document.getElementById(locHash.substring(1))
          smoothScroll(Object.assign(resolvedArgs, { scrollTo, locHash }))
        }

        const clickHandler = e => {
          e.preventDefault()
          const hash = vnode.props.href
          const scrollTo = document.getElementById(hash.substring(1))
          if (!scrollTo) return // Target node is not found
          smoothScroll(Object.assign(resolvedArgs, { scrollTo, hash }))
        }
        // Attach the smoothscroll function
        el.addEventListener('click', clickHandler)
        el[smoothScrollCtx] = { clickHandler }
      },
      ['unmounted'] (el: HTMLAnchorElement) {
        // Detach the smoothscroll function
        el.removeEventListener('click', el[smoothScrollCtx].clickHandler)
        el[smoothScrollCtx] = null
      }
    })

    const resolvedSmoothScroll = args => {
      const resolvedArgs = Object.assign(getGlobalConfig(), args)
      return smoothScroll(resolvedArgs)
    }
    const prototype = app.config.globalProperties
    prototype.$smoothScroll = resolvedSmoothScroll
    app.provide('smoothScroll', resolvedSmoothScroll)
  }
}

export default VueSmoothScroll
