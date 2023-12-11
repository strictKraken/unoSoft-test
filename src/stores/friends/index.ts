import { defineStore } from "pinia";

export type UserVK = {
  id: string;
  name: string;
  lastName: string;
  age?: number;
  photoHref?: string;
  friends?: UserVK[];
  countFriends?: number;
};

export type UserTransformed = UserVK & {};

export const useFriendsStore = defineStore("friends", {
  state: () => {
    return {
      friends: [] as UserVK[],
      friendsTransformed: [] as UserVK[]
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
    },
    transformList() {
      const arr = [...this.friends];
      this.friendsTransformed = arr.sort((a, b) => {
        console.log("sorting", a.lastName < b.lastName);

        if (a.lastName < b.lastName) {
          return 1;
        }
        if (a.lastName > b.lastName) {
          return -1;
        }

        if (a.name < b.name) {
          return 1;
        }

        if (a.name > b.name) {
          return -1;
        }

        return 0;
      });
    }
  }
});
