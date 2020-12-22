<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__inner">
        <div class="header__left">
          <a href="/">
            <img class="header__left-img" src="/logo-header.svg" alt="XDEVS" />
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
            @click="isShowMobMenu = !isShowMobMenu"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HeaderBlock extends Vue {
  isShowMobMenu = false;

  headerList: any[] = [
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

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.header {
  //position: fixed;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #181818;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;

    @include for-average() {
      padding: 15px 0;
    }
  }

  &__left-img {
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
</style>
