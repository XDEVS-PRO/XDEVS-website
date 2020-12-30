<template>
  <section class="fb">
    <stripe-wrapper />
    <div class="fb__container container">
      <img src="/img/bg-head-svg.svg" alt="More technologies" class="fb__img" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StripeWrapper from "@/components/elements/strip-bg.vue";

@Component({
  components: {
    StripeWrapper
  }
})
export default class FirstBlock extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.fb {
  padding: 180px 0 120px 0;

  @include for-average() {
    padding: 100px 0 40px 0;
    height: initial;
  }

  &__container.container {
    display: flex;
    justify-content: center;
  }

  &__img {
    max-width: 890px;
    width: 100%;
  }
}
</style>
