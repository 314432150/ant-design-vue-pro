import Vue from "vue";
import NAV from "./utils/NAV";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Drawer, Menu, Icon, Radio } from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(NAV);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
