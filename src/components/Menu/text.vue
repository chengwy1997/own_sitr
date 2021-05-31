<template>
<div class="text_container">
  <Menu/>
</div>
</template>

<script>
import  Menu from './'
export default {
components:{
    Menu
}
};
</script>

<style lang="less" scoped>
.text_container{
    width: 500px;
    height: 600px;
    background-color: #000;
    border: 1px solid red;
    margin: 0 auto;
    position: relative;
}
</style>