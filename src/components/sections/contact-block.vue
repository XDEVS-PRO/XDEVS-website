<template>
  <section class="cb" id="#contact-us">
    <stripe-wrapper />
    <div class="cb__container container">
      <div class="cb__inner">
        <div class="cb__info-left_wrapper">
          <title-block :title="'Contact Us'" :color-icon="'dark'" />
          <h4 class="custom-description">
            Working with us you know exactly what every member of our team is
            working on. We provide only high-quality battle-tested solutions
          </h4>

          <a class="x-btn desc" href="mailto:dev@xander.im" target="_blank">
            {{ btnText }}
          </a>
        </div>

        <div class="cb__info-right_wrapper">
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
                <a
                  v-for="(item, i) in contactUs"
                  :href="item.link"
                  :key="i"
                  target="_blank"
                >
                  <img
                    v-if="item.img"
                    :alt="item.alt"
                    class="cb__info-left_social-icon"
                    width="24"
                    height="24"
                    :src="item.img"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="cb__info-right">
            <img
              class="cb__info-right-icon"
              width="277"
              alt="Contact Person"
              src="@@/public/img/contact-us/per-i.svg"
            />
          </div>
        </div>

        <a class="x-btn mob" href="mailto:dev@xander.im" target="_blank">
          {{ btnText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBlock from "../elements/title.vue";
import StripeWrapper from "../elements/strip-bg.vue";
import { contactUs } from "../../assets/data/index-page.json";

@Component({
  components: {
    TitleBlock,
    StripeWrapper
  }
})
export default class ContactBlock extends Vue {
  btnText = "<Let’s start your project>";
  contactUs: Array<{ img: string; alt: string; link: string }> = [];

  created() {
    this.contactUs = contactUs;
  }
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

  &__inner {
    max-width: 1055px;
    padding-bottom: 120px;

    @include for-smallmedium() {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 70px;
    }
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

    &-right_wrapper {
      display: flex;
      padding-top: 140px;

      @include for-average() {
        padding-top: 40px;
      }

      @include for-smallmedium() {
        flex-direction: row-reverse;
        justify-content: flex-end;
        padding-top: 0;
      }
    }

    &-right {
      align-self: center;
    }

    &-left {
      justify-content: flex-start;
      padding-right: 30px;
      text-align: right;

      @include for-middle() {
        padding-left: 30px;
      }

      @include for-small() {
        padding: 20px 0 30px 0;
      }

      @include for-smallmedium() {
        width: 100%;
        margin-left: 10px;
      }

      &_name {
        display: flex;
        flex-direction: column;
        align-self: center;

        @include for-small() {
          align-items: end;
        }

        &_info {
          padding-bottom: 40px;

          &-title {
            font-size: 18px;
            color: $dark-f;
            font-weight: 700;
            padding-bottom: 5px;
          }

          &-desc {
            font-size: 1rem;
            color: #42484f;
            font-weight: 300;
          }
        }
      }

      &_social {
        flex: 1 1 auto;
        display: flex;
        max-width: 124px;
        align-self: flex-end;

        a {
          margin: 0 10px;
        }

        @include for-small() {
          margin-top: 18px;
        }

        &-icon {
          transition: all 0.3s ease;
          box-shadow: 0vw 0vw 0 #b91f42;
          border-radius: 50%;

          &:hover {
            transform: translate(-4px, -4px);
            box-shadow: 0.3vw 0.3vw 0 #b91f42;
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

::v-deep .title {
  padding: 120px 0 60px;

  @include for-average() {
    padding: 35px 0 40px;
  }
}

.custom-description {
  color: #42484f;
  max-width: 420px;
  margin-bottom: 60px;

  @include for-smallmedium() {
    margin-bottom: 30px;
  }
}

.x-btn {
  &.desc {
    @include for-smallmedium() {
      display: none;
    }
  }

  &.mob {
    display: none;
    max-width: 280px;
    margin: 30px auto 0 auto;

    @include for-smallmedium() {
      display: block;
    }
  }
}
</style>
