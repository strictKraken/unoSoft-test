<script setup lang="ts">
import { ref } from "vue";
import { useDebounce } from "@/utils/hooks";
import { searchUsers } from "@/api/vk/fetch";
import { useFriendsStore, type UserVK } from "@/stores/friends";
import AddUser from "../icons/AddUser.vue";
import { useSessionStore } from "@/stores/session";

const friendsStore = useFriendsStore();
const sessionStore = useSessionStore();

const value = ref("");
const options = ref<UserVK[]>([]);

const debounceTimeMS = 500;

const search = useDebounce(async (searchText: string) => {
  if (searchText) {
    const response = await searchUsers({ q: searchText });
    options.value = response;
  } else {
    options.value = [];
  }
}, debounceTimeMS);

const onSearch = (searchText: string) => {
  search(searchText);
};

const onClickAdd = (item: any) => {
  friendsStore.add(item);
};
</script>

<template>
  <div class="wrapper">
    <a-auto-complete
      :disabled="!sessionStore.userSession"
      v-model:value="value"
      :options="options"
      class="auto-complete"
      placeholder="search users..."
      @select.prevent.stop="() => {}"
      @search="onSearch"
    >
      <template #option="item">
        <div class="auto-complete__item">
          <a-avatar :src="item.photo_50" />

          <span> {{ item.first_name }} {{ item.last_name }} </span>

          <a-button
            v-if="!friendsStore.search(item)"
            class="auto-complete__button-add"
            @click.stop.prevent="() => onClickAdd(item)"
            shape="circle"
          >
            <AddUser />
          </a-button>
          <div v-else class="auto-complete__button-add">added</div>
        </div>
      </template>
    </a-auto-complete>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0.5em 0;
}
.auto-complete {
  width: 100%;
}

.auto-complete__item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.auto-complete__button-add {
  margin-left: auto;
}
</style>
