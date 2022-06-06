<template class="article-img-container">
  <img :src="imgSrc()" :alt="alt" class="article-image"/>
  <slot />
</template>

<script lang="ts" setup>
const props = {
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
}

const imgSrc = () => {
  try {
    return require(`~/assets/img-articles/${props.src}`)
  } catch (error) {
    console.log('Article-img error', error);
    return null
  }
}
</script>
