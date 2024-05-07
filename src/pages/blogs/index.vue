<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <div>最近的{{ latest }}篇文章（共{{ total }}篇）</div>
      </template>
    </UPageHeader>

    <UPageBody>
      <UPageGrid>
        <UPageCard
          v-for="(article, index) in articles"
          :key="index"
          :to="article._path"
          :title="article.title"
          :description="article.description"
          class="flex flex-col overflow-hidden"
          :ui="{
            divide: '',
            header: { base: 'aspect-w-4 aspect-h-2', padding: '' },
            footer: { padding: 'pt-0' },
            title: 'text-lg',
            description: 'line-clamp-2',
          }">
          <template #icon>
            <UBadge :label="article.category" variant="subtle" />
          </template>

          <template #footer>
            <div class="flex items-center justify-between gap-3">
              <time class="text-gray-500 dark:text-gray-400">{{ formatDateByLocale("zh-CN", article.date) }}</time>

              <UAvatarGroup size="xs" v-if="article.authors">
                <UAvatar
                  v-for="(author, subIndex) in article.authors"
                  :key="subIndex"
                  :src="author.avatarUrl"
                  :alt="author.name"
                  class="lg:hover:scale-110 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform">
                  <NuxtLink v-if="author.link" :to="author.link" target="_blank" class="focus:outline-none" tabindex="-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                  </NuxtLink>
                </UAvatar>
              </UAvatarGroup>
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
const route = useRoute();
const { fetchList, articles, latest, total } = useBlog();

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

const title = page.value._dir?.title || page.value.head?.title || page.value.title;
const description = page.value._dir?.description || page.value.head?.description || page.value.description;
useSeoMeta({
  titleTemplate: "%s · seYa Blog",
  title,
  description,
  ogDescription: description,
  ogTitle: title,
});

await fetchList();
</script>
