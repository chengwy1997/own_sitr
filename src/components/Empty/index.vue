<template>
  <div class="empty-containe">
      <Icon type="empty"/>
      <p>{{text}}</p>
  </div>
  
</template>

<script>
import Icon from "../Icon";
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            default:'没有数据'
        }
    }
};
</script>

<style>
.empty-containe{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>