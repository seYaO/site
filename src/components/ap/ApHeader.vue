<script setup lang="ts">
import type { Link } from "@/types";

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = "ontouchstart" in document.documentElement;
});

defineProps<{
  links?: Link[];
}>();
</script>

<template>
  <UHeader :links="links" title="seYa">
    <template #center>
      <UHeaderLinks
        :links="links"
        :ui="{ default: { popover: { popper: { strategy: 'absolute' }, ui: { width: 'w-[256px]' } } } }"
        class="hidden lg:flex" />
    </template>

    <template #right>
      <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="GitHub Stars">
        <UButton icon="i-simple-icons-github" to="https://github.com/seYaO/site" target="_blank" v-bind="$ui.button.secondary as any" />
      </UTooltip>
    </template>
  </UHeader>
</template>
