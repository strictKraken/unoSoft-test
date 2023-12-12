<script setup lang="ts">
import VkButton from "./VkButton.vue";
import { useSessionStore } from "@/stores/session";
import LogoutButton from "./LogoutButton.vue";

const sessionStore = useSessionStore();
</script>

<template>
  <div class="wrapper">
    <div v-if="sessionStore.userSession">
      {{ sessionStore.userSession.user.first_name }} {{ sessionStore.userSession.user.last_name }} <LogoutButton />
    </div>
    <div v-else class="logout-wrapper">
      <h3>For start search user first sing in</h3>
      <VkButton />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.logout-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
