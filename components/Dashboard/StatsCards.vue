<script setup lang="ts">
import BoxBroken from "~/assets/svg/vuesax/broken/info-circle.svg";
import BoxTickBulkIcon from "~/assets/svg/vuesax/bulk/box-tick.svg";
import ThreeDRotateBulkIcon from "~/assets/svg/vuesax/bulk/3d-rotate.svg";
import CoinBulkIcon from "~/assets/svg/vuesax/bulk/coin.svg";
import ShoppingCartBulkIcon from "~/assets/svg/vuesax/bulk/shopping-cart.svg";

const orderGroupData = [
  {
    name: "Total Orders",
    icon: BoxTickBulkIcon,
    value: 350,
    trend: +23.5,
  },
  {
    name: "Total Refund",
    icon: ThreeDRotateBulkIcon,
    value: 270,
    trend: -23.5,
  },
  {
    name: "Average Sales",
    icon: ShoppingCartBulkIcon,
    value: 1567,
    trend: -23.5,
  },
  {
    name: "Total Income",
    icon: CoinBulkIcon,
    value: formatCurrency(350),
    trend: +23.5,
  },
];
</script>
<template>
  <ul class="grid gap-4 lg:grid-cols-2">
    <li v-for="item in orderGroupData" :key="item.name">
      <UCard
        :ui="{
          base: 'flex flex-col',
          divide: 'divide-none',
          header: {
            padding: '!p-3',
          },
          body: {
            padding: '!p-3',
          },
          footer: {
            padding: '!p-3 mt-auto',
          },
        }"
      >
        <template #header>
          <div class="flex justify-between">
            <UBadge
              variant="solid"
              color="white"
              :ui="{
                rounded: 'rounded-full',
              }"
              class="p-2 text-primary"
            >
              <component :is="item.icon" class="icon" />
            </UBadge>
          </div>
        </template>
        <div class="flex flex-col">
          <h2 class="font-medium text-gray-500">
            {{ item.name }}
          </h2>
          <span class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {{ item.value }}
          </span>
        </div>
        <template #footer>
          <div class="flex items-start gap-1">
            <UBadge
              v-if="item.trend > 0"
              variant="soft"
              :ui="{
                rounded: 'rounded-full',
              }"
              class="inline-flex justify-center gap-1"
            >
              <UIcon name="i-heroicons-arrow-trending-up" />

              <span> {{ Math.abs(item.trend) }}% </span>
            </UBadge>
            <UBadge
              v-else
              variant="soft"
              :ui="{
                rounded: 'rounded-full',
              }"
              color="red"
              class="inline-flex justify-center gap-1"
            >
              <UIcon name="i-heroicons-arrow-trending-down" />

              <span> {{ Math.abs(item.trend) }}% </span>
            </UBadge>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              vs. previous month
            </span>
          </div>
        </template>
      </UCard>
    </li>
  </ul>
</template>
