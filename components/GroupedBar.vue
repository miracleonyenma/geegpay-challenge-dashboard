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

const props = defineProps<{ data: DataRecord[] }>();

const data = ref<DataRecord[]>(
  props.data || [
    { x: 0, y: 6, label: "Jan" },
    { x: 1, y: 21, label: "Feb" },
    { x: 2, y: 5, label: "Mar" },
    { x: 3, y: 9, label: "Apr" },
    { x: 4, y: 15, label: "May" },
    { x: 5, y: 45, label: "Jun" },
    { x: 6, y: 18, label: "Jul" },
    { x: 7, y: 6, label: "Aug" },
    { x: 8, y: 32, label: "Sep" },
    { x: 9, y: 7, label: "Oct" },
    { x: 10, y: 30, label: "Nov" },
    { x: 11, y: 25, label: "Dec" },
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

const tickFormat = computed(() => (tick: number) => props.data[tick].label);

const x = (d: DataRecord) => d.x;
const y = (d: DataRecord) => d.y;

const svgDefs = `
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="#34caa5" />
      <stop offset="80%" stop-color="#34caa566" />
    </linearGradient>
`;

const addGradientFillToElement = (value: string) => {
  const element = document.querySelector(
    `[data-value="${value}"]`,
  ) as HTMLElement;
  element.style.fill = "url(#gradient)";
  element.style.opacity = "1";
};

const removeGradientFillFromElement = (value: string) => {
  const element = document.querySelector(
    `[data-value="${value}"]`,
  ) as HTMLElement;
  element.style.fill = "rgb(var(--color-primary-400))";
};

const fadeOut = () => {
  const elements = document.querySelectorAll(
    `[data-is-bar="true"]`,
  ) as NodeListOf<HTMLElement>;
  elements.forEach((element) => {
    element.style.opacity = "0.2";
  });
};

const fadeIn = () => {
  const elements = document.querySelectorAll(
    `[data-is-bar="true"]`,
  ) as NodeListOf<HTMLElement>;
  elements.forEach((element) => {
    element.style.opacity = "1";
  });
};
</script>
<template>
  <div class="grouped-bar">
    <VisXYContainer :svgDefs="svgDefs" :data="$props.data">
      <VisGroupedBar
        :groupMaxWidth="40"
        :groupPadding="0.45"
        :roundedCorners="true"
        :x="x"
        :y="y"
        color="rgb(var(--color-primary-400))"
        :events="{
          [GroupedBar.selectors.barGroup]: {
            mouseover: (d: DataRecord) => {
              console.log(d);
              fadeOut();
              addGradientFillToElement(`${d.y}-${d.label}`);
            },
            mouseout: (d: DataRecord) => {
              fadeIn();
              removeGradientFillFromElement(`${d.y}-${d.label}`);
            },
          },
        }"
        :attributes="{
          [GroupedBar.selectors.bar]: {
            'data-value': (d: DataRecord) => `${d.y}-${d.label}`,
            'data-is-bar': 'true',
          },
        }"
      />
      <VisAxis
        :tickLine="undefined"
        :gridLine="false"
        :domainLine="false"
        type="x"
        :tickFormat="(tick: number) => $props.data[tick]?.label"
        :numTicks="$props.data.length"
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
<style>
[data-is-bar="true"] {
  transition: opacity 0.2s ease-in-out;
}
</style>
