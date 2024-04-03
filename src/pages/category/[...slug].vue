<template>
  <UContainer>
    <UPageHeader title="" :description="description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }">
      <template #headline>
        <UBreadcrumb :links="[{ label: '博客', icon: 'i-ph-newspaper-duotone', to: '/blogs' }, { label: category.label }]" />
      </template>
    </UPageHeader>

    <UPage>
      <UPageBody>
        <template v-for="(article, index) in articles" :key="article._path">
          <div v-if="article.isMarked" class="relative pointer-events-none select-none h-20" slide-enter>
            <span class="text-7xl font-bold font-mono opacity-15 absolute text-transparent text-stroke-2 text-stroke-hex-aaa">
              {{ article.year }}
            </span>
          </div>
          <UPageProse v-else :to="article._path" :title="article.title" :description="article.description" :date="article.date">
            <template #icon>
              <UBadge :label="article.category" variant="subtle" class="mr-2" />
            </template>
          </UPageProse>
        </template>
      </UPageBody>
      <template #right>
        <UContentToc>
          <template #bottom>
            <div class="hidden lg:block space-y-6">
              <UPageLinks title="分类" :links="categoryLinks" />
              <UDivider type="dashed" />
            </div>
          </template>
        </UContentToc>
      </template>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const { categoryLinks } = useNavigation();
const { fetchList, articles, total } = useBlog();

const category = categoryLinks.filter(x => x.to === route.path)[0] ?? {};

const description = computed(() => `${category.label} （共${total.value}篇文章）`);

await fetchList(category.label);
</script>
