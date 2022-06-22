<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const customTitle = titleChunk.includes('XDEVS') ? titleChunk : `${titleChunk} – XDEVS 🔥`
    return titleChunk ? customTitle : 'XDEVS – Top Software Engineers for your needs ❤️‍🔥';
  }
})
</script>
<style lang="scss">
</style>
