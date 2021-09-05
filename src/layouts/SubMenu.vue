<template functional>
  <!-- 传入分级菜单的主菜单路径 -->
  <a-sub-menu :key="props.menuInfo.path">
    <!-- 显示主菜单标题和图标 -->
    <span slot="title">
      <a-icon
        v-if="props.menuInfo.meta.icon"
        :type="props.menuInfo.meta.icon"
      /><span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <!-- 遍历子菜单 -->
    <template v-for="item in props.menuInfo.children">
      <!-- 如果没有子菜单则使用单级菜单 -->
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        @click="
          () =>
            parent.$router.push({ path: item.path, query: parent.$route.query })
        "
      >
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <!-- 如果有子菜单则使用分级子菜单 -->
      <sub-menu v-else :key="item.path" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ["menuInfo"],
};
</script>
