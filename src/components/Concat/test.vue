<template>
  <div class="text_container">
    <Concat />
  </div>
</template>

<script>
import Concat from "./";
export default {
  components: {
    Concat,
  },
};
</script>

<style>
.text_container{
    width: 500px;
    height: 600px;
    background-color: black;
    border: 1p solid red;
    margin: 0 auto;
    position: relative;
}
</style>