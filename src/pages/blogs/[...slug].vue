<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="article.title" :description="article.description" :ui="{ headline: 'flex flex-col gap-y-8 items-start' }">
        <template #headline>
          <UBreadcrumb :links="[{ label: 'Blog', icon: 'i-ph-newspaper-duotone', to: '/blogs' }, { label: article.title }]" />
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
            <NuxtLink href="/blogs" class="text-primary">← Back to blog</NuxtLink>
          </div>

          <!-- <hr v-if="surround?.length" /> -->

          <!-- <UContentSurround :surround="surround" /> -->
        </UPageBody>

        <template #right>
          <UContentToc v-if="article.body && article.body.toc" :links="article.body.toc.links">
            <template #bottom>
              <div class="hidden lg:block space-y-6">
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
import { withoutTrailingSlash, joinURL } from "ufo";
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation");

const route = useRoute();
const { copy } = useCopyToClipboard();

const { data: article } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

// const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
//   .where({ _extension: 'md' })
//   .without(['body', 'excerpt'])
//   .sort({ date: -1 })
//   .findSurround(withoutTrailingSlash(route.path))
// )

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description,
});

const title = article.value.head?.title || article.value.title;
const description = article.value.head?.description || article.value.description;
useSeoMeta({
  titleTemplate: "%s · Nuxt Blog",
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · Nuxt Blog`,
});

if (article.value.image) {
  const site = useSiteConfig();
  useSeoMeta({
    ogImage: joinURL(site.url, article.value.image),
    twitterImage: joinURL(site.url, article.value.image),
  });
}
</script>
