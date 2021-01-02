<template>
  <section class="cr" id="core-team">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="cr__container container">
      <title-block :title="'Core Team'" :color-icon="'light'" />
      <div class="cr__card-container">

        <custom-modal :is-open="isShowModal" :close="closeModal" >
          <div class="cr__modal" >
            <div class="cr__modal-container container">
              <img width="278" height="320"  v-if="dataModalCard.img" class="cr__modal-left" :src="dataModalCard.img" :alt="dataModalCard.alt" />
              <div class="cr__modal-right">
                <div class="cr__modal-right_title">
                  {{dataModalCard.title}}
                </div>
                <div class="cr__modal-right_subtitle">
                  {{dataModalCard.position}}
                </div>
                <div class="cr__modal-right_desc">
                  {{dataModalCard.desc}}
                </div>
              </div>
            </div>
          </div>
        </custom-modal>

        <div v-for="(item, i) in cardList" :key="i" class="cr__card-wrapper" >
          <div class="cr__card-icon">
            <img v-if="item.img" :src="item.img" :alt="item.alt" width="270" class="cr__card-icon_preview"  />
            <p class="cr__card-icon_preview-text" @click="showModal(item)">profile</p>
          </div>
          <div class="cr__card-text">
            <div v-if="item.title" class="cr__card-text-title">
              {{ item.title }}
            </div>
            <div v-if="item.position" class="cr__card-text-desc">
              {{ item.position }}
            </div>
            <a class="cr__card-text-btn" @click="showModal(item)">profile</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import DarkBg from "@/components/elements/dark-bg.vue";
import CustomModal from "@/components/elements/custom-modal.vue";

@Component({
  components: {
    TitleBlock,
    StripeWrapper,
    DarkBg,
    CustomModal
  }
})
export default class CoreTeam extends Vue {
  cardList: Array<any> = [
    {
      img: "/img/core-team/ct-1.svg",
      alt: "Andrew Whalle",
      title: "Andrew Whalle",
      position: "Founder of company",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: "/img/core-team/ct-2.svg",
      alt: "Valentina Dialektova",
      title: "Valentina Dialektova",
      position: "UX/ UI Designer",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: "/img/core-team/ct-3.svg",
      alt: "Vitaliy Sokolov",
      title: "Vitaliy Sokolov",
      position: "Developer",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      img: "/img/core-team/ct-4.svg",
      alt: "Viktoria Moroz",
      title: "Viktoria Moroz",
      position: "Copywriter",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  isShowModal = false;
  isCloseModal = false;
  dataModalCard = {};

  showModal(item: any) {
    this.dataModalCard = item;
    this.isShowModal = true;
  }

  closeModal() {
    this.dataModalCard = {};
    return this.isShowModal = false;
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.cr {
  &__card {
    &-icon {
      max-height: 310px;
      transition: all 0.6s ease-out;
      position: relative;

      @media screen and (max-width: 1300px) {
        max-height: 240px;
      }

      @media screen and (max-width: 560px) {
        max-width: 120px;
      }

      &:hover {
        .cr__card-icon_preview-text {
          opacity: 1;
        }
      }

      &_preview {
        &-text {
          position: absolute;
          opacity: 0;
          top: 50%;
          left: 50%;
          margin: 0 auto;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          font-weight: 600;
          color: $dark-f;
          background-color: $white-f;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-out;
          cursor: pointer;
        }
      }
    }

    &-container {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 70px;

      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
    }

    &-text,
    &-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0 30px 30px 0;
      transition: all 0.4s ease-out;

      @media screen and (max-width: 560px) {
        flex-direction: row;
        padding: 0 0 20px 0;
        width: 100%;
      }

      &-icon {
        cursor: pointer;
      }
    }

    &-text {
      padding: 0;

      @media screen and (max-width: 560px) {
        flex-direction: column;
        padding-left: 10px;
        align-self: center;
      }
    }

    &-text-title {
      font-size: 20px;
      color: $white-f;
      padding: 20px 0 5px;

      @media screen and (max-width: 560px) {
        padding-top: 0;
      }
    }

    &-text-desc {
      color: $grey-f;
      font-weight: 300;
    }

    &-text-btn {
      display: none;
      background-color: $white-f;
      text-transform: uppercase;
      font-size: 14px;
      padding: 8px 10px;
      max-width: max-content;
      margin-top: 8px;

      @include for-middle() {
        display: block;
      }
    }

    &-icon_preview {
      max-width: 270px;
      max-height: 310px;

      cursor: pointer;

      @media screen and (max-width: 1300px) {
        max-width: 210px;
        max-height: 240px;
      }

      @include for-small() {
        max-width: 120px;
      }
    }
  }

  &__modal {
    &-container.container {
      display: flex;

      @include for-large() {
        align-items: flex-start;
      }

      @include for-middle() {
        flex-direction: column;
      }

      @include for-smallmedium() {
        padding: 0;
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-left: 50px;
      max-width: 470px;

      @include for-middle() {
        padding-left: 0;
      }

      &_title,
      &_subtitle,
      &_desc {
        line-height: 150%;
        color: $grey-f;
      }

      &_title {
        color: $white-f;
        font-size: 20px;
        padding-bottom: 8px;

        @include for-smallmedium() {
          padding: 0;
          font-size: 18px;
        }
      }

      &_subtitle {
        font-size: 18px;
        padding-bottom: 30px;

        @include for-smallmedium() {
          padding-bottom: 10px;
          font-size: 16px;
        }
      }

      &_desc {
        font-size: 16px;

        @include for-smallmedium() {
          font-size: 14px;
        }
      }
    }

    &-left {
      @include for-large() {
        width: 60%;
        height: 60%;
        //max-width: 180px;
        margin-bottom: 20px;
      }

      @include for-smallmedium() {
        width: 40%;
        height: 60%;
        //max-width: 120px;
      }

    }
  }
}
</style>
