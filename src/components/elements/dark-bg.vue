<template>
    <div class="dark-bg__img"></div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class DarkBg extends Vue {

}
</script>

<style lang="scss" scoped>
.dark-bg__img {
    position: absolute;
    z-index: -10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/img/bg-section.svg);
  }
</style>