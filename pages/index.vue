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
import { ourProjects } from "~/assets/data/index-page.json";
import { onMounted, ref, watch } from 'vue';

const root = ref(null)

const scrollPageTo = (elementId: string) => {
  let element = document.getElementById(elementId);
  element && element.scrollIntoView({ behavior: "smooth" });
};

watch(
  () => location.hash,
  (currValue, _) => {
    scrollPageTo(currValue);
  }, { deep: true }
)

onMounted(() => {
  if(location.hash) {
    scrollPageTo(location.hash);
  }
})

// definePageMeta({
//   title: 'main-page',
//   meta: [
//     {
//       hid: 'main-page',
//       name: 'description',
//       content: 'Xdevs is team of amazing professionals who can develop websites of any difficulty to help you bussines stay on top!'
//     }
//   ]
// })

</script>
