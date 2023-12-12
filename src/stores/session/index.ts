import { defineStore } from "pinia";

type User = {
  domain: string;
  first_name: string;
  href: string;
  id: string;
  last_name?: string;
  nickname?: string;
};

type UserSession = {
  user: User;
};

export const useSessionStore = defineStore("session", {
  state: () => {
    return {
      userSession: null as UserSession | null
    };
  },
  getters: {},
  actions: {
    login(session: any) {
      this.userSession = session;
    },
    logout() {
      this.userSession = null;
    }
  }
});
