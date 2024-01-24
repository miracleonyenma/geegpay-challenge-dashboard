<script setup lang="ts">
import SearchIcon from "~/assets/svg/icon-search.svg";

const isOpen = ref(false);

const people = [
  { id: 1, label: "Wade Cooper" },
  { id: 2, label: "Arlene Mccoy" },
  { id: 3, label: "Devon Webb" },
  { id: 4, label: "Tom Cook" },
  { id: 5, label: "Tanya Fox" },
  { id: 6, label: "Hellen Schmidt" },
  { id: 7, label: "Caroline Schultz" },
  { id: 8, label: "Mason Heaney" },
  { id: 9, label: "Claudie Smitham" },
  { id: 10, label: "Emil Schaefer" },
];

const selected = ref([]);

const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
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
      shortcuts: ["⌘", "D"],
    },
  ],
];

// function to get date in format of month, day, year e.g November 11, 2020 using intl
const getDateIntl = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};
</script>
<template>
  <header
    class="app-header w-full border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="wrapper flex items-center p-4">
      <h1
        class="flex flex-1 items-center justify-start gap-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
      >
        Dashboard
      </h1>

      <div class="flex flex-1 items-center justify-center gap-4">
        <UButton
          :ui="{
            rounded: 'rounded-full',
          }"
          variant="solid"
          color="white"
          label="Open"
          @click="isOpen = true"
          class="h-12 w-80 gap-2"
        >
          <template #leading>
            <SearchIcon class="icon" />
          </template>
          Search...
        </UButton>

        <UModal v-model="isOpen">
          <UCommandPalette
            v-model="selected"
            multiple
            nullable
            :groups="[{ key: 'people', commands: people }]"
          />
        </UModal>
      </div>
      <div class="flex flex-1 items-center justify-end gap-4">
        <UButton
          variant="ghost"
          color="gray"
          @click="isOpen = true"
          icon="i-heroicons-calendar"
        >
          {{ getDateIntl() }}
        </UButton>

        <UButton
          color="gray"
          :ui="{
            rounded: 'rounded-full',
          }"
          icon="i-heroicons-bell"
        />

        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton
            color="gray"
            :ui="{
              rounded: 'rounded-full',
            }"
            icon="i-heroicons-chevron-down"
            trailing
          >
            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
            />
            <div class="flex flex-col">
              <span
                class="text-sm font-semibold text-gray-800 dark:text-gray-100"
              >
                Justin Bergson
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                justin@gmail.com
              </span>
            </div>
          </UButton>
        </UDropdown>
      </div>
    </div>
  </header>
</template>
