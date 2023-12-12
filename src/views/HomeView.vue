<script setup lang="ts">
import AutoComplete from "@/components/AddUsers/AutoComplete.vue";
import FriendView from "@/components/Friends/FriendsView.vue";
import AuthWrapper from "@/components/AuthComonent/AuthWrapper.vue";
</script>

<template>
  <main>
    <AuthWrapper />
    <AutoComplete />
    <FriendView />
  </main>
</template>
