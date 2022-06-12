<template v-if="data">
  <div class="blog-header" :style="{'background-image': `url(${data.img ? data.img : null})`}">
    <div class="blog-wrapper">
      <div class="blog-breadcrumbs-container" v-if="breadCrumbs.length">
        <nuxt-link
            v-for="(item, idx) in breadCrumbs"
            :to="item.link"
            class="blog-breadcrumbs-link"
        >
          {{ item.name }} <span v-if="idx !== breadCrumbs.length - 1">/</span>
        </nuxt-link>
      </div>
      <div class="blog-text">
        <p class="blog-time-topic dark-bg__img">
          <!--   FIX time-->
          <span v-if="data.createdAt" class="blog-time">{{ data.createdAt | time }}</span>
          <span v-if="data.topic" class="blog-topic">{{ data.topic }}</span>
        </p>
        <h1 v-if="data.description" class="blog-topic-name">{{ data.description }}</h1>
        <p v-if="data.author && data.author.name" class="blog-author">by {{ data.author.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  data :  {img: string, breadCrumbs: [], topic: string, description: string, author: {}, createdAt: string},
  breadCrumbs: { name: string, link: string }[],
}

const {data, breadCrumbs} = withDefaults(defineProps<Props>(), {breadCrumbs: []})
console.log('header', data, breadCrumbs)
const time = computed((value) => {
  const date = new Date(value);
  return date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate();
})
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.blog-header {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.blog-wrapper {
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 184px;
}

.blog-text {
  padding-top: 40px;
  max-width: 625px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.blog-time-topic {
  padding: 20px;
  margin-bottom: 20px;
  background-image: url(~/assets/bg-section.svg);

  span {
    color: #EDEDED;
    font-size: 16px;
  }
}

.blog-topic-name {
  font-weight: 600;
  font-size: 48px;
  padding-bottom: 20px;
  color: #FFFFFE;

  @include for-small() {
    font-size: 24px;
  }
}

.blog-author {
  color: #EDEDED;
}
</style>
