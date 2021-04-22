import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import PortalVue from "portal-vue";

// Add general styles
import "../src/assets/styles/main.scss";
// Add styles for slider
import "../src/assets/styles/_swiper-styles.css";


Vue.use(VueAwesomeSwiper);
Vue.use(PortalVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
