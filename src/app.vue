<template>
  <div>
    <NuxtLoadingIndicator />

    <ApHeader :links="headerLinks" />

    <UMain>
      <NuxtPage />
    </UMain>

    <ApFooter />
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { headerLinks } = useNavigation();
</script>
