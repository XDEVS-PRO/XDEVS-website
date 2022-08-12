<template>
  <div class="strip-wrapper__bg">
    <div class="strip-wrapper__grid">
      <span
        class="strip-wrapper__line"
        :style="{
          'border-color': colorStrip === 'dark' ? '#28292a' : '#e5e5e5',
        }"
        v-for="i in 4"
        :key="i"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    colorStrip: { type: String, default: "light" },
  },
});
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.strip-wrapper {
  &__bg {
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__grid {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1170px;

    @include for-large() {
      max-width: 600px;
    }

    @include for-small() {
      width: 190%;
    }
  }

  &__line {
    display: block;
    flex: 0 0 auto;
    width: 0;
    height: 100%;
    border-left: 0.0625rem solid;
  }
}
</style>
