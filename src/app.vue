<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <ContentDoc path="/blogs/flex-grammar" /> -->
    <!-- <ContentDoc /> -->
    <UMain>
      <NuxtPage />
    </UMain>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();
console.log("path", path);
</script>
