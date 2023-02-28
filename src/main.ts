import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/main.css";

// Icons
import {
    faCircleUser,
    faHouse,
    faPlus,
    faRightToBracket,
    faSquarePollVertical
} from '@fortawesome/free-solid-svg-icons'

library.add(...[
    faCircleUser,
    faHouse,
    faPlus,
    faRightToBracket,
    faSquarePollVertical,
]);

const app = createApp(App)
.component('fa', FontAwesomeIcon);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");