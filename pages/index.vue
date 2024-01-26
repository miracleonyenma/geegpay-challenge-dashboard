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
    value: 120,
    trend: -12.5,
  },
  {
    name: "Average Sales",
    icon: ShoppingCartBulkIcon,
    value: 230,
    trend: +12.5,
  },
  {
    name: "Total Income",
    icon: CoinBulkIcon,
    value: formatCurrency(350),
    trend: +23.5,
  },
];

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    date: "2021-01-01",
    amount: "80000",
    status: "Paid",
  },
  {
    id: 2,
    name: "Steve Rogers",
    date: "2024-01-01",
    amount: "89000",
    status: "Refund",
  },
  {
    id: 3,
    name: "John Doe",
    date: "2024-04-03",
    amount: "90000",
    status: "Paid",
  },
  {
    id: 4,
    name: "Tony Stark",
    date: "2024-04-03",
    amount: "900000",
    status: "Paid",
  },
  {
    id: 5,
    name: "Bruce Wayne",
    date: "2024-06-03",
    amount: "9100000",
    status: "Paid",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "date",
    label: "Date",
  },

  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "invoice",
  },
];

const platformsData = [
  {
    name: "Book Bazaar",
    value: 2500000,
    color: "indigo",
    increase: 15,
  },
  {
    name: "Artisan Aisle",
    value: 1800000,
    color: "sky",
    increase: 10,
  },
  {
    name: "Toy Troop",
    value: 1200000,
    color: "yellow",
    increase: 8,
  },
  {
    name: "XStore",
    value: 600000,
    color: "red",
    increase: 5,
  },
];
</script>
<template>
  <main class="grid gap-4 p-4 xl:grid-cols-9">
    <div class="xl:col-span-5">
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
              <label for="sort-by" class="text-sm font-medium">
                Sort by:
              </label>
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
    </div>
    <div class="grid gap-4 lg:grid-cols-2 xl:col-span-4">
      <UCard
        v-for="item in orderGroupData"
        :key="item.name"
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
    </div>
    <div class="xl:col-span-5">
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
              Last Orders
            </h2>

            <div class="flex items-center gap-4">
              <UButton variant="link"> See All </UButton>
            </div>
          </div>
        </template>

        <UTable
          :rows="people"
          :columns="columns"
          :ui="{
            divide: 'divide-gray-200 dark:divide-gray-800',
          }"
        >
          <template #name-data="{ row }">
            <div class="flex items-center gap-2">
              <UAvatar
                :src="`https://i.pravatar.cc/150?u=${row.id}`"
                :alt="row.name"
              />
              <span
                class="text-sm font-semibold text-gray-800 dark:text-gray-100"
              >
                {{ row.name }}
              </span>
            </div>
          </template>
          <template #date-data="{ row }">
            {{
              formatDate(row.date, {
                dateStyle: "medium",
              })
            }}
          </template>
          <template #amount-data="{ row }">
            <span class="font-semibold">
              {{ formatCurrency(row.amount) }}
            </span>
          </template>
          <template #status-data="{ row }">
            <span
              v-if="row.status === 'Paid'"
              class="font-semibold text-green-500"
            >
              {{ row.status }}
            </span>
            <span v-else class="font-semibold text-red-500">
              {{ row.status }}
            </span>
          </template>
          <template #invoice-data="{ row }">
            <UButton
              variant="link"
              color="gray"
              :ui="{
                rounded: 'rounded-full',
              }"
              icon="i-heroicons-document-arrow-down"
            >
              View
            </UButton>
          </template>
        </UTable>
      </UCard>
    </div>
    <div class="xl:col-span-4">
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
              Top Platform
            </h2>

            <div class="flex items-center gap-4">
              <UButton variant="link"> See All </UButton>
            </div>
          </div>
        </template>

        <ul class="flex flex-col gap-4">
          <li v-for="item in platformsData" :key="item.name">
            <UMeter
              :value="item.value"
              :max="platformsData.reduce((acc, curr) => acc + curr.value, 0)"
              :color="item.color"
            >
              <template #indicator>
                <div class="font-semibold">
                  {{ item.name }}
                </div>
              </template>
              <template #label>
                <div
                  class="flex justify-between text-gray-500 dark:text-gray-200"
                >
                  <span class="text-sm font-semibold">
                    {{
                      formatCurrency(item.value, {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                      })
                    }}
                  </span>
                  <span class="text-sm font-semibold">
                    {{ item.increase > 0 ? "+" : "" }}
                    {{ item.increase }}%
                  </span>
                </div>
              </template>
            </UMeter>
          </li>
        </ul>
      </UCard>
    </div>
  </main>
</template>
