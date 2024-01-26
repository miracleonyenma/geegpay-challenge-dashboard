<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
import LogoutIcon from "~/assets/svg/vuesax/broken/logout.svg";
import Setting2Icon from "~/assets/svg/vuesax/broken/setting-2.svg";
import ArrowRight2Icon from "~/assets/svg/vuesax/broken/arrow-right-2.svg";
import PhArrowsOutLineHorizontal from "~/assets/svg/ph/arrows-out-line-horizontal.svg";

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

const isOpen = ref(true);
</script>
<template>
  <header class="app-menu" :class="{ inactive: !isOpen }">
    <ScrollArea class="h-full">
      <div class="relative flex h-full flex-col items-center gap-5 py-5">
        <LogoIcon class="icon !h-10 !w-10 shrink-0 text-green-400" />

        <AppNav />
        <ThemeControl />
        <AppNav class="mt-auto" :links="bottomLinks" />
      </div>
    </ScrollArea>
    <div
      class="absolute left-full top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center py-5 lg:hidden"
    >
      <UButton
        square
        color="gray"
        :ui="{
          rounded: 'rounded-full',
        }"
        @click="isOpen = !isOpen"
      >
        <PhArrowsOutLineHorizontal class="icon !h-5 !w-5" />
      </UButton>
    </div>
  </header>
</template>
<style scoped>
.app-menu {
  @apply fixed left-0 top-0 z-10  h-screen w-20  border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 lg:sticky;
}

.app-menu.inactive {
  @apply max-lg:-translate-x-full;
}

.app-menu :deep([data-radix-scroll-area-viewport] > div) {
  @apply h-full;
}

.app-menu > * > .wrapper {
  @apply flex h-full flex-col items-center gap-5 py-5;
}
</style>
