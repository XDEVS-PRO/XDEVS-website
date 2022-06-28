<template>
  <div>
    <Head>
      <Meta property="og:title" content="XDEVS – Top Software Engineers for your needs ❤️‍🔥"/>
      <Meta property="og:description" content="Web / mobile app development and consulting across different cycles of your product life." />
      <Meta name="description" content="XDEVS is a team of developers that provides ONLY high-quality solutions. We have been in-game since
   2020 helping startups and products with any tech solution they may need." />
    </Head>

    <first-block/>
    <services-block/>
    <core-team/>
    <best-of/>
    <case-studies :data="ourProjects" :scroll="true"/>
    <tech-stack/>
    <slider-block/>
    <contact-block/>
  </div>
</template>

<script lang="ts" setup>

import FirstBlock from '~/components/sections/first-block.vue';
import CoreTeam from '~/components/sections/team-block.vue';
import TechStack from '~/components/sections/tech-stack.vue';
import ServicesBlock from '~/components/sections/services-block.vue';
import ContactBlock from '~/components/sections/contact-block.vue';
import SliderBlock from '~/components/sections/trusted-block.vue';
import BestOf from '~/components/sections/best-of.vue';
import CaseStudies from '../components/sections/case-studies.vue';
import { ourProjects } from "~/assets/data/projects.json";

</script>
