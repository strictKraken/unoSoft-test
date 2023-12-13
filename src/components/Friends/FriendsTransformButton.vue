<script setup lang="ts">
import { useFriendsStore } from "@/stores/friends";
const usersStore = useFriendsStore();
const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const handleClick = () => {
  usersStore.transformList();
  emit("onClick");
};
</script>

<template>
  <a-button type="primary" @click="handleClick" :disabled="usersStore.friends.length <= 0">Build friend list</a-button>
</template>

<style scoped></style>
