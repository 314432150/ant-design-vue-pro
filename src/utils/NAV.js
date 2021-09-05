const NAV = {
  // 网站整体风格
  THEME: {
    NAME: "nav_theme",
    DARK: "dark",
    LIGHT: "light",
  },
  // 导航模式
  LAYOUT: {
    NAME: "nav_layout",
    LEFT: "left",
    RIGHT: "right",
  },
};

export default {
  install(Vue) {
    Vue.prototype.$NAV = NAV;
  },
};
