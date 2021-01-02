<template>
  <section class="sb shadow-bg" id="trusted-by">
    <dark-bg/>
    <stripe-wrapper :color-strip="'dark'"/>
    <div class="sb__container container">
      <title-block
          :title="'Trusted By'"
          :sub-title="'Keep growing with us'"
          :color-icon="'light'"
      />
      <infinite-slide-bar class="sb__card-container" :duration="'20s'" :barStyle="{ background: 'transparent' }">
        <img v-for="(item, i) in cardList"
             :key="i" :src="item.img" :alt="item.alt" width="270" class="sb__card"/>
      </infinite-slide-bar>
      <div class="sb__card-mobile_wrapper">
        <div v-for="(item, i) in cardList" :key="i" class="sb__card-mobile">
          <img :src="item.img" :alt="item.alt" width="200" class="sb__card-mobile_icon"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import DarkBg from "@/components/elements/dark-bg.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import InfiniteSlideBar from "vue-infinite-slide-bar";

@Component({
  components: {
    TitleBlock,
    DarkBg,
    StripeWrapper,
    InfiniteSlideBar
  }
})
export default class SliderBlock extends Vue {
  cardList: Array<{ img: string; link: string; alt: string }> = [
    {
      img: "/img/slider/tab-1.svg",
      link: "https://www.google.com",
      alt: "INOXOFT"
    },
    {
      img: "/img/slider/tab-2.svg",
      link: "https://www.google.com",
      alt: "Octopus"
    },
    {
      img: "/img/slider/tab-3.svg",
      link: "https://www.google.com",
      alt: "Singlead"
    },
    {
      img: "/img/slider/tab-4.svg",
      link: "https://www.google.com",
      alt: "zitemedia"
    },
    {
      img: "/img/slider/tab-5.svg",
      link: "https://www.google.com",
      alt: "chargeback"
    },
    {
      img: "/img/slider/tab-6.svg",
      link: "https://www.google.com",
      alt: "DevLogics"
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.sb {
  &__container.container {
    padding-bottom: 310px;

    @include for-middle() {
      padding-bottom: 70px;
    }
  }

  &__card {
    margin: 0 15px;
    box-shadow: 25px 25px 70px rgba(0, 0, 0, 0.15);

    @include for-average() {
      max-width: 180px;
    }

    &-container {
      @include for-small() {
        display: none;
      }
    }

    &-mobile {
      display: none;
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
      margin: 20px;

      @include for-small() {
        display: block;
        margin: 10px;
      }

      &_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
      }

      &_icon {
        width: 100%;
        height: auto;
        max-width: 200px;

        @include for-small() {
          max-width: 120px;
        }
      }
    }
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
</style>
