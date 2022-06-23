<template>
  <a>
    {{ data }}
  </a>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: { default: "close", required: true, type: String }
  }
})
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  left: 50%;
  letter-spacing: 1.5px;
  line-height: 90px;
  outline: none;
  overflow: hidden;
  padding: 10px 0 0;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in;
  width: 100px;
}

button::before,
button::after {
  background-color: white;
  content: "";
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  transform-origin: center left;
  transition: all 0.2s ease-in;
  width: 141.4214px;
  z-index: -1;
}

button::before {
  top: 0;
  transform: rotate(45deg);
}

button::after {
  bottom: 0;
  transform: rotate(-45deg);
}

button:hover {
  color: #8a2387;
}

button:hover::before,
button:hover::after {
  height: 50px;
  transform: rotate(0deg);
}
</style>
