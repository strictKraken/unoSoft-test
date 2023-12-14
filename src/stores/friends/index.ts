import { getFriends } from "@/api/vk/fetch";
import { defineStore } from "pinia";
import { useSessionStore } from "../session";

export type UserVK = {
  id: number;
  track_code: string;
  first_name: string;
  last_name: string;
  can_access_closed: boolean;
  is_closed: boolean;
  photo_50?: string;
  count_friends?: number;
  friend_list?: number[];
  sex?: number;
};

export type UserTransformed = UserVK & {};

export const useFriendsStore = defineStore("friends", {
  state: () => {
    let friends: UserVK[] = [];
    let friendsTransformed: UserVK[] = [];

    if (useSessionStore().userSession) {
      const localFriends = localStorage.getItem("friends");
      const localFriendsTransformed = localStorage.getItem("friendsTransformed");

      if (localFriends) friends = JSON.parse(localFriends) || [];
      if (localFriendsTransformed) friendsTransformed = JSON.parse(localFriendsTransformed) || [];
    }

    return {
      friends: friends,
      friendsTransformed: friendsTransformed
    };
  },
  getters: {
    search(state) {
      return (user: UserVK) => state.friends.find((item) => item.id === user.id);
    }
  },
  actions: {
    async add(user: UserVK) {
      // fetch additional info
      const fetch = async () => {
        const res = await getFriends(user.id);
        return res;
      };

      const friendsInfo = await fetch();
      this.friends.push({ ...user, count_friends: friendsInfo?.count, friend_list: friendsInfo?.items });

      localStorage.setItem("friends", JSON.stringify(this.friends));
    },
    delete(user: UserVK) {
      this.friends = this.friends.filter((item) => item.id !== user.id);
      localStorage.setItem("friends", JSON.stringify(this.friends));
    },
    transformList() {
      const arr = [...this.friends];
      this.friendsTransformed = arr.sort((a, b) => {
        if (a.last_name < b.last_name) {
          return -1;
        }
        if (a.last_name > b.last_name) {
          return 1;
        }

        if (a.first_name < b.first_name) {
          return -1;
        }

        if (a.first_name > b.first_name) {
          return 1;
        }
        return 0;
      });

      localStorage.setItem("friendsTransformed", JSON.stringify(this.friendsTransformed));
    },
    clearStores() {
      this.friends = [];
      this.friendsTransformed = [];
      localStorage.removeItem("friends");
      localStorage.removeItem("friendsTransformed");
    }
  }
});
