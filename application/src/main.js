import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import state from "./state";

const app = createApp(App);

app.use(state);
app.use(router);

app.mount("#app");
