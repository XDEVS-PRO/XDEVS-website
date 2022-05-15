<template>
  <section class="our-projects" id="#case-studies">
    <dark-bg/>
    <stripe-wrapper :color-strip="'dark'"/>
    <div class="our-projects__container container">
      <title-block :title="'Case Studies'" :color-icon="'light'"/>
      <div class="our-projects__inner">
        <div class="our-projects__left">
          <h4 class="our-projects__create">
            {{ showProject.create }}
          </h4>
          <h3 class="our-projects__title">
            {{ showProject.title }}
          </h3>
          <p class="our-projects__desc">
            {{ showProject.desc }}
          </p>
          <nuxt-link to="our-projects" class="our-projects__link">
            Watch this case
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
            >
              <path
                  d="M0.2 0.7C0.4 0.6 0.6 0.5 0.8 0.5 0.9 0.5 1.1 0.6 1.3 0.7L6.5 6C6.7 6.1 6.8 6.3 6.8 6.5 6.8 6.7 6.7 6.9 6.5 7L1.3 12.3C1.1 12.4 0.9 12.5 0.8 12.5 0.6 12.5 0.4 12.4 0.2 12.3 0.1 12.1 0 11.9 0 11.7 0 11.6 0.1 11.4 0.2 11.2L4.9 6.5 0.2 1.8C0.1 1.6 0 1.4 0 1.3 0 1.1 0.1 0.9 0.2 0.7Z"
                  fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                    y1="12.5"
                    x2="7"
                    y2="12.3"
                    gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0085FF"/>
                  <stop offset="1" stop-color="#11A9FF"/>
                </linearGradient>
              </defs>
            </svg>
          </nuxt-link>
        </div>
        <div class="our-projects__right">
          <div v-if="scroll" class="our-projects__arrow">
            <a class="our-projects__arrow-prev" @click="prev()">
              <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M8.70706 12.293L4.41406 7.99997H14.0001V5.99997H4.41406L8.70706 1.70697L7.29306 0.292969L0.58606 6.99997L7.29306 13.707L8.70706 12.293Z"
                    fill="#6D6D6D"
                />
                <defs>
                  <linearGradient
                      id="paint0_linear"
                      x1="4.99711e-08"
                      y1="13.707"
                      x2="13.9565"
                      y2="13.1166"
                      gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0085FF"/>
                    <stop offset="1" stop-color="#11A9FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a class="our-projects__arrow-next" @click="next()">
              <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z"
                    fill="#6D6D6D"
                />
                <defs>
                  <linearGradient
                      id="paint1_linear"
                      x1="4.99711e-08"
                      y1="13.707"
                      x2="13.9565"
                      y2="13.1166"
                      gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0085FF"/>
                    <stop offset="1" stop-color="#11A9FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div class="our-projects__img">
            <img
                class="our-projects__img-preview"
                v-if="showProject.src"
                :src="showProject.src"
                alt="portfolio_image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TitleBlock from '~/components/elements/title.vue';
import DarkBg from '~/components/elements/dark-bg.vue';
import StripeWrapper from '~/components/elements/strip-bg.vue';
import { onMounted, ref, computed } from 'vue';

export interface Project {
  src: string;
  title: string;
  desc: string;
  id: string;
  create: string;
}

export default {
  components: {
    TitleBlock,
    DarkBg,
    StripeWrapper,
  },

  props: {
    data: undefined,
    scroll: false,
  },

  head() {
    return {
      title: 'Our Projects',
      meta: [
        {
          hid: 'our-prj',
          name: 'description',
          content: 'our portfolio of amazing websites'
        }
      ]
    }
  },

  setup(props) {
    const showProject = ref({});
    const countProject: any = ref('');
    const projectsList = ref([]);

    onMounted(() => {
      projectsList.value = props.data;
    })

    const next = computed(() => {
      countProject.value++;
      if (countProject.value > projectsList.value.length) {
        countProject.value = 1;
        showProject.value = projectsList.value.find(
            item => Number.parseInt(item.id) === countProject.value
        );
      } else if (
          countProject.value < projectsList.value.length ||
          countProject.value === projectsList.value.length
      ) {
        showProject.value = projectsList.value.find(
            item => Number.parseInt(item.id) === countProject.value
        );
      }
    })

    const prev = computed(() => {
      countProject.value--;

      if (countProject.value < 1) {
        countProject.value = projectsList.value.length;

        showProject.value = projectsList.value.find(
            item => Number.parseInt(item.id) === countProject.value
        );
      } else if (
          countProject.value < projectsList.value.length ||
          countProject.value === projectsList.value.length
      ) {
        showProject.value = projectsList.value.find(
            item => Number.parseInt(item.id) === countProject.value
        );
      }
    })
    return {
      showProject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.our-projects {
  padding-bottom: 160px;

  @include for-average() {
    padding-bottom: 70px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;

    @include for-average() {
      flex-direction: column-reverse;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    padding-right: 1rem;

    @include for-average() {
      padding-right: 0;
    }
  }

  &__right {
    margin-top: 60px;
  }

  &__create {
    color: #f8f8f8;
    font-size: 1rem;
    padding-bottom: 20px;
    text-transform: uppercase;
    font-weight: 400;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    color: #fff;
    padding-bottom: 40px;
  }

  &__desc {
    max-width: 500px;
    font-size: 1rem;
    font-weight: 300;
    color: #f8f8f8;
    padding-bottom: 40px;
    line-height: 160%;
  }

  &__arrow {
    display: flex;
    justify-content: space-between;
    max-width: 110px;
    width: 100%;
    margin: 0 0 35px auto;

    @include for-average() {
      margin: 0 0 35px 0;
    }
  }

  &__img {
    position: relative;

    &-preview {
      width: 100%;
      max-width: 440px;
    }

    &:before {
      content: "";
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      position: absolute;
      max-width: 470px;
      height: 440px;
      width: 120%;
      z-index: -1;
      right: 0px;
      bottom: -30px;
      background-image: url(~/assets/bg-section.svg);

      @include for-middle() {
        display: none;
      }
    }
  }

  &__link {
    background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;

    svg {
      margin-left: 20px;
    }
  }

  &__arrow {
    cursor: pointer;

    &-next,
    &-prev {
      &:hover {
        svg {
          path {
            fill: url(#paint0_linear);
          }
        }
      }
    }
  }
}

::v-deep .title {
  padding-bottom: 30px;
}
</style>
