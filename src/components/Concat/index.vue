<template>
  <ul class="concat_index">
      <li>
      <a href="">
        <div class="icon">
          <Icon type="chat" />
        </div>
        <p>13164640637</p>
      </a>
      </li>
       <li>
      <a href="">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <p>164510737@qq.com</p>
      </a>
      </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <p>164510737@qq.com</p>
      </a>
      <div class="pop">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1999921673,816131569&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </li>
      <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <p>13164640637</p>
      </a>
      <div class="pop">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1999921673,816131569&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "..//Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.concat_index {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight ;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;
     transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }&::after{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
    }
  }
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #3d3d3d;
    text-decoration: none;
  }
  .icon {
    font-size: 26px;
    width: 36px;
  }
}
</style>