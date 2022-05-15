<template>
  <div v-if="portal" :to="to">
    <transition name="fade">
      <div v-if="isOpen" class="modal__wrapper" :class="className">
        <div class="modal__overlay" @click="close()"></div>
        <div class="modal">
          <a class="modal__close-btn" @click="close()">close</a>
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  props: {
    isOpen: {type: Boolean, required: true},
    className: {type: String, required: false},
    portal: {type: Boolean | undefined, default: true},
    to: {type: String | undefined, default: "modal"},
    close: {type: undefined, required: true}
  },

  setup(props) {
    const close = () => {
      props.close();
    }
    return {
      close
    }
  }
})
</script>

<style scoped lang="scss">
@import "/assets/styles/variables";

.modal {
  position: relative;
  z-index: 100;
  display: inline-block;
  box-sizing: border-box;
  max-width: 80%;
  margin: 20px 0;
  padding: 100px;
  font-size: 1rem;
  line-height: 1.3;
  letter-spacing: normal;
  white-space: normal;
  vertical-align: middle;
  background-color: #191919;
  user-select: text;
  border: 5px solid #f1325f;

  &__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    display: block;
    box-sizing: border-box;
    padding: 0 12px;
    overflow: auto;
    font-size: 1px;
    line-height: 0;
    letter-spacing: -1em;
    white-space: nowrap;
    text-align: center;
    user-select: none;

    &::before {
      display: inline-block;
      width: 0.1px;
      height: 100%;
      vertical-align: middle;
      content: "";
    }

    &.video {
      > .modal {
        width: 100%;
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #000;
    opacity: 0.5;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 480px;
    padding: 32px 16px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;

    &__wrapper {
      padding: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal__close-btn {
  background: none;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 8px;
  letter-spacing: 1.5px;
  line-height: 22px;
  outline: none;
  overflow: hidden;
  padding: 10px 0;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in;
  width: 40px;
  right: 10px;
  top: 45px;

  @include for-smallmedium() {
    top: 47px;
    line-height: 10px;
  }
}

.modal__close-btn::before,
.modal__close-btn::after {
  background-color: $white-f;
  content: "";
  display: block;
  height: 3px;
  left: 0;
  position: absolute;
  transform-origin: center left;
  transition: all 0.2s ease-in;
  width: 141.4214px;
  z-index: -1;

  @include for-smallmedium() {
    height: 1px;
  }
}

.modal__close-btn::before {
  top: 0;
  transform: rotate(45deg);
}

.modal__close-btn::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.modal__close-btn:hover {
  @media screen and (min-width: 660px) {
    color: #8a2387;
  }
}

.modal__close-btn:hover::before,
.modal__close-btn:hover::after {
  @media screen and (min-width: 660px) {
    height: 30px;
    transform: rotate(0deg);
  }
}
</style>
