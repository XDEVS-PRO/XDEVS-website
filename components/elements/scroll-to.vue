<template>
  <div @click.prevent="scrollToBlock(link)">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  props: {
    link: String
  },

  methods: {
    scrollToBlock(item: any) {
      const el = document.getElementById(item.replace("#to_", ""));
      if (el) {
        location.hash = item;

        const viewportY = el.getBoundingClientRect().top;
        const scrolltop = window.pageYOffset;
        window.scrollTo({ top: viewportY + scrolltop - 80, behavior: "smooth" });
      }
    }
  },

})
</script>
