<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

import FriendList from "./FriendList.vue";
import FriendItem from "./FriendItem.vue";
import OriginalList from "./OriginalList.vue";
import { useFriendsStore, type UserVK } from "@/stores/friends";
import FriendsTransformButton from "./FriendsTransformButton.vue";

const usersStore = useFriendsStore();
const activeKey = ref("1");

const handleDeleteUser = (user: UserVK) => {
  usersStore.delete(user);
};

const handleClickItem = (user: UserVK) => {
  router.push({ path: `/user/${user.id}` });
};
const handleClickBuildList = () => {
  activeKey.value = "2";
};
</script>

<template>
  <div class="wrapper">
    <a-tabs v-model:activeKey="activeKey" centered>
      <a-tab-pane key="1" tab="Original list">
        <FriendsTransformButton @on-click="handleClickBuildList" />
        <OriginalList :list="usersStore.friends" @delete-item="handleDeleteUser" :active-action="true" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Friend list" :disabled="usersStore.friendsTransformed.length === 0">
        <!-- <FriendList @click-item="handleClickItem" :list="usersStore.friendsTransformed" /> -->
        <div>
          <a-flex wrap="wrap" gap="small">
            <FriendItem v-for="user in usersStore.friendsTransformed" :key="user.id" :user="(user as any)" @on-click="handleClickItem"/>
          </a-flex>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
.wrapper {
}
</style>
