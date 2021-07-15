<template>
  <section id="#best-of" class="best-of">
    <stripe-wrapper />
    <div class="best-of__container container">
      <h4 class="best-of__text">
        <span>We use the best of two worlds:</span>
        the latest techniques for software development and best practices that
        were earned over the last 20 years
      </h4>
      <div class="best-of__inner">
        <a class="x-btn" href="#contact-us">{{ btnData }}</a>
        <p class="best-of__desc custom-description">
          We believe in utilizing Software Architecture Design patterns to
          create a solid ground for your future success
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import StripeWrapper from "../elements/strip-bg.vue";

@Component({
  components: {
    StripeWrapper
  }
})
export default class BestOf extends Vue {
  btnData = "<Hire us now>";
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.best-of {
  padding: 120px 0;

  @include for-middle() {
    padding: 70px 0;
  }

  &__text {
    font-size: 36px;
    font-weight: 700;
    line-height: 140%;
    max-width: 960px;
    padding-bottom: 60px;

    @include for-middle() {
      font-size: 24px;
      padding-bottom: 30px;
    }

    span {
      background: -webkit-linear-gradient(87.58deg, #f52c68 0%, #ff4874 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    max-width: 720px;
    align-items: end;

    @include for-smallmedium() {
      flex-direction: column-reverse;
    }
  }
}
.x-btn {
  background: linear-gradient(87.58deg, #f52c68 0%, #ff4874 100%);
}

.best-of__desc.custom-description {
  color: #42484f;
  font-weight: 300;

  @include for-smallmedium() {
    margin-bottom: 30px;
  }

  &:before {
    background: linear-gradient(87.58deg, #f52c68 0%, #ff4874 100%);
  }
}
</style>
