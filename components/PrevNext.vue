<template>
  <div class="prev-next-container">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="link"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="link"
    >
     <p class="text"> {{ next.title }} </p>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style>
.prev-next-container {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column; 
  background: blue;
}

.container .text {
  color: black;
}

</style>