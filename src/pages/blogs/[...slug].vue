<template>
  <UPage>
    <UPageHeader v-bind="article" :ui="{ headline: 'justify-between' }">
      <template #headline>
        <UBreadcrumb :links="breadcrumb" />
        <div class="flex items-center space-x-2">
          <UBadge :label="article.category" variant="subtle" />
          <span class="text-gray-500 dark:text-gray-400">
            &middot;&nbsp;&nbsp;
            <time>{{ formatDateByLocale("zh-CN", article.date) }}</time>
          </span>
        </div>
      </template>

      <div class="mt-4 flex flex-wrap items-center gap-6">
        <UButton
          v-for="(author, index) in article.authors"
          :key="index"
          :to="author.link"
          target="_blank"
          color="white"
          variant="ghost"
          class="-my-1.5 -mx-2.5">
          <UAvatar :src="author.avatarUrl" :alt="author.name" />

          <div class="text-left">
            <p class="font-medium">
              {{ author.name }}
            </p>
            <p class="text-gray-500 dark:text-gray-400 leading-4">
              {{ `@${author.link.split("/").pop()}` }}
            </p>
          </div>
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody prose class="dark:text-gray-300 dark:prose-pre:!bg-gray-800/60">
        <ContentRenderer v-if="article && article.body" :value="article" />
      </UPageBody>

      <template #right v-if="article.body?.toc?.links?.length">
        <UContentToc :links="article.body.toc.links">
          <template #bottom>
            <div class="hidden lg:block space-y-6">
              <UDivider type="dashed" />
            </div>
          </template>
        </UContentToc>
      </template>
    </UPage>
  </UPage>
</template>

<script setup lang="ts">
const route = useRoute();
const { copy } = useCopyToClipboard();
const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());

const { data: article } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

const breadcrumb = computed(() => {
  let links = mapContentNavigation(findPageBreadcrumb(navigation.value, article.value)).map(link => ({
    label: link.label,
    to: ["/blogs"].includes(link.to) ? link.to : undefined,
  }));
  links.push({ label: article.value.title });

  return links;
});

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description,
});

const title = article.value.head?.title || article.value.title;
const description = article.value.head?.description || article.value.description;
useSeoMeta({
  titleTemplate: "%s · seYa Blog",
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · seYa Blog`,
});
</script>
