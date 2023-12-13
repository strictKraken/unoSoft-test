import { useSessionStore } from "@/stores/session";
import {} from "@vkid/sdk";

export const authVK = async () => {
  VK.Auth.login(function (response) {
    if (response.session) {
      const store = useSessionStore();
      store.login(response.session);
    }
  });
};
