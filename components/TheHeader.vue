<template>
  <header class="container">
    <NuxtLink to="/Blog"><Logo class="logo" /></NuxtLink>
    <AppSearchInput class="search" />
  </header>
</template>

<script lang="ts">

</script>
<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.logo {
  margin-bottom: 4px;
}

.search {
  margin-left: 8px;
}
</style>