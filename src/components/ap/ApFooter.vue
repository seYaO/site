<script setup lang="ts">
const { footerLinks } = useNavigation();
</script>

<template>
  <UFooter
    :ui="{
      bottom: { wrapper: 'border-t border-gray-200 dark:border-gray-800', container: '!py-6' },
      top: { wrapper: 'border-t border-gray-200 dark:border-gray-800', container: 'py-8 lg:py-12' },
    }">
    <template #top>
      <UFooterColumns :links="footerLinks"></UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2016-{{ new Date().getFullYear() }} Nuxt -
        <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">MIT License</NuxtLink>
      </p>
    </template>

    <template #right>
      <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
        <UColorModeButton />
      </UTooltip>
      <UTooltip text="GitHub Stars">
        <UButton icon="i-simple-icons-github" to="https://github.com/seYaO/site" target="_blank" v-bind="$ui.button.secondary as any" />
      </UTooltip>
    </template>
  </UFooter>
</template>
