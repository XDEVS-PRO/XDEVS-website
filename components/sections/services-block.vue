<template>
  <section class="sb" id="services">
    <stripe-wrapper />
    <div class="sb__container container">
      <title-block :title="'Services'" :color-icon="'dark'" />
      <div class="sb__cards-container">
        <div v-for="(item, i) in cardList" :key="i" class="sb__card-wrapper">
          <img
            v-if="item.img"
            class="sb__card-icon"
            :alt="item.alt"
            :src="item.img"
            width="52"
          />
          <div v-if="item.title" class="sb__card-title">{{ item.title }}</div>
          <div v-if="item.desc" class="sb__card-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TitleBlock from "~/components/elements/title.vue";
import StripeWrapper from "~/components/elements/strip-bg.vue";

import imgs from "~/assets/services/index";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TitleBlock,
    StripeWrapper,
  },
  setup() {
    const cardList: Array<{
      img: string;
      alt: string;
      title: string;
      desc: string;
    }> = [
      {
        img: imgs.img6,
        alt: "Discovery phase",
        title: "Discovery phase",
        desc: "Implement your business idea consulting XDEVS experts and you get the best solutions ever to satisfy your target users needs.",
      },
      {
        img: imgs.img3,
        alt: "Web Development",
        title: "Web Development",
        desc: "Upgrade or build from scratch scalable, fully-functional web solutions.",
      },
      {
        img: imgs.img2,
        alt: "Mobile Application Development",
        title: "Mobile Application Development",
        desc: "Transform lucrative ideas into original industry-specific mobile apps.",
      },

      {
        img: imgs.img4,
        alt: "UI/UX design",
        title: "UI/UX design",
        desc: "Win with great user experience and persuasive design.",
      },
      {
        img: imgs.img5,
        alt: "Quality Assurance",
        title: "Quality Assurance",
        desc: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
      },
      {
        img: imgs.img1,
        alt: "Costs optimization",
        title: "Costs optimization",
        desc: "Are you tired of growing expenses? Our team will analyze and suggest how to minimize costs without quality loss.",
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
  position: relative;

  &__cards-container {
    padding-bottom: 55px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;

    @include for-smallmedium() {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }

    @include for-small() {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;
    padding: 44px 30px 40px 30px;
    background-color: $white-f;
    align-items: flex-start;
    transition: box-shadow 0.5s ease-out;

    @include for-average() {
      padding: 30px;
    }

    @include for-small() {
      box-shadow: 0px 30px 40px -10px rgba(0, 133, 255, 0.2);
    }

    &:hover {
      box-shadow: 0px 30px 40px -10px rgba(0, 133, 255, 0.2);
    }
  }

  &__card-icon {
    margin-bottom: 28px;
  }

  &__card-title {
    color: $dark-f;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
    max-width: 280px;
  }

  &__card-desc {
    color: #42484f;
    font-size: 1rem;
    //margin: 0 0 auto 0;
    font-weight: 300;
    line-height: 160%;
  }
}
</style>
