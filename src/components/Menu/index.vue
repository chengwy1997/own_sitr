<template>
  <nav class="Menu_index">
    <a
      :href="item.link"
      v-for="item in items"
      :key="item.link"
      :class="{ selected: isselected(item) }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
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
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith:'true'
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/code",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/chat",
          title: "留言板",
          icon: "chat",
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
    color: #2d2d2d;
    align-items: center;
    &.selected {
      background: #2d2d2d;
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