/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ID: string;
  readonly VITE_REDIRECT_URL: string;
  readonly VITE_VK_API_VERSION: number;
  // more env variables...
}
