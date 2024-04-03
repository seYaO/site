<template>
  <UCard :class="[ui.wrapper, to && ui.to]" v-bind="attrs" :ui="ui">
    <NuxtLink v-if="to" :aria-label="ariaLabel" v-bind="nuxtLinkBind" class="focus:outline-none" tabindex="-1">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>

    <div :class="ui.title.wrapper">
      <template v-if="icon || $slots.icon">
        <slot name="icon">
          <UIcon :name="icon as string" :class="ui.title.icon" />
        </slot>
      </template>
      <div v-if="title || $slots.title" :class="ui.title.base">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </div>

    <p v-if="description || $slots.description" :class="ui.description">
      <slot name="description">
        {{ description }}
      </slot>
    </p>

    <template #footer>
      <p v-if="date || $slots.date" :class="ui.date">
        <slot name="date">
          {{ formatDateByLocale("zh-CN", date) }}
        </slot>
      </p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { nuxtLinkProps, getNuxtLinkProps } from "#ui/utils";
import { card as cardConfig } from "#ui/ui.config";

const config = {
  wrapper: "relative flex items-center justify-between mb-5 u-page-prose",
  to: "hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-4",
  },
  footer: {
    base: "border-0",
    background: "",
    padding: "px-4 py-4 sm:px-4 ",
  },
  title: {
    wrapper: "flex",
    icon: "w-10 h-10 flex-shrink-0 text-primary mr-2",
    base: "text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5",
  },
  description: "text-[15px] text-gray-500 dark:text-gray-400 mt-6",
  date: "text-gray-500 dark:text-gray-400",
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  ...nuxtLinkProps,
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  date: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config & typeof cardConfig>>,
    default: () => ({}),
  },
});

const slots = useSlots();
const { ui, attrs } = useUI("page.card", toRef(props, "ui"), config, toRef(props, "class"), true);

const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
const ariaLabel = computed(() => (props.title || (slots.title && getSlotChildrenText(slots.title())) || "Card link").trim());
</script>

<style>
.u-page-prose .border-0 {
  border: 0;
}
</style>
