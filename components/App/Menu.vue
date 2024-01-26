<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
import LogoutIcon from "~/assets/svg/vuesax/broken/logout.svg";
import Setting2Icon from "~/assets/svg/vuesax/broken/setting-2.svg";
import ArrowRight2Icon from "~/assets/svg/vuesax/broken/arrow-right-2.svg";

const bottomLinks = [
  {
    label: "Next",
    icon: {
      active: ArrowRight2Icon,
      inactive: ArrowRight2Icon,
    },
    to: "/next",
  },
  {
    label: "Settings",
    icon: {
      active: Setting2Icon,
      inactive: Setting2Icon,
    },
    to: "/settings",
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
    <ScrollArea class="h-full">
      <div class="flex h-full flex-col items-center gap-5 py-5">
        <LogoIcon class="icon !h-10 !w-10 shrink-0 text-green-400" />

        <AppNav />
        <ThemeControl />
        <AppNav class="mt-auto" :links="bottomLinks" />
      </div>
    </ScrollArea>
  </header>
</template>
<style scoped>
.app-menu {
  @apply sticky top-0  z-10 h-screen  w-20 border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900;
}

.app-menu :deep([data-radix-scroll-area-viewport] > div) {
  @apply h-full;
}

.app-menu > * > .wrapper {
  @apply flex h-full flex-col items-center gap-5 py-5;
}
</style>
