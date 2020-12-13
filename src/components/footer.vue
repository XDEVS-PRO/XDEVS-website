<template>
  <footer class="footer">
    <stripe-wrapper :color-strip="'dark'" />
    <dark-bg />
    <div class="footer__container container">
      <div class="footer__inner">
        <div class="footer__left">
          <a href="/">
            <img class="footer__left-img" src="/logo-header.svg" />
          </a>
        </div>
        <div class="footer__center">
          <a class="custom-link" href="/pravicy-policy">Privacy Policy</a>
        </div>
        <div class="footer__right">
          <div>
            All rights reserved ©
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import DarkBg from "@/components/elements/dark-bg.vue";

@Component({components: {
    StripeWrapper,
    DarkBg
  }})

export default class FooterBlock extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.footer {
  position: relative;
  //background-color: #181818;
  color: $grey-f;
  font-weight: 300;


  &__inner {
    padding: 26px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include for-smallmedium() {
      flex-direction: column;
      align-items: initial;
    }

    @include for-average() {
      align-items: center;
    }
  }

  &__left-img {
    @include for-average() {
      max-width: 120px;
    }
  }

  &__center {
    @include for-average() {
      display: none;
    }

    a {
      margin: 0 20px;
      color: $grey-f;
      text-decoration: none;
      display: inline-block;
      position: relative;

      @include for-smallmedium() {
        margin: 20px 20px 20px 0;
      }


    }
  }

  &__right {
    @include for-smallmedium() {
      font-size: 16px;
    }

    @include for-average() {
      display: none;
    }
  }
}

</style>