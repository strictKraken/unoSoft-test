import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/reset.css";
import { AutoComplete, List, Button, Avatar, Row, Col, Tabs, Card, Flex, Pagination } from "ant-design-vue";

const app = createApp(App);

app.use(AutoComplete);
app.use(List);
app.use(Button);
app.use(Avatar);
app.use(Row);
app.use(Col);
app.use(Tabs);
app.use(Card);
app.use(Flex);
app.use(Pagination);

app.use(createPinia());
app.use(router);

app.mount("#app");
