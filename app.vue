<script setup lang="ts">
const siteURL = ref("https://geeg-challenge-dash.netlify.app/");
useSeoMeta({
  title: "Sales Dashboard | Geegpay",
  description: "A sales dashboard for the Geegpay frontend challenge",
  ogDescription: "A sales dashboard for the Geegpay frontend challenge",
  ogTitle: "Sales Dashboard | Geegpay",
  ogUrl: siteURL.value,
  ogImage: `${siteURL.value}/cover.jpg`,
  ogSiteName: "Sales Dashboard",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterSite: "@miracleio",
  twitterTitle: "Sales Dashboard | Geegpay",
  twitterDescription: "A sales dashboard for the Geegpay frontend challenge",
  twitterImage: `${siteURL.value}/cover.jpg`,
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
