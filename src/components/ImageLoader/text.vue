<template>
  <div class="text_container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration=5000
      />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
};
</script>

<style>
.text_container {
  width: 500px;
  height: 600px;
  border: 1px solid;
  margin: 0px auto;
  position: relative;
}
</style>