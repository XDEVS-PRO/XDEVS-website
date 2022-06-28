<template>
  <div>
    <Head>
      <Meta property="og:title" content="XDEVS Case Studies – our latest projects and achievements 🏆" />
      <Meta property="og:description" content="XDEVS latest work: Fintech / social / real estate and other projects." />
      <Meta name="description" content="XDEVS latest Case Studies – Fintech website, Wishlist with social aspects, Real Estate website and much more ..." />
    </Head>
    <template v-for="(item, i) in projects" :key="i">
      <case-studies :data="[item]" :scroll="false" class="first-block" />
    </template>
    <contact-block />
  </div>
</template>

<script lang="ts" setup>
import ContactBlock from "~/components/sections/contact-block.vue";
import CaseStudies from "~/components/sections/case-studies.vue";
import { ourProjects as projects } from "~/assets/data/projects.json";
import { useHead } from 'nuxt/app';

useHead({
  title: 'XDEVS Case Studies – our latest projects and achievements 🏆'
})
</script>

<style lang="scss" scoped>
.first-block {
  padding-top: 100px;
}
</style>
