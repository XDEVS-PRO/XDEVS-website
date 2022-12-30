<template>
<div class="tag-main-container">
  <div class="img-container">
    <img
        :src="tag.img"
        :alt="tag.name"
        class="main-img"
      />
    <div class="img-container__content">
      <h1 class="tag__name">
        {{tag.name}}
      </h1>
      <h2 class="tag__description">
        {{tag.description}}
      </h2>
    </div>
  </div>
  <div class="info-container">
    <h2 class="articles-list-title">
      Articles tagged {{tag.name}}:
    </h2>
    <ul class="list-of-articles">
        <li
          v-for="article in articles"
          :key="article.slug"
          class="article"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class=""
          >
            <img
              v-if="article.img"
              class="article-img"
              :src="article.img"
              :alt="article.alt"
            />

            <div
              class="article-content"
            >
              <h2 class="article-title">
                {{ article.title }}
              </h2>
              <p class="article-description">
                {{ article.description }}
              </p>
              <p class="article-date">
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  layout: 'blog'
})

</script>


<script lang="ts" setup>

async function asyncData({ $content, params }) {
  const tags = await $content('tags')
    .where({ slug: { $contains: params.tag } })
    .limit(1)
    .fetch()
  const tag = tags.length > 0 ? tags[0] : {}
  const articles = await $content('articles')
    .where({ tags: { $contains: tag.name } })
    .sortBy('createdAt', 'asc')
    .fetch()
  return {
    articles,
    tag
  }
};

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

</script>

<style scoped>

a {
  color: black;
}

.tag-main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.img-container {
  width: 100%;
  position: relative;
}

.img-container__content {
  position: absolute;
  top: 7%;
  left: 5%;
  color: white;
}

.tag__name {
  font-size: 2.3rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  max-width: 80%;
}

.tag__description {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.4;
  max-width: 70%;
  text-transform: capitalize;
}

.main-img {
  width: 100%;
  object-fit: cover;
}

.articles-list-title {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  line-height: 1.3;
  width: 80%;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  max-width: 320px;
}

.article-description {
  color: #718096;
  line-height: 1.3;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-weight: bold;
}

.article-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: 0.7rem;
}

.list-of-articles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 550px) {
  .tag__name {
    font-size: 2.9rem;
  }

  .tag__description {
    font-size: 1.9rem;
  }

  .main-img {
    max-height: 100vh;
  }
}

@media screen and (min-width: 1024px) {
  .tag-main-container {
    flex-direction: row;
  }

  .img-container {
    width: 50%;
    height: 100vh;
  }

  .info-container {
    width: 50%;
    height: 100vh;
    overflow: scroll;
  }

  .tag__name {
    font-size: 3rem;
  }

  .tag__description {
    font-size: 1.4rem;
  }

  .articles-list-title {
    margin-top: 50px;
    font-size: 1.6rem;
  }

  .main-img {
    width: 100%;
    height: 100%;
  }

}
</style>
