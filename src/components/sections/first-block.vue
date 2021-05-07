<template>
  <section id="#fb" class="fb">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="fb__container container">
      <div class="fb__text">
        <h3 class="fb__text-title">
          We are a highly skilled professional
          <span>web development</span>
          team, located in Eastern Europe
        </h3>
        <div class="fb__text-subtitle_container">
          <h4 class="fb__text-subtitle custom-description">
            We deliver first-class software products. Grow faster with the right
            talents by your side.
          </h4>
          <a href="#contact-us" class="x-btn">{{ btnText }}</a>
        </div>
      </div>
      <img
        class="fb__bg-img"
        alt="XDEVS developers"
        src="/img/first-block/bg-developers.svg"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import DarkBg from "@/components/elements/dark-bg.vue";

@Component({
  components: {
    StripeWrapper,
    DarkBg
  }
})
export default class FirstBlock extends Vue {
  btnText = "<Discuss your project>";
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.fb {
  padding: 260px 0;

  @include for-middle() {
    padding: 180px 0;
  }

  @include for-average() {
    padding: 100px 0 70px 0;
    height: initial;
  }

  &__container.container {
    position: relative;
    display: flex;
  }

  &__img {
    max-width: 890px;
    width: 100%;
  }

  &__text {
    max-width: 820px;

    @include for-middle() {
      max-width: 480px;
    }
  }

  &__text-title {
    color: $white-f;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    text-align: left;
    letter-spacing: -0.01em;
    padding-bottom: 60px;

    @include for-middle() {
      font-size: 24px;
      padding-bottom: 30px;
    }

    span {
      white-space: nowrap;
      background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__text-subtitle {
    @include for-middle() {
      margin-bottom: 30px;
    }

    &_container {
      display: flex;
      max-width: 778px;
      justify-content: space-between;
      align-items: end;

      @include for-middle() {
        flex-direction: column;
      }
    }
  }

  &__bg-img {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -2;

    @include for-middle() {
      max-width: 480px;
    }

    @include for-small() {
      display: none;
    }
  }
}
</style>
