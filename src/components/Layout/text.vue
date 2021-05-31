<template>
  <div class="text_continer">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "../Layout/index";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.text_continer {
  width: 1000px;
  height: 800px;
  .left{
    width: 200px;
    height: 100%;
    background-color: green;
  }
  .main{
    width: 100%;
    height: 100%;
    background-color: red;
  }
  .right{
    width: 150px;
    height: 100%;
    background-color: hotpink;
  }
}
</style>