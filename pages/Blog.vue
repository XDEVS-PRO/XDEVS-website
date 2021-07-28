<template>
  <div class="container">
    <TheHeader />
    <h1 class="title">Blog Posts</h1>
    <ul class="article-list">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="article"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="article__link"
        >
          <img
            v-if="article.img"
            class="article__img"
            :src="article.img"
          />
          <div class="article__content">
            <h2 class="article__title">{{ article.title }}</h2>
            <p class="article__author">by {{ article.author.name }}</p>
            <p class="article__description">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <h3 class="topics">Topics</h3>
    <ul class="tags-list">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="tag"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="tag__link">
          <p
            class="tag__name"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <footer class="footer">
      <p>
        xdevs blog
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  },
  layout: 'blogLayout'
}
</script>

<style class="css" scoped>

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  line-height: 1.25;
}

.title {
  font-weight: 700;
  font-size: 2.25rem;
  margin: 10px 0 10px 0;
}

.article-list{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article__img {
  width: 100%;
  height: 192px;
}

.article__title {
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
}

.article__author {
  color: black;
  font-weight: 300;
}

.article__description {
  color: gray;
  line-height: 1.3;
  margin-top: 5px;
  font-size: 0.9rem;
  font-weight: bold;
}

.article__content {
  padding: 25px;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.topics {
  align-self: center;
}

.tags-list {
  text-align: center;
}

.tag {
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 10px;
}

.tag__name {
  color: gray;
  text-transform: uppercase;
}

.footer {
  margin-top: 15px;
}

@media screen and (min-width: 400px) {
  
  .container {
    padding-left: 65px;
    padding-right: 65px;
  }
}
</style>
