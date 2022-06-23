<template>
  <section id="fb" class="fb">
    <dark-bg/>
    <stripe-wrapper :color-strip="'dark'"/>
    <div class="fb__container container">
      <div class="fb__text">
        <h3 class="fb__text-title">
          We deliver first-class software products.
          <span>Grow faster</span>
          with the right talents by your side.
        </h3>
        <div class="fb__text-subtitle_container">
          <h4 class="fb__text-subtitle custom-description">
            <span>XDEVS</span> offers development services to match your company's specific needs.
            We listen. We care. We know how to make your product look top-notch and work as swiss clocks.
          </h4>
          <a href="#core-team" >
            <button class="x-btn">{{ btnText }}</button>
          </a>
        </div>
      </div>
      <img
          class="fb__bg-img"
          alt="XDEVS developers"
          src="~/assets/first-block/team-photo.png"
      />
    </div>
  </section>
</template>

<script lang="ts">
import StripeWrapper from '~/components/elements/strip-bg.vue';
import DarkBg from '~/components/elements/dark-bg.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    StripeWrapper,
    DarkBg
  },
  setup() {
    return {
      btnText: `<Meet the team>`
    }
  },
})
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

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
      background-clip: text;
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
      align-items: flex-end;

      @include for-middle() {
        flex-direction: column;
      }
    }

    span {
      white-space: nowrap;
      background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__bg-img {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -2;
    max-width: 742px;

    @include for-middle() {
      max-width: 480px;
    }

    @include for-small() {
      display: none;
    }
  }
}
</style>
