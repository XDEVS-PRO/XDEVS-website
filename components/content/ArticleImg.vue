<template class="article-img-container">
  <img :src="imgSrc()" :alt="alt" class="article-image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/img-articles/${this.src}`)
      } catch (error) {
          console.log("Article-img error", error);
        return null
      }
    }
  }
}
</script>