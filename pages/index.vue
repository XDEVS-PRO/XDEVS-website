<template>
  <div>
    <first-block />
    <services-block />
    <core-team />
    <best-of />
    <case-studies :data="ourProjectList" :scroll="true" />
    <tech-stack />
    <slider-block />
    <contact-block />
  </div>
</template>

<script lang="ts">

import FirstBlock from "~/components/sections/first-block.vue";
import CoreTeam from "~/components/sections/team-block.vue";
import TechStack from "~/components/sections/tech-stack.vue";
import ServicesBlock from "~/components/sections/services-block.vue";
import ContactBlock from "~/components/sections/contact-block.vue";
import SliderBlock from "~/components/sections/trusted-block.vue";
import BestOf from "~/components/sections/best-of.vue";
import OurProjects from "~/components/sections/case-studies.vue";
import { ourProjects } from "~/src/assets/data/index-page.json";
import PageMixin from "~/src/mixins/page";
import { defineComponent } from '@nuxt/bridge/dist/runtime/capi.legacy';
import CaseStudies from '../components/sections/case-studies.vue';


export default defineComponent ({
  components: {
    CaseStudies,
    FirstBlock,
    ContactBlock,
    CoreTeam,
    TechStack,
    ServicesBlock,
    SliderBlock,
    BestOf,
    OurProjects
  },
  head: {
    title: 'main-page',
    meta: [
      {
        hid: 'main-page',
        name: 'description',
        content: 'Xdevs is team of amazing professionals who can develop websites of any difficulty to help you bussines stay on top!'
      }
    ]
  },
  mixins: [PageMixin],

  setup() {
    const ourProjectList = ourProjects;
    return {
      ourProjectList,
    }
  }
})
</script>
