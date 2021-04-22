<template>
  <div>
    <first-block />
    <services-block />
    <core-team />
    <best-of />
    <our-projects :data="ourProjectList" :scroll="true" />
    <tech-stack />
    <slider-block />
    <contact-block />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FirstBlock from "@/components/sections/first-block.vue";
import CoreTeam from "@/components/sections/team-block.vue";
import TechStack from "@/components/sections/tech-stack.vue";
import ServicesBlock from "@/components/sections/services-block.vue";
import ContactBlock from "@/components/sections/contact-block.vue";
import SliderBlock from "@/components/sections/slider-block.vue";
import BestOf from "@/components/sections/best-of.vue";
import OurProjects from "@/components/sections/our-projects.vue";
import { ourProjects } from "@/assets/data/index-page.json";
import PageMixin from "@/mixins/page.ts";

@Component({
  components: {
    FirstBlock,
    ContactBlock,
    CoreTeam,
    TechStack,
    ServicesBlock,
    SliderBlock,
    BestOf,
    OurProjects
  },
  mixins: [PageMixin]
})
export default class Index extends Vue {
  ourProjectList: Array<any> = [];

  created() {
    this.ourProjectList = ourProjects;
  }
}
</script>
