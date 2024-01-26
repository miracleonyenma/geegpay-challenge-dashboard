<script setup lang="ts">
const props = defineProps<{
  full?: boolean;
}>();
import SearchIcon from "~/assets/svg/icon-search.svg";
import { formatDate } from "~/utils/format";

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
</script>

<template>
  <UButton
    :ui="{
      rounded: 'rounded-full',
    }"
    variant="solid"
    color="white"
    label="Open"
    @click="isOpen = true"
    :class="`h-12 w-80 gap-2 ${props.full ? '!w-full' : ''}`"
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
</template>
