<template>
  <div class="Imageloader_index">
    <img class="placeholder" :src="placeholder" alt="" />
    <img
      class="src"
      :src="src"
      alt=""
      @load="handload"
      :style="{ opacity: originOpacaty, transiton: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      defalt: 5000,
    },
  },
  data() {
    return {
      originload: false,
      everythingDone: false,
    };
  },
  computed: {
    originOpacaty() {
      return this.originload ? 1 : 0;
    },
  },
  methods: {
    handload() {
      console.log("111");
      this.originload = true;

      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style  lang="less" scope>
.Imageloader_index {
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 500px;
    height: 600px;
    object-fit: cover;
  }
}
</style>