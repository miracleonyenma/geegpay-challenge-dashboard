<script setup lang="ts">
import BoxBroken from "~/assets/svg/vuesax/broken/info-circle.svg";

import { VisXYContainer, VisLine, VisAxis } from "@unovis/vue";

type DataRecord = { x: number; y: number };
const data = ref<DataRecord[]>([
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
]);
</script>
<template>
  <main class="grid grid-cols-8 gap-4 p-4">
    <div class="col-span-5">
      <UCard
        :ui="{
          divide: 'divide-none',
        }"
        class="w-full"
      >
        <template #header>
          <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Sales Trend
          </h2>
        </template>
        <GroupedBar />
      </UCard>
    </div>
  </main>
</template>
