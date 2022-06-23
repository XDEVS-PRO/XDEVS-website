<template class="article-img-container">
  <img :src="src" :alt="alt" class="article-image"/>
</template>

<script lang="ts" setup>
interface Props {
  src: string
  alt: string
}
const {src, alt} = defineProps<Props>()

</script>
