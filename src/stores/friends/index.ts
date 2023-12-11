import { defineStore } from "pinia";

export type UserVK = {
  id: string;
  name: string;
  lastName?: string;
  age?: number;
  photoHref?: string;
  friends?: UserVK[];
  countFriends?: number;
};

export const useFriendsStore = defineStore("friends", {
  state: () => {
    return {
      friends: [] as UserVK[]
    };
  },
  getters: {
    search(state) {
      return (user: UserVK) => state.friends.find((item) => item.id === user.id);
    }
  },
  actions: {
    add(user: UserVK) {
      this.friends.push(user);
    },
    delete(user: UserVK) {
      this.friends = this.friends.filter((item) => item.id !== user.id);
    }
  }
});
