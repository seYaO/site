<template>
  <!-- 首页 -->
  <!-- <NuxtLink to="/about">about</NuxtLink> -->

  <div style="padding: 20px">
    <ContentRenderer v-if="page && page.body" :value="page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

// if (!page.value) {
//   throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
// }
</script>
