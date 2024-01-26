<script setup lang="ts">
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
            <div class="flex justify-between text-gray-500 dark:text-gray-200">
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
</template>
