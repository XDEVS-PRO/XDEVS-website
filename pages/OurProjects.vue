<template>
  <div>
    <template v-for="(item, i) in ourProjectList">
      <our-project :data="[item]" :key="i" class="first-block" />
    </template>
    <contact-block />
  </div>
</template>

<script lang="ts">
import ContactBlock from "~/components/sections/contact-block.vue";
import OurProject from "~/components/sections/case-studies.vue";
import { ourProjects } from "~/src/assets/data/index-page.json";
import { defineComponent } from '@nuxt/bridge/dist/runtime/capi.legacy';

export default defineComponent({
  components: {
    ContactBlock,
    OurProject
  },

  setup() {
    return ourProjects
  }
})

</script>

<style lang="scss" scoped>
.first-block {
  padding-top: 100px;
}
</style>
