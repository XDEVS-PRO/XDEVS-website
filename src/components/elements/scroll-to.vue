<template>
  <div @click.prevent="scrollToBlock(link)">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class ScrollTo extends Vue {
  @Prop() link: any;

  scrollToBlock(item: any) {
    const el = document.getElementById(item.replace("#to_", ""));
    if (el) {
      location.hash = item;

      const viewportY = el.getBoundingClientRect().top;
      const scrolltop = window.pageYOffset;
      window.scrollTo({ top: viewportY + scrolltop - 80, behavior: "smooth" });
    }
  }
}
</script>
