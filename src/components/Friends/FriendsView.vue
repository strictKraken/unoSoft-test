<script setup lang="ts">
import FriendsList from "./FriendsList.vue";
import { useFriendsStore } from "@/stores/friends";

const usersStore = useFriendsStore();

const handleDeleteUser = (user: any) => {
  usersStore.delete(user);
};
</script>
<template html>
  <div class="wrapper">
    <a-button type="primary">Transform</a-button>
    <FriendsList :list="usersStore.friends" @delete-item="handleDeleteUser" />
  </div>
</template>

<style scoped>
.wrapper {
}
</style>
