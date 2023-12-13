<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getUser, getWall } from "@/api/vk/fetch";
import { useFriendsStore } from "@/stores/friends";
import OriginalList from "@/components/Friends/OriginalList.vue";
const friendStore = useFriendsStore();

const route = useRoute();
const userInfo = ref<any>({});
const posts = ref<any[]>([]);
const currentPage = ref(1);
const totalPages = ref(0);

onBeforeMount(async () => {
  const res: any = await getUser(route.params.id as string);
  const resPosts: any = await getWall(Number(route.params.id as string), { count: 5, offset: 0 });
  userInfo.value = res[0];
  posts.value = resPosts.items;
  totalPages.value = resPosts.count;
  console.log(totalPages.value, posts.value);
  renderPost();
});

const friendsFromOriginal = computed(() => {
  return friendStore.friends.filter((i) => i.friend_list?.includes(Number(route.params.id)));
});

const renderPost = () => {
  posts.value.forEach((p) => {
    VK.Widgets.Post(`vk_post_${p.owner_id}_${p.id}`, p.owner_id, p.id, p.hash);
  });
};

const handleChangePage = async (page: number, pageSize: number) => {
  const res: any = await getWall(Number(route.params.id as string), { count: 5, offset: (page - 1) * pageSize });
  posts.value = res.items;

  renderPost();
};
</script>

<template>
  <main>
    <div>{{ userInfo.first_name }} {{ userInfo.last_name }}</div>
    <a-row>
      <a-col :span="8">
        <h3>FRIENDS</h3>
        <OriginalList :list="friendsFromOriginal" />
      </a-col>
      <a-col :span="16"
        ><h3>POSTS</h3>
        <a-pagination
          class="pagination"
          v-model="currentPage"
          :page-size="5"
          :total="totalPages"
          @change="handleChangePage"
        />

        <div v-if="posts.length">
          <div v-for="p in posts" :key="p.id" :id="`vk_post_${p.owner_id}_${p.id}`"></div>
        </div>
        <div v-else>No posts</div>
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
