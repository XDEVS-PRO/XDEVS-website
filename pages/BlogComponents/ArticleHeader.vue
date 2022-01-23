<template>
  <div class="blog-header" :style="{'background-image': `url(${data.img ? data.img : null})`}">
    <div class="blog-wrapper">
      <div class="blog-breadcrumbs-container" v-if="breadCrumbs.length">
        <nuxt-link class="blog-breadcrumbs-link" v-for="(item, index) in breadCrumbs" :key="index" :to="item.link">
          {{ item.name }} <span v-if="index !== breadCrumbs.length - 1">/</span>
        </nuxt-link>
      </div>
      <div class="blog-text">
        <p class="blog-time-topic">
          <span v-if="data.createdAt" class="blog-time">{{ data.createdAt | time }}</span>
          <span v-if="data.topic" class="blog-topic">{{ data.topic }}</span>
        </p>
        <h1 v-if="data.description" class="blog-topic-name">{{data.description}}</h1>
        <p v-if="data.author && data.author.name" class="blog-author">by {{ data.author.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    breadCrumbs: {
      type: Array,
      default: []
    }
  },
  filters: {
    time: function (value) {
      const date = new Date(value);
      return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.blog-header {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.blog-wrapper {
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 0  16px 184px;
}

.blog-text {
  max-width: 625px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.blog-time-topic {
  padding-bottom: 20px;

  span {
    color: #EDEDED;
    font-size: 16px;

    &:first-of-type {
      padding: 60px 0 20px 0;
    }
  }
}

.blog-topic-name {
  font-weight: 600;
  font-size: 48px;
  padding-bottom: 20px;
  color: #FFFFFE;
}

.blog-author {
  color: #EDEDED;
}
</style>