import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "./css/app.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
