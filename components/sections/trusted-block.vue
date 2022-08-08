<template>
  <section class="sb shadow-bg" id="trusted-by">
    <dark-bg />
    <stripe-wrapper :color-strip="'red'" />
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
          <div class="sb__customers__card">
            <div
              :style="{
                backgroundColor: item.bgColor,
              }"
              class="sb__customers__card-front"
            >
              <img
                :src="item.img"
                :alt="item.alt"
                width="270"
                class="sb__card"
              />
            </div>
            <div
              class="sb__customers__card-back"
              :style="{
                backgroundColor: item.bgColor,
              }"
            >
              <a rel="noreferrer nofollow" :href="item.link" target="_blank">
                <div class="sb__customers__card-back-title">
                  {{ item.title }}
                </div>
                <div class="sb__customers__card-back-description">
                  {{ item.description }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import TitleBlock from "~/components/elements/title.vue";
import DarkBg from "~/components/elements/dark-bg.vue";
import StripeWrapper from "~/components/elements/strip-bg.vue";

//imgs
import imgs from "~/assets/slider";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TitleBlock,
    DarkBg,
    StripeWrapper,
  },
  setup() {
    const cardList = [
      {
        img: imgs.tab1,
        link: "https://inoxoft.com/",
        title: "International",
        description: "software development company",
        alt: "INOXOFT",
        bgColor: "#fff",
      },
      {
        img: imgs.tab2,
        link: "http://octopusit.nl/",
        title: "Software development agency",
        alt: "Octopus",
        bgColor: "#fff",
      },
      {
        img: imgs.tab3,
        link: "https://singlead.net/",
        title: "Digital agency",
        alt: "Singlead",
        bgColor: "#fff",
      },
      {
        img: imgs.tab4,
        link: "http://www.zitemedia.com/",
        title: "Aviation apps",
        alt: "zitemedia",
        bgColor: "#fff",
      },
      {
        img: imgs.tab5,
        link: "http://chargebackoptimizer.com/",
        title: "Fintech startup",
        alt: "chargeback",
        bgColor: "#fff",
      },
      {
        img: imgs.tab6,
        link: "https://devlogics.nl/",
        title: "Innovative apps",
        alt: "DevLogics",
        bgColor: "#fff",
      },
    ];
    return {
      cardList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.sb {
  &__container.container {
    padding: 120px 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include for-middle() {
      padding-bottom: 50px;
      padding-top: 50px;
      flex-direction: column;
      align-items: center;
    }

    @include for-average() {
      flex-direction: column;
      padding: 40px 1rem;
    }

    @include for-small() {
      padding: 20px 1rem;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;

    @include for-average() {
      flex-direction: column;
    }

    @include for-small() {
      padding: 0;
    }

    .title {
      display: inline-block;
      padding: 0;
      padding-bottom: 40px;

      @include for-average() {
        padding-bottom: 20px;
      }

      @include for-small() {
        padding-bottom: 10px;
      }
    }

    .custom-description {
      display: inline-block;

      @include for-average() {
        margin-left: 0;
        font-size: 0.85rem;
      }

      @include for-middle() {
        margin-bottom: 30px;
      }

      @include for-small() {
        font-size: 0.75rem;
        margin-bottom: 15px;
      }
    }
  }

  &__right {
    display: flex;
    flex-wrap: wrap;
    max-width: 650px;
    justify-content: space-between;

    @include for-average() {
      justify-content: space-around;
    }
  }

  &__wrapper-img {
    max-width: 200px;
    width: 100%;
    height: 120px;
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 10px;

    @include for-small() {
      width: 44%;
      height: 90px;
    }

    @include for-verysmall() {
      width: 40%;
      height: 60px;
    }
  }

  &__customers__card {
    width: 200px;
    position: relative;
    perspective: 1000px;

    @include for-average() {
      max-width: 180px;
    }

    @include for-small() {
      max-width: 136px;
    }
  }

  &__customers__card-front,
  &__customers__card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #fff;
    box-shadow: 0 6px 50px 0 rgba(5, 49, 91, 0.15);
    border: 1px solid #e7e8e9;
  }

  &__customers__card-back {
    flex-direction: column;
    color: #35c5d4;
    transform: rotateY(180deg);
    text-align: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #35c5d4;
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }

  &__wrapper-img:hover &__customers__card-front {
    transform: rotateY(180deg);
  }

  &__wrapper-img:hover &__customers__card-back {
    transform: rotateY(1turn);
  }

  &__card {
    margin: 0 15px;
    max-width: 200px;
    height: 100%;
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

:deep(.title) {
  padding-bottom: 40px;
}
</style>
