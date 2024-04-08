<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="article.title" :description="article.description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }">
        <template #headline>
          <UBreadcrumb :links="[{ label: article.title, icon: 'i-ph-newspaper-duotone' }]" />
          <div class="flex items-center space-x-2">
            <span>
              {{ article.category }}
            </span>
            <span class="text-gray-500 dark:text-gray-400">
              &middot;&nbsp;&nbsp;
              <time>{{ formatDateByLocale("en", article.date) }}</time>
            </span>
          </div>
        </template>
      </UPageHeader>

      <UPage>
        <UPageBody prose class="dark:text-gray-300 dark:prose-pre:!bg-gray-800/60">
          <ContentRenderer v-if="article && article.body" :value="article" />
        </UPageBody>
      </UPage>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: article } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description,
});

const title = article.value.head?.title || article.value.title;
const description = article.value.head?.description || article.value.description;
useSeoMeta({
  titleTemplate: "%s · seYa Docs",
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · seYa Docs`,
});
</script>
