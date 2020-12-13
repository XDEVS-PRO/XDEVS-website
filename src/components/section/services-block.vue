<template>
  <section class="sb" id="service">
    <stripe-wrapper />
    <div class="sb__container container">
      <title-block :title="'Services'" :color-icon="'dark'"/>
      <div class="sb__cards-container">
        <div v-for="(item, i) in cardList" :key="i" class="sb__card-wrapper">
          <img v-if="item.img" class="sb__card-icon" :src="item.img" />
          <div v-if="item.title" class="sb__card-title">{{item.title}}</div>
          <div v-if="item.desc" class="sb__card-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";

@Component({components: {
    TitleBlock,
    StripeWrapper
  }})

export default class ServicesBlock extends Vue {

  cardList: Array<any> = [
    {
      img: "/img/services/i-1.svg",
      title: "Big Data Analytics",
      desc: "Apply advanced analytics and data-driven decisions to leverage quality of processes."
    },
    {
      img: "/img/services/i-2.svg",
      title: "Mobile Application Development",
      desc: "Transform lucrative ideas into original industry-specific mobile apps."
    },
    {
      img: "/img/services/i-3.svg",
      title: "Web Development",
      desc: "Upgrade or build from scratch scalable, fully-functional web solutions."
    },
    {
      img: "/img/services/i-4.svg",
      title: "UI/UX design",
      desc: "Win with great user experience and persuasive design."
    },
    {
      img: "/img/services/i-5.svg",
      title: "Quality Assurance",
      desc: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software."
    },
    {
      img: "/img/services/i-6.svg",
      title: "Discovery phase",
      desc: "Implement your business idea consulting Inoxoft experts and you get the best solutions ever to satisfy your target users’ needs."
    }
  ]
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
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.1);
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
      box-shadow: 15px 5px 70px 11px rgba(0, 0, 0, 0.15);
    }
  }

  &__card-icon {
    margin-bottom: 28px;
  }

  &__card-title {
    color: $dark-f;
    margin-bottom: 15px;
    font-size: 20px;
    max-width: 280px;
  }

  &__card-desc {
    color: $grey-f;
    font-size: 1rem;
    margin: 0 0 auto 0;
  }
}

</style>