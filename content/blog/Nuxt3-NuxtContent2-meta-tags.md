---  
topic: Nuxt 3 - Nuxt Content 2  
createdAt: 1658865733050  
category: Web development  
title: Adding Meta tags in Nuxt 3 and Nuxt Content 2  
description: While Nuxt v3 is still not released (RC) and docs are missing some pages, it doesn't stop enthusiasts from using it.  
image: /blog/nuxt3_seo_tags/nuxt-nuxt-content.png  
head.image: '/blog/nuxt3_seo_tags/nuxt-nuxt-content.png'  
alt: Managing SEO tags in Nuxt3 and Nuxt Content v2.  
author:  
  name: Xander Pokhylenko  
  bio: Full-stack Developer  
  img: /blog/authors/xander.webp  
tags:
- Nuxt
- Nuxt Content
---  

## Adding Meta tags in Nuxt 3 and Nuxt Content 2
As a developer, I love to build websites. I enjoy the process itself and the results I see.
As a product owner, I want to make the website noticeable in search engines and social media. To make that happen, you need to work on your website Meta tags. Adding Meta, Open Graph, and Twitter Meta tags are the same in Nuxt.

As for now, Nuxt 3 is still not released, so that things may change in the future.

There are several ways to set the Meta tags in Nuxt 3. Not all of them are dynamic:

- nuxt.config.ts (dynamic ❌)
- useHead composable (dynamic ✅)
- Meta components (dynamic ✅)
- useMeta (deprecated)

Let's see how you can use them in your code.

### Nuxt.config.ts
You can set the META tags in `nuxt.config.ts`. I believe this is a good place for the tags
that rarely / never change.

```ts
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {property: 'og:site_name', content: 'XDEVS.PRO'},
        {property: 'og:image', content: 'https://xdevs.pro/ogXDEVS.png'},
        {property: 'og:url', content: 'https://xdevs.pro/'},
        {property: "og:type", content: "website"},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },
  },
})
```


### useHead composable
It can be used to set constant Meta tags, or you can use it in combination with `useRoute`, which adds a bit of flexibility. `useHead` can be used both globally and on per page basis.

In your `app.vue`, you can set global Meta tags in `useHead` composable:
```ts
<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {property: 'og:url', content: computed(() => `https://xdevs.pro${route.path}`)},
    // extract og:type from route.meta.ogType which is defined in definePageMeta({}) on any other page
    {property: 'og:type', content: computed(() => route.meta.ogType || 'website')}
  ],
})
</script>
```

Any other page component, e.g., `blog/index.vue`
```ts
// You can override the global title 
// that was set in app.vue like this
useHead({  
  title: 'XDEVS Team Blog – our latest articles 📚',  
})  

// it won't have direct access to your meta tags
definePageMeta({  
  layout: 'blog', 
  ogType: 'OgType',
  otherArgs: youWantToPass 
})
```


### useHead Title Templates

Finally, something we can use to set the page title dynamically. Unfortunately, it works only with the `title` tag.

```ts
// in your app.vue, add the following.
const route = useRoute()

useHead({
  // route.meta.title is is defined in definePageMeta({}) in another page component
  titleTemplate: (titleChunk) => {
    return titleChunk || route.meta.title || 'Site Default Title'
  },
})
```

Now you can set the title using `definePageMeta` or `useHead` on any other page of your website.

```ts
useHead({
  title: 'Some other page title.',
})
```
or
```ts
definePageMeta({
  title: 'Any other page title.',
})
```

In case no title is set, the default title will be used.


### definePageMeta
`definePageMeta` is extracted at build time via a macro, so it can't be set dynamically.
It extends `route.meta` with any non-dynamic information you pass. It's important to notice that you can't set Meta tags using `definePageMeta` without using `useHead` composable.

`page1.vue`
```ts
definePageMeta({
  someInformation: 'You may need elsewhere available at a build time.'
})
```

`app.vue`
```ts
const route = useRoute()

console.log(route.meta.someInformation)
```


### Meta components
You may find the Meta component a more flexible and valuable solution to set Meta tags.

> Nuxt provides `<Title>`, `<Base>`, `<Script>`, `<Style>`, `<Meta>`, `<Link>`, `<Body>`, `<Html>` and `<Head>` components so that you can interact directly with your metadata within your component's template.

They can be used with any dynamic data like a regular Nuxt component.

```html
<template>
  <div>
    <Head>
      <Meta property="og:title" content="XDEVS – Top Software Engineers for your needs ❤️‍🔥"/>
      <Meta property="og:description" content="Web / mobile app development and consulting across different cycles of your product life." />
      <Meta name="description" :content="pageDescriptionRef" />
    </Head>
  </div>
</template>
```


## How do I set META tags with Nuxt Content v2?

Managing Meta tags in Nuxt Content is made very easy.

### [Front-matter](https://content.nuxtjs.org/guide/writing/markdown#front-matter):
> [Front-matter](https://content.nuxtjs.org/guide/writing/markdown#front-matter) is a convention of Markdown-based CMS to provide meta-data to pages, like description or title. In Nuxt Content, the front-matter uses the YAML syntax with `key: value` pairs.

```
yourArticle.md

---
title: Managing SEO (Meta) tags in Nuxt 3 and Nuxt Content 2
description: Your article description.
---
```

### [useContentHead()](https://content.nuxtjs.org/guide/writing/markdown#front-matter)
This is basically the same as `useHead()` that we talked about earlier.

>[useContentHead()](https://content.nuxtjs.org/guide/writing/markdown#front-matter) is a composable providing a binding between your content data and `useHead()`.
```
yourArticle.md

---
title: Managing SEO (Meta) tags in Nuxt 3 and Nuxt Content 2
description: Your article description.
image:
  src: '/assets/image.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
---
```
Moreover, you can dynamically use `Nuxt Meta components` to set Meta tags on the article page. To see a real-world example of setting Meta tags in the Nuxt 3 project, you can check our [repo](https://github.com/XDEVS-PRO/XDEVS-website).

### Conclusion
There is definitely more than one way to set Meta tags in the Nuxt 3 framework. Is it bad or good? It's up to you. Having the possibility to make the same thing in multiple ways may be confusing for some people, including myself, but as Nuxt 3 is getting released, I believe we will get more clarification regarding adding Meta tags :) 
