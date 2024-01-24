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
import BrightnessIcon from "~/assets/svg/brightness.svg";
import MoonIcon from "~/assets/svg/moon.svg";
import LogoutIcon from "~/assets/svg/vuesax/broken/logout.svg";
import Setting2Icon from "~/assets/svg/vuesax/broken/setting-2.svg";
import ArrowRight2Icon from "~/assets/svg/vuesax/broken/arrow-right-2.svg";
const links = [
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
    label: "Products",
    icon: {
      active: BoxBulkIcon,
      inactive: BoxBrokenIcon,
    },
    to: "/products",
  },
  {
    label: "Discounts",
    icon: {
      active: DiscountShapeBulkIcon,
      inactive: DiscountShapeBrokenIcon,
    },
    to: "/discounts",
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
  <div>
    <header class="app-menu">
      <div class="wrapper">
        <LogoIcon class="icon text-green-400" />

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
                    :is="
                      link.icon[$route.path === link.to ? 'active' : 'inactive']
                    "
                    class="icon"
                  />
                  <span class="app-nav__label">{{ link.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
