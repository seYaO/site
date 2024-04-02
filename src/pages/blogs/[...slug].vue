<template>
  <UPage
    :ui="{
      right: 'sticky top-[--header-height] bg-background/75 backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-10',
    }">
    <UPageHeader v-bind="page">
      <template #headline>
        <!-- <UBreadcrumb :links="breadcrumb" /> -->
      </template>
    </UPageHeader>

    <UPageBody prose class="dark:text-gray-300 dark:prose-pre:!bg-gray-800/60">
      <ContentRenderer v-if="page && page.body" :value="page" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :links="page.body?.toc?.links" :ui="{ wrapper: '' }">
        <template #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>

<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation");

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
console.log("page.value.body", page.value.body);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const breadcrumb = computed(() => {
  const links = mapContentNavigation(findPageBreadcrumb(navigation.value, page.value)).map(link => ({
    label: link.label,
    to: link.to,
  }));

  // if (route.path.startsWith('/docs/bridge') || route.path.startsWith('/docs/migration')) {
  //   links.splice(1, 0, {
  //     label: 'Upgrade Guide',
  //     to: '/docs/getting-started/upgrade'
  //   })
  // }

  return links;
});

// const titleTemplate = computed(() => {
//   if (page.value.titleTemplate) return page.value.titleTemplate;
//   const titleTemplate = navKeyFromPath(route.path, "titleTemplate", navigation.value);
//   if (titleTemplate) return titleTemplate;
//   return "%s · Nuxt";
// });

const title = page.value.head?.title || page.value.title;
const description = page.value.head?.description || page.value.description;

// useSeoMeta({
//   titleTemplate,
//   title,
//   description,
//   ogDescription: description,
//   ogTitle: titleTemplate.value?.includes("%s") ? titleTemplate.value.replace("%s", title) : title,
// });

// defineOgImage({
//   component: "Blogs",
//   title,
//   description,
//   headline: breadcrumb.value.length ? breadcrumb.value.map(link => link.label).join(" > ") : "",
// });
</script>
