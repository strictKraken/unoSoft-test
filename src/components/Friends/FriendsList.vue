<script setup lang="ts">
import type { UserVK } from "@/stores/friends";

defineProps<{
  list: UserVK[];
}>();

const emit = defineEmits<{
  (e: "deleteItem", user: UserVK): void;
  (e: "clickItem", user: UserVK): void;
}>();

const handleDeleteItem = (item: UserVK) => {
  emit("deleteItem", item);
};

const handleClickItem = (item: UserVK) => {
  emit("clickItem", item);
};
</script>

<template>
  <a-list class="list" item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item @click="() => handleClickItem(item)" class="list__item">
        <template #actions>
          <a-button @click="handleDeleteItem(item)" type="text" danger>delete</a-button>
        </template>
        <a-list-item-meta>
          <template #title> {{ item.name }} {{ item.lastName }} </template>
          <template #avatar>
            <a-avatar :src="item.image" />
          </template>
        </a-list-item-meta>
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
