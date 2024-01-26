<script setup lang="ts">
import SearchIcon from "~/assets/svg/icon-search.svg";
import { formatDate } from "~/utils/format";

const isOpen = ref(false);

const slideOverIsOpen = ref(false);

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

      <div class="flex flex-1 items-center justify-center gap-4 max-lg:hidden">
        <AppSearch />
      </div>
      <div class="flex flex-1 items-center justify-end gap-4 max-lg:hidden">
        <UButton variant="ghost" color="gray" icon="i-heroicons-calendar">
          {{ getDateIntl() }}
        </UButton>

        <UButton
          color="gray"
          :ui="{
            rounded: 'rounded-full',
          }"
          icon="i-heroicons-bell"
        />

        <AppAvatarBtn class="max-lg:hidden" />
      </div>

      <div class="flex gap-4 lg:hidden">
        <AppAvatarBtn size="sm" />
        <UButton icon="i-heroicons-bars-2" @click="isOpen = true" />

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
              </div>
            </template>
            <div class="flex flex-col gap-4">
              <AppSearch full />
              <UButton variant="ghost" color="gray" icon="i-heroicons-calendar">
                {{ getDateIntl() }}
              </UButton>

              <UButton
                variant="ghost"
                color="gray"
                :ui="{
                  rounded: 'rounded-full',
                }"
                icon="i-heroicons-bell"
                label="Notifications"
              />
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
