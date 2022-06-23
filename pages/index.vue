<template>
  <div>
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

const scrollPageTo = (elementId: string) => {
  let element = document.getElementById(elementId);
  element && element.scrollIntoView({behavior: 'smooth'});
};

useHead({
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'XDEVS is a team of developers that provides ONLY high-quality solutions.'+
          'We have been in-game since 2020 helping startups and products with any tech solution they may need'
    },
  ]
})

</script>
