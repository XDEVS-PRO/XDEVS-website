<template>
  <div class="container-main-author">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
    >
      <img
        v-if="author.img"
        class="img"
        :src="author.img"
      />
      <div class="author__container">
        <h4 class="author__title">Author</h4>

        <p class="author__name">{{ author.name }}</p>
        <p class="author__bio">{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

a {
  color: black;
}

.container-main-author {
  display: flex;
  flex-direction: column;
  color: black;
  margin-bottom: 25px;
  margin-top: 25px;
  min-width: 300px;
  max-width: 420px;
  width: 60%;
  height: 280px;
  font-size: 1rem;
}

.author__container {
  padding: 12px;
  box-shadow: 0px 1px 1px 1px lightgray;
  margin-bottom: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.img {
  width: 100%;
  box-shadow: 0px 1px 1px 1px lightgray;
  object-fit: cover;
  height: 170px;
}

.author__name {
  font-weight: 300;
  margin-bottom: 5px;
}

.author__bio {
  font-weight: 300;
  line-height: 1.2;
}

</style>