<template>
  <div class="title">
    <div class="title__inner">
      <div class="title__inner-icon">
        <img
          v-if="colorIcon === 'dark'"
          src="/img/dark-logo.svg"
          width="43"
          height="48"
          alt="XDEVS"
        />
        <img
          v-else-if="colorIcon === 'light'"
          src="/img/light-logo.svg"
          width="43"
          height="48"
          alt="XDEVS"
        />
      </div>
      <div :class="['title__inner-text', { dark: colorIcon === 'dark' }]">
        {{ title }}
      </div>
      <h4 v-if="descRight" class="custom-description right">
        {{ descRight }}
      </h4>
      <h4 v-if="descBottom"></h4>
    </div>
    <div
      v-if="subTitle"
      :class="['title__inner-text_subtitle', { dark: colorIcon === 'dark' }]"
    >
      {{ subTitle }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class TitleBlock extends Vue {
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop({ default: "light" }) colorIcon!: string;
  @Prop() descRight!: string;
  @Prop() descBottom!: string;
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.title {
  display: flex;
  flex-direction: column;
  padding: 105px 0 70px 0;

  @include for-middle() {
    padding: 35px 0 20px 0;
  }

  &__inner {
    display: flex;

    @include for-small() {
      justify-content: center;
    }

    &-icon {
      img {
        max-width: 32px;
      }
    }

    &-text {
      font-size: 36px;
      line-height: 43px;
      color: $white-f;
      margin-left: 40px;
      font-weight: 700;

      @include for-small() {
        font-size: 28px;
        margin-left: 20px;
      }

      &_subtitle {
        color: $white-f;
        font-weight: 300;
        padding-top: 6px;

        @include for-small() {
          text-align: center;
        }
      }
    }

    &-text.dark {
      color: $dark-f;
    }
  }
}

.custom-description {
  &.right {
    margin-left: 132px;

    @include for-average() {
      display: none;
    }
  }
}
</style>
