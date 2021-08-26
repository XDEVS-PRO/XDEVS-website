<template>
  <div class="search-content">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="input"
    />
    <ul
      v-if="articles.length"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="link-item"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  outline: none;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style-type: none;
}

.link-item {
  margin-top: 12px;
  font-size: 18px;
}

.input {
  border: none;
  border-bottom: 2px solid #718096;
}

@media screen and (min-width: 1024px) {
  .input {
    min-width: 320px;
  }  
}
</style>