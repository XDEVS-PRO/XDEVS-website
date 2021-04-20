<template>
  <section class="check">
    <header-block />
    <portal-target name="tech-block"></portal-target>
    <portal-target name="modal"></portal-target>
    <div id="root-wrapper">
      <router-view style="overflow: hidden" />
    </div>
    <footer-block />
    <short-footer />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderBlock from "@/components/header.vue";
import FooterBlock from "@/components/footer.vue";
import ShortFooter from "@/components/short-footer.vue";

@Component({
  components: {
    HeaderBlock,
    FooterBlock,
    ShortFooter
  }
})
export default class DefaultLayout extends Vue {}
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
