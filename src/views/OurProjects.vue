<template>
  <div>
    <our-project class="first-block" />
    <contact-block />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import ContactBlock from "@/components/sections/contact-block.vue";
import OurProject from "@/components/sections/our-projects.vue";



@Component({
  components: {
    ContactBlock,
    OurProject
  }
})
export default class OurProjects extends Vue {

}
</script>

<style lang="scss" scoped>
.first-block {
  padding-top: 100px;
}
</style>