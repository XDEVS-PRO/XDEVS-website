<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__inner">
        <div class="header__left">
          <a href="/">
            <img class="header__left-img" src="/logo-header.svg" />
          </a>
        </div>
        <div class="header__right" v-if="headerList.length">
           <a class="header__right-link custom-link" v-for="(item, i) in headerList" :key="i" href="#" v-scroll-to="`${item.link}`">{{item.title}}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HeaderBlock extends Vue {
  headerList: any[] = [
    {
      title: "Services",
      link: "#service",
    },
    {
      title: "Core Team",
      link: "#core-team",
    },
    {
      title: "Tech Stack",
      link: "#tech-stack",
    },
    {
      title: "Trusted by",
      link: "#trusted-by",
    },
    {
      title: "Contact Us",
      link: "#contact-us",
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.header {
  //position: fixed;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #181818;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;

    @include for-average() {
      padding: 15px 0;
    }
  }

  &__left-img {
    @include for-smallmedium() {
      max-width: 120px;
    }
  }

  &__right {
    max-width: 586px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @include for-middle() {
      max-width: 460px;
    }
    
    @include for-average() {
      display: none;
    }

    &-link {
      color: $grey-f;
      text-decoration: none;

      @include for-middle() {
        font-size: 16px;
      }
    }
  }
}
</style>
