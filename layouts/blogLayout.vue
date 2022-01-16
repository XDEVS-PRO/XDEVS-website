<template>
  <section>
    <header-block :hide-stripes="true" />
    <div id="root-wrapper">
      <nuxt />
    </div>
    <footer-block />
    <short-footer />
  </section>
</template>

<script>
import HeaderBlock from "~/components/header.vue";
import FooterBlock from "~/components/footer.vue";
import ShortFooter from "~/components/short-footer.vue";

export default {
  name: "BlogLayout",
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