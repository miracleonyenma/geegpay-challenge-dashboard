<script setup>
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
</template>
