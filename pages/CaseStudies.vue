<template>
  <div>
    <template v-for="(item, i) in ourProjectList">
      <case-studies :data="[item]" :key="i" class="first-block" />
    </template>
    <contact-block />
  </div>
</template>

<script lang="ts">
import ContactBlock from "~/components/sections/contact-block.vue";
import CaseStudies from "~/components/sections/case-studies.vue";
import { ourProjects } from "~/src/assets/data/index-page.json";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    ContactBlock,
    CaseStudies
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
