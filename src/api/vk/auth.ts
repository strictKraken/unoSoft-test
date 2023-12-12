import { useSessionStore } from "@/stores/session";
// import VKConfig from "./config";
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
  // const url = `https://oauth.vk.com/authorize?client_id=${VKConfig.app}&redirect_uri=${VKConfig.redirectUrl}&display=popup&scope=friends&response_type=token`;

  // const authWindow = window.open(url, "popup", "popup=true");

  // const checkPopup = setInterval(() => {
  //   if (authWindow?.window.location.href.includes(VKConfig.redirectUrl)) {
  //     parent.postMessage("auth");
  //     authWindow.close();
  //     const urlParams = new URLSearchParams(authWindow?.window.location.href);
  //     const token = urlParams.get("https://2db0-135-181-41-244.ngrok-free.app/#access_token");
  //     if (token) {
  //       const store = useSessionStore();
  //       store.login(token);
  //     }
  //   }
  //   if (!authWindow || !authWindow.closed) return;
  //   clearInterval(checkPopup);
  // }, 1000);
};
