<template>
  <section class="sb shadow-bg" id="#trusted-by">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="sb__container container">
      <div class="sb__left">
        <title-block :title="'Trusted By'" :color-icon="'light'" />
        <h4 class="custom-description">
          <span>XDEVS</span> is a <span>web/mobile development</span> team built
          upon our friendship and exceptional professionalism. We value each
          other and our clients value us.
        </h4>
      </div>
      <div class="sb__right">
        <div v-for="(item, i) in cardList" :key="i" class="sb__wrapper-img">
          <img :src="item.img" :alt="item.alt" width="270" class="sb__card" />
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

@Component({
  components: {
    TitleBlock,
    DarkBg,
    StripeWrapper
  }
})
export default class SliderBlock extends Vue {
  cardList: Array<{ img: string; link: string; alt: string }> = [
    {
      img: "/img/trusted-by/tab-1.svg",
      link: "https://www.google.com",
      alt: "INOXOFT"
    },
    {
      img: "/img/trusted-by/tab-2.svg",
      link: "https://www.google.com",
      alt: "Octopus"
    },
    {
      img: "/img/trusted-by/tab-3.svg",
      link: "https://www.google.com",
      alt: "Singlead"
    },
    {
      img: "/img/trusted-by/tab-4.svg",
      link: "https://www.google.com",
      alt: "zitemedia"
    },
    {
      img: "/img/trusted-by/tab-5.svg",
      link: "https://www.google.com",
      alt: "chargeback"
    },
    {
      img: "/img/trusted-by/tab-6.svg",
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
    padding: 45px 1rem 160px 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include for-large() {
      align-items: baseline;
    }

    @include for-middle() {
      padding-bottom: 70px;
    }

    @include for-average() {
      flex-direction: column;
      padding: 0 1rem 40px 1rem;
    }
  }

  &__right {
    display: flex;
    flex-wrap: wrap;
    max-width: 650px;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;

    @include for-middle() {
      width: 100%;
    }

    @include for-average() {
      padding: 0 0 1rem 0;
    }
  }

  &__wrapper-img {
    max-width: 200px;
    width: 100%;
    height: 100px;
    display: flex;
    align-self: center;
    justify-content: center;

    @include for-small() {
      width: initial;
    }
  }

  &__card {
    margin: 0 15px;
    max-width: 200px;

    @include for-average() {
      max-width: 180px;
    }

    @include for-small() {
      max-width: 120px;
      margin: 0 5px;
    }

    &-container {
      @include for-small() {
        display: none;
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

.custom-description {
  color: #6d6d6d;
  max-width: 400px;

  span {
    background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

::v-deep .title {
  padding-bottom: 40px;
}
</style>
