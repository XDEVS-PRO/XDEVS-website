<template>
  <section class="cr" id="core-team">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="cr__container container">
      <title-block
        :title="'Core Team'"
        :color-icon="'light'"
        :desc-right="titleSubData"
      />

      <h4 class="custom-description mobile">
        {{ titleSubData }}
      </h4>

      <div class="cr__card-container">
        <custom-modal :is-open="isShowModal" :close="closeModal">
          <div class="cr__modal">
            <div class="cr__modal-container container">
              <img
                width="278"
                height="320"
                v-if="dataModalCard.img"
                class="cr__modal-left"
                :src="dataModalCard.img"
                :alt="dataModalCard.alt"
              />
              <div class="cr__modal-right">
                <div class="cr__modal-right_text">
                  <div class="cr__modal-right_text-wrapper">
                    <p class="cr__modal-right_title">
                      {{ dataModalCard.title }}
                    </p>
                    <p class="cr__modal-right_subtitle">
                      {{ dataModalCard.position }}
                    </p>
                  </div>
                  <div class="cr__modal-right_social">
                    <template v-for="social in dataModalCard.social">
                      <a :href="social.link" target="_blank">
                        <img :src="social.src" :alt="social.alt" />
                      </a>
                    </template>
                  </div>
                </div>
                <div class="cr__modal-right_desc">
                  {{ dataModalCard.desc }}
                </div>
              </div>
            </div>
          </div>
        </custom-modal>

        <ClientOnly>
          <swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="30"
            :scrollbar="{ draggable: true }"
            :loop="true"
            :free-mode="true"
            :speed="10000"
            :autoplay="{
              delay: 1,
              pauseOnMouseEnter: true,
            }"
            :breakpoints="{
              560: { slidesPerView: 4 },
            }"
          >
            <swiper-slide v-for="item in TeamBlockCards">
              <div class="cr__card-wrapper">
                <div class="cr__card-icon">
                  <img
                    v-if="item.img"
                    :src="item.img"
                    :alt="item.alt"
                    class="cr__card-icon_preview"
                  />
                  <p
                    class="cr__card-icon_preview-text"
                    @click="showModal(item)"
                  >
                    profile
                  </p>
                </div>
                <div class="cr__card-text">
                  <div v-if="item.title" class="cr__card-text-title">
                    {{ item.title }}
                  </div>
                  <div v-if="item.position" class="cr__card-text-desc">
                    {{ item.position }}
                  </div>
                  <a class="cr__card-text-btn" @click="showModal(item)"
                    >profile</a
                  >
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TitleBlock from "~/components/elements/title.vue";
import StripeWrapper from "~/components/elements/strip-bg.vue";
import DarkBg from "~/components/elements/dark-bg.vue";
import CustomModal from "~/components/elements/custom-modal.vue";
import { ref } from "vue";
import TeamBlockCards from "./team-block-data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const modules = [Autoplay, FreeMode, Scrollbar];
const isShowModal = ref(false);
const isCloseModal = ref(false);
const dataModalCard = ref<Record<string, any>>({});

const titleSubData =
  "To stay on top of our game, every member of our team constantly works on self-improving his professional skills";

function showModal(item: any) {
  dataModalCard.value = item;
  isShowModal.value = true;
}

function closeModal() {
  dataModalCard.value = {};
  return (isShowModal.value = false);
}
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

:deep(.swiper-wrapper) {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
.cr {
  &__card {
    &-icon {
      transition: all 0.6s ease-out;
      position: relative;

      @media screen and (max-width: 1300px) {
      }

      @media screen and (max-width: 560px) {
        padding-left: 10px;
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
        padding-top: 30px;
      }
    }

    &-text,
    &-wrapper {
      display: flex;
      flex-direction: column;
      transition: all 0.4s ease-out;
      margin-bottom: 10px;
      height: 100%;

      @media screen and (max-width: 560px) {
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
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px 0 20px 10px;
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
      cursor: pointer;
      width: 100%;

      @media screen and (max-width: 1300px) {
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

      &_text-wrapper {
        padding-right: 10px;
      }

      &_social,
      &_text {
        display: flex;
        justify-content: space-between;
      }

      &_social {
        max-width: 94px;
        width: 100%;
      }

      &_title,
      &_subtitle,
      &_desc {
        line-height: 150%;
        color: $grey-f;
      }

      &_title {
        color: $white-f;
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 10px;

        @include for-smallmedium() {
          padding: 0;
          font-size: 18px;
        }
      }

      &_subtitle {
        font-size: 16px;
        padding-bottom: 30px;
        font-weight: 300;
        color: $white-f;
        opacity: 0.5;

        @include for-smallmedium() {
          padding-bottom: 10px;
          font-size: 16px;
        }
      }

      &_desc {
        font-size: 16px;
        opacity: 0.8;
        color: $white-f;
        font-weight: 300;

        @include for-smallmedium() {
          font-size: 14px;
        }
      }
    }

    &-left {
      @include for-large() {
        width: 60%;
        height: 60%;
        margin-bottom: 20px;
      }

      @include for-smallmedium() {
        width: 40%;
        height: 60%;
      }
    }
  }
}

:deep(.custom-description.right) {
  color: #6d6d6d;
}

.custom-description.mobile {
  display: none;
  color: #6d6d6d;
  @include for-average() {
    display: block;
  }
}
</style>
