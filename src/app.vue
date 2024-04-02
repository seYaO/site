<template>
  <div>
    <NuxtLoadingIndicator />

    <ApHeader :links="headerLinks" />

    <UMain>
      <NuxtPage />
    </UMain>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();
console.log("path", path);
const { headerLinks, searchGroups, searchLinks } = useNavigation();
</script>
