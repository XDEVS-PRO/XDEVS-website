<template>
  <div>
    <first-block />
    <services-block />
    <core-team />
    <best-of />
    <core-team />
    <tech-stack />
    <slider-block />
    <contact-block />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FirstBlock from "@/components/section/first-block.vue";
import CoreTeam from "@/components/section/team-block.vue";
import TechStack from "@/components/section/tech-stack.vue";
import ServicesBlock from "@/components/section/services-block.vue";
import ContactBlock from "@/components/section/contact-block.vue";
import SliderBlock from "@/components/section/slider-block.vue";
import BestOf from "@/components/section/best-of.vue";

@Component({
  components: {
    FirstBlock,
    ContactBlock,
    CoreTeam,
    TechStack,
    ServicesBlock,
    SliderBlock,
    BestOf
  }
})
export default class Index extends Vue {}
</script>
