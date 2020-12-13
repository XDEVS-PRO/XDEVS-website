import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Index,
    meta: {
      layout: "default-layout"
    }
  },
  {
    path: "/privacy-policy",
    name: "Privacy policy",
    component: PrivacyPolicy,
    meta: {
      layout: "default-layout"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
