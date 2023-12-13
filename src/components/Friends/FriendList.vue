<script setup lang="ts">
import type { UserVK } from "@/stores/friends";
import FriendItem from "./FriendItem.vue";

defineProps<{
  list: UserVK[];
}>();

const emit = defineEmits<{
  (e: "deleteItem", user: UserVK): void;
  (e: "clickItem", user: UserVK): void;
}>();

const handleClickItem = (item: UserVK) => {
  emit("clickItem", item);
};
</script>

<template>
  <a-list class="list" item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item @click="() => handleClickItem(item)" class="list__item">
        <FriendItem :user="item" />
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped>
.list {
}
.list__item {
  cursor: pointer;
}
.list__item:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
.list__delete-item {
}
</style>
