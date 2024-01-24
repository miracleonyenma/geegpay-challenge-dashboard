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
</script>
<template>
  <div class="default-layout">
    <AppMenu />
    <div class="w-full">
      <AppHeader />

      <slot />
    </div>
  </div>
</template>
<style scoped>
.default-layout {
  @apply flex;
}
</style>
