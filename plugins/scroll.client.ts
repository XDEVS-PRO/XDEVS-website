import VueSmoothScroll from '~/libs/scroll';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll, {
    duration: 900,       // animation duration in ms
    offset: 0,           // offset in px from scroll element, can be positive or negative
    container: window,   // selector string or Element for scroll container, default is window
    updateHistory: true, // whether to push hash to history
    easingFunction: null // gives the ability to provide a custom easing function `t => ...`
                         // (see https://gist.github.com/gre/1650294 for examples)
                         // if nothing is given, it will set defaults to `easeInOutCubic`
  })
})
