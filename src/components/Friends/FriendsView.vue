<script setup lang="ts">
import { ref } from "vue";
// import router from "@/router";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

import FriendItem from "./FriendItem.vue";
import OriginalList from "./OriginalList.vue";
import { useFriendsStore, type UserVK } from "@/stores/friends";
import FriendsTransformButton from "./FriendsTransformButton.vue";

const usersStore = useFriendsStore();
const activeKey = ref(route.query.tab ? route.query.tab : "1");

const handleDeleteUser = (user: UserVK) => {
  usersStore.delete(user);
};

const handleClickItem = (user: UserVK) => {
  router.push(`/user/${user.id}`);
};
const handleClickBuildList = () => {
  router.push({ path: "/", query: { tab: 2 }, replace: false });
  activeKey.value = "2";
};

const handleChangeTab = (tab: string) => {
  router.push({ path: "/", query: { tab }, replace: false });
};
</script>

<template>
  <div class="wrapper">
    <a-tabs v-model:activeKey="activeKey" centered @change="handleChangeTab">
      <a-tab-pane key="1" tab="Original list">
        <FriendsTransformButton @on-click="handleClickBuildList" />
        <OriginalList :list="usersStore.friends" @delete-item="handleDeleteUser" :active-action="true" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Friend list" :disabled="usersStore.friendsTransformed.length === 0">
        <!-- <FriendList @click-item="handleClickItem" :list="usersStore.friendsTransformed" /> -->
        <div>
          <a-flex wrap="wrap" gap="small">
            <FriendItem
              v-for="user in usersStore.friendsTransformed"
              :key="user.id"
              :user="user as any"
              @on-click="handleClickItem"
            />
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
