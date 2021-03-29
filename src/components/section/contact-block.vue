<template>
  <section class="cb" id="contact-us">
    <stripe-wrapper />
    <div class="cb__container container">
      <title-block :title="'Contact Us'" :color-icon="'dark'" class="title-mob"/>
      <div class="cb__inner">
        <title-block :title="'Contact Us'" :color-icon="'dark'" class="title-desc"/>
        <div class="cb__info">
          <div class="cb__info-left">
            <div class="cb__info-left_name">
              <div class="cb__info-left_name_info">
                <div class="cb__info-left_name_info-title">
                  Viktoria Samoilenko
                </div>
                <div class="cb__info-left_name_info-desc">
                  Head of Engagement
                </div>
              </div>
              <div class="cb__info-left_social">
                  <a v-for="(item, i) in cardList" :href="item.link" :key="i">
                    <img v-if="item.img" :alt="item.alt" class="cb__info-left_social-icon" width="45" height="45" :src="item.img"/>
                  </a>
              </div>
            </div>
          </div>
          <div class="cb__info-right">
            <img class="cb__info-right-icon" width="389" alt="Contact Person" src="/img/contact-us/per-i.svg"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TitleBlock from "@/components/elements/title.vue";
import StripeWrapper from "@/components/elements/strip-bg.vue";

@Component({
  components: {
    TitleBlock,
    StripeWrapper
  }
})

export default class ContactBlock extends Vue {
  cardList: Array<{ img: string; alt: string; link: string }> = [
    {
      img: "/img/contact-us/s-i.svg",
      alt: "Send us",
      link: "https://www.google.com"
    },
    {
      img: "/img/contact-us/l-i.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/xander-pokhylenko-9699b3161/"
    },
    {
      img: "/img/contact-us/p-i.svg",
      alt: "Post us",
      link: "mailto:dev@xander.im"
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.cb {
  &__info-left,
  &__info,
  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    justify-content: inherit;
    padding: 185px 0 185px 0;

    @include for-middle() {
      padding: 0px 0 70px 0;
      justify-content: flex-end;
      flex-direction: row-reverse;
    }

    @include for-small() {
      flex-direction: column-reverse;
      margin: 0 auto;
    }

    &-left {
      flex-direction: column;
      justify-content: flex-start;
      padding-right: 30px;
      text-align: right;

      @include for-middle() {
        padding-left: 30px;
      }

      @include for-small() {
        padding: 20px 0 30px 0;
      }

      &_name {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;

        @include for-small() {
          align-items: end;
        }

        &_info {
          flex: 1 1 100%;
          height: 100%;

          &-title {
            font-size: 20px;
            color: $dark-f;
            padding-bottom: 5px;
          }

          &-desc {
            color: $grey-f;
            font-weight: 300;
          }
        }
      }

      &_social {
        flex: 1 1 auto;
        display: flex;
        justify-content: space-between;

        @include for-small() {
          margin-top: 18px;
        }

        a:nth-child(2) {
          @include for-small() {
            margin: 0 10px;
          }
        }

        &-icon {
          transition: all 0.3s ease;
          box-shadow: 0vw 0vw 0 #B91F42;
          border-radius: 50%;

          &:hover {
            transform: translate(-4px, -4px);
            box-shadow: 0.3vw 0.3vw 0 #B91F42;
          }
        }
      }
    }
  }
}

.cb__info-right {
  &-icon {
    max-width: 389px;
    @include for-middle() {
      max-width: 290px;
      width: 100%;
    }
  }
}

.title {
  &-desc {
    padding-top: 175px;

    display: block;
    @include for-middle() {
      display: none;
    }
  }

  &-mob {
    display: none;
    @include for-middle() {
      display: block;
    }
  }
}
</style>