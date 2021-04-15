<template>
  <div>
    <first-block />
    <services-block />
    <core-team />
    <best-of />
    <our-projects />
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
  }
})
export default class Index extends Vue {}
</script>
