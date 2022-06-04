<template>
  <footer class="footer">
    <stripe-wrapper :color-strip="'dark'" />
    <dark-bg />
    <div class="footer__container container">
      <div class="footer__inner">
        <div class="footer__left">
          <a href="/">
            <img
              class="footer__left-img"
              src="~/assets/logo-header.svg"
              width="120"
              alt="XDEVS"
            />
          </a>

          <h4 class="footer__left-text">
           On  <span>🔥</span> since 2020
          </h4>
        </div>
        <div class="footer__center">
          <div class="footer__center-inner custom-description">
            <template v-if="isOnIndex">
              <template v-for="(item, i) in headerList">
                <a
                  class="header__right-link custom-link"
                  v-if="item.hash"
                  :href="item.hash"
                  :key="item.has"
                >
                  {{ item.title }}
                </a>
                <nuxt-link
                  v-else
                  class="header__right-link custom-link"
                  :key="i"
                  :to="{ path: item.link, hash: item.hash }"
                >
                  {{ item.title }}
                </nuxt-link>
              </template>
            </template>
            <template v-else key="2">
              <nuxt-link
                v-for="(item, i) in headerList"
                class="header__right-link custom-link"
                :key="i"
                :to="{ path: item.link, hash: item.hash }"
              >
                {{ item.title }}
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import StripeWrapper from "~/components/elements/strip-bg.vue";
import DarkBg from "~/components/elements/dark-bg.vue";
import { headerList } from "~/assets/data/header.json";

export default {
  components: {
    StripeWrapper,
    DarkBg,
  },

  setup() {
    const route = useRoute();

    const headerListData: Array<{
      title: string;
      link: string;
      hash?: string;
    }> = headerList;

    const isOnIndex = () => {
      return route.name === "index";
    };

    return {
      isOnIndex,
      headerList: headerListData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.footer {
  position: relative;
  color: $grey-f;
  font-weight: 300;

  &__inner {
    padding: 120px 0;
    display: flex;

    @include for-average() {
      align-items: center;
      padding: 30px 0 40px 0;
    }

    @include for-smallmedium() {
      flex-direction: column;
      align-items: initial;
    }
  }

  &__left-img {
    @include for-average() {
      max-width: 120px;
    }
  }

  &__left {
    @include for-average() {
      padding-bottom: 30px;
    }
  }

  &__center {
    padding-left: 134px;

    @include for-average() {
      padding-left: 10px;
    }

    &-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 485px;

      @include for-average() {
        justify-content: initial;
      }
    }

    a {
      font-size: 18px;
      //margin: 0 20px 40px 20px;
      color: $white-f;
      text-decoration: none;
      display: inline-block;
      position: relative;

      //@include for-smallmedium() {
      //  margin: 20px 20px 20px 0;
      //}
    }
  }

  &__right {
    @include for-smallmedium() {
      font-size: 16px;
    }

    @include for-average() {
      display: none;
    }
  }
}

.footer__left-text {
  font-weight: 300;
  font-size: 1rem;
  padding-top: 10px;
  color: #ededed;

  span {
    background: -webkit-linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.custom-description {
  @include for-average() {
    height: 100%;
  }
}

.footer__center-inner.custom-description {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 90px;
  grid-row-gap: 40px;

  @include for-average() {
    max-width: initial;
    padding-left: 0;

    &::before {
      display: none;
    }
  }

  @include for-small() {
    grid-gap: 40px;
  }

  @include for-verysmall() {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .header__right-link.custom-link {
    white-space: nowrap;

    @include for-average() {
      font-size: 16px;
    }
  }
}

.footer__left {
  @include for-average() {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
