<template>
  <section class="ts" id="tech-stack">
    <stripe-wrapper :color-strip="'ling'" />
    <div class="ts__container container">
      <title-block :title="'Core Team'" :color-icon="'dark'" />
      <div :class="['ts__inner', `state-${classState}`]">
        <div @click="changeState('default')" class="item__back-to-default">
          <div class="arrow-round"></div>
          <span>Come back</span>
        </div>
        <div class="item__tabs" @click="changeState('tabs')">
          <svg
            class="svg-tabs"
            width="400"
            height="260"
            viewBox="0 0 400 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="398"
              height="78"
              rx="14"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <rect
              x="1"
              y="91"
              width="398"
              height="78"
              rx="14"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <rect
              x="1"
              y="181"
              width="398"
              height="78"
              rx="14"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
            />
          </svg>
          <p class="item__tabs-text text-desc">
            here i add text for next desctiprion. here i add text for next
            desctiprion.
          </p>
          <div class="tabs-inner">
            <div class="tabs-inner-python">
              <img src="/img/tech-stack/python.svg" />
              <p>Python</p>
            </div>
            <div class="tabs-inner-nodejs">
              <img src="/img/tech-stack/node.svg" />
              <p>NodeJs</p>
            </div>
            <div class="tabs-inner-golang">
              <img src="/img/tech-stack/gl.svg" />
              <p>Golang</p>
            </div>
          </div>
        </div>
        <div class="item__screen" @click="changeState('screen')">
          <svg
            class="svg-screen"
            width="550"
            height="340"
            viewBox="0 0 550 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="548"
              height="338"
              rx="4"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
              class="rect-screen"
            />
            <rect y="30" width="550" height="2" fill="#C4C4C4" />
            <rect
              x="111"
              y="7"
              width="332"
              height="18"
              rx="2"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <circle cx="27" cy="16" r="6" stroke="#C4C4C4" stroke-width="2" />
            <circle cx="46" cy="16" r="6" stroke="#C4C4C4" stroke-width="2" />
            <circle cx="65" cy="16" r="6" stroke="#C4C4C4" stroke-width="2" />
          </svg>
          <p class="item__screen-text text-desc">
            here i add text for next desctiprion. here i add text for next
            desctiprion.
          </p>
          <div class="screen-inner">
            <div class="screen-inner_angular">
              <img src="/img/tech-stack/angular.svg" />
              <p>Angular</p>
            </div>
            <div class="screen-inner_react">
              <img src="/img/tech-stack/react.svg" />
              <p>React</p>
            </div>
            <div class="screen-inner_vue">
              <img src="/img/tech-stack/vue.svg" />
              <p>Vue</p>
            </div>
          </div>
        </div>
        <div class="item__phone" @click="changeState('phone')">
          <svg
            class="svg-phone"
            width="200"
            height="395"
            viewBox="0 0 200 395"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="198"
              height="393"
              rx="24"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <rect
              x="9"
              y="9"
              width="182"
              height="377"
              rx="14"
              fill="#F9F9F9"
              stroke="#C4C4C4"
              stroke-width="2"
            />
          </svg>
          <p class="item__phone-text text-desc">
            here i add text for next desctiprion. here i add text for next
            desctiprion.
          </p>
          <div class="phone-inner">
            <img class="phone-inner_react" src="/img/tech-stack/react.svg" />
            <p class="phone-inner_react-text">React Native</p>
            <img
              class="phone-inner_flutter"
              src="/img/tech-stack/flutter.svg"
            />
            <p class="phone-inner_flutter-text">Flutter</p>
          </div>
        </div>
        <div class="item__cloud" @click="changeState('cloud')">
          <svg
            class="svg-cloud"
            width="276"
            height="174"
            viewBox="0 0 276 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 119C0 149.376 24.6243 174 55 174H221C251.376 174 276 149.376 276 119C276 93.5083 258.658 72.0671 235.127 65.8313C229.5 28.5654 197.336 0 158.5 0C129.627 0 104.441 15.7894 91.1071 39.2048C85.6465 36.5125 79.4999 35 73 35C52.8357 35 36.0713 49.5565 32.6418 68.7345C13.4084 77.3025 0 96.5854 0 119Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 119C0 149.376 24.6243 174 55 174H221C251.376 174 276 149.376 276 119C276 93.5083 258.658 72.0671 235.127 65.8313C229.5 28.5654 197.336 0 158.5 0C129.627 0 104.441 15.7894 91.1071 39.2048C85.6465 36.5125 79.4999 35 73 35C52.8357 35 36.0713 49.5565 32.6418 68.7345C13.4084 77.3025 0 96.5854 0 119Z"
              fill="#F9F9F9"
            />
            <path
              d="M235.127 65.8313L233.15 66.1299L233.346 67.4282L234.615 67.7646L235.127 65.8313ZM91.1071 39.2048L90.2226 40.9986L91.9126 41.8319L92.845 40.1945L91.1071 39.2048ZM32.6418 68.7345L33.4556 70.5615L34.4239 70.1301L34.6105 69.0866L32.6418 68.7345ZM55 172C25.7289 172 2 148.271 2 119H-2C-2 150.48 23.5198 176 55 176V172ZM221 172H55V176H221V172ZM274 119C274 148.271 250.271 172 221 172V176C252.48 176 278 150.48 278 119H274ZM234.615 67.7646C257.29 73.7738 274 94.438 274 119H278C278 92.5785 260.025 70.3605 235.64 63.898L234.615 67.7646ZM158.5 2C196.332 2 227.668 29.8275 233.15 66.1299L237.105 65.5327C231.332 27.3033 198.34 -2 158.5 -2V2ZM92.845 40.1945C105.838 17.3782 130.374 2 158.5 2V-2C128.879 -2 103.044 14.2007 89.3691 38.2151L92.845 40.1945ZM73 37C79.1864 37 85.0311 38.439 90.2226 40.9986L91.9915 37.411C86.2619 34.5861 79.8133 33 73 33V37ZM34.6105 69.0866C37.8725 50.8454 53.8214 37 73 37V33C51.85 33 34.27 48.2676 30.673 68.3825L34.6105 69.0866ZM2 119C2 97.4036 14.9173 78.8197 33.4556 70.5615L31.8279 66.9076C11.8994 75.7852 -2 95.7672 -2 119H2Z"
              fill="#C4C4C4"
              mask="url(#path-1-inside-1)"
            />
          </svg>
          <p class="item__cloud-text text-desc">
            here i add text for next desctiprion. here i add text for next
            desctiprion.
          </p>
          <div class="cloud-inner">
            <img src="/img/tech-stack/aws.svg" />
            <p>AWS</p>
          </div>
        </div>
      </div>
      <div class="ts__inner-mob">
        <div
          @click="showModal(item)"
          class="ts__inner-mob_wrapper"
          v-for="(item, i) in cardsMobile"
          :key="i"
        >
          <img
            :class="[`ts__inner-mob_img-${item.className}`]"
            :src="item.img"
            :style="{
              opacity:
                item.className === isShowTextId && isShowText ? '0.4' : null
            }"
          />
          <p
            :class="[
              `ts__inner-mob_text-${item.className}`,
              { active: item.className === isShowTextId && isShowText }
            ]"
          >
            {{ item.text }}
          </p>
        </div>

        <custom-modal :is-open="isShowModal" :close="closeModal">
          <div class="cr__modal">
            <div class="cr__modal-container container">
              <div class="cr__modal-right">
                  {{dataModalCard.text}}
              </div>
            </div>
          </div>
        </custom-modal>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import CustomModal from "@/components/elements/custom-modal.vue";

@Component({
  components: {
    TitleBlock,
    StripeWrapper,
    CustomModal
  }
})
export default class TechStack extends Vue {
  cardsMobile = [
    {
      img: "/img/tech-stack/cloud-mob.svg",
      className: "cloud",
      text: "CLOUD this just some what are you see if you clicked icon",
      textId: "cloud"
    },
    {
      img: "/img/tech-stack/phone-mob.svg",
      className: "phone",
      text: "PHONE this just some what are you see if you clicked icon",
      textId: "phone"
    },
    {
      img: "/img/tech-stack/screen-mob.svg",
      className: "screen",
      text: "SCREEN this just some what are you see if you clicked icon",
      textId: "screen"
    },
    {
      img: "/img/tech-stack/tabs-mob.svg",
      className: "tabs",
      text: "TABS this just some what are you see if you clicked icon",
      textId: "tabs"
    }
  ];

  classState = "default";
  isShowText = false;
  isShowTextId = null;

  isShowModal = false;
  isCloseModal = false;
  dataModalCard = {};

  changeState(state: any = "default") {
    this.classState = state;
  }

  showText(item: any) {
    this.isShowTextId = item;
    this.isShowText = !this.isShowText;
  }

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
rect {
  transition: all 0.4s ease-out;
}

.ts {
  &__inner {
    max-width: 860px;
    margin: 0 auto;
    position: relative;
    height: 700px;

    @include for-middle() {
      max-width: 400px;
      height: 400px;
    }

    @include for-smallmedium() {
      height: initial;
    }
  }
}

.item {
  &__tabs,
  &__screen,
  &__phone,
  &__cloud {
    position: absolute;
    transition: all 0.6s ease-out;
    cursor: pointer;
  }

  &__tabs {
    right: 20%;
    top: 40%;
    z-index: 2;
  }

  &__screen {
    top: 5%;
  }

  &__phone {
    right: 68px;
    bottom: 45%;
  }
}

// hover for all SVG
.item__cloud:hover {
  .svg-cloud {
    path:last-of-type {
      fill: #337dee;
    }
  }
}

svg {
  transition: all 0.6s ease-out;

  rect,
  circle {
    transition: all 0.6s ease-out;
  }
}

svg:hover {
  rect,
  circle {
    stroke: #337dee;
  }
}
// end hover effect styles

.item__tabs-text.text-desc,
.item__screen-text.text-desc,
.item__phone-text.text-desc,
.item__cloud-text.text-desc {
  position: absolute;
  text-align: center;
  color: $dark-f;
  font-size: 14px;
  margin-top: 10px;
  opacity: 0;
  transition: all 0.6s ease-out;
}

//inner block styles
.tabs-inner,
.screen-inner,
.phone-inner,
.cloud-inner {
  transition: all 0.6s ease-out;
  text-align: center;

  svg {
    position: relative;
  }
}

.state {
  // first state
  &-tabs,
  &-screen,
  &-phone,
  &-default {
    .item__cloud {
      top: -12%;
      right: 28%;

      svg {
        position: relative;
      }

      .cloud-inner {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 25%;
        margin: auto;
        text-align: center;
        opacity: 1;
        z-index: 0;
      }

      path:first-of-type {
        fill: $white-f;
      }

      @include for-middle() {
        transform: translate(24%, -70%) scale(0.5);
        top: 20%;
      }
    }

    .item__phone {
      .svg-phone {
        rect:last-of-type {
          fill: $white-f;
        }
      }

      .phone-inner {
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translate(50%, -50%) scale(0.8);
        opacity: 1;
      }

      .phone-inner_react-text {
        margin-bottom: 16px;
      }

      @include for-middle() {
        //transform: translate(-30%, 0%) scale(0.6);
        transform: translate(40%, 28%) scale(0.5);
      }
    }

    .item__screen {
      .svg-screen {
        position: relative;

        rect:first-of-type {
          fill: $white-f;
        }
      }

      .screen-inner {
        display: flex;
        position: absolute;
        opacity: 1;
        top: 0;
        left: 50%;
        transform: translate(-50%, 40%);
        bottom: 0;

        &_angular,
        &_vue,
        &_react {
          margin: 0 10px;
        }
      }

      @include for-middle() {
        //transform: translate(-40%, -35%) scale(0.6);
        transform: translate(-30%, -15%) scale(0.5);
      }
    }

    .item__tabs {
      svg {
        position: relative;

        rect {
          fill: $white-f;
        }
      }

      .tabs-inner {
        position: absolute;
        top: 0px;
        left: 30px;
        max-height: 250px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        &-python,
        &-nodejs,
        &-golang {
          display: flex;
          align-items: center;

          p {
            margin-left: 20px;
          }
        }
      }

      @include for-middle() {
        transform: translate(20%, -20%) scale(0.6);
        transform: translate(20%, -20%) scale(0.5);
      }
    }
  }

  // cloud state
  &-cloud {
    .item__cloud {
      top: -12%;
      right: 28%;
      transform: translate(-15%, 80%) scale(1.1);

      svg {
        position: relative;
      }

      .cloud-inner {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 25%;
        margin: auto;
        text-align: center;
        opacity: 1;
        z-index: 0;
        transform: scale(1.2);
      }

      path:first-of-type {
        fill: $white-f;
      }

      path:last-of-type {
        fill: #337dee;
      }

      &-text.text-desc {
        opacity: 1;
      }

      @include for-middle() {
        transform: translate(16%, 30%) scale(0.6);
      }
    }

    .item__phone {
      transform: translate(20%, 0%) scale(0.7);

      .phone-inner {
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translate(50%, -50%) scale(0.8);
        opacity: 0;
        will-change: opacity;
      }

      .phone-inner_react-text {
        margin-bottom: 16px;
      }

      @include for-middle() {
        transform: translate(68%, 32%) scale(0.5);
      }
    }

    .item__screen {
      transform: translate(29%, 70%) scale(0.7);

      .screen-inner {
        display: flex;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 40%);
        bottom: 0;

        &_angular,
        &_vue,
        &_react {
          margin: 0 10px;
        }
      }

      @include for-middle() {
        transform: translate(-14%, 18%) scale(0.4);
      }
    }

    .item__tabs {
      transform: translate(-105%, -90%) scale(0.7);

      .tabs-inner {
        position: absolute;
        top: 0px;
        left: 30px;
        opacity: 0;
        max-height: 250px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      @include for-middle() {
        transform: translate(-28%, -70%) scale(0.4);
      }
    }

    .item__back-to-default {
      opacity: 1;
    }
  }

  // screen(browser) state
  &-screen {
    .item__cloud {
      //top: 50%;
      transform: translate(-145%, 100%) scale(0.7);

      path:first-of-type {
        fill: #f9f9f9;
      }

      .cloud-inner {
        opacity: 0;
      }

      @include for-middle() {
        //transform: translate(15%, -170%) scale(0.5);
        transform: translate(14%, 70%) scale(0.4);
      }
    }

    .item__phone {
      transform: translate(30%, 10%) scale(0.7);

      .phone-inner {
        opacity: 0;
      }

      .svg-phone {
        rect:last-of-type {
          fill: #f9f9f9;
        }
      }

      @include for-middle() {
        //transform: translate(10%, 6%) scale(0.4);

        transform: translate(78%, 32%) scale(0.5);
      }
    }

    .item__screen {
      transform: translate(28%, -10%) scale(0.8);
      //transform: translate(-17%, -13%) scale(0.5);

      &-text.text-desc {
        opacity: 1;
        left: 0;
        right: 0;
      }

      rect:first-of-type {
        fill: #f9f9f9;
      }

      rect,
      circle {
        stroke: #337dee;
      }

      @include for-middle() {
        //transform: translate(-17%, -25%) scale(0.5);
        transform: translate(-17%, -13%) scale(0.5);
      }
    }

    .item__tabs {
      transform: translate(-12%, 20%) scale(0.7);

      .tabs-inner {
        opacity: 0;
      }

      @include for-middle() {
        transform: translate(-45%, -60%) scale(0.4);
      }
    }

    .item__back-to-default {
      opacity: 1;
    }
  }

  // tab state
  &-tabs {
    .item__cloud {
      //top: 50%;
      transform: translate(-145%, 100%) scale(0.7);

      path:first-of-type {
        fill: #f9f9f9;
      }

      .cloud-inner {
        opacity: 0;
      }

      @include for-middle() {
        transform: translate(-52%, -40%) scale(0.5);
      }
    }

    .item__phone {
      transform: translate(20%, 0%) scale(0.7);

      .svg-phone {
        rect:last-of-type {
          fill: #f9f9f9;
        }
      }

      .phone-inner {
        opacity: 0;
      }

      @include for-middle() {
        transform: translate(68%, 32%) scale(0.5);
      }
    }

    .item__screen {
      transform: translate(29%, 70%) scale(0.7);

      .screen-inner {
        opacity: 0;
      }

      .svg-screen {
        rect:first-of-type {
          fill: #f9f9f9;
        }
      }

      @include for-middle() {
        transform: translate(-14%, 22%) scale(0.4);
      }
    }

    .item__tabs {
      transform: translate(-15%, -100%) scale(0.8);

      &-text.text-desc {
        opacity: 1;
      }

      rect {
        fill: $white-f;
      }

      rect,
      circle {
        stroke: #337dee;
      }

      @include for-middle() {
        //transform: translate(22%, -64%) scale(0.5);
        transform: translate(21%, -75%) scale(0.5);
      }
    }

    .item__back-to-default {
      opacity: 1;
    }
  }

  // phone state
  &-phone {
    .item__cloud {
      //top: 50%;
      transform: translate(95%, 100%) scale(0.7);

      path:first-of-type {
        fill: #f9f9f9;
      }

      .cloud-inner {
        opacity: 0;
      }

      @include for-middle() {
        transform: translate(18%, 74%) scale(0.4);
      }
    }

    .item__phone {
      transform: translate(-135%, -20%) scale(0.9);

      rect:last-of-type {
        fill: #f9f9f9;
      }

      &-text.text-desc {
        opacity: 1;
      }

      rect,
      circle {
        stroke: #337dee;
      }

      @include for-middle() {
        //transform: translate(-80%, 5%) scale(0.6);
        transform: translate(-15%, 25%) scale(0.5);
      }
    }

    .item__screen {
      transform: translate(29%, 80%) scale(0.7);

      .screen-inner {
        opacity: 0;
      }

      .svg-screen {
        rect:first-of-type {
          fill: #f9f9f9;
        }
      }

      @include for-middle() {
        transform: translate(20%, -18%) scale(0.4);
      }
    }

    .item__tabs {
      transform: translate(-105%, -90%) scale(0.7);

      .tabs-inner {
        opacity: 0;
      }

      .svg-tabs {
        rect {
          fill: #f9f9f9;
        }
      }

      @include for-middle() {
        transform: translate(-18%, -60%) scale(0.4);
      }
    }

    .item__back-to-default {
      opacity: 1;
    }
  }
}

// from 280px to 660px
.ts__inner.state-default {
  @include for-smallmedium() {
    display: none;
  }
}

.ts__inner-mob_wrapper {
  position: relative;
}

.ts__inner-mob {
  display: none;
  @include for-smallmedium() {
    display: block;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 40px;
  }

  &_img {
    &-cloud,
    &-phone,
    &-screen,
    &-tabs {
      width: 100%;
      margin: 8px;
      position: relative;
      transition: all 0.6s ease-out;
    }

    &-cloud {
      max-width: 170px;
    }

    &-phone {
      max-height: 190px;
      max-width: 96px;
    }

    &-screen {
      max-width: 220px;
    }

    &-tabs {
      max-width: 180px;
    }
  }
}

.ts__inner-mob_text-cloud,
.ts__inner-mob_text-phone,
.ts__inner-mob_text-screen,
.ts__inner-mob_text-tabs {
  transition: all 0.6s ease-out;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: $dark-f;
  font-size: 13px;
  color: #fff;
  padding: 20px;

  &.active {
    opacity: 1;
  }
}

// arrow + animation for arrow
.arrow-round {
  position: relative;
  width: 20px;
  height: 20px;
  margin: 20px auto;

  border: 10px solid $dark-f;
  border-radius: 50%;
  border-right-color: transparent;

  @media screen and (min-width: 991px) {
    animation-name: rotation;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

.arrow-round::after {
  content: "";
  position: absolute;
  border: 20px solid #ffffff;
  top: -10px;
  left: 10px;
  border-bottom-color: $dark-f;
  border-top-width: 0;
  border-right-width: 0;
  border-left-color: transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.item__back-to-default {
  position: absolute;
  top: -120px;
  right: 0;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.6s ease-out;

  @include for-middle() {
    transform: scale(0.6);
    top: -80px;
  }

  @include for-smallmedium() {
    display: none;
  }

  span {
    background-color: $dark-f;
    color: $white-f;
    padding: 6px 8px;
    transition: all 0.6s ease-out;

    @media screen and (min-width: 991px) {
      opacity: 0;
    }
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
}

.cr__modal-right {
  color: #fff;
  max-width: 270px;
  margin: 0 auto;
  padding: 60px 0;
}

@include for-middle() {
  .ts__inner {
    max-width: 400px;
  }
}
</style>
