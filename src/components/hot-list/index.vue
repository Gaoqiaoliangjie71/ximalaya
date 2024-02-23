<template>
  <div class="hot-l w">
    <a href="javascript:;" class="hot-list">
      <div class="image">
        <img :src="item && item.albumCoverPath" alt="" />
        <div class="mask">
          <van-icon name="play" size="20" />
        </div>
      </div>
      <div class="context">
        <h4>{{ item && item.title }}</h4>
        <div class="play">
          <div>
            <van-icon name="user-o" />
            喜马头条
          </div>
          <div class="wan" v-if="type">
            <van-icon name="audio" />
            10.81万
          </div>
        </div>
      </div>
    </a>
    <div class="line"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HotList",
});
</script>
<script setup lang="ts">
import { defineProps } from "vue";
import type { hot } from "../../api/home";

//给一个标识判断是今日热点还是博客推荐
const props = defineProps<{
  type: boolean;
  item: hot;
}>();
</script>

<style lang="less" scoped>
.hot-l {
  .hot-list {
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    .image {
      position: relative;
      width: 70px;
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        text-align: center;
        color: #fff;
        line-height: 70px;
      }
    }
    .context {
      width: 260px;
      margin: 0 auto;
      h4 {
        margin: 0;
        width: 100%;
        line-height: 20px;
        font-weight: 400;
        vertical-align: baseline;
        color: #40404c;
        font-size: 16px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .play {
        display: flex;
        margin-top: 5px;
        font-size: 12px;
        color: #7e8c8d;
        .wan {
          margin-left: 10px;
        }
      }
    }
  }
  .line {
    width: 100%;
    border-bottom: 1px solid #f6f7f8;
  }
}
</style>
