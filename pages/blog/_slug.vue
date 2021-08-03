<template>
<section class="container-main-slug"> 
  <div class="img-content">
    <img :src="article.img"
         :alt="article.alt"
         class="img-main" />
    <div class="img-content__container">
        <h1 class="img-content__title">
          {{ article.title }} 
        </h1>
        <p class="img-content__date">
            {{ formatDate(article.updatedAt) }}
        </p>
        <p class="img-content__author">
         by {{article.author.name}}
        </p>
      <span v-for="(tag, id) in article.tags" :key="id" 
      class="tags-list">
          <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
            <span
              class="tag-item"
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
      </span>
    </div>
  </div>
  <div class="info-content">
    <div class="info-content__about">
      <h2 class="info-content__title">
      {{article.title}}
    </h2>
    <p class="info-content__description">
      {{article.description}}
    </p>
    <p class="info-content__updated">
      Post last updated at: 
      {{ formatDate(article.updatedAt) }}
    </p>
    </div>
    <nav class="info-content__nav">
        <ul>
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              'font-semibold': link.depth === 2
            }"
          >
            <nuxtLink
              :to="`#${link.id}`"
              class="info-content__nav-item"
              :class="{
                'link-padding': link.depth === 2,
                'link-nested-margin': link.depth === 3
              }"
              >{{ link.text }}
            </nuxtLink>
          </li>
        </ul>
      </nav>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author :author="article.author" />
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="prev-next" />

  </div>
</section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  layout: 'blogLayout'
}
</script>

<style>

* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.nuxt-content p {
  margin-bottom: 1.25rem;
}

.nuxt-content h2 {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.6rem;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 1.3rem;
}

.tags-list {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}

.tag-item {
  font-size: 1.2rem;
  color: white;
  border: 1px solid white;
  border-radius: 16px;
  padding: 5px 7px 5px 7px;
}

.icon.icon-link {
  /* background-image: url('~assets/svg/icon-hashtag.svg'); */
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.container-main-slug {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.img-content {
  position: relative
} 

.img-content__container {
  position: absolute;
  top: 20%;
  left: 5%;
  color: white;
  font-size: 2.25rem;
  align-self: center;
}

.img-content__author {
  font-size: 1.375rem;
  font-weight: 300;
  margin-top: 30px;
}

.img-main {
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
  min-height: 360px;
}

.img-content__date {
  font-size: 1.25rem;
}

.info-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.info-content__about {
  margin-bottom: 25px;
}

.info-content__title {
  font-size: 2rem;
  margin-top: 15px;
  font-weight: bold;
  text-align: center;
}

.info-content__description {
  margin-top: 25px;
  max-width: 80%;
}

.info-content__updated {
  margin-top: 15px;
  font-size: 1rem;
}

.info-content__nav {
  margin-top: 25px;
  display: flex;
  text-align: center;
}

.info-content__nav-item {
  color: black;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 10px;
  line-height: 1.4;
  align-self: center;
}

.link-nested-margin {
  margin-left: 8px;
  font-size: 1.1rem;
}

.nuxt-content {
  margin: 20px 0 0 0;
  text-align: center;
  align-self: center;
}

.nuxt-content-container {
  max-width: 100%;
}

.nuxt-content p {
  margin-top: 20px;
  margin-bottom: 20px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 1.6rem;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 1.3rem;
}

.nuxt-content-highlight {
  max-width: 100%;
}

.prev-next {
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
}

@media screen and (min-width: 600px) {

 .img-content__container {
    font-size: 60px;
  }

  .img-content__author {
    font-size: 28px;
  }

  .info-content__date {
    font-size: 24px;
  }

  .img-content__title {
    margin-bottom: 15px;
  }
}

@media screen and (min-width: 768px) {

  .img-content__container {
    top: 12%;
    font-size: 76px;
  }

  .img-content__author {
    font-size: 32px;
  }

  .info-content__date {
    font-size: 28px;
  }

}

@media screen and (min-width: 1024px) {

  .container-main-slug {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    font-size: 20px;
  }
  
  .img-content {
    width: 50%;
    max-height: 100vh;
  }

  .img-main {
    height: 100vh;
  }

  .info-content {
    overflow: scroll;
    height: 100vh;
    width: 50%;
  }

  .info-content__title {
    margin-top: 70px;
  }
  
  .tags-list  {
    flex-direction: row;
  }
}
  @media screen and (min-width: 1400px) {
    
    .container-main-slug {
      font-size: 23px;
    }
    
  }

   @media screen and (min-width: 1600px) {
    
    .container-main-slug {
      font-size: 25px;
    }
  }
</style>