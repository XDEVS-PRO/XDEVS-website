<template>
  <div class="container-main-author">
    <div class="container-img">
      <img :src="articles[0].author.img"
           :alt="articles[0].author.name"
           class="main-img"/>
      <div class="container-img__content">
        <h1 class="container-img__name">
          {{ articles[0].author.name }}
        </h1>
        <p class="container-img__bio">
          {{ articles[0].author.bio }}
        </p>
          </div>
    </div>
    <div class="container-info">
      <div class="list-of-articles-container">
        <h2 class="container-info__title">
           Here are a list of articles by
          {{ articles[0].author.name }}:
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
              class="article__content"
            >
              <h2 class="article__content-title">
                {{ article.title }}
              </h2>
              <p class="article__content-description">
                {{ article.description }}
              </p>
              <p class="">
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  layout: 'blog'
}
</script>

<style scoped>

ul {
  list-style-type: none;
}

a {
  color: black;
  text-decoration: none;
}

.container-main-author {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.container-img {
  width: 100%;
  position: relative;
}

.container-img__content {
  position: absolute;
  bottom: 4%;
  color: white;
  left: 3%;
  max-width: 280px;
}

.main-img {
  object-fit: cover;
  width: 100%;
  filter: brightness(60%);
}

.container-info {
  margin: 10px;
}

.container-info__title {
  font-size: 2rem;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 20px;
}

.container-img__name {
  font-size: 1.9rem;
}

.container-img__bio {
  font-size: 1.1rem;
}

.list-of-articles {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

.article-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article__content {
  padding: 0.7rem;
}

.article__content-title {
  font-size: 1.4rem;
}

.article__content-description {
  color: #718096;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 5px 0 5px 0;
}

@media screen and (min-width: 768px) {

  .container-info {
    font-size: 20px;
  }

  .container-img__content {
    max-width: 70%;
  }

  .container-img__name {
    font-size: 2.5rem;
  }

  .container-img__bio {
    font-size: 1.5rem;
    width: 100%;
  }

}

@media screen and (min-width: 1024px) {

  .container-info__title {
    margin-bottom: 35px;
  }
  .container-main-author {
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
  }

  .container-info {
    padding-top: 80px;
    width: 50%;
    height: 100vh;
    overflow: scroll;
  }

  .container-img {
    width: 50%;
    height: 100%;
  }

  .container-img__content {
    top: 5%;
  }

  .main-img {
    width: 100%;
   height: 100%;
  }
}
</style>
