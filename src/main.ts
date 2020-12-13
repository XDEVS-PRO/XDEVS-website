import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import PortalVue from "portal-vue";

// Add general styles
import "../src/assets/styles/main.scss";
// Add styles for slider
import "../src/assets/styles/_swiper-styles.css"

import VueScrollTo from "vue-scrollto";

Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo);
Vue.use(PortalVue);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
