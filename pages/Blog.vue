<template>
  <section class="container-main-blog">
    <TheHeader/>

    <ul class="article-topics">
      <li v-for="(topic, index) in topicList" :key="index"
          :class="['article-topics__item custom-link', {'active-item': topic.includes('NUXTJS')}]" @click="initFilter">
        {{ topic }}
      </li>
    </ul>

    <div>
      <div class="middle-border">
        <p class="count-wrapper"><span>67</span> articles</p>
        <CustomSelector class="custom-selector-order" :options="['Latest first', 'Newest first']" default="Latest first" :border="false" @input="$emit('input', $event)"  />
      </div>
      <span class="vertical-border" />
    </div>

    <ul class="article-list">
      <template v-for="article of articles">
        <li class="article__wrapper">
          <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }" :key="article.slug"
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
                <span>24.06.2021</span>
                <span>Linkedin</span>
              </div>
              <h2 class="article__title">{{ article.title }}</h2>
              <p class="article__description">
                {{ article.description }}
              </p>
              <p class="article__link-text">Go to the article <span class="article__arrow"/></p>
            </div>
          </NuxtLink>
        </li>
      </template>
    </ul>

    <div class="upload__btn custom-link">
      View more <span class="upload__plus" />
    </div>

  </section>
</template>

<script>
import CustomSelector from "@/components/elements/selector";

export default {
  components: {
    CustomSelector
  },
  data() {
    return {
      topicList: ['JAVASCRIPT', 'LINKEDIN', 'NUXTJS', 'WEB DEVELOPMENT', 'REACTJS', 'NODEJS', 'FRONTEND', 'BACKEND', 'WEB DEVELOPMENT', 'REACTJS', 'NODEJS', 'FRONTEND', 'BACKEND']
    }
  },
  methods: {
    initFilter() {

    }
  },
  async asyncData({$content, params}) {
    const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch()
    const tags = await $content('tags')
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
    const testGrid = [...articles, ...articles, ...articles, ...articles, ...articles, ...articles];
    console.log(testGrid);
    return {
      articles: testGrid,
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

.article__wrapper {
  transition: all 0.4s ease-out;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 30px 40px -10px rgba(0, 133, 255, 0.2);
  }
}

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

.upload__btn {
  margin: 60px auto;
  max-width: 130px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: #F52C68;
  cursor: pointer;

  &.custom-link::before {
    background: linear-gradient(to right, #F52C68 0%, rgba(255, 255, 255, 0) 100%);
  }
}



.upload__plus {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' xmlns:v='https://vecta.io/nano'%3E%3Cpath fill-rule='evenodd' d='M4.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-15zM2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zM12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1z' fill='%23f52c68'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
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

.vertical-border {
  height: 1px;
  width: 100%;
  display: block;
  border: 1px solid #EDEDED;
  margin: 0px 0 40px;
}

.middle-border {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count-wrapper {
  font-size: 16px;
  color: #6d6d6d;

  span {
    background: -webkit-linear-gradient(
            87.58deg, #0085ff 0%, #11a9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

::v-deep .custom-selector-order {
  line-height: 36px;
  height: 36px;
  max-width: 150px;

  .items,
  .selected {
    border-color: transparent;
  }
}
</style>
