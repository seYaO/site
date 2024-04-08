<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="article.title" :description="article.description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }">
        <template #headline>
          <UBreadcrumb :links="[{ label: '文档', icon: 'i-ph-newspaper-duotone', to: '/docs' }, { label: article.title }]" />
        </template>

        <div class="mt-4 flex flex-wrap items-center gap-6">
          <UButton v-if="article.author" color="white" variant="ghost" class="-my-1.5 -mx-2.5">
            <UAvatar :alt="article.author" />

            <div class="text-left">
              <p class="font-medium">
                {{ article.author }}
              </p>
            </div>
          </UButton>
        </div>
      </UPageHeader>

      <UPage>
        <UPageBody prose class="dark:text-gray-300 dark:prose-pre:!bg-gray-800/60">
          <ContentRenderer v-if="article && article.body" :value="article" />

          <div class="flex items-center justify-between mt-12 not-prose">
            <NuxtLink href="/docs" class="text-primary">← Back to docs</NuxtLink>
          </div>
        </UPageBody>

        <template #right>
          <UContentToc v-if="article.body && article.body.toc" :links="article.body.toc.links">
            <template #bottom>
              <div class="hidden lg:block space-y-6">
                <UDivider type="dashed" v-if="article.body.toc.links?.length" />
                <UPageLinks title="目录" :links="articles" />
                <UDivider type="dashed" />
              </div>
            </template>
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();

const { fetchList, articles } = useDocs();
await fetchList(route.params.group);

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
