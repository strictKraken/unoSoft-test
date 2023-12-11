import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import 'ant-design-vue/dist/reset.css';
import { AutoComplete, List } from "ant-design-vue";


const app = createApp(App);

app.use(AutoComplete);
app.use(List);

app.use(createPinia());
app.use(router);

app.mount("#app");
