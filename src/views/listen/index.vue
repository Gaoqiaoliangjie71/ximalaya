<template>
  <div class="container">
    <div class="xiala">
      <van-collapse v-model="activeNames">
        <div>
          <van-collapse-item title="" name="1">
            代码是写出来给人看的，附带能在机器上运行。
          </van-collapse-item>
        </div>
      </van-collapse>
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">
        <div class="categoryList">
          <div class="categoryItem">
            <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";

const active = ref(0);
const activeNames = ref(["1"]);
</script>

<style lang="less" scoped>
.container {
  .xiala {
    display: flex;
    width: 50px;
    height: 50px;
    border: 2px solid greenyellow;
    div {
      border: 1px solid red;
    }
  }
  .categoryItem {
    width: 100%;
    height: 80px;
    border: 2px solid red;
    .image {
      width: 200px;
      height: 50px;
      border: 1px solid green;
    }
  }
}
</style>
