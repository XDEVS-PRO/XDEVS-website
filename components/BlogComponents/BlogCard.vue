<template>
  <ul class="article-list" v-if="articles.length">
    <template v-for="article of articles">
      <li class="article__wrapper">
        <NuxtLink
            :to="`/blog/${article._path.split('/').pop()}`" :key="article.slug"
            class="article__item"
        >
          <img
              v-if="article.img"
              class="article__img"
              :src="article.img"
              :alt="article.title"
          />
          <div class="article__content">
            <div class="article__sub-title">
              <span>{{new Date(article.createdAt).toLocaleDateString('uk-UA') }}&nbsp;</span>
              <span>{{article.topic}}</span>
            </div>
            <h2 v-if="article.title" class="article__title">{{ article.title }}</h2>
            <p v-if="article.description" class="article__description">
              {{ article.description }}
            </p>
            <p class="article__link-text">Go to the article <span class="article__arrow"/></p>
          </div>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
  const props = defineProps({
    articles: {
      type: Array,
      default: []
    }
  })
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.article-list {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, minmax(200px, 380px));
  grid-gap: 30px;

  @include for-middle() {
    grid-gap: 1rem;
  }

  @include for-average() {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  @include for-small() {
    grid-template-columns: minmax(180px, 1fr);
  }
}


.article__item {
  display: flex;
  flex-direction: column;
}

.article__img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.article__title {
  font-weight: bold;
  font-size: 18px;
  color: #232323;
  line-height: 1.4;
  padding-bottom: 15px;
}

.article__arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='12' fill='none' xmlns:v='https://vecta.io/nano'%3E%3Cpath fill-rule='evenodd' d='M7.22.22A.75.75 0 0 1 7.75 0a.75.75 0 0 1 .53.22l5.25 5.25a.75.75 0 0 1 0 1.061l-5.25 5.25a.75.75 0 0 1-1.051-.009.75.75 0 0 1-.009-1.051l3.97-3.97H1A.75.75 0 0 1 .25 6 .75.75 0 0 1 1 5.25h10.19L7.22 1.28a.75.75 0 0 1 0-1.061z' fill='%230085ff'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-left: 10px;
}

.article__sub-title {
  padding-bottom: 15px;

  span {
    color: #6D6D6D;
    font-size: 14px;

    &:first-of-type {
      margin-bottom: 20px;
    }
  }
}

.article__link-text {
  align-items: center;
  color: #0085FF;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
}

.article__author {
  color: #232323;
  margin-top: 5px;
  font-weight: 300;
}

.article__description {
  color: #42484F;
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
}

.article__content {
  background-color: #F9F9F9;
  padding: 20px 30px;

  @include for-middle() {
    padding: 10px 20px;
  }
}

.article__wrapper {
  transition: all 0.4s ease-out;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 30px 40px -10px rgba(0, 133, 255, 0.2);
  }
}

</style>
