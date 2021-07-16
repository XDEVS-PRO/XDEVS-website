<template>
  <section class="sb" id="#service">
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
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "../elements/title.vue";
import StripeWrapper from "../elements/strip-bg.vue";

import imgs from '~/assets/services/index'

@Component({
  components: {
    TitleBlock,
    StripeWrapper
  }
})
export default class ServicesBlock extends Vue {
  cardList: Array<{ img: string; alt: string; title: string; desc: string }> = [
    {
      img: imgs.img1,
      alt: "Big Data Analytics",
      title: "Big Data Analytics",
      desc:
        "Apply advanced analytics and data-driven decisions to leverage quality of processes."
    },
    {
      img: imgs.img2,
      alt: "Mobile Application Development",
      title: "Mobile Application Development",
      desc:
        "Transform lucrative ideas into original industry-specific mobile apps."
    },
    {
      img: imgs.img3,
      alt: "Web Development",
      title: "Web Development",
      desc:
        "Upgrade or build from scratch scalable, fully-functional web solutions."
    },
    {
      img: imgs.img4,
      alt: "UI/UX design",
      title: "UI/UX design",
      desc: "Win with great user experience and persuasive design."
    },
    {
      img: imgs.img5,
      alt: "Quality Assurance",
      title: "Quality Assurance",
      desc:
        "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software."
    },
    {
      img: imgs.img6,
      alt: "Discovery phase",
      title: "Discovery phase",
      desc:
        "Implement your business idea consulting XDEVS experts and you get the best solutions ever to satisfy your target users’ needs."
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.sb {
  position: relative;

  &__cards-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding-bottom: 55px;
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;
    max-height: 296px;
    max-width: 380px;
    flex: 1 1 160px;
    margin: 15px;
    padding: 44px 30px 40px 30px;
    background-color: $white-f;
    align-items: flex-start;
    transition: box-shadow 0.5s ease-out;

    @media screen and (min-width: $breakpoint-lg) {
      width: 100%;
      flex: 1 1 280px;
    }

    @include for-average() {
      margin: 8px;
    }

    @include for-small() {
      padding: 30px;
    }

    @include for-verysmall() {
      margin: 0 0 8px 0;
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
    margin: 0 0 auto 0;
    font-weight: 300;
    line-height: 160%;
  }
}
</style>
