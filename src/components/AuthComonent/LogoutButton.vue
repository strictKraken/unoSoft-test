<script setup lang="ts">
import { useSessionStore } from "@/stores/session";

const sessionStore = useSessionStore();
const handleClick = () => {
  sessionStore.logout();
};
</script>
<template>
  <a-button @click="handleClick">logout</a-button>
</template>
<style scoped></style>
