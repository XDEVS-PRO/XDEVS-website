<template>
  <div class="title">
      <div class="title__inner">
        <div class="title__inner-icon">
          <img v-if="colorIcon === 'dark'" src="/img/dark-logo.svg"/>
          <img v-else-if="colorIcon === 'light'" src="/img/light-logo.svg"/>
        </div>
        <div :class="['title__inner-text', {dark: colorIcon === 'dark'}]">
          {{ title }}
        </div>
    </div>
    <div v-if="subTitle" :class="['title__inner-text_subtitle', {dark: colorIcon === 'dark'}]">
      {{subTitle}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})

export default class TitleBlock extends Vue {
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop({default: 'light' }) colorIcon!: string;
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

    &-text {
      font-size: 30px;
      line-height: 43px;
      color: $white-f;
      margin-left: 10px;

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
</style>