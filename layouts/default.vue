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
import SearchIcon from "~/assets/svg/icon-search.svg";

const isOpen = ref(false);

const people = [
  { id: 1, label: "Wade Cooper" },
  { id: 2, label: "Arlene Mccoy" },
  { id: 3, label: "Devon Webb" },
  { id: 4, label: "Tom Cook" },
  { id: 5, label: "Tanya Fox" },
  { id: 6, label: "Hellen Schmidt" },
  { id: 7, label: "Caroline Schultz" },
  { id: 8, label: "Mason Heaney" },
  { id: 9, label: "Claudie Smitham" },
  { id: 10, label: "Emil Schaefer" },
];

const selected = ref([]);
</script>
<template>
  <div class="default-layout">
    <AppMenu />
    <div>
      <header class="app-header">
        <div class="wrapper">
          <h1>Dashboard</h1>

          <div>
            <UButton
              :ui="{
                rounded: 'rounded-full',
              }"
              variant="outline"
              color="gray"
              label="Open"
              @click="isOpen = true"
              class="h-12 w-80 gap-2 p-2"
            >
              <template #leading>
                <SearchIcon class="icon" />
              </template>
              Search...
            </UButton>

            <UModal v-model="isOpen">
              <UCommandPalette
                v-model="selected"
                multiple
                nullable
                :groups="[{ key: 'people', commands: people }]"
              />
            </UModal>
          </div>
        </div>
      </header>

      <slot />
    </div>
  </div>
</template>
<style scoped>
.default-layout {
  @apply flex;
}
</style>
