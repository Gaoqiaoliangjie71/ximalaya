<template>
  <div>
    <div class="title w">
      <a class="img" href="javascript:;">
        <img
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png"
          alt=""
        />
      </a>
      <div class="login">登 录</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>
<script setup lang="ts"></script>

<style lang="less" scoped>
.w {
  width: 98%;
  margin: 0 auto;
}
.title {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .img {
    display: inline-block;
    width: 120px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login {
    background: #fa2800;
    border: none;
    color: #fff;
    width: 76px;
    font-size: 14px;
    border-radius: 20px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
