---
topic: Next.js
createdAt: 1655420400000
category: Web development
title: Next.js vs. Remix.
description: Nowadays, a new React framework is no news. It seems like they are multiplying each day, so why are we focusing on Remix and Next.js today?
img: /blog/next.js_vs_remix/next.js_vs_remix.png
imgStyle: linear-gradient(#000, transparent), url(/blog/next.js_vs_remix/next.js_vs_remix.png)
alt: Next.js vs. Remix.
author:
  name: Daniil Krutogolov
  bio: Front-end Developer
  img: /assets/core-team/daniil.webp
tags:
- Next.js
- Remix
---
# Next.js vs. Remix
Nowadays, a new React framework is no news. It seems like they are multiplying each day, so why are we focusing on Remix and Next.js today? Well, Next.js is definitely the most popular choice for building SSR and SSG React applications, and Remix might be the next developer's favorite React framework. They have a lot in common and a lot more differences.

In this article we will talk about:
* [Story of the two frameworks](#story-of-the-two)
  * [Next.js](#nextjs)
  * [Remix](#remix)
* [Comparison of Next.js and Remix](#comparison-of-remix-and-nextjs)
  * [Routing](#routing)
    * [Nested Routes](#nested-routes)
    * [Dynamic Routes](#dynamic-routes)
  * [Data Loading](#data-loading)
  * [Sessions and Cookies](#sessions-and-cookies)
  * [Working with Forms](#working-with-forms)
  * [Styling](#styling)
  * [SEO](#seo)
  * [Other Comparisons](#other-comparisons)
* [Conclusion](#conclusion)

## Story of the two
To better understand the competition between the two, let's first look into their story.
### Next.js
Next.js was first released as an open-source project on GitHub on October 25, 2016. It is a project of the Vercel (ex-ZEIT) company. Google has donated to the Next.js project, contributing 43 pull requests in 2019, where they helped in pruning unused JavaScript, reducing the loading time, and adding improved metrics. As of March 2020, the framework is used by many large websites, including Netflix, GitHub, Uber, Ticketmaster, and Starbucks. As of now, 12 major versions of the framework were released. Next.js has 86.5k stars on GitHub and 2,541,419 weekly downloads. 
### Remix
Remix is a framework which was made by the same people, who made React Router. Remix's earliest commits on GitHub are dated to early July of 2020. It wasn't open-source from the start, but the strategy changed in late 2021 when Remix became fully open-source. Even though Remix is a relatively new framework, because of its core principles and ideas, it showed great growth in popularity. Remix has 16.2k likes on GitHub and 20,858 weekly downloads.

# Comparison of Remix and Next.js
Remix and Next.js are both React frameworks, that allow you to do server-side rendering, which means that both backend and frontend are implemented in the same application. Render happens on the side of a server and the pages are sent to the client with minimal use of JavaScript. However, by the time of writing, Remix doesn't support static site generation. 

## Routing
The routing system might seem similar at the first glance, but it isn't. What's similar is the file-based routing, where every file in a specific folder is treated as a new route. This specific folder is routes in Remix and pages in Next.js.
#### Next.js
```
- pages
  - index.js
  - new-route.js
  - _app.js
  ...
```
#### Remix
```
- app
  - routes
    - index.js
    - new-route.js
    ...
```

### Nested Routes
Because Remix is built on top of React Router, Remix allows you to do nested routing with ease.

It comes with a very powerful route nesting mechanism that can nest other routes in a currently active route to create what would be considered a nested layout of routes. They act like children components that can be mounted or unmounted depending on the currently active URL path.

This nesting is achievable using an Outlet component. The Outlet component is the key to nested routing in Remix as it is used to tell a parent route where to mount a nested child route. Using the Outlet component, you could easily build a hierarchy of deeply nested routes to create a complex nested layout. Through nested routes, Remix can eliminate nearly every loading state as these nested routes are preloaded on the server, creating almost a hybrid of SPA and SSR.

Next.js comes with its own router and has support for nested routes but it’s not as easy to achieve a nested routes layout as in Remix. 

### Dynamic Routes
Both Remix and Next.js have support for dynamic routing but have different naming conventions to create one.

#### Next.js
In Next.js it’s created using pair of square brackets with the dynamic param’s name inside.
```
pages/post/[postid].js
```
Then using the ``useRouter`` hook provided by Next.js, the URL query param can be gotten.

#### Remix
In Remix, to create a dynamic route you should start the name of the dynamic route with a dollar sign.
```
routes/post/$postid.jsx
```
And because Remix is based on React Router, the ``useParam`` hook can be used to access the URL param.

## Data Loading
We will only talk about SSR here, because, as said above, Remix doesn't support server-side generation (SSG) option.

#### Next.js
In Next.js we have a ``getServerSideProps`` function, which does the job of loading data on a server, sending it to a React component and rendering it with the data. This data is sent via props.
```js
export const getServerSideProps = async ({ params, query }) => { 
  // abstract API calls
  const userData = await API.getUser(params.id);
  const { id, name } = userData;
  return {props: { id, name }}
};

export default function UserPage(props) { 
  return ( 
      <> 
        <p> User ID: {props.id} </p>
        <p> User Name: {props.name} </p> 
      </> 
  );
}
```
#### Remix
In Remix, however, we have a ``useLoaderData`` hook and ``loader`` function, which do the job for us and don't mix client props with server props. Loader function is an equivalent to Next.js ``getServerSideProps``.
```js
import { useLoaderData } from "remix"; 

export const loader = async ({ params, request }) => { 
  // abstract API calls
  const userData = await API.getUser(params.id);
  const { id, name } = userData;
  return { id, name };
}; 

export default function FirstPage() { 
  const { id, name } = useLoaderData();
  return ( 
        <> 
          <p> User ID: {id} </p> 
          <p> User Name: {name} </p> 
        </> 
  );
}
```

## Sessions and Cookies
There are no built-in tools to interact with cookies or sessions in Next.js. You can use a library for that like Cookie.js or NextAuth.js, which would solve your problem.

In Remix, you get full support for cookies and sessions out of the box. You can generate a cookie by calling a function, then serialize or parse data to store or read it.

```js
import { createCookie } from "remix";

const cookie = createCookie("user", {
  expires: new Date(Date.now() + 60),
  httpOnly: true,
  maxAge: 60,
  path: "/",
  sameSite: "lax",
  secrets: ["1s2e3c4r5e6t"],
  secure: true
});
```

## Working with Forms
Working with forms is a pain in React. And Next.js is not much different from React when it comes to forms. You would need to implement everything yourself or use a library.

Remix's approach is different and took a lot from the way browsers handle forms natively. All you need to get a form working in Remix is to either use the traditional HTML form tag or import a Form component (both work the same) and set up a form with an HTTP request method set to POST or GET, then enter an action URL to send the data to - which by default will be the same as the route for the form. If the method is set to GET, Remix will execute any export loader function defined in the component, but if the method is POST, Remix will execute any export action function defined in the component.
```js
export const action = async ({ request }) => {
  const form = await request.formData();
  const content = form.get('description');
  return redirect('/');
}

export default function DescriptionForm() {
  return (
      <Form method="POST">
        <label htmlFor="description">
          Description: <textarea name="description" />
        </label>
        <input type="submit" value="Add New" />
      </Form>
  )
}
```

## Styling

Next.js supports ``styled-jsx`` as a CSS-in-JS solution by default. It also has built-in support for CSS modules and Vanilla CSS out of the box. You can also add any other styling library, like ``styled-components``, with a few lines of configurations.

The primary way to style in Remix is by linking to traditional CSS style sheets placed in the “styles” directory by exporting a Links function in a component. The `<Links/>` function is used to inject whatever stylesheet which needs to be loaded for a specific route module and the styles are fetched in parallel when loading the route. This stylesheet is then automatically removed when we leave the route to optimize the amount of CSS you’re sending per page.

As a result, styling in Remix boils down to using CSS files that can be attached to the website via the ``<link rel="stylesheet">``. There’s support for CSS frameworks and libraries right out of the box, but not those that require bundler or compiler integration. Only those that can generate actual CSS files that can be linked to your remix application. Additionally, Remix supports runtime CSS frameworks like styled-components, which are evaluated at runtime but need no bundler integration.

## SEO

In Next.js, you can achieve a better SEO by importing the built-in ``next/head`` as a <Head> component into your pages or routes and then use it to define all the various meta info needed for that page inside this ‘head’ component as direct children.

```js
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      ...
    </div>
  )
}
```

In Remix you would use a special `Meta` component inside of a page's <head> tag.

```js
import { Meta } from 'remix'

export const meta = () => {
  return {
    title: 'Page Title',
    description: 'Page Description'
  }
}

export default function Page() {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        ...
      </body>
    </html>
  )
}
```

## Other Comparisons
|                           | Next.js | Remix |
|---------------------------|---------|-------|
| Image Optimization        |✅|       ❌
| Google AMP                |✅         |   ❌    |
| TypeScript Support        |✅         |    ✅    |
| Internationalized Routing |✅         |   ❌    |

## Conclusion
Summarizing everything above, I can definitely say that Remix is a great framework, yet, it is a little early to take it to production. Despite that, it is always great to have a competition when it comes to frameworks and Remix is a perfect competitor for Next.js. To understand if Remix is a good option for your project, I would highly recommend you to read [this article](https://remix.run/blog/remix-vs-next) by Remix's Co-Founder Ryan Florence, who is talking about performance differences between Next.js and Remix.
