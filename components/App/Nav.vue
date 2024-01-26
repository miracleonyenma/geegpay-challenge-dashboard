<script setup lang="ts">
import LogoIcon from "~/assets/svg/logo.svg";
import CategoryBrokenIcon from "~/assets/svg/vuesax/broken/category.svg";
import CategoryBulkIcon from "~/assets/svg/vuesax/bulk/category.svg";
import TrendUpBrokenIcon from "~/assets/svg/vuesax/broken/trend-up.svg";
import TrendUpBulkIcon from "~/assets/svg/vuesax/bulk/trend-up.svg";
import Profile2UserBrokenIcon from "~/assets/svg/vuesax/broken/profile-2user.svg";
import Profile2UserBulkIcon from "~/assets/svg/vuesax/bulk/profile-2user.svg";
import BoxBrokenIcon from "~/assets/svg/vuesax/broken/box.svg";
import BoxBulkIcon from "~/assets/svg/vuesax/bulk/box.svg";
import DiscountShapeBrokenIcon from "~/assets/svg/vuesax/broken/discount-shape.svg";
import DiscountShapeBulkIcon from "~/assets/svg/vuesax/bulk/discount-shape.svg";
import InfoCircleBrokenIcon from "~/assets/svg/vuesax/broken/info-circle.svg";
import InfoCircleBulkIcon from "~/assets/svg/vuesax/bulk/info-circle.svg";

const props = defineProps<{
  links?: {
    label: string;
    icon: {
      active: string;
      inactive: string;
    };
    to: string;
  }[];
}>();

const links = props.links || [
  // {
  //   label: "Profile",
  //   avatar: {
  //     src: "https://avatars.githubusercontent.com/u/739984?v=4",
  //   },
  //   badge: 100,
  // },
  {
    label: "Overview",
    icon: {
      active: CategoryBulkIcon,
      inactive: CategoryBrokenIcon,
    },
    to: "/",
  },
  {
    label: "Stats",
    icon: {
      active: TrendUpBulkIcon,
      inactive: TrendUpBrokenIcon,
    },
    to: "/stats",
  },
  {
    label: "Users",
    icon: {
      active: Profile2UserBulkIcon,
      inactive: Profile2UserBrokenIcon,
    },

    to: "/users",
  },
  {
    label: "Orders",
    icon: {
      active: BoxBulkIcon,
      inactive: BoxBrokenIcon,
    },
    to: "/orders",
  },
  {
    label: "Platforms",
    icon: {
      active: DiscountShapeBulkIcon,
      inactive: DiscountShapeBrokenIcon,
    },
    to: "/platforms",
  },
  {
    label: "About",
    icon: {
      active: InfoCircleBulkIcon,
      inactive: InfoCircleBrokenIcon,
    },
    to: "/about",
  },
];
</script>
<template>
  <nav class="app-nav">
    <div class="wrapper">
      <ul class="app-nav__list">
        <li v-for="link in links" :key="link.label" class="app-nav__item">
          <NuxtLink
            :to="link.to"
            class="app-nav__link"
            :class="{
              'app-nav__link--active': $route.path === link.to,
            }"
          >
            <component
              :is="link.icon[$route.path === link.to ? 'active' : 'inactive']"
              class="icon"
            />
            <span class="app-nav__label">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.app-nav {
  @apply w-full;
}

.app-nav__list {
  @apply flex w-full flex-col items-center gap-4;
}

.app-nav__item {
  @apply relative flex w-full justify-center;
}

.app-nav__item::after {
  content: "";
  @apply absolute right-0 top-1/2 h-[1.5rem] w-[0.1875rem] -translate-y-1/2 transform rounded-l-lg;
}

.app-nav__item:has(.app-nav__link:hover)::after {
  @apply bg-gray-400 dark:bg-gray-600;
}

.app-nav__item:has(.router-link-active)::after {
  @apply !bg-gray-900 dark:!bg-gray-100;
}

.app-nav__link {
  @apply flex w-full items-center justify-center gap-2 py-2.5 text-gray-400 dark:text-gray-300;
}

.app-nav__link.router-link-active {
  @apply text-gray-900 dark:text-gray-100;
}

.app-nav__label {
  @apply hidden;
}
</style>
