<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import AuthWrapper from "@/components/AuthComonent/AuthWrapper.vue";
const AutoComplete = defineAsyncComponent(() => import("@/components/AddUsers/AutoComplete.vue"));
const FriendView = defineAsyncComponent(() => import("@/components/Friends/FriendsView.vue"));
</script>

<template>
  <main>
    <AuthWrapper />
    <AutoComplete />
    <FriendView />
  </main>
</template>
