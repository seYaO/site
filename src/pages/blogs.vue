<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="links">
          <UDivider type="dashed" class="mb-6" />
          <UNavigationTree :links="navigationLinks" default-open :multiple="false" />
        </UAside>
      </template>

      <NuxtPage />
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const { headerLinks } = useNavigation();
const { navPageFromPath } = useContentHelpers();
const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());

const links = computed(() => headerLinks.value.find(link => link.to === "/blogs")?.children ?? []);

const navigationLinks = computed(() => {
  const path = ["/blogs"].filter(Boolean).join("/");
  return mapContentNavigation(navPageFromPath(path, navigation.value)?.children || []);
});
</script>
