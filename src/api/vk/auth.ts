import { useSessionStore } from "@/stores/session";

export const authVK = async () => {
  VK.Auth.login(function (response) {
    if (response.session) {
      const store = useSessionStore();
      store.login(response.session);
    }
  });
};
