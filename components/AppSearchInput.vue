<template>
  <div class="search-content">
    <div class="input-wrapper">
      <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="Search Articles"
          class="input"
          @input="$emit('input', $event.target.value)"
      />
      <span class="input-search" v-if="searchQuery.length === 0" />
    </div>
<!--    <ul-->
<!--      v-if="articles.length"-->
<!--    >-->
<!--      <li v-for="article of articles" :key="article.slug">-->
<!--        <NuxtLink-->
<!--          :to="{ name: 'blog-slug', params: { slug: article.slug } }"-->
<!--          class="link-item"-->
<!--        >-->
<!--          {{ article.title }}-->
<!--        </NuxtLink>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script setup>
// TODO: FIXME
  const searchQuery = ref('');
  // return {
  //   searchQuery
  // }
</script>

<style scoped lang="scss">
@import "/assets/styles/variables";

.link-item {
  margin-top: 12px;
  font-size: 18px;
}

.search-content {
  position: relative;

  ul {
    position: absolute;
  }
}

.input {
  border: none;
  border-bottom: 2px solid #718096;
  width: 380px;
  padding-bottom: 14px;

  &:focus {
    outline: none;
  }

  @include for-middle() {
    width: 240px;
  }

  &::placeholder {
    font-size: 16px;
  }

  &-wrapper {
    position: relative;
  }

  &-search {
    position: absolute;
    right: 0;
    bottom: 10px;
    display: block;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 18C11.846 18 13.543 17.365 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.365 13.543 18 11.846 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z' fill='%236D6D6D'/%3E%3C/svg%3E%0A");
   }
}
</style>
