<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="page.title" :description="page.description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }"></UPageHeader>

      <UPage>
        <UPageBody prose class="dark:text-gray-300 dark:prose-pre:!bg-gray-800/60">
          <ContentRenderer v-if="page && page.body" :value="page" />

          <div class="flex items-center justify-between mt-12 not-prose">
            <NuxtLink href="/docs" class="text-primary">← Back to docs</NuxtLink>
          </div>
        </UPageBody>

        <template #right>
          <UContentToc>
            <template #bottom>
              <div class="hidden lg:block space-y-6">
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
const path = `${route.path}/chapters`;
const README = `${route.path}/readme`;

const { data: menus } = await useAsyncData(path, () => queryContent(path).findOne());
const links = computed(() => {
  let list = [];
  menus.value.body.map(item => {
    if (!item) return;
    const key = Object.keys(item)[0];
    const label = item[key];
    const link = key.replace(".md", "");
    list.push({ label, icon: "i-ph-newspaper-duotone", to: `${route.path}/${link}` });
  });

  return list;
});

const { data: page } = await useAsyncData(README, () => queryContent(README).findOne());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

useSeoMeta({
  title: page.value.head?.title || page.value.title,
  description: page.value.head?.description || page.value.description,
});

const title = page.value.head?.title || page.value.title;
const description = page.value.head?.description || page.value.description;
useSeoMeta({
  titleTemplate: "%s · seYa Blog",
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · seYa Blog`,
});
</script>
