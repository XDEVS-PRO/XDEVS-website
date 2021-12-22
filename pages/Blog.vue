<template>
  <section class="container-main-blog">
    <TheHeader />

    <ul class="article-topics">
      <li v-for="(topic, index) in topicList" :key="index" :class="['article-topics__item custom-link', {'active-item': topic.includes('NUXTJS')}]" @click="initFilter">
        {{topic}}
      </li>
    </ul>

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
            :alt="article.title"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      topicList: ['JAVASCRIPT','LINKEDIN','NUXTJS', 'WEB DEVELOPMENT', 'REACTJS', 'NODEJS', 'FRONTEND', 'BACKEND',  'WEB DEVELOPMENT', 'REACTJS', 'NODEJS', 'FRONTEND', 'BACKEND']
    }
  },
  methods: {
    initFilter() {

    }
  },
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
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.container-main-blog {
  padding: 0 1rem;
  line-height: 1.25;
  width: 100%;
  max-width: 1240px;
  margin: 100px auto 0;

  @include for-average() {
    margin-top: 88px;
  }
}

.title {
  font-weight: 700;
  font-size: 2.25rem;
  margin: 30px 0 35px 0;
}

.article-list{
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 360px;
}

.article__img {
  width: 100%;
  height: 192px;
  object-fit: cover;
}

.article__title {
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  line-height: 1.2;
}

.article__author {
  color: black;
  margin-top: 5px;
  font-weight: 300;
}

.article__description {
  color: #718096;
  line-height: 1.2;
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.article__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: 180px;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.topics {
  align-self: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.tag {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 20px;
  text-align: center;
}

.tag__name {
  color: gray;
  text-transform: uppercase;
}

.tags-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  margin-top: 15px;
}

.footer__link {
  color: black;
}

.article-topics {
  display: flex;
  flex-wrap: wrap;

  @include for-middle() {
    justify-content: center;
  }

  &__item {
    margin: 0 40px 30px 0;
    color: #BFBFBF;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.4s ease-out;
    cursor: pointer;

    @include for-middle() {
      margin: 0 30px 20px 0;
      font-size: 16px;
    }
  }

  &__item.active-item {
    background: -webkit-linear-gradient(
            87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:before {
      width: 100%;
      content: "";
      border-bottom: 1px solid;
      border-image-slice: 1;
      border-width: 2px;
      border-image-source: linear-gradient(87.58deg, #0085ff 0%, #11a9ff 100%);
      background: initial;
    }
  }
}

@media screen and (min-width: 768px) {
  .article-list {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }  
}

@media screen and (min-width: 1024px) {
  .article-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 45px;
  }  

  .article__content {
    height: 220px;
  }

  .article__img {
    height: 210px;
  }

  .tags-list {
    width: 80%;
    flex-direction: row;
    justify-content: space-around;
  }

  .tag__name {
    text-decoration: underline;
  }
}


@media screen and (min-width: 1200px) {
  .article-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }  
}

@media screen and (min-width: 1440px) {
  .article-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px;
  }  
}

@media screen and (min-width: 1600px) {
  .article-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
  }  
}
</style>
