import Vue from "vue";
import VueI18n from "vue-i18n";
import NAV from "./utils/NAV";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
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
  ConfigProvider,
  Dropdown,
  DatePicker,
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/github.css";

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
Vue.use(ConfigProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS },
  },
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js", // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
