<template>
  <section class="blog-article">
    <Head>
      <Meta property="og:description" :content="article.description" />
      <Meta property="og:title" :content="article.title" />
    </Head>
    <ArticleHeader :data="article" :bread-crumbs="crumbs"/>

    <div class="blog-container">
      <article>
        <ContentDoc/>
      </article>
    </div>

    <ArticleFooter :author="article.author"/>
  </section>
</template>

<script lang="ts" setup>
import ArticleHeader from '~/components/BlogComponents/ArticleHeader';
import ArticleFooter from '~/components/BlogComponents/ArticleFooter';
import { Article } from '../../types';

const route = useRoute()
const crumbs = ref(null)

const {data: article } = await useAsyncData(route.path,
    () => queryContent('blog')
    .where({_path: route.path})
    .findOne(),
)

crumbs.value = [
  {name: 'Blog Posts', link: '/blog'},
  {name: article.value.title, link: route.path}
];

definePageMeta({
  layout: 'blog',
  ogType: 'article',
})
</script>

<style lang="scss">
@import "/assets/styles/variables";

.blog-article {
  padding-top: 100px;

  @include for-middle() {
    padding-top: 88px;
  }
}

.blog-container {
  padding: 60px 1rem 0;
  max-width: 806px;
  width: 100%;
  margin: 0 auto;

  @include for-middle() {
    padding-top: 30px;
  }

  li {
    list-style-type: circle;
    margin-top: 5px;
    margin-left: 20px;

    a {
      color: #232323;
    }

    li {
      margin-left: 10px;
    }
  }

  table {
    border-spacing: 1rem;
  }

  pre {
    overflow: auto;
  }

  .blog-header {
    background-image: linear-gradient(#eb01a5, #d13531)
  }

  #other-comparisons ~ table {
    td {
      text-align: center;
    }

    td:first-of-type {
      text-align: left;
    }
  }

  h2 {
    position: relative;
    padding-bottom: 60px;
    font-size: 36px;
    margin-top: 36px;

    a {
      color: #232323;
    }

    @include for-middle() {
      padding-bottom: 30px;
    }

    &:after {
      content: "";
      border-bottom: 2px solid #0085FF;
      width: 90px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 30px;

      @include for-middle() {
        bottom: 15px;
      }
    }
  }

  h3 {
    padding: 20px 0;

    a {
      font-size: 18px;
      color: #232323;
    }
  }

  p {
    color: #42484F;
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 20px;
    line-height: 160%;
  }
}


.blog-breadcrumbs-container {
  padding: 20px 0;
}

.blog-breadcrumbs-link {
  font-size: 14px;
  color: #BFBFBF;

  span {
    padding: 0 10px;
  }

  &:last-of-type {
    color: #0085FF;
  }
}

.blog-author {
  color: #EDEDED;
}

.quote {
  background: #F9F9F9;
  border-radius: 4px;
  position: relative;
  padding: 30px 30px 30px 80px;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  color: #42484F;
  margin-bottom: 40px;

  &:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='16' fill='none' xmlns:v='https://vecta.io/nano'%3E%3Cpath d='M.958 16C.319 13.242 0 10.849 0 8.82 0 5.906.692 3.72 2.076 2.263 3.459.754 5.482 0 8.143 0v3.122c-1.384 0-2.395.364-3.034 1.093-.585.728-.878 1.821-.878 3.278v1.795h3.992V16H.958zm10.777 0c-.639-2.758-.958-5.151-.958-7.18 0-2.914.692-5.099 2.076-6.556C14.237.754 16.259 0 18.92 0v3.122c-1.384 0-2.395.364-3.034 1.093-.585.728-.878 1.821-.878 3.278v1.795H19V16h-7.265z' fill='url(%23A)'/%3E%3Cdefs%3E%3ClinearGradient id='A' x1='0' y1='16' x2='19.754' y2='15.008' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23f52c68'/%3E%3Cstop offset='1' stop-color='%23ff4874'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 19px;
    height: 16px;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .author {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 30px;
    margin-top: -15px;
    color: #42484F;
  }
}

.article-image {
  max-width: 770px;
  width: 100%;
  border-radius: 4px;
}

.language-js.line-numbers {
  border-radius: 4px;
}

</style>
