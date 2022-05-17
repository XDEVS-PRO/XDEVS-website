<template>
  <div>
    <template v-for="(item, i) in projects" :key="i">
      <case-studies :data="[item]"  class="first-block" />
    </template>
    <contact-block />
  </div>
</template>

<script lang="ts" setup>
import ContactBlock from "~/components/sections/contact-block.vue";
import CaseStudies from "~/components/sections/case-studies.vue";
import { ourProjects } from "~/src/assets/data/index-page.json";
import { ref } from 'vue';

const projects = ref(ourProjects)
console.log(projects)
</script>

<style lang="scss" scoped>
.first-block {
  padding-top: 100px;
}
</style>
