<template>
  <section class="sf">
    <div class="sf__container container">
      <p class="sf__left">© {{new Date().getFullYear()}} XDEVS, ALL RIGHTS RESERVED</p>
      <div class="sf__right">
        <nuxt-link to='/Terms' class="custom-link">
          Terms of use
        </nuxt-link>

        <nuxt-link to='/PrivacyPolicy' class="custom-link">
          Privacy Policy
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: 'short-footer'
  }
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.sf {
  background-color: #111111;
  padding: 24px 0;

  &__container.container {
    display: flex;
    justify-content: space-between;

    @include for-smallmedium() {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  &__right,
  &__left {
    color: #6d6d6d;
    width: 100%;
  }

  &__right {
    .custom-link {
      margin-left: 40px;
      color: #6d6d6d;
      font-size: 1rem;
      font-weight: 300;
      text-decoration: none;

      @include for-smallmedium() {
        margin: 0 20px 20px 20px;
      }
    }
  }

  &__left {
    font-size: 16px;
    font-weight: 300;
    font-size: 1rem;

    @include for-smallmedium() {
      padding-top: 1rem;
    }
  }
}
</style>
