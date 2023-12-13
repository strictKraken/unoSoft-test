import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
// import { analyzer } from "vite-bundle-analyzer";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: JSON.stringify(env.BASE_URL),
    plugins: [
      vue(),
      // analyzer(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    define: {
      BASE_URL: JSON.stringify(env.BASE_URL)
    }
  };
});
// https://vitejs.dev/config/
// export default defineConfig({
//   base: process.env.BASE_URL,
//   plugins: [
//     vue(),
//     // analyzer(),
//     Components({
//       resolvers: [
//         AntDesignVueResolver({
//           importStyle: false // css in js
//         })
//       ]
//     })
//   ],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url))
//     }
//   }
// });
