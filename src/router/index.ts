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
      layout: "default-layout"
    }
  },
  {
    path: "/terms-of-use",
    name: "Terms of use",
    component: Terms,
    meta: {
      layout: "default-layout"
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 0 }
  }
});

export default router;
