<<<<<<< HEAD
<template>
  <div class="container">
    <!-- 下拉组件测试 -->
    <!-- <div class="xiala">
      <van-collapse v-model="activeNames">
        <div>
          <van-collapse-item title="" name="1">
            代码是写出来给人看的，附带能在机器上运行。
          </van-collapse-item>
        </div>
      </van-collapse>
    </div> -->
    <!-- 导航标签页 -->
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">
        <!-- card列表 -->
        <div class="categoryList">
          <!-- card -->
          <div class="categoryItem">
            <img src="./Snipaste_2024-02-22_18-17-29.png" alt="" />
            <div class="article-description">
              <div class="title">畅销书上新推荐第10期，这些新书值得听</div>
              <div class="data-message">
                <div class="play-message">
                  <van-icon name="play-circle-o" />
                  <div class="play-counts">34</div>
                </div>
                <div class="update-time">2035-2-43更新</div>
              </div>
            </div>
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
=======
<template>
  11
  <div class="listen">listen</div>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped></style>
>>>>>>> 00950248c3ca5eeea988f3702748c6738fee81db
