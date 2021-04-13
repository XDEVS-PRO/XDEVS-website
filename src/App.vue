<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    }
  },
  components: {
    DefaultLayout
  }
};
</script>
