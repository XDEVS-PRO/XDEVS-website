<template>
  <footer class="footer">
    <stripe-wrapper :color-strip="'dark'"/>
    <dark-bg/>
    <div class="footer__container container">
      <div class="footer__inner">
        <div class="footer__left">
          <a href="/">
            <img class="footer__left-img"
                 src="/logo-header.svg"
                 width="120"
                 alt="XDEVS"/>
          </a>

          <h4 class="footer__left-text">
            Let's <span>create</span> a cool product <span>together</span>
          </h4>
        </div>
        <div class="footer__center">
          <div class="footer__center-inner custom-description">
            <a class="header__right-link custom-link"
               v-for="(item, i) in headerList"
               :key="i"
               href="#"
               v-scroll-to="`${item.link}`">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import DarkBg from "@/components/elements/dark-bg.vue";

@Component({
  components: {
    StripeWrapper,
    DarkBg
  }
})
export default class FooterBlock extends Vue {
  headerList: Array<{ title: string; link: string }> = [
    {
      title: "Our Projects",
      link: "#our-projects"
    },
    {
      title: "Services",
      link: "#service"
    },
    {
      title: "Core Team",
      link: "#core-team"
    },
    {
      title: "Tech Stack",
      link: "#tech-stack"
    },
    {
      title: "Trusted by",
      link: "#trusted-by"
    },
    {
      title: "Contact Us",
      link: "#contact-us"
    }
  ];
}
</script>

<style lang="scss"
       scoped>
@import "src/assets/styles/variables";

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
      margin: 0 20px 40px 20px;
      color: $white-f;
      text-decoration: none;
      display: inline-block;
      position: relative;

      @include for-smallmedium() {
        margin: 20px 20px 20px 0;
      }
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
  color: #EDEDED;

  span {
    background: -webkit-linear-gradient(
            87.58deg, #0085FF 0%, #11A9FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.custom-description {
  //padding-left: 0;
  height: 90px;

  @include for-average() {
    height: 100%;
  }
}
</style>
