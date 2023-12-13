<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";

import { MainLayout } from "@/layouts";
import { useSessionStore } from "./stores/session";

onBeforeMount(async () => {
  await VK.init({
    apiId: import.meta.env.VITE_APP_ID
  });

  await VK.Auth.getLoginStatus((response: { status: string, session: any }) => {
    if (response.status === "connected") {
      useSessionStore().check(response.session);
    } else {
      useSessionStore().logout();
    }
  });
});
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
