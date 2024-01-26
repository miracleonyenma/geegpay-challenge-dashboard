<script setup lang="ts">
import BoxBroken from "~/assets/svg/vuesax/broken/info-circle.svg";
import BoxTickBulkIcon from "~/assets/svg/vuesax/bulk/box-tick.svg";
import ThreeDRotateBulkIcon from "~/assets/svg/vuesax/bulk/3d-rotate.svg";
import CoinBulkIcon from "~/assets/svg/vuesax/bulk/coin.svg";
import ShoppingCartBulkIcon from "~/assets/svg/vuesax/bulk/shopping-cart.svg";
import { VisXYContainer, VisLine, VisAxis } from "@unovis/vue";
import { label } from "@unovis/ts/components/axis/style";

const monthlyData: DataRecord[] = [
  { x: 0, y: 6, label: "Jan" },
  { x: 1, y: 21, label: "Feb" },
  { x: 2, y: 5, label: "Mar" },
  { x: 3, y: 9, label: "Apr" },
  { x: 4, y: 15, label: "May" },
  { x: 5, y: 45, label: "Jun" },
  { x: 6, y: 18, label: "Jul" },
  { x: 7, y: 6, label: "Aug" },
  { x: 8, y: 32, label: "Sep" },
  { x: 9, y: 7, label: "Oct" },
  { x: 10, y: 30, label: "Nov" },
  { x: 11, y: 25, label: "Dec" },
];

const weeklyData: DataRecord[] = [
  { x: 0, y: 6, label: "Mon" },
  { x: 1, y: 21, label: "Tue" },
  { x: 2, y: 5, label: "Wed" },
  { x: 3, y: 9, label: "Thu" },
  { x: 4, y: 15, label: "Fri" },
  { x: 5, y: 45, label: "Sat" },
  { x: 6, y: 18, label: "Sun" },
];

const dailyData: DataRecord[] = [
  { x: 0, y: 6, label: "12am" },
  { x: 1, y: 21, label: "3am" },
  { x: 2, y: 5, label: "6am" },
  { x: 3, y: 9, label: "9am" },
  { x: 4, y: 15, label: "12pm" },
  { x: 5, y: 45, label: "3pm" },
  { x: 6, y: 18, label: "6pm" },
  { x: 7, y: 6, label: "9pm" },
];

const selected = ref<"monthly" | "weekly" | "daily">("monthly");

const data = computed(() => {
  console.log(selected.value);

  switch (selected.value) {
    case "monthly":
      return monthlyData;
    case "weekly":
      return weeklyData;
    case "daily":
      return dailyData;
  }
});
</script>
<template>
  <UCard
    :ui="{
      divide: 'divide-none',
      header: {
        padding: 'pb-0',
      },
    }"
    class="w-full"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Sales Trend
        </h2>

        <div class="flex items-center gap-4">
          <label for="sort-by" class="text-sm font-medium"> Sort by: </label>
          <USelect
            :ui="{
              rounded: 'rounded-full',
            }"
            v-model="selected"
            :options="[
              { label: 'Monthly', value: 'monthly' },
              { label: 'Weekly', value: 'weekly' },
              { label: 'Daily', value: 'daily' },
            ]"
          />
        </div>
      </div>
    </template>
    <GroupedBar :data="data" />
  </UCard>
</template>
