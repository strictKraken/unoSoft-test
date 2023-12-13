<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";
import VKPostView from "@/components/UserView/VKPostView.vue";

import { getUser } from "@/api/vk/fetch";
import { useFriendsStore } from "@/stores/friends";
import OriginalList from "@/components/Friends/OriginalList.vue";
const friendStore = useFriendsStore();

const route = useRoute();
const userInfo = ref<any>({});

onBeforeMount(async () => {
  const res: any = await getUser(route.params.id as string);
  userInfo.value = res[0];
});

const friendsFromOriginal = computed(() => {
  return friendStore.friends.filter((i) => i.friend_list?.includes(Number(route.params.id)));
});
</script>

<template>
  <main>
    <div>{{ userInfo.first_name }} {{ userInfo.last_name }}</div>
    <a-row>
      <a-col :span="8">
        <h3>FRIENDS</h3>
        <OriginalList :list="friendsFromOriginal" />
      </a-col>
      <a-col :span="16">
        <VKPostView />
      </a-col>
    </a-row>
  </main>
</template>

<style scoped>
.pagination {
  background-color: #fff;
  position: sticky;
  top: 0;
}
</style>
