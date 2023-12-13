import { defineStore } from "pinia";
import { useFriendsStore } from "../friends";

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
      console.log(session);
      this.userSession = session;
      localStorage.setItem("userSession", JSON.stringify(session));
    },
    logout() {
      this.userSession = null;
      useFriendsStore().clearStores();
      localStorage.removeItem("userSession");
      VK.VK.Auth.logout();
    },
    check(session) {
      const cookieSession = localStorage.getItem("userSession");
      if (cookieSession) {
        const oldUserSession = JSON.parse(cookieSession);
        if (oldUserSession.sid === session.sid) {
          this.userSession = oldUserSession;
        }
      }
    }
  }
});