<script setup lang="ts">
import SearchIcon from "~/assets/svg/icon-search.svg";
import CalendarLinearIcon from "~/assets/svg/solar_calendar-linear.svg";
import BellOutlineIcon from "~/assets/svg/solar_bell-outline.svg";
import { formatDate } from "~/utils/format";

const isOpen = ref(false);

const slideOverIsOpen = ref(false);

const notificationsItems = [
  [
    {
      id: 1,
      label: "Order placed",
      icon: "i-heroicons-shopping-bag",
    },
    {
      id: 2,
      label: "Refund processed",
      icon: "i-heroicons-shopping-bag",
    },
  ],
];

// function to get date in format of month, day, year e.g November 11, 2020 using intl
const getDateIntl = () => {
  const date = new Date();
  return formatDate(date.toISOString());
};
</script>
<template>
  <header
    class="app-header w-full border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="wrapper flex items-center p-4">
      <h1
        class="flex flex-1 items-center justify-start gap-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
      >
        Dashboard
      </h1>

      <div class="flex flex-1 items-center justify-center gap-4 max-xl:hidden">
        <AppSearch />
      </div>
      <div class="flex flex-1 items-center justify-end gap-4 max-xl:hidden">
        <UButton variant="ghost" color="gray">
          <template #leading>
            <CalendarLinearIcon class="icon" />
          </template>
          {{ getDateIntl() }}
        </UButton>

        <UDropdown :items="notificationsItems" :popper="{ arrow: true }">
          <UButton
            color="gray"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            <template #leading>
              <BellOutlineIcon class="icon" />
            </template>
          </UButton>
        </UDropdown>

        <AppAvatarBtn class="max-xl:hidden" />
      </div>

      <div class="flex items-center gap-4 xl:hidden">
        <AppAvatarBtn size="sm" />
        <div>
          <UButton
            icon="i-heroicons-bars-2"
            :ui="{
              rounded: 'rounded-full',
            }"
            @click="isOpen = true"
            class="shrink-0"
          />
        </div>

        <USlideover v-model="isOpen">
          <UCard
            class="flex flex-1 flex-col"
            :ui="{
              body: { base: 'flex-1' },
              ring: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            }"
          >
            <template #header>
              <div class="flex justify-between">
                <h3
                  class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                >
                  Menu
                </h3>
                <UButton
                  variant="ghost"
                  color="gray"
                  icon="i-heroicons-x-mark"
                  @click="isOpen = false"
                />
              </div>
            </template>
            <div class="flex flex-col gap-4">
              <AppSearch full />
              <UButton variant="ghost" color="gray">
                <template #leading>
                  <CalendarLinearIcon class="icon" />
                </template>
                {{ getDateIntl() }}
              </UButton>

              <UDropdown :items="notificationsItems">
                <UButton
                  variant="ghost"
                  color="gray"
                  :ui="{
                    rounded: 'rounded-full',
                  }"
                  icon="i-heroicons-bell"
                  label="Notifications"
                  class="w-full"
                >
                  <template #leading>
                    <BellOutlineIcon class="icon" />
                  </template>
                </UButton>
              </UDropdown>
            </div>

            <!-- <template #header>
              <Placeholder class="h-8" />
            </template>

            <Placeholder class="h-full" />

            <template #footer>
              <Placeholder class="h-8" />
            </template> -->
          </UCard>
        </USlideover>
      </div>
    </div>
  </header>
</template>
