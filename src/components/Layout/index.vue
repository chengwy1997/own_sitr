<template>
  <div class="Layout_index">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Layout_index {
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    width: 300px;
    height: 100%;
 
  }
  .right{
    width: 150px;
    height: 100%;
  
  }
  .main{
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .left,.right{
    flex: 0 0 auto;
    overflow: hidden;
  }
}
</style>