<script setup lang="ts">
import { computed } from "vue";
import { useFriendsStore } from "@/stores/friends";
const friendsStore = useFriendsStore();

type UserProp = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  sex: number;
  count_friends: {};
  photo_50: string;
  bdate: string;
};

const props = defineProps<{
  user: UserProp;
}>();
const sex = computed((user: UserProp) => {
  if (props.user.sex === 0) return "not specified";
  return props.user.sex === 1 ? "female" : "male";
});
const age = computed(() => {
  return props.user.bdate || "";
});

const colorFriendsCount = computed(() => {
  let count = 0;
  friendsStore.friends.forEach((element) => {
    if (element.friend_list?.includes(props.user.id)) {
      count++;
    }
  });
  return count;
});
</script>

<template>
  <div>
    <div><a-avatar :src="user.photo_50" /></div>
    <div>{{ user.first_name }} {{ user.last_name }}</div>
    <div>age: {{ age }}</div>
    <div>sex: {{ sex }}</div>
    <div>friends: {{ user.count_friends }}</div>
    <div>{{ colorFriendsCount }}</div>
  </div>
</template>

<style scoped></style>
