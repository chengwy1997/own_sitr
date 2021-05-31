<template>
<div class="text_continer">
  <SiteAside />
</div>

</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.text_continer{
    width: 500px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid red;
    background-color: black;
}
</style>