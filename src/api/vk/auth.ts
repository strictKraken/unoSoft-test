import { useSessionStore } from "@/stores/session";
import {} from "@vkid/sdk";

export const authVK = async () => {
  VK.Auth.login(function (response) {
    if (response.session) {
      /* Пользователь успешно авторизовался */
      const store = useSessionStore();
      console.log(response.session);
      store.login(response.session);
      if (response.settings) {
        /* Выбранные настройки доступа пользователя, если они были запрошены */
      }
    }
  });
};
