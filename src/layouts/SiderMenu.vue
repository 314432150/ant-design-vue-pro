<template>
  <div>
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      :theme="theme"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from "./SubMenu";
export default {
  props: {
    theme: {
      type: String,
      default: "dark",
    },
  },
  components: {
    "sub-menu": SubMenu,
  },
  watch: {
    "$route.path": function (val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    },
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      routes.forEach((item) => {
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path,
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      });
      return menuData;
    },
    getMenus(routes = []) {
      // 初始化菜单列表
      const menus = [];
      // 遍历所有的路由规则
      for (let route of routes) {
        // 如果当前路由是一个要显示的菜单,则将路由生成菜单,并添加到菜单列表中
        if (route.name && !route.hideInMenu) {
          // 把当前路由初始化一个菜单
          const menu = { ...route };
          // 删除初始化的子菜单
          delete menu.children;
          // 如果存在要显示的子菜单,则生成子菜单
          if (
            route.children && // 如果当前路由存在子路由
            !route.hideChildrenInMenu // 不隐藏子路由
          ) {
            // 递归调用菜单获取方法生成子菜单
            menu.children = this.getMenus(route.children);
          }
          // 如果不存在要显示的子菜单,不用再做处理,因为上面的delete语句已经把children删除了
          // 添加当前路由构造的菜单到菜单表
          menus.push(menu);
        }

        // 如果当前路由不是菜单,但是存在要显示的子菜单,则生成子菜单,并将子菜单上调一级到当前菜单列表
        else if (
          // 此处隐含了一个条件: "!route.name &&" 当前路由不是菜单
          !route.hideInMenu && // 当前路由不隐藏
          !route.hideChildrenInMenu && // 子路由不隐藏
          route.children // 存在子路由
        ) {
          // 递归调用菜单获取方法生成子菜单,并将子菜单上调一级到当前菜单列表
          menus.push(...this.getMenus(route.children));
        }
      }
      // 返回菜单表
      return menus;
    },
  },
};
</script>
