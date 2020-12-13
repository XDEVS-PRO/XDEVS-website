<template>
  <section class="ts" id="tech-stack">
    <stripe-wrapper :color-strip="'ling'" />
    <div class="ts__container container">
      <title-block :title="'Core Team'" :color-icon="'dark'" />
      <div :class="['ts__inner', `state-${classState}`]">
        <svg
          class="item__tabs tabs"
          @click="changeState('tabs')"
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
        <svg
          class="item__screen screen"
          @click="changeState('screen')"
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
        <svg
          class="item__phone phone"
          @click="changeState('phone')"
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
        <svg
          class="item__cloud cloud"
          @click="changeState('cloud')"
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
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";

@Component({
  components: {
    TitleBlock,
    StripeWrapper
  }
})
export default class TechStack extends Vue {
  classState = "default";

  changeState(state: any = "default") {
    this.classState = state;
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

    @include for-large() {
      height: 500px;
    }
  }
}

.item {
  &__tabs,
  &__screen,
  &__phone,
  &__cloud {
    position: absolute;

    @include for-large() {
      max-width: 70%;
    }
  }

  &__tabs {
    right: 20%;
    top: 50%;
    z-index: 2;
  }

  &__screen {
    top: 28%;
  }

  &__phone {
    right: -60px;
    bottom: 15%;
  }

  &__cloud {
    top: 0;
    right: 28%;

    @include for-large() {
    }
  }
}

svg:hover {
  rect {
    stroke: red;
  }
}

.state {
  // first state
  &-default {
  }

  // cloud state
  &-cloud {
    top: 50%;
    transform: translateY(-50%) scale(1.2);
  }

  // browser state
  &-two {
  }

  // tab state
  &-three {
  }

  // phone state
  &-four {
  }
}

@include for-large() {
  .ts__inner {
    max-width: 400px;
  }

  .item {
    &__tabs {
      top: 35%;
    }

    &__screen {
      left: -90px;
      top: 14%;
    }

    &__phone {
      bottom: 32%;
      max-height: 50%;
    }

    &__cloud {
      max-width: 50%;
      top: -15px;
      right: 32%;
    }
  }
}
</style>
