<template>
  <header class="container-main-header">
    <div class="logo-block">
      <Logo link="/Blog" class="logo"/>
      <h4>Blog Posts</h4>
    </div>

    <AppSearchInput class="search" @input="$emit('input:search', $event)"/>

    <CustomSelector
        class="custom-selector"
        :options="options"
        default="All articles"
        @input="$emit('input', $event)"
    />
  </header>
</template>

<script lang="ts" setup>
import CustomSelector from '@/components/elements/custom-selector'

const options = ['All articles', 'Web development', 'Mobile development', 'Management']

</script>

<style scoped lang="scss">
@import "/assets/styles/variables";

.container-main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 80px 0 60px;

  @include for-middle() {
    flex-wrap: wrap;
    justify-content: center;
  }

  @include for-average() {
    padding-top: 60px;
  }

  @include for-small() {
    flex-direction: column;
  }
}

.logo {
  margin-bottom: 4px;
  margin-right: 40px;
  display: flex;
  align-self: center;

  :deep(svg) {
    max-width: 32px;
    max-height: 36px;
  }

  &-block {
    display: flex;
    align-items: center;

    @include for-middle() {
      flex: 1 1 100%;
      justify-content: center;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 36px;
    }
  }
}

.search {
  margin-left: 8px;

  @include for-middle() {
    margin: 0;
  }
}

.custom-selector {
  @include for-middle() {
    margin-left: 1rem;
  }

  @include for-small() {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
