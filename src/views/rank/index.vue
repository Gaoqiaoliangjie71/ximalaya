<template>
  <div class="rank">
    <van-tabs v-model:active="active">
      <van-tab title="全站">
        <van-sidebar v-model="actt">
          <van-sidebar-item title="热播" />
          <van-sidebar-item title="新品" />
          <van-sidebar-item title="口碑" />
        </van-sidebar>
        <div class="list">
          <div class="item">
            <div class="no">1</div>
            <div class="img">
              <img src="../../static/icon/Snipaste01.png" alt="" />
            </div>
            <div class="detail">
              <div class="name">
                一人一驴一人一驴一人一驴一人一驴一人一驴一人一驴一人一驴一人一驴
              </div>
              <div class="word1">最近一周更新</div>
              <div class="word2">
                <van-icon name="play-circle-o" />
                <div class="times1">1543.34万</div>
                <van-icon name="service-o" />
                <div class="times2">180</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="小说">内容 2</van-tab>
      <van-tab title="相声评书">内容 3</van-tab>
      <van-tab title="儿童">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
export default {
  name: "Rank",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import type { SidebarProps, SidebarItemProps } from "vant";

const active = ref(0);
const actt = ref(0);
</script>

<style lang="less" scoped>
.item {
  border-bottom: 1px solid gray;
}
</style>
