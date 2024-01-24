<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
</script>
<template>
  <header class="app-menu">
    <div class="wrapper">
      <LogoIcon class="icon !h-10 !w-10 text-green-400" />

      <AppNav />
      <ThemeControl />
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
