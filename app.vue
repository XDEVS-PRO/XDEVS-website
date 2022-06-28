<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    const customTitle = titleChunk.includes('XDEVS') ? titleChunk : `${titleChunk} – XDEVS 🔥`
    return titleChunk ? customTitle : 'XDEVS – Top Software Engineers for your needs ❤️‍🔥';
  },
  meta: [
    {property: 'og:url', content: computed(() => `https://xdevs.pro${route.path}`)},
    {property: 'og:type', content: computed(() => route.meta.ogType || 'website')}
  ],
})
</script>
<style lang="scss">
</style>
