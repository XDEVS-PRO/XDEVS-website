<template>
  <section class="sb shadow-bg" id="trusted-by">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="sb__container container">
      <div class="sb__left">
        <title-block
          class="trusted-by"
          :title="'Trusted By'"
          :color-icon="'light'"
        />
        <h4 class="custom-description">
          <span>XDEVS</span> is a <span>web/mobile development</span> team built
          upon our friendship and exceptional professionalism. We value each
          other and our clients value us.
        </h4>
      </div>
      <div class="sb__right">
        <div v-for="(item, i) in cardList" :key="i" class="flip-container">
          <div class="flip">
            <div class="front">
              <img class="front-image" :src="item.img" :alt="item.alt" />
            </div>
            <div class="back">
              <a
                class="back-link"
                :href="item.link"
                rel="noreferrer nofollow"
                target="_blank"
              >
                <h4 class="back-title">{{ item.title }}</h4>
                <h4 class="back-subtitle">{{ item.subtitle }}</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import TitleBlock from '~/components/elements/title.vue';
import DarkBg from '~/components/elements/dark-bg.vue';
import StripeWrapper from '~/components/elements/strip-bg.vue';

//imgs
import { defineComponent } from 'vue';

import { cardList } from '~/assets/trusted-by/cardList';

export default defineComponent({
  components: {
    TitleBlock,
    DarkBg,
    StripeWrapper,
  },
  setup() {
    return {
      cardList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '/assets/styles/variables';

.sb {
  &__container.container {
    padding: 45px 1rem 160px 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include for-middle() {
      padding-bottom: 70px;
      padding-top: 70px;
      align-items: flex-start;
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

  .title.trusted-by {
    @include for-middle() {
      padding-top: 0;
    }

    @include for-average() {
      padding-top: 35px;
    }

    @include for-smallmedium() {
      padding-top: 40px;
      padding-bottom: 20px;
    }
  }

  .flip-container,
  .front,
  .back {
    width: 200px;
    height: 100px;

    @include for-small() {
      width: 150px;
      height: 80px;
    }

    @include for-verysmall() {
      width: 120px;
    }
  }

  .flip-container {
    perspective: 1000px;
    margin-bottom: 4px;
  }

  .flip-container:hover .flip {
    transform: rotateY(180deg);
  }

  .flip {
    position: relative;
    transform-style: preserve-3d;
    transition: 0.6s;
  }

  .front,
  .back {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .front {
    transform: rotateY(0);
    z-index: 2;
  }

  .back {
    transform: rotateY(180deg);
    text-align: center;
  }

  .front-image,
  .back-link {
    max-width: 150px;

    @include for-small() {
      max-width: 120px;
    }

    @include for-verysmall() {
      width: 100px;
    }
  }

  .back-link {
    width: 100%;
    @include for-small() {
      font-size: 12px;
    }
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

:deep(.title) {
  padding-bottom: 40px;
}
</style>
