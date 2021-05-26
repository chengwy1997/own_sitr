<template>
  <div class="Emport-container">
    <Emport/>
  </div>
</template>

<script>
import Emport from "./";
export default {
  components: {
    Emport,
  },
};
</script>



<style>
.Emport-container{
  width: 1000px;
  height: 300px;
  border:2px solid red;
  position: relative;
  text-align: center;
}
</style>