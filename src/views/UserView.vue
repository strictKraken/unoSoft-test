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
onBeforeMount(async () => {
  const res: any = await getUser(route.params.id as string);
  const resPosts: any = await getWall(Number(route.params.id as string));
  userInfo.value = res[0];
  posts.value = resPosts.items;
  renderPost();
});

const friendsFromOriginal = computed(() => {
  return friendStore.friends.filter((i) => i.friend_list?.includes(Number(route.params.id)));
});

function renderPost() {
  posts.value.forEach((p) => {
    VK.Widgets.Post(`vk_post_${p.owner_id}_${p.id}`, p.owner_id, p.id, p.hash);
  });
}
</script>

<template>
  <main>
    <div>
      {{ userInfo.first_name }} {{ userInfo.last_name }}
    </div>
    <a-row>
      <a-col :span="8">
        <h3>FRIENDS</h3>
        <OriginalList :list="friendsFromOriginal" />
        <!-- <div v-for="f in friendsFromOriginal" :key="f.id">
          <a-list>
            <a-list-item> {{ f.last_name }} {{ f.first_name }} </a-list-item>
          </a-list>
        </div> -->
      </a-col>
      <a-col :span="16"
        ><h3>POSTS</h3>
        <div v-for="p in posts" :key="p.id" :id="`vk_post_${p.owner_id}_${p.id}`"></div>
      </a-col>
    </a-row>
  </main>
</template>

<style></style>
