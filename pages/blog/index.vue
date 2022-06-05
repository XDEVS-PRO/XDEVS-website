<template>
  <section class="container-main-blog">
    <BlogHeader @input:search="searchArticles"/>

    <ul class="article-topics" v-if="topicList && topicList.length">
      <li v-for="(topic, index) in topicList" :key="index"
          :class="['article-topics__item custom-link', {'active-item': topic.topic === activeTag}]"
          @click="initFilter(topic.topic)">
        {{ topic.topic }}
      </li>
    </ul>

    <div>
      <div class="middle-border">
        <p class="count-wrapper"><span>{{ articles.length }}</span> articles</p>
        <CustomSelector class="custom-selector-order"
                        :options="[{label: 'Latest first', value: 'latest'}, {label: 'Newest first', value: 'newest'}]"
                        default="Latest first" :border="false" @input="sortByType($event.value)"/>
      </div>
      <span class="vertical-border"/>
    </div>

    <BlogCard v-if="articles && articles.length" :articles="articles"/>

    <div class="upload__btn custom-link">
      <template v-if="articles && articles.length > 6">
        View more <span class="upload__plus"/>
      </template>
    </div>

  </section>
</template>

<script setup>
import CustomSelector from "~/components/elements/custom-selector";
import BlogHeader from "~/components/BlogHeader";
import BlogCard from "~/pages/BlogComponents/BlogCard";

const activeTag = ref("")
const {data: articles} = await useAsyncData('articles',
    () => queryContent('/articles').find()
)
const topicList = await queryContent('articles').only(['topic']).find();

function searchArticles(query) {
  console.log('searchArticles', query)
  if (!query) return this.articles = queryContent('articles').find();

  this.articles = queryContent('articles').where({title: query}).find()
}

function checkActiveTag(tag) {
  if (!activeTag.value) return activeTag.value = tag;

  return activeTag.value === tag ? activeTag.value = "" : true
}

function addNewArticles() {
  const limitNewArticles = 6;
  this.articles = queryContent('articles').skip(articles.value.length).limit(limitNewArticles).find();
}

function initFilter(topicName) {
  if (!topicName) return true;
  const topic = topicName.toLowerCase();

  checkActiveTag(topic);
  this.articles = queryContent('articles')
  .sort({topic: 1})
  .where({topic: `${topic}`})
  .find();
}

function sortByType(sortType) {
  switch (sortType) {
    case "latest":
      articles.value = sortByDate(articles.value, 1)
      break;
    case "newest":
      articles.value = sortByDate(articles.value, 2)
      break;
  }
}

function sortByDate(array, firstCompareArgument) {
  return array.sort((a, b) =>
      firstCompareArgument === 1 ? new Date(a.updatedAt) - new Date(b.updatedAt) : new Date(b.updatedAt) - new Date(a.updatedAt)
  )
}

</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

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
    text-transform: uppercase;

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

:deep(.custom-selector-order) {
  line-height: 36px;
  height: 36px;
  max-width: 150px;

  .items,
  .selected {
    border-color: transparent;
  }
}
</style>
