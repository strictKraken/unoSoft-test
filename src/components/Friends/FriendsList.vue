<script setup lang="ts">
defineProps<{
  list: any[];
}>();

const emit = defineEmits<{
  (e: "deleteItem", user: any): void;
}>();

const handleDeleteItem = (item: any) => {
  emit("deleteItem", item);
};
</script>

<template>
  <a-list class="list" item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item>
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

<style>
.list {
}

.list__delete-item {
  color: red;
}
</style>
