import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import Terms from "../views/Terms.vue";
import OurProjects from "../views/OurProjects.vue";

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
      layout: "default-layout",
      title: "XDEVS: Privacy"
    }
  },
  {
    path: "/terms-of-use",
    name: "Terms of use",
    component: Terms,
    meta: {
      layout: "default-layout",
      title: "XDEVS: Terms of use"
    }
  },
  {
    path: "/our-projects",
    name: "Our Projects",
    component: OurProjects,
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

const DEFAULT_TITLE = "XDEVS: evolve with us";
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
