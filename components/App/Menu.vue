<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
import LogoutIcon from "~/assets/svg/vuesax/broken/logout.svg";
import Setting2Icon from "~/assets/svg/vuesax/broken/setting-2.svg";
import ArrowRight2Icon from "~/assets/svg/vuesax/broken/arrow-right-2.svg";

const bottomLinks = [
  {
    label: "Settings",
    icon: {
      active: Setting2Icon,
      inactive: Setting2Icon,
    },
    to: "/settings",
  },
  {
    label: "Next",
    icon: {
      active: ArrowRight2Icon,
      inactive: ArrowRight2Icon,
    },
    to: "/next",
  },
  {
    label: "Logout",
    icon: {
      active: LogoutIcon,
      inactive: LogoutIcon,
    },
    to: "/logout",
  },
];
</script>
<template>
  <header class="app-menu">
    <div class="wrapper">
      <LogoIcon class="icon !h-10 !w-10 text-green-400" />

      <AppNav />
      <ThemeControl />
      <AppNav class="mt-auto" :links="bottomLinks" />
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
