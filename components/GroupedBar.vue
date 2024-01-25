<script setup lang="ts">
import BoxBroken from "~/assets/svg/vuesax/broken/info-circle.svg";
import {
  VisXYContainer,
  VisLine,
  VisAxis,
  VisGroupedBar,
  VisTooltip,
} from "@unovis/vue";
import { GroupedBar } from "@unovis/ts";
type DataRecord = { x: number; y: number; month: string };

const props = defineProps<{ data?: DataRecord[] }>();

const data = ref<DataRecord[]>(
  props.data || [
    { x: 0, y: 6, month: "Jan" },
    { x: 1, y: 21, month: "Feb" },
    { x: 2, y: 3, month: "Mar" },
    { x: 3, y: 9, month: "Apr" },
    { x: 4, y: 15, month: "May" },
    { x: 5, y: 45, month: "Jun" },
    { x: 6, y: 18, month: "Jul" },
    { x: 7, y: 6, month: "Aug" },
    { x: 8, y: 32, month: "Sep" },
    { x: 9, y: 3, month: "Oct" },
    { x: 10, y: 30, month: "Nov" },
    { x: 11, y: 25, month: "Dec" },
  ],
);

const triggers = {
  [GroupedBar.selectors.bar]: (d: DataRecord) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 3,
    }).format(d.y),
};

const tickFormat = (tick: number) => data.value[tick].y;

const x = (d: DataRecord) => d.x;
const y = (d: DataRecord) => d.y;
</script>
<template>
  <div class="grouped-bar">
    <VisXYContainer :data="data">
      <VisGroupedBar
        :groupWidth="45"
        :groupPadding="0.45"
        :roundedCorners="true"
        :x="x"
        :y="y"
      />
      <VisAxis
        :tickLine="undefined"
        :gridLine="false"
        :domainLine="false"
        type="x"
        :tickFormat="tickFormat"
      />
      <VisAxis type="y" :domainLine="false" />
      <VisTooltip
        :triggers="triggers"
        :attributes="{
          type: `sample-tooltip`,
        }"
      />
    </VisXYContainer>
  </div>
</template>
