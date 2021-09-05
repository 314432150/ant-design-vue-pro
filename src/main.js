import Vue from "vue";
import NAV from "./utils/NAV";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Drawer, Menu, Icon, Radio } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(NAV);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
