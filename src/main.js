import Vue from "vue";
import NAV from "./utils/NAV";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Drawer,
  Menu,
  Icon,
  Radio,
  Form,
  Input,
  Select,
} from "ant-design-vue";
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
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js", // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
