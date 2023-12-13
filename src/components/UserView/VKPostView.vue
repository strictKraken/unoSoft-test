<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { getWall } from "@/api/vk/fetch";

const route = useRoute();

const posts = ref<any[]>([]);
const currentPage = ref(1);
const totalPages = ref(0);

onBeforeMount(async () => {
  const resPosts: any = await getWall(Number(route.params.id as string), { count: 5, offset: 0 });
  posts.value = resPosts.items;
  totalPages.value = resPosts.count;
  renderPost();
});

const handleChangePage = async (page: number, pageSize: number) => {
  const res: any = await getWall(Number(route.params.id as string), { count: 5, offset: (page - 1) * pageSize });
  posts.value = res.items;

  renderPost();
};

const renderPost = () => {
  posts.value.forEach((p) => {
    VK.Widgets.Post(`vk_post_${p.owner_id}_${p.id}`, p.owner_id, p.id, p.hash);
  });
};
</script>

<template>
  <div>
    <h3>POSTS</h3>
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
  </div>
</template>

<style scoped>
.pagination {
  background-color: #fff;
  position: sticky;
  top: 0;
}
</style>
