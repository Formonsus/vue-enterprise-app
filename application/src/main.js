import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import state from "./state";
import registerGlobalComponents from "./components/_globals";

const app = createApp(App);

// Globally register all `_Base` prefixed components.
registerGlobalComponents(app);

app.use(state);
app.use(router);

app.mount("#app");
