<script setup lang="ts">
const props = defineProps<{
  showShowAllBtn?: boolean;
}>();

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    email: "lindsay@gmail.com",
    noOfOrders: 200,
    noOfProducts: 100,
    noOfReviews: 50,
    totalSpent: "80000",
    status: "Active",
  },
  {
    id: 2,
    name: "Steve Rogers",
    email: "steve@gmail.com",
    noOfOrders: 200,
    noOfProducts: 100,
    noOfReviews: 1,
    totalSpent: "89000",
    status: "Active",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@gmail.com",
    noOfOrders: 20,
    noOfProducts: 10,
    noOfReviews: 10,
    totalSpent: "90000",
    status: "Active",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "noOfOrders",
    label: "No. of Orders",
  },
  {
    key: "noOfProducts",
    label: "No. of Products",
  },
  {
    key: "noOfReviews",
    label: "No. of Reviews",
  },
  {
    key: "totalSpent",
    label: "Total Spent",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
  },
];

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
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
          Top Customers
        </h2>

        <div v-if="props.showShowAllBtn" class="flex items-center gap-4">
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
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {{ row.name }}
          </span>
        </div>
      </template>
      <template #totalSpent-data="{ row }">
        <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {{ formatCurrency(row.totalSpent) }}
        </span>
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="items(row)" :popper="{ placement: 'bottom-start' }">
          <UButton
            color="gray"
            variant="soft"
            :ui="{
              rounded: 'rounded-full',
            }"
            icon="i-heroicons-ellipsis-vertical"
            trailing
          />
        </UDropdown>
      </template>
    </UTable>
  </UCard>
</template>
