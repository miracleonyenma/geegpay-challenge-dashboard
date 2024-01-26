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
  <main class="flex flex-col gap-4 p-4 xl:grid xl:grid-cols-9">
    <div class="xl:col-span-5">
      <DashboardSalesTrend />
    </div>
    <div class="xl:col-span-4">
      <DashboardStatsCards />
    </div>
    <div class="xl:col-span-5">
      <DashboardOrderstable />
    </div>
    <div class="xl:col-span-4">
      <DashboardPlatforms />
    </div>
  </main>
</template>
