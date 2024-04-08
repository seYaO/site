<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="article.title" :description="article.description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }">
        <template #headline>
          <UBreadcrumb :links="[{ label: '文档', icon: 'i-ph-newspaper-duotone', to: '/docs' }, { label: article.title }]" />
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

          <div class="flex items-center justify-between mt-12 not-prose">
            <NuxtLink href="/docs" class="text-primary">← Back to docs</NuxtLink>
          </div>
        </UPageBody>

        <template #right>
          <UContentToc v-if="article.body && article.body.toc" :links="article.body.toc.links">
            <template #bottom>
              <div class="hidden lg:block space-y-6">
                <UDivider type="dashed" />

                <UPageLinks title="目录" :links="links" />
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
const path = `/docs/${route.params.group}/chapters`;

const { data: menus } = await useAsyncData(path, () => queryContent(path).findOne());
const links = computed(() => {
  let list = [];
  menus.value.body.map(item => {
    if (!item) return;
    const key = Object.keys(item)[0];
    const label = item[key];
    const link = key.replace(".md", "");
    list.push({ label, icon: "i-ph-newspaper-duotone", to: `./${link}` });
  });

  return list;
});

const { data: article } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}
console.log("route.path", route.params);

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
