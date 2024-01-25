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

onMounted(() => {
  watch(
    () => isDark.value,
    (value) => {
      document.body.classList.toggle("theme-dark", value);
    },
    { immediate: true },
  );
});

useHead({
  bodyAttrs: {
    class: isDark.value ? "theme-dark" : "",
  },
});
</script>
<template>
  <ClientOnly>
    <div class="theme-control">
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
<style scoped>
.theme-control {
  @apply flex flex-col items-center justify-center gap-2 rounded-full bg-white p-2 dark:bg-gray-800;
}
</style>
