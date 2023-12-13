<script setup lang="ts">
import { computed } from "vue";
import { useFriendsStore } from "@/stores/friends";

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

const emit = defineEmits<{
  (e: "onClick", user: UserProp): void;
}>();

const friendsStore = useFriendsStore();

const sex = computed(() => {
  if (props.user.sex === 0) return "not specified";
  return props.user.sex === 1 ? "female" : "male";
});
const age = computed(() => {
  return props.user.bdate || "";
});

const colorFriendsCount = computed(() => {
  let count = 0;

  for (let i = 0; i < friendsStore.friends.length; i++) {
    if (friendsStore.friends[i].friend_list?.includes(props.user.id)) {
      count++;
      // console.log("loop", count)
    } else {
      console.log("wtf", friendsStore.friends[i].friend_list);
      console.log("wtf2", props.user.id);
    }
  }
  return (count * 100) / (friendsStore.friends.length - 1) / 100;
});

const handleClick = (user: UserProp) => {
  emit("onClick", user);
};
</script>
<template>
  <a-card
    hoverable
    class="card"
    @click="() => handleClick(user)"
    :style="`background-color: rgba(22, 119, 255, ${colorFriendsCount});`"
  >
    <div class="card__wrapper">
      <div class="card__title">
        <a-avatar :src="user.photo_50" />
        <div>
          <div>{{ user.first_name }}</div>
          <div>{{ user.last_name }}</div>
        </div>
      </div>

      <div>
        <div><b>age:</b> {{ age }}</div>
        <div><b>sex:</b> {{ sex }}</div>
        <div><b>friends:</b> {{ user.count_friends }}</div>
      </div>
    </div>
  </a-card>
</template>

<style scoped>
.card__wrapper {
  display: flex;
  flex-direction: column;
}
.card__title {
  display: flex;
  gap: 1em;
  align-items: center;
  padding-bottom: 1em;
}
.card {
  width: 200px;
}
</style>
