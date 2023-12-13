<script setup lang="ts">
import type { UserVK } from "@/stores/friends";

defineProps<{
  list: UserVK[];
  activeAction?: boolean;
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
  <a-list item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item @click="() => handleClickItem(item)">
        <template #actions v-if="activeAction">
          <a-button @click="handleDeleteItem(item)" type="text" danger>delete</a-button>
        </template>
        <a-list-item-meta>
          <template #title> {{ item.first_name }} {{ item.last_name }} </template>
          <template #avatar>
            <a-avatar :src="item.photo_50" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped></style>
