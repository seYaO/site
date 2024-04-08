<script setup lang="ts">
import type { NuxtError } from "#app";

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

defineProps<{ error: NuxtError }>();

const { headerLinks } = useNavigation();

const { data: navigation } = await useLazyAsyncData("navigation", () => fetchContentNavigation(), { default: () => [] });

provide("navigation", navigation);
</script>

<template>
  <div>
    <ApHeader :links="headerLinks" />

    <UContainer>
      <UMain>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UMain>
    </UContainer>

    <ApFooter />
  </div>
</template>
