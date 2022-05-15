<template>
  <section class="cb" id="#contact-us">
    <stripe-wrapper/>
    <div class="cb__container container">
      <div class="cb__inner">
        <div class="cb__info-left_wrapper">
          <title-block :title="'Contact Us'" :color-icon="'dark'"/>
          <h4 class="custom-description">
            Get a free consultation and friendly advice about your website or mobile application.
            Depending on your case we will provide variants on how to build it in a short time, scalable, or extra cheap.
            We build our own projects so we know all the underwater rocks and strategies
            📨
          </h4>

          <a class="x-btn desc" href="mailto:xander@xdevs.pro" target="_blank">
            {{ btnText }}
          </a>
        </div>

        <div class="cb__info-right_wrapper">
          <div class="cb__info-left">
            <div class="cb__info-left_name">
              <div class="cb__info-left_name_info">
                <div class="cb__info-left_name_info-title">
                  Xander Pokhylenko
                </div>
                <div class="cb__info-left_name_info-desc">
                  Founder
                </div>
              </div>
              <div class="cb__info-left_social">
                <a
                    v-for="(item, i) in contactUsData"
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

            <picture>
              <img
                  class="cb__info-right-icon"
                  width="200"
                  alt="Contact Person"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  srcset="
                    ~/assets/xander/_-136_cm15we_c_scale_w_200.png 200w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_391.png 391w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_542.png 542w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_636.png 636w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_717.png 717w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_803.png 803w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_872.png 872w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_940.png 940w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_996.png 996w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1041.png 1041w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1105.png 1105w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1157.png 1157w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1216.png 1216w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1214.png 1214w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1320.png 1320w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1371.png 1371w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1387.png 1387w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1397.png 1397w,
                    ~/assets/xander/_-136_cm15we_c_scale_w_1400.png 1400w"
                  src="~/assets/xander/_-136_cm15we_c_scale_w_1400.png">
            </picture>
          </div>
        </div>

        <a class="x-btn mob" href="mailto:xander@xdevs.pro" target="_blank">
          {{ btnText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TitleBlock from '~/components/elements/title.vue';
import StripeWrapper from '~/components/elements/strip-bg.vue';
import { contactUs } from '~/src/assets/data/index-page.json';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TitleBlock,
    StripeWrapper
  },

  setup() {
    const btnText = '<Drop an email>';
    const contactUsData: Array<{ img: string; alt: string; link: string }> = contactUs;

    return {
      btnText,
      contactUsData,
    }
  }

})
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

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

  span {
    background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

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
