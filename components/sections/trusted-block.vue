<template>
  <section class="sb shadow-bg" id="trusted-by">
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

    <div class="upwork__container container">
      <div class="upwork__left">
        <div class="logo-wrapper">
          <span>a trusted digital agency</span>
          <title-block :title="'XDEV on Upwork'" :color-icon="'light'" />
        </div>
        <h4 class="custom-description">
          In order to ensure the sefety of our job we have created an agency on
          the world known freelance website.
        </h4>
        <a
          href="https://www.upwork.com/ag/xdevs/"
          target="_blank"
          class="x-btn"
        >
          {{ btnText }}
        </a>
      </div>
      <div class="upwork__right">
        <div class="imgs-wrapper">
          <img
            class="upwork-window"
            src="@/assets/trusted-by/screen.webp"
            alt="upwork-window"
          />
          <img
            class="shadow"
            src="@/assets/trusted-by/shadow.webp"
            alt="shadow for upwork-window"
          />
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
        link: "https://www.google.com",
        alt: "INOXOFT",
      },
      {
        img: imgs.tab2,
        link: "https://www.google.com",
        alt: "Octopus",
      },
      {
        img: imgs.tab3,
        link: "https://www.google.com",
        alt: "Singlead",
      },
      {
        img: imgs.tab4,
        link: "https://www.google.com",
        alt: "zitemedia",
      },
      {
        img: imgs.tab5,
        link: "https://www.google.com",
        alt: "chargeback",
      },
      {
        img: imgs.tab6,
        link: "https://www.google.com",
        alt: "DevLogics",
      },
    ];
    const btnText = "<Go To Upwork>";
    return {
      cardList,
      btnText,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.sb {
  &__container.container,
  .upwork__container {
    padding: 45px 1rem;
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

.upwork {
  &__container.container {
    padding-bottom: 150px;
    align-items: flex-start;

    @include for-average() {
      flex-direction: row;
    }
  }
  &__left {
    align-self: flex-start;

    @include for-small() {
      width: 100%;
    }

    .logo-wrapper {
      position: relative;
      span {
        position: absolute;
        background: -webkit-linear-gradient(87.58deg, #0085ff, #11a9ff);
        font-size: 1rem;
        font-family: Noto Sans JP;
        line-height: 1.2rem;
        // padding-left: 72px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        top: -16px;
        left: 72px;

        // @include for-small() {
        // padding-left: 168px;
        // }
      }

      .title {
        padding-top: 10px;
      }
    }
    .custom-description {
      margin-bottom: 70px;

      @include for-large() {
        padding-right: 40px;
      }

      @include for-smallmedium() {
        margin-bottom: 40px;
      }
    }
  }

  &__right {
    max-width: 650px;
    margin-right: 16px;

    @include for-average() {
      align-self: center;
      display: block;
    }

    @include for-small() {
      display: none;
    }

    .imgs-wrapper {
      position: relative;

      .upwork-window {
        @include for-large() {
          max-width: 500px;
        }

        @include for-middle() {
          max-width: 400px;
        }

        @include for-average() {
          max-width: 250px;
        }

        @include for-smallmedium() {
          max-width: 150px;
        }
      }

      .shadow {
        position: absolute;
        bottom: -56px;
        left: -26px;

        @include for-large() {
          max-width: 540px;
        }

        @include for-middle() {
          max-width: 440px;
        }

        @include for-average() {
          max-width: 290px;
          bottom: -32px;
          left: -20px;
        }

        @include for-smallmedium() {
          max-width: 190px;
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
