<template>
  <div class="sitAside_index">
    <Avatar
      url="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3208076461,2591860131&fm=26&gp=0.jpg"
    />
     <h1 class="title">龙傲天的小窝</h1>
    <Menu />
    <Concat />
     <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import Concat from "@/components/Concat";
export default {
  components: {
    Avatar,
    Menu,
    Concat,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.sitAside_index {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y:auto;
    
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>