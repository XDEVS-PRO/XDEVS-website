<template>
  <section class="check">
    <header-block />
    <div id="root-wrapper">
      <nuxt />
    </div>
    <footer-block />
    <short-footer />
  </section>
</template>

 <script lang="ts">
import HeaderBlock from "~/components/header.vue";
import FooterBlock from "~/components/footer.vue";
import ShortFooter from "~/components/short-footer.vue";

export default {
  components: {
    HeaderBlock,
    FooterBlock,
    ShortFooter
  }
}
</script>

<style lang="scss" scoped>
#root-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0;
}
#root-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>