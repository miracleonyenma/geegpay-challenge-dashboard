<script setup lang="ts">
const props = defineProps<{
  size?: "sm";
}>();
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
</script>
<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="gray"
      :ui="{
        rounded: 'rounded-full',
      }"
      icon="i-heroicons-chevron-down"
      trailing
    >
      <UAvatar src="https://i.pravatar.cc/150?img=3" alt="Justin Bergson" />
      <div v-if="props.size !== 'sm'" class="flex flex-col">
        <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Justin Bergson
        </span>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          justin@gmail.com
        </span>
      </div>
    </UButton>
  </UDropdown>
</template>
