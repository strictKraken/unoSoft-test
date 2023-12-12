<script setup lang="ts">
import FriendsList from "./FriendsList.vue";
import { useFriendsStore } from "@/stores/friends";

const usersStore = useFriendsStore();

const handleDeleteUser = (user: any) => {
  usersStore.delete(user);
};

const handleTransformData = () => {
  usersStore.transformList();
};
</script>
<template html>
  <div class="wrapper">
    <a-button type="primary" @click="handleTransformData" :disabled="usersStore.friends.length <= 0"
      >Transform</a-button
    >
    <FriendsList :list="usersStore.friends" @delete-item="handleDeleteUser" />
    <div v-if="usersStore.friendsTransformed.length > 0">
      <FriendsList :list="usersStore.friendsTransformed" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
}
</style>
