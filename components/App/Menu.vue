<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
import BrightnessIcon from "~/assets/svg/brightness.svg";
import MoonIcon from "~/assets/svg/moon.svg";

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>
<template>
  <header class="app-menu">
    <div class="wrapper">
      <LogoIcon class="icon !h-10 !w-10 text-green-400" />

      <AppNav />

      <ClientOnly>
        <div
          class="theme-control flex flex-col items-center justify-center gap-2 rounded-full bg-white p-2 dark:bg-gray-800"
        >
          <UButton
            @click="isDark = false"
            square
            :ui="{
              rounded: 'rounded-full',
            }"
            :variant="isDark ? 'ghost' : 'solid'"
            aria-label="Light mode"
          >
            <BrightnessIcon class="icon" />
          </UButton>
          <UButton
            @click="isDark = true"
            square
            :ui="{
              rounded: 'rounded-full',
            }"
            :variant="isDark ? 'solid' : 'ghost'"
            aria-label="Dark mode"
          >
            <MoonIcon class="icon" />
          </UButton>
        </div>
        <template #fallback>
          <div class="h-8 w-8" />
        </template>
      </ClientOnly>
    </div>
  </header>
</template>
<style scoped>
.app-menu {
  @apply sticky top-0  z-10 h-screen  w-20 border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900;
}

.app-menu > .wrapper {
  @apply flex h-full flex-col items-center gap-5 py-5;
}
</style>
