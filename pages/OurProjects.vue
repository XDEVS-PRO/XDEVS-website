<template>
  <div>
    <template v-for="(item, i) in ourProjectList">
      <our-project :data="[item]" :key="i" class="first-block" />
    </template>
    <contact-block />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ContactBlock from "../src/components/sections/contact-block.vue";
import OurProject from "../src/components/sections/our-projects.vue";
import { ourProjects } from "../src/assets/data/index-page.json";

@Component({
  components: {
    ContactBlock,
    OurProject
  }
})
export default class OurProjects extends Vue {
  ourProjectList: Array<any> = [];

  created() {
    this.ourProjectList = ourProjects;
  }
}
</script>

<style lang="scss" scoped>
.first-block {
  padding-top: 100px;
}
</style>
