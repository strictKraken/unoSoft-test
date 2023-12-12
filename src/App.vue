<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";

import { MainLayout } from "@/layouts";

onBeforeMount(async () => {
  await VK.init({
    apiId: import.meta.env.VITE_APP_ID
  });
});
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
