<script setup lang="ts">
import DocumentDownloadOutlineIcon from "~/assets/svg/vuesax/outline/document-download.svg";
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

const modalIsOpen = ref(false);
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
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">
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
        <span v-if="row.status === 'Paid'" class="font-semibold text-green-500">
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
          @click="modalIsOpen = true"
        >
          <template #leading>
            <DocumentDownloadOutlineIcon class="icon !h-4 !w-4" />
          </template>
          View
        </UButton>
        <UModal v-model="modalIsOpen">
          <UCard
            :ui="{
              ring: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            }"
          >
            <template #header>
              <h3
                class="text-lg font-semibold text-gray-700 dark:text-gray-200"
              >
                Invoice
              </h3>
            </template>

            <ul class="flex flex-col gap-2">
              <li class="flex justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Invoice Number
                </span>
                <span
                  class="text-sm font-semibold text-gray-800 dark:text-gray-100"
                >
                  #{{ row.id }}
                </span>
              </li>
              <li class="flex justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Date
                </span>
                <span
                  class="text-sm font-semibold text-gray-800 dark:text-gray-100"
                >
                  {{
                    formatDate(row.date, {
                      dateStyle: "medium",
                    })
                  }}
                </span>
              </li>
              <li class="flex justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Amount
                </span>
                <span
                  class="text-sm font-semibold text-gray-800 dark:text-gray-100"
                >
                  {{ formatCurrency(row.amount) }}
                </span>
              </li>
              <li class="flex justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Status
                </span>
                <span
                  v-if="row.status === 'Paid'"
                  class="text-sm font-semibold text-green-500"
                >
                  {{ row.status }}
                </span>
                <span v-else class="text-sm font-semibold text-red-500">
                  {{ row.status }}
                </span>
              </li>
            </ul>

            <template #footer>
              <div class="flex justify-end gap-2">
                <UButton
                  variant="link"
                  color="gray"
                  :ui="{
                    rounded: 'rounded-full',
                  }"
                  @click="modalIsOpen = false"
                >
                  Close
                </UButton>
                <UButton
                  variant="solid"
                  color="primary"
                  :ui="{
                    rounded: 'rounded-full',
                  }"
                  @click="modalIsOpen = false"
                >
                  Download
                </UButton>
              </div>
            </template>
          </UCard>
        </UModal>
      </template>
    </UTable>
  </UCard>
</template>
