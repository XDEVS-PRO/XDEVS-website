<template>
  <section class="sb shadow-bg" id="trusted-by">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="sb__container container">
      <div class="title-container">
        <title-block :title="'Trusted By'" :color-icon="'light'" />
        <h4 class="custom-description">
          <span>XDEVS</span> is a <span>web/mobile development</span> team built
          upon our friendship and exceptional professionalism. We value each
          other and our clients value us.
        </h4>
      </div>

      <div class="sb__customers__card__container">
        <div
          v-for="(item, i) in cardList"
          :key="i"
          class="sb__customers__card-wrapper"
        >
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
                <img
                  :src="item.img"
                  :alt="item.alt"
                  width="270"
                  class="sb__card"
                />
              </a>

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
    padding: 45px 1rem 160px 1rem;
    display: flex;
    flex-direction: column;

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

  .title-container {
    display: flex;
    padding: 105px 0 70px;

    @include for-middle() {
      padding: 35px 0 20px;
    }

    @include for-average() {
      flex-direction: column;
    }

    .title {
      display: inline-block;
      padding: 0;

      @include for-average() {
        padding-bottom: 20px;
      }
    }

    .custom-description {
      display: inline-block;
      margin-left: 132px;

      @include for-average() {
        margin-left: 0;
      }
    }
  }

  &__customers__card__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__customers__card-wrapper {
    margin: 20px;
  }

  &__customers__card {
    width: 200px;
    height: 200px;
    position: relative;
    perspective: 1000px;
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
    border-radius: 10px;
  }

  &__customers__card-front {
    img {
      max-width: 150px;
      width: 100%;
    }
  }

  &__customers__card-back {
    flex-direction: column;
    color: #35c5d4;
    transform: rotateY(180deg);
    text-align: center;
    a {
      color: #35c5d4;
      cursor: pointer;
      img {
        max-width: 150px;
        width: 100%;
      }
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

  &__customers__card-wrapper:hover &__customers__card-front {
    transform: rotateY(180deg);
  }

  &__customers__card-wrapper:hover &__customers__card-back {
    transform: rotateY(1turn);
  }

  &__card {
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

:deep(.title) {
  padding-bottom: 40px;
}
</style>
