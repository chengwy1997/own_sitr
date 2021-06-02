<template>
  <nav class="Menu_index">
    <router-link
      :exact="item.exact"
      :to="item.link"
      v-for="item in items"
      :key="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "/Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          link: "/Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isselected(item) {
      var link = item.link.toLowerCase();
      var curpathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return curpathname.startsWith(link);
      } else {
        return curpathname === link;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.Menu_index {
  margin: 24px 0;
  a {
    text-decoration: none;
    height: 40px;
    padding: 0 50px;
    display: block;
    display: flex;
    color: #3d3d3d;
    align-items: center;
    &.router-link-exact-active {
      background: yellow;
    }
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>