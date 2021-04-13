<template>
  <header class="header">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="header__container container">
      <div class="header__inner">
        <div class="header__left">
          <a href="/">
            <img
              class="header__left-img"
              src="/logo-header.svg"
              width="120px"
              alt="XDEVS"
            />
          </a>
        </div>
        <div class="header__right" v-if="headerList.length">
          <a
            class="header__right-link custom-link"
            v-for="(item, i) in headerList"
            :key="i"
            href="#"
            v-scroll-to="`${item.link}`"
            >{{ item.title }}</a
          >
          <div
            :class="[
              'hamburger hamburger--emphatic js-hamburger',
              { active: isShowMobMenu }
            ]"
            @click="isShow()"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  mob menu -->
    <div :class="['mobile-menu', { active: isShowMobMenu }]">
      <div class="mobile-menu-list">
        <a
          class="mobile-menu-list_link-to-block"
          v-for="(linkBtn, linkIndex) in headerList"
          :key="linkIndex"
          href="#"
          v-scroll-to="`${linkBtn.link}`"
          @click="isShow()"
          >{{ linkBtn.title }}</a
        >
        <div class="mobile-menu-list_contact">
          <img
            class="mobile-menu-list_contact-img"
            src="/img/contact-us/per-i.svg"
            alt="Viktoria Samoilenko"
          />
          <p class="mobile-menu-list_contact-title">Viktoria Samoilenko</p>
          <p class="mobile-menu-list_contact-subtitle">Head of Engagement</p>
          <div class="mobile-menu-list_contact-links">
            <a v-for="(item, i) in cardList" :href="item.link" :key="i">
              <img
                v-if="item.img"
                :alt="item.alt"
                width="45"
                height="45"
                class="mobile-menu-list_contact-links-icon"
                :src="item.img"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="mobile-menu_bg"></div>
      <div class="mobile-menu_bg-deep"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StripeWrapper from "@/components/elements/strip-bg.vue";
import DarkBg from "@/components/elements/dark-bg.vue";

@Component({
  components: {
    StripeWrapper,
    DarkBg
  }
})
export default class HeaderBlock extends Vue {
  isShowMobMenu = false;

  headerList: Array<{ title: string; link: string }> = [
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

  cardList: Array<{ img: string; alt: string; link: string }> = [
    {
      img: "/img/contact-us/s-i.svg",
      alt: "Send us",
      link: "https://www.google.com"
    },
    {
      img: "/img/contact-us/l-i.svg",
      alt: "LinkedIn",
      link: "https://www.google.com"
    },
    {
      img: "/img/contact-us/p-i.svg",
      alt: "Post us",
      link: "https://www.google.com"
    }
  ];

  isShow() {
    this.isShowMobMenu = !this.isShowMobMenu;
    this.isShowMobMenu
      ? document.body.classList.add("un-scroll")
      : document.body.classList.remove("un-scroll");
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.header {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #181818;

  @include for-average() {
    position: fixed;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;
    opacity: 1;

    @include for-average() {
      padding: 15px 0;
    }
  }

  &__left-img {
    position: relative;
    z-index: 10;

    @include for-smallmedium() {
      max-width: 120px;
    }
  }

  &__right {
    max-width: 586px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @include for-middle() {
      max-width: 460px;
    }

    @include for-average() {
      justify-content: flex-end;
    }

    &-link {
      color: $grey-f;
      text-decoration: none;

      @include for-middle() {
        font-size: 16px;
      }

      @include for-average() {
        display: none;
      }
    }
  }
}

// hamburger menu
.hamburger {
  font: inherit;
  display: none;
  opacity: 0;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;

  @include for-average() {
    display: inline-block;
    opacity: 1;
  }
}

.hamburger--emphatic {
  overflow: hidden;
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.hamburger--emphatic .hamburger-inner {
  transition: background-color 0.125s ease-in 0.175s;
}

.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
  content: "";
  width: 40px;
  height: 4px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  background-color: #fff;
  z-index: 10;
}

.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: "";
}

.hamburger-inner:before {
  top: -10px;
}

.hamburger--emphatic .hamburger-inner:before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s linear 0.125s, left 0.125s ease-in 0.175s;
}

.hamburger-inner:after {
  bottom: -10px;
}

.hamburger--emphatic .hamburger-inner:after {
  top: 10px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s linear 0.125s, right 0.125s ease-in 0.175s;
}

// active state for hamburger
.hamburger--emphatic.active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}

.hamburger.active .hamburger-inner,
.hamburger.active .hamburger-inner:after,
.hamburger.active .hamburger-inner:before {
  background-color: #fff;
}

.hamburger--emphatic.active .hamburger-inner:before {
  top: -80px;
  left: -80px;
  transition: left 0.125s ease-out, top 0.05s linear 0.125s,
    transform 0.125s cubic-bezier(0.075, 0.82, 0.165, 1) 0.175s;
  transform: translate3d(80px, 80px, 0) rotate(45deg);
}

.hamburger.active .hamburger-inner,
.hamburger.active .hamburger-inner:after,
.hamburger.active .hamburger-inner:before {
  background-color: #fff;
}

.hamburger--emphatic.active .hamburger-inner:after {
  top: -80px;
  right: -80px;
  transition: right 0.125s ease-out, top 0.05s linear 0.125s,
    transform 0.125s cubic-bezier(0.075, 0.82, 0.165, 1) 0.175s;
  transform: translate3d(-80px, 80px, 0) rotate(-45deg);
}

// mobile menu list and bg
.mobile-menu {
  display: none;
  transition: all 1s ease-out;
  transform: translateX(-130%);
  height: 0;

  @include for-average() {
    display: block;
  }

  &.active {
    transform: translateX(0);
    margin-right: 20px;

    .mobile-menu-list {
      opacity: 1;
    }

    .mobile-menu_bg-deep {
      opacity: 1;
      transform: none;
    }
  }

  &_bg {
    background-color: #fbdd4b;
    width: 493px;
    position: absolute;
    height: 740px;
    top: 0;
    right: 0;
    z-index: -2;
    transform: rotate(14deg) scale(2) translate(-30%, 10%);

    &-deep {
      position: absolute;
      transition: opacity 1s ease-out;
      background-color: #fff;
      z-index: -3;
      width: 100vh;
      height: 100vh;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      transform: translateX(-50%);

      @include for-small() {
        transform: translateX(-100%);
      }
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    align-items: center;

    @include for-small() {
      align-items: flex-start;
      padding-left: 16px;
    }

    &_link-to-block {
      text-decoration: none;
      color: $dark-f;
      font-weight: 600;
      letter-spacing: 0.5px;
      padding-bottom: 10px;
      font-size: 26px;

      @include for-verysmall() {
        font-size: 18px;
      }
    }

    &_contact {
      text-align: center;

      @include for-verysmall() {
        text-align: left;
      }

      &-img {
        max-width: 200px;
        width: 100%;
        margin: 10px 0 0 0;

        @include for-verysmall() {
          max-width: 170px;
          margin: 0;
        }
      }

      &-title {
        font-size: 18px;
        color: #232323;
        padding: 8px 0 5px 0;
      }

      &-subtitle {
        color: #838383;
        font-weight: 300;
        padding-bottom: 10px;
        font-size: 16px;
      }

      &-links {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;

        @include for-verysmall() {
          justify-content: flex-start;
        }

        &-icon {
          margin: 5px 8px;
        }
      }
    }
  }

  &-list_item {
    list-style-type: none;
  }
}
</style>
