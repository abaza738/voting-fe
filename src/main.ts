import { createApp } from "vue";
import { createPinia } from "pinia";
import "./axios";

import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/main.css";

// Icons
import {
    faCircleUser,
    faHouse,
    faUserCircle,
    faPlus,
    faRightToBracket,
    faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    aliases,
    sets: { md, },
    defaultSet: 'md',
  }
})

library.add(...[
    faCircleUser,
    faHouse,
    faUserCircle,
    faPlus,
    faRightToBracket,
    faSquarePollVertical,
]);

const app = createApp(App)
.component('fa', FontAwesomeIcon);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");